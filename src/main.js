import './style.css';
import { QUESTIONS } from './questions.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Analytics
inject();

// Initialize Vercel Speed Insights
injectSpeedInsights();

/* ========================================================
   AMCAT Practice Arena — Complete Application Logic
   ======================================================== */

// --- DOM shorthand ---
const $ = (id) => document.getElementById(id);

// --- Retro Audio Synth ---
let audioCtx = null;
function initAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) { /* silent fail */ }
}

function playSound(type, streak) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'correct') {
      osc.type = 'sine';
      const baseFreq = 523 + (streak * 40);
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.linearRampToValueAtTime(baseFreq * 1.5, now + 0.1);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.3);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'combo') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.linearRampToValueAtTime(1320, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'shield') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.5);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  } catch (e) { /* silent */ }
}

function showComboPopup(streak) {
  const emojis = ['🔥', '⚡', '💥', '🌟', '🚀', '👑'];
  const emoji = emojis[Math.min(streak - 3, emojis.length - 1)] || '🔥';
  const el = document.createElement('div');
  el.className = 'combo-popup';
  el.textContent = `${emoji} x${streak}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

// --- MODULES CONFIG ---
const MODULES = [
  { key: 'english', name: 'English Comprehension', count: 20, minutes: 20, type: 'mcq',
    topics: ['Synonyms', 'Antonyms', 'Contextual Vocabulary', 'Error Identification', 'Sentence Improvement', 'Reading Comprehension', 'Para Jumbles'] },
  { key: 'logic', name: 'Logical Ability', count: 20, minutes: 15, type: 'mcq',
    topics: ['Coding Deductive Logic', 'Data Sufficiency', 'Direction Sense', 'Word Sequence', 'Analogy', 'Classification', 'Number Series', 'Puzzles'] },
  { key: 'quant', name: 'Quantitative Ability', count: 25, minutes: 25, type: 'mcq',
    topics: ['Divisibility', 'HCF & LCM', 'Numbers', 'Decimal Fractions', 'Profit & Loss', 'Interest', 'Time Speed Distance', 'Logarithms', 'Permutation', 'Probability', 'Ratio & Proportion'] },
  { key: 'automata', name: 'Automata Fix', count: 2, minutes: 30, type: 'coding',
    topics: ['Problem Solving'] },
  { key: 'webdesign', name: 'Web Design / Full Stack', count: 15, minutes: 15, type: 'mcq',
    topics: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals'] }
];

const STORAGE_KEY = 'amcatPracticeArenaUsers';
const SESSION_KEY = 'amcatPracticeArenaCurrentUser';

// --- State ---
const state = {
  questions: [],
  moduleEnds: [],
  index: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  answers: [],
  locked: false,
  startedAt: null,
  shields: 3,
  liveXp: 0,
  hintUsed: false,
  fiftyUsed: false,
  secondsLeft: 0,
  timerInterval: null,
  currentModuleIndex: 0,
  currentUser: null
};

// --- RANKS ---
const RANKS = [
  { level: 1, title: 'Rookie Runner', xp: 0 },
  { level: 2, title: 'Bronze Sprinter', xp: 100 },
  { level: 3, title: 'Silver Striker', xp: 300 },
  { level: 4, title: 'Gold Gladiator', xp: 600 },
  { level: 5, title: 'Platinum Phoenix', xp: 1000 },
  { level: 6, title: 'Diamond Demon', xp: 1600 },
  { level: 7, title: 'Master Mind', xp: 2500 },
  { level: 8, title: 'Grandmaster', xp: 4000 },
  { level: 9, title: 'Legend', xp: 6000 },
  { level: 10, title: 'AMCAT GOD', xp: 9000 }
];

const BADGE_DEFS = [
  { id: 'first_try', label: '🎯 First Try', desc: 'Complete 1 attempt', check: u => u.attempts >= 1 },
  { id: 'five_runs', label: '🏃 Five Runs', desc: 'Complete 5 attempts', check: u => u.attempts >= 5 },
  { id: 'half_right', label: '⚡ Half Right', desc: 'Score 41+ in one run', check: u => (u.history || []).some(h => h.score >= 41) },
  { id: 'streak_5', label: '🔥 Streak 5', desc: 'Hit a 5-question streak', check: u => (u.maxStreak || 0) >= 5 },
  { id: 'streak_10', label: '💥 Streak 10', desc: 'Hit a 10-question streak', check: u => (u.maxStreak || 0) >= 10 },
  { id: 'perfectionist', label: '👑 Perfectionist', desc: 'Score 70+ in one run', check: u => (u.history || []).some(h => h.score >= 70) },
  { id: 'centurion', label: '💯 Centurion', desc: 'Accumulate 100 correct answers', check: u => (u.totalCorrect || 0) >= 100 },
  { id: 'shield_master', label: '🛡️ Shield Master', desc: 'Finish with all 3 shields', check: u => (u.history || []).some(h => h.shieldsLeft === 3) },
  { id: 'ten_runs', label: '🏆 Ten Runs', desc: 'Complete 10 attempts', check: u => u.attempts >= 10 },
  { id: 'code_warrior', label: '💻 Code Warrior', desc: 'Submit automata code 5 times', check: u => (u.codeSubmissions || 0) >= 5 }
];

// --- Utility functions ---
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function parseDistractors(distractors, answer) {
  if (Array.isArray(distractors)) return distractors.filter(d => d !== answer);
  if (typeof distractors === 'string') {
    return distractors.split('|').map(s => s.trim()).filter(d => d && d !== answer);
  }
  return [];
}

function makeOptions(answer, distractors) {
  const pool = [answer, ...distractors];
  const unique = [...new Set(pool)].slice(0, 4);
  while (unique.length < 4) unique.push(`Option ${unique.length + 1}`);
  return shuffle(unique);
}

// --- Local Storage for Users ---
function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getUser(name) {
  const users = loadUsers();
  return users[name] || null;
}

function updateUser(name, updater) {
  const users = loadUsers();
  if (!users[name]) return;
  updater(users[name]);
  saveUsers(users);
}

// --- Screen management ---
function showScreen(screenId) {
  ['loginScreen', 'introScreen', 'gameScreen', 'automataScreen', 'resultScreen'].forEach(id => {
    $(id).classList.add('hidden');
  });
  $(screenId).classList.remove('hidden');
}

function showGameScreen(screenId) {
  $('gameScreen').classList.add('hidden');
  $('automataScreen').classList.add('hidden');
  $(screenId).classList.remove('hidden');
}

// --- Login / Logout ---
function login(e) {
  e.preventDefault();
  initAudio();
  const name = $('loginName').value.trim();
  const password = $('loginPassword').value;

  if (!name || !password) {
    $('loginMessage').textContent = 'Please enter both fields.';
    return;
  }

  const users = loadUsers();

  if (users[name]) {
    // Existing user — check password
    if (users[name].password !== password) {
      $('loginMessage').textContent = 'Wrong password for this name.';
      return;
    }
  } else {
    // New user — create profile
    users[name] = {
      password,
      xp: 0,
      attempts: 0,
      totalCorrect: 0,
      maxStreak: 0,
      codeSubmissions: 0,
      badges: [],
      history: [],
      savedRun: null
    };
    saveUsers(users);
  }

  state.currentUser = name;
  localStorage.setItem(SESSION_KEY, name);
  $('loginMessage').textContent = '';
  $('playerName').textContent = name;
  $('userBar').classList.remove('hidden');
  openHome();
}

function logout() {
  state.currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  $('userBar').classList.add('hidden');
  clearInterval(state.timerInterval);
  document.body.classList.remove('critical-health');
  showScreen('loginScreen');
}

// --- Home / Intro ---
function openHome() {
  showScreen('introScreen');
  renderHistory();
  renderQuestBoard();

  const user = getUser(state.currentUser);
  if (user && user.savedRun) {
    $('resumeExam').classList.remove('hidden');
  } else {
    $('resumeExam').classList.add('hidden');
  }
}

function renderHistory() {
  const user = getUser(state.currentUser);
  const list = $('historyList');
  list.innerHTML = '';

  if (!user || !user.history || user.history.length === 0) {
    list.innerHTML = '<p class="empty-history">No attempts yet. Start your first practice run!</p>';
    $('bestScore').textContent = 'Best 0/82';
    return;
  }

  const best = Math.max(...user.history.map(h => h.score));
  $('bestScore').textContent = `Best ${best}/82`;

  user.history.slice(-10).reverse().forEach((h, i) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    const date = new Date(h.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    item.innerHTML = `<span>${date}</span><span class="history-score">${h.score}/${h.total}</span>`;
    list.appendChild(item);
  });
}

function getLevelInfo(xp) {
  let rank = RANKS[0];
  let nextRank = RANKS[1];
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (xp >= RANKS[i].xp) {
      rank = RANKS[i];
      nextRank = RANKS[i + 1] || null;
      break;
    }
  }
  return { rank, nextRank };
}

function renderQuestBoard() {
  const user = getUser(state.currentUser);
  if (!user) return;

  const { rank, nextRank } = getLevelInfo(user.xp || 0);
  $('rankTitle').textContent = rank.title;
  $('levelText').textContent = `Lv ${rank.level}`;
  $('xpText').textContent = `${user.xp || 0} XP`;

  if (nextRank) {
    const progress = ((user.xp - rank.xp) / (nextRank.xp - rank.xp)) * 100;
    $('xpFill').style.width = `${Math.min(100, Math.max(0, progress))}%`;
  } else {
    $('xpFill').style.width = '100%';
  }

  $('totalAttempts').textContent = user.attempts || 0;
  $('totalCorrect').textContent = user.totalCorrect || 0;

  // Check and award badges
  const newBadges = [];
  BADGE_DEFS.forEach(bd => {
    if (!user.badges.includes(bd.id) && bd.check(user)) {
      user.badges.push(bd.id);
      newBadges.push(bd);
    }
  });
  if (newBadges.length > 0) {
    updateUser(state.currentUser, u => { u.badges = user.badges; });
  }

  $('badgeCount').textContent = user.badges.length;

  const rack = $('badgeRack');
  rack.innerHTML = '';
  user.badges.forEach(id => {
    const bd = BADGE_DEFS.find(b => b.id === id);
    if (bd) {
      const chip = document.createElement('span');
      chip.className = 'badge-chip';
      chip.textContent = bd.label;
      chip.title = bd.desc;
      rack.appendChild(chip);
    }
  });
}

// --- Build Exam ---
function buildExam() {
  state.questions = [];
  state.moduleEnds = [];

  MODULES.forEach(module => {
    const pool = (QUESTIONS && QUESTIONS[module.key]) ? QUESTIONS[module.key] : [];
    const selected = shuffle([...pool]).slice(0, module.count);

    if (module.type === 'mcq') {
      selected.forEach(q => {
        const distractors = parseDistractors(q.distractors, q.answer);
        state.questions.push({
          topic: q.topic || 'General',
          text: q.text,
          answer: q.answer,
          options: makeOptions(q.answer, distractors),
          module: module.name,
          moduleKey: module.key,
          minutes: module.minutes,
          type: 'mcq',
          hint: q.hint || ''
        });
      });
    } else if (module.type === 'coding') {
      selected.forEach(q => {
        state.questions.push({
          topic: q.topic || 'Problem Solving',
          text: q.text,
          sampleInput: q.sampleInput || '',
          sampleOutput: q.sampleOutput || '',
          testCases: q.testCases || [],
          solution: q.solution || '// No solution provided',
          language: q.language || 'c',
          module: module.name,
          moduleKey: module.key,
          minutes: module.minutes,
          type: 'coding'
        });
      });
    }

    if (selected.length > 0) {
      state.moduleEnds.push(state.questions.length - 1);
    }
  });

  // Reset state
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answers = [];
  state.locked = false;
  state.startedAt = new Date().toISOString();
  state.shields = 3;
  state.maxStreak = 0;
  state.liveXp = 0;
  state.hintUsed = false;
  state.fiftyUsed = false;
  state.currentModuleIndex = 0;
  document.body.classList.remove('critical-health');

  return state.questions.length > 0;
}

// --- Start Exam ---
function startExam() {
  initAudio();
  const ok = buildExam();
  if (!ok) {
    alert('No questions available. Please make sure questions.js has question data.');
    return;
  }

  // Clear saved run
  updateUser(state.currentUser, u => { u.savedRun = null; });

  showScreen('gameScreen');
  startModuleTimer();
  renderQuestion();
}

// --- Timer ---
function startModuleTimer() {
  clearInterval(state.timerInterval);
  const q = state.questions[state.index];
  if (!q) return;
  state.secondsLeft = q.minutes * 60;
  tickTimer();
  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    tickTimer();
    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      finishModuleByTimeout();
    }
  }, 1000);
}

function tickTimer() {
  const minutes = Math.max(0, Math.floor(state.secondsLeft / 60));
  const seconds = Math.max(0, state.secondsLeft % 60);
  const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const q = state.questions[state.index];
  if (q && q.type === 'coding') {
    $('automataTimerText').textContent = timeStr;
  } else {
    $('timerText').textContent = timeStr;
  }

  // Warning color at < 60s
  if (state.secondsLeft <= 60 && state.secondsLeft > 0) {
    if (q && q.type === 'coding') {
      $('automataTimerText').style.color = 'var(--red)';
    } else {
      $('timerText').style.color = 'var(--red)';
    }
  } else {
    $('timerText').style.color = '';
    $('automataTimerText').style.color = '';
  }
}

function finishModuleByTimeout() {
  const q = state.questions[state.index];
  if (!q) return finishExam();

  const currentModule = q.moduleKey;

  // Skip remaining questions in this module
  while (state.index < state.questions.length && state.questions[state.index].moduleKey === currentModule) {
    const skipped = state.questions[state.index];
    state.answers.push({
      ...skipped,
      selected: null,
      correct: false,
      type: skipped.type,
      timedOut: true
    });
    state.index++;
  }

  if (state.index >= state.questions.length) {
    return finishExam();
  }

  state.currentModuleIndex++;
  startModuleTimer();
  renderQuestion();
  saveCurrentAttempt();
}

// --- Render Question ---
function renderQuestion() {
  const question = state.questions[state.index];
  if (!question) return finishExam();

  if (question.type === 'coding') {
    renderAutomataQuestion(question);
    return;
  }

  // Show MCQ game screen
  showScreen('gameScreen');
  $('userBar').classList.remove('hidden');
  state.locked = false;
  state.hintUsed = false;
  state.fiftyUsed = false;

  // Module label
  $('moduleLabel').textContent = question.module;
  $('questionTitle').textContent = `Question ${state.index + 1}`;

  // Progress bar
  const progress = ((state.index) / state.questions.length) * 100;
  $('progressFill').style.width = `${progress}%`;

  // HUD
  $('shieldText').textContent = `${state.shields}/3`;
  $('comboText').textContent = `x${Math.max(1, state.streak)}`;
  $('liveXpText').textContent = `+${state.liveXp}`;
  $('topicBadge').textContent = question.topic;
  $('streakBadge').textContent = `Streak ${state.streak}`;
  $('hintBox').classList.add('hidden');

  // Question text
  $('questionText').textContent = question.text;

  // Options
  const grid = $('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  question.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-button';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-copy">${opt}</span>`;
    btn.addEventListener('click', () => chooseAnswer(opt, btn));
    grid.appendChild(btn);
  });

  // Footer
  $('scoreText').textContent = state.score;
  $('answeredText').textContent = `${state.answers.length}`;
  $('nextQuestion').disabled = true;

  // Shield critical warning
  if (state.shields <= 1) {
    document.body.classList.add('critical-health');
  } else {
    document.body.classList.remove('critical-health');
  }
}

function renderAutomataQuestion(question) {
  showScreen('automataScreen');
  $('userBar').classList.remove('hidden');

  const codingIndex = state.questions.filter((q, i) => i <= state.index && q.type === 'coding').length;
  const totalCoding = state.questions.filter(q => q.type === 'coding').length;
  $('automataTitle').textContent = `Problem ${codingIndex} of ${totalCoding}`;
  $('automataTopicBadge').textContent = question.topic;
  $('automataLangBadge').textContent = (question.language || 'c').toUpperCase();
  $('problemStatement').textContent = question.text;
  $('sampleInput').textContent = question.sampleInput || '';
  $('sampleOutput').textContent = question.sampleOutput || '';
  $('codeEditor').value = '';
  $('langSelect').value = question.language || 'c';

  // Hide panels
  $('testCasesPanel').classList.add('hidden');
  $('solutionPanel').classList.add('hidden');

  // Progress
  const progress = ((state.index) / state.questions.length) * 100;
  $('automataProgressFill').style.width = `${progress}%`;
}

// --- Answer Logic ---
function chooseAnswer(selected, btn) {
  if (state.locked) return;
  state.locked = true;
  initAudio();

  const question = state.questions[state.index];
  const correct = selected === question.answer;
  const buttons = $('optionsGrid').querySelectorAll('.option-button');

  if (correct) {
    btn.classList.add('correct');
    state.score++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;

    // XP calculation
    let xp = 10;
    if (state.streak >= 3) xp += state.streak * 2;
    state.liveXp += xp;

    playSound('correct', state.streak);

    // Combo popup at 3+
    if (state.streak >= 3) {
      playSound('combo', state.streak);
      showComboPopup(state.streak);
    }

    // Dim other options
    buttons.forEach(b => {
      if (b !== btn) b.classList.add('dimmed');
    });
  } else {
    btn.classList.add('wrong');
    state.streak = 0;
    state.shields--;
    playSound('wrong', 0);

    if (state.shields <= 0) {
      playSound('shield', 0);
    }

    // Highlight correct answer
    buttons.forEach(b => {
      const copy = b.querySelector('.option-copy').textContent;
      if (copy === question.answer) {
        b.classList.add('correct');
      } else if (b !== btn) {
        b.classList.add('dimmed');
      }
    });
  }

  state.answers.push({
    ...question,
    selected,
    correct,
    type: 'mcq'
  });

  // Update HUD
  $('shieldText').textContent = `${Math.max(0, state.shields)}/3`;
  $('comboText').textContent = `x${Math.max(1, state.streak)}`;
  $('liveXpText').textContent = `+${state.liveXp}`;
  $('scoreText').textContent = state.score;
  $('answeredText').textContent = `${state.answers.length}`;
  $('streakBadge').textContent = `Streak ${state.streak}`;

  $('nextQuestion').disabled = false;

  // Critical health
  if (state.shields <= 1) {
    document.body.classList.add('critical-health');
  }

  saveCurrentAttempt();
}

function nextQuestion() {
  const wasModuleEnd = state.moduleEnds.includes(state.index);
  state.index++;

  if (state.index >= state.questions.length) return finishExam();

  if (wasModuleEnd) {
    state.hintUsed = false;
    state.fiftyUsed = false;
    startModuleTimer();
  }

  renderQuestion();
}

// --- Automata functions ---
function showTestCases() {
  const q = state.questions[state.index];
  if (!q) return;
  const panel = $('testCasesPanel');
  const list = $('testCasesList');
  panel.classList.toggle('hidden');
  if (panel.classList.contains('hidden')) return;
  list.innerHTML = '';
  (q.testCases || []).forEach((tc, i) => {
    const item = document.createElement('div');
    item.className = 'test-case-item';
    item.innerHTML = `<div><span>Input ${i + 1}</span><pre>${escapeHtml(tc.input)}</pre></div><div><span>Expected Output</span><pre>${escapeHtml(tc.output)}</pre></div>`;
    list.appendChild(item);
  });
}

function showSolution() {
  const q = state.questions[state.index];
  if (!q) return;
  const panel = $('solutionPanel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    $('solutionCode').textContent = q.solution || '// No solution provided';
  }
}

function nextAutomata() {
  const q = state.questions[state.index];
  state.answers.push({
    ...q,
    selected: $('codeEditor').value,
    correct: false, // Self-evaluated
    type: 'coding'
  });

  state.liveXp += 15; // Participation XP for coding

  // Track code submissions
  updateUser(state.currentUser, u => {
    u.codeSubmissions = (u.codeSubmissions || 0) + 1;
  });

  const wasModuleEnd = state.moduleEnds.includes(state.index);
  state.index++;

  if (state.index >= state.questions.length) return finishExam();

  if (wasModuleEnd) {
    startModuleTimer();
  }

  renderQuestion();
  saveCurrentAttempt();
}

function handleTab(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const ta = e.target;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    ta.value = ta.value.substring(0, start) + '    ' + ta.value.substring(end);
    ta.selectionStart = ta.selectionEnd = start + 4;
  }
}

// --- Hint & 50/50 ---
function hintText(question) {
  if (question.hint) return question.hint;
  const answer = question.answer || '';
  if (answer.length <= 3) return `The answer is short: "${answer}"`;
  return `The answer starts with "${answer[0]}" and has ${answer.length} characters.`;
}

function useHint() {
  if (state.hintUsed || state.locked) return;
  state.hintUsed = true;
  const question = state.questions[state.index];
  $('hintBox').textContent = hintText(question);
  $('hintBox').classList.remove('hidden');
  state.liveXp = Math.max(0, state.liveXp - 3);
  $('liveXpText').textContent = `+${state.liveXp}`;
}

function useFifty() {
  if (state.fiftyUsed || state.locked) return;
  state.fiftyUsed = true;
  const question = state.questions[state.index];
  const buttons = $('optionsGrid').querySelectorAll('.option-button');
  const wrongButtons = [];
  buttons.forEach(b => {
    const copy = b.querySelector('.option-copy').textContent;
    if (copy !== question.answer) wrongButtons.push(b);
  });
  shuffle(wrongButtons);
  const toEliminate = wrongButtons.slice(0, 2);
  toEliminate.forEach(b => b.classList.add('eliminated'));
  state.liveXp = Math.max(0, state.liveXp - 5);
  $('liveXpText').textContent = `+${state.liveXp}`;
}

// --- Finish Exam ---
function finishExam() {
  clearInterval(state.timerInterval);
  document.body.classList.remove('critical-health');
  showScreen('resultScreen');
  $('userBar').classList.remove('hidden');

  const total = state.questions.length;
  const mcqAnswers = state.answers.filter(a => a.type === 'mcq');
  const mcqCorrect = mcqAnswers.filter(a => a.correct).length;

  $('resultTitle').textContent = `${state.score} / ${total}`;

  const pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
  let message = '';
  if (pct >= 85) message = '🏆 Outstanding! You crushed it!';
  else if (pct >= 70) message = '🌟 Excellent performance!';
  else if (pct >= 50) message = '⚡ Good effort — keep pushing!';
  else if (pct >= 30) message = '💪 Room to grow. Practice more!';
  else message = '🔥 Keep grinding — you\'ll get there!';

  $('resultMessage').textContent = message;

  // Rewards
  renderRewards();
  renderModuleResults();
  saveFinishedAttempt();
}

function renderRewards() {
  const panel = $('rewardPanel');
  panel.innerHTML = '';

  const xpEarned = state.liveXp;
  const streakBonus = state.maxStreak >= 5 ? state.maxStreak * 3 : 0;
  const shieldBonus = state.shields > 0 ? state.shields * 10 : 0;
  const totalXp = xpEarned + streakBonus + shieldBonus;

  const cards = [
    { label: 'XP Earned', value: `+${totalXp}` },
    { label: 'Max Streak', value: `🔥 ${state.maxStreak}` },
    { label: 'Shields Left', value: `🛡️ ${Math.max(0, state.shields)}` }
  ];

  cards.forEach(c => {
    const card = document.createElement('div');
    card.className = 'reward-card';
    card.innerHTML = `<strong>${c.value}</strong><span>${c.label}</span>`;
    panel.appendChild(card);
  });
}

function renderModuleResults() {
  const container = $('moduleResults');
  container.innerHTML = '';

  MODULES.forEach(mod => {
    const moduleAnswers = state.answers.filter(a => a.moduleKey === mod.key);
    if (moduleAnswers.length === 0) return;

    const card = document.createElement('div');
    card.className = 'module-card';

    if (mod.type === 'coding') {
      const submitted = moduleAnswers.filter(a => a.selected && a.selected.trim().length > 0).length;
      card.innerHTML = `
        <strong>${mod.name}</strong>
        <span class="module-score">${submitted} submitted</span>
        <span>${moduleAnswers.length} problems attempted</span>
      `;
    } else {
      const correct = moduleAnswers.filter(a => a.correct).length;
      card.innerHTML = `
        <strong>${mod.name}</strong>
        <span class="module-score">${correct}/${moduleAnswers.length}</span>
        <span>${moduleAnswers.filter(a => a.timedOut).length} timed out</span>
      `;
    }

    container.appendChild(card);
  });
}

function reviewMistakes() {
  const list = $('reviewList');
  list.classList.toggle('hidden');
  if (list.classList.contains('hidden')) return;

  list.innerHTML = '';
  const mcqWrong = state.answers.filter(a => a.type === 'mcq' && !a.correct);

  if (mcqWrong.length === 0) {
    list.innerHTML = '<p class="empty-history">No wrong MCQ answers to review! 🎉</p>';
    return;
  }

  mcqWrong.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="question-label">${a.module} — ${a.topic}</div>
      <div class="review-question">${escapeHtml(a.text)}</div>
      <div class="review-answers">
        <span class="your-answer">Your answer: ${a.selected ? escapeHtml(a.selected) : '(timed out)'}</span>
        <span class="correct-answer">Correct: ${escapeHtml(a.answer)}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

// --- Save / Resume ---
function saveCurrentAttempt() {
  updateUser(state.currentUser, u => {
    u.savedRun = {
      questions: state.questions,
      moduleEnds: state.moduleEnds,
      index: state.index,
      score: state.score,
      streak: state.streak,
      maxStreak: state.maxStreak,
      answers: state.answers,
      shields: state.shields,
      liveXp: state.liveXp,
      startedAt: state.startedAt,
      currentModuleIndex: state.currentModuleIndex,
      secondsLeft: state.secondsLeft
    };
  });
}

function resumeAttempt() {
  initAudio();
  const user = getUser(state.currentUser);
  if (!user || !user.savedRun) return;

  const run = user.savedRun;
  state.questions = run.questions;
  state.moduleEnds = run.moduleEnds;
  state.index = run.index;
  state.score = run.score;
  state.streak = run.streak;
  state.maxStreak = run.maxStreak;
  state.answers = run.answers;
  state.shields = run.shields;
  state.liveXp = run.liveXp;
  state.startedAt = run.startedAt;
  state.currentModuleIndex = run.currentModuleIndex;
  state.secondsLeft = run.secondsLeft || 0;
  state.locked = false;
  state.hintUsed = false;
  state.fiftyUsed = false;

  showScreen('gameScreen');

  // Restore timer
  clearInterval(state.timerInterval);
  tickTimer();
  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    tickTimer();
    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      finishModuleByTimeout();
    }
  }, 1000);

  renderQuestion();
}

function saveFinishedAttempt() {
  const streakBonus = state.maxStreak >= 5 ? state.maxStreak * 3 : 0;
  const shieldBonus = state.shields > 0 ? state.shields * 10 : 0;
  const totalXp = state.liveXp + streakBonus + shieldBonus;

  updateUser(state.currentUser, u => {
    u.attempts = (u.attempts || 0) + 1;
    u.totalCorrect = (u.totalCorrect || 0) + state.score;
    u.xp = (u.xp || 0) + totalXp;
    if (state.maxStreak > (u.maxStreak || 0)) u.maxStreak = state.maxStreak;
    if (!u.history) u.history = [];
    u.history.push({
      date: new Date().toISOString(),
      score: state.score,
      total: state.questions.length,
      shieldsLeft: Math.max(0, state.shields),
      maxStreak: state.maxStreak,
      xpEarned: totalXp
    });
    u.savedRun = null;
  });
}

// --- Utility ---
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// --- Boot ---
function boot() {
  // Check for existing session
  const savedUser = localStorage.getItem(SESSION_KEY);
  if (savedUser) {
    const user = getUser(savedUser);
    if (user) {
      state.currentUser = savedUser;
      $('playerName').textContent = savedUser;
      $('userBar').classList.remove('hidden');
      openHome();
      return;
    }
  }
  showScreen('loginScreen');
}

// --- Event Listeners ---
$('loginForm').addEventListener('submit', login);
$('logoutButton').addEventListener('click', logout);
$('startExam').addEventListener('click', startExam);
$('resumeExam').addEventListener('click', resumeAttempt);
$('retryExam').addEventListener('click', startExam);
$('nextQuestion').addEventListener('click', nextQuestion);
$('reviewMistakes').addEventListener('click', reviewMistakes);
$('backHome').addEventListener('click', openHome);
$('hintButton').addEventListener('click', useHint);
$('fiftyButton').addEventListener('click', useFifty);
$('showTestCases').addEventListener('click', showTestCases);
$('showSolution').addEventListener('click', showSolution);
$('nextAutomata').addEventListener('click', nextAutomata);
$('codeEditor').addEventListener('keydown', handleTab);

// --- Init ---
boot();
