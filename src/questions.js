export const QUESTIONS = {

  // =============================================
  // ENGLISH — 20 MCQ
  // =============================================
  english: [
    // --- Synonyms (3) ---
    {
      module: "english",
      topic: "Synonyms",
      text: "Choose the word most similar in meaning to: OBSEQUIOUS",
      answer: "Sycophantic",
      distractors: ["Obstinate", "Obscure", "Observant"]
    },
    {
      module: "english",
      topic: "Synonyms",
      text: "Choose the word most similar in meaning to: PERSPICACIOUS",
      answer: "Astute",
      distractors: ["Persistent", "Perspiring", "Persnickety"]
    },
    {
      module: "english",
      topic: "Synonyms",
      text: "Choose the word most similar in meaning to: RECALCITRANT",
      answer: "Intractable",
      distractors: ["Reminiscent", "Redundant", "Reclusive"]
    },

    // --- Antonyms (3) ---
    {
      module: "english",
      topic: "Antonyms",
      text: "Choose the word most opposite in meaning to: PARSIMONIOUS",
      answer: "Profligate",
      distractors: ["Prudent", "Penurious", "Punctilious"]
    },
    {
      module: "english",
      topic: "Antonyms",
      text: "Choose the word most opposite in meaning to: EPHEMERAL",
      answer: "Perpetual",
      distractors: ["Transient", "Ethereal", "Sporadic"]
    },
    {
      module: "english",
      topic: "Antonyms",
      text: "Choose the word most opposite in meaning to: LOQUACIOUS",
      answer: "Taciturn",
      distractors: ["Laconic", "Reticent", "Reserved"]
    },

    // --- Contextual Vocabulary (2) ---
    {
      module: "english",
      topic: "Contextual Vocabulary",
      text: "The diplomat's ________ remarks, carefully crafted to avoid offending any faction, ultimately satisfied no one and were criticized for their lack of substance.\n\nChoose the word that best fills the blank.",
      answer: "anodyne",
      distractors: ["acerbic", "trenchant", "polemical"]
    },
    {
      module: "english",
      topic: "Contextual Vocabulary",
      text: "Despite the researcher's ________ methodology, her conclusions were met with skepticism because the sample size was too small to yield statistically significant results.\n\nChoose the word that best fills the blank.",
      answer: "meticulous",
      distractors: ["haphazard", "perfunctory", "desultory"]
    },

    // --- Error Identification (3) ---
    {
      module: "english",
      topic: "Error Identification",
      text: "Identify the error in the following sentence:\n\n\"The committee, along with several advisory board members, have decided to postpone the annual conference until further notice.\"",
      answer: "\"have decided\" should be \"has decided\" — the subject is \"committee\" (singular), and \"along with\" does not change subject number",
      distractors: [
        "\"until further notice\" should be \"until a further notice\"",
        "\"to postpone\" should be \"for postponing\"",
        "The sentence has no grammatical error"
      ]
    },
    {
      module: "english",
      topic: "Error Identification",
      text: "Identify the error in the following sentence:\n\n\"Having been thoroughly reviewed by the auditors, the CEO presented the financial statements to the board of directors.\"",
      answer: "Dangling modifier — \"Having been thoroughly reviewed\" modifies \"CEO\" instead of \"financial statements\"",
      distractors: [
        "\"to the board of directors\" should be \"before the board of directors\"",
        "\"thoroughly\" is redundant with \"reviewed\"",
        "The sentence has no grammatical error"
      ]
    },
    {
      module: "english",
      topic: "Error Identification",
      text: "Identify the error in the following sentence:\n\n\"Neither the professor nor his graduate students was able to replicate the results of the controversial experiment.\"",
      answer: "\"was\" should be \"were\" — when \"neither...nor\" connects a singular and plural subject, the verb agrees with the nearer subject (\"students\" — plural)",
      distractors: [
        "\"replicate\" should be \"replicated\"",
        "\"controversial\" is misplaced and should come before \"results\"",
        "The sentence has no grammatical error"
      ]
    },

    // --- Sentence Improvement (3) ---
    {
      module: "english",
      topic: "Sentence Improvement",
      text: "Choose the best replacement for the underlined portion:\n\n\"The board recommended that the director [revises the proposal and submits] it by Friday.\"",
      answer: "revise the proposal and submit",
      distractors: [
        "revised the proposal and submitted",
        "should revise the proposal and should submit",
        "will revise the proposal and will submit"
      ]
    },
    {
      module: "english",
      topic: "Sentence Improvement",
      text: "Choose the best replacement for the underlined portion:\n\n\"The new policy aims at [reducing costs, to improve efficiency, and the enhancement of] employee satisfaction.\"",
      answer: "reducing costs, improving efficiency, and enhancing",
      distractors: [
        "reducing costs, improving efficiency, and the enhancement of",
        "to reduce costs, to improve efficiency, and to the enhancement of",
        "cost reduction, efficiency improvement, and enhancing"
      ]
    },
    {
      module: "english",
      topic: "Sentence Improvement",
      text: "Choose the best replacement for the underlined portion:\n\n\"If I [was you], I would reconsider the decision before it is too late.\"",
      answer: "were you",
      distractors: [
        "am you",
        "had been you",
        "would be you"
      ]
    },

    // --- Reading Comprehension (3) ---
    {
      module: "english",
      topic: "Reading Comprehension",
      text: "Read the passage and answer the question:\n\n\"The discovery of penicillin is often attributed to serendipity, but this characterization overlooks the years of systematic research Fleming had conducted on antibacterial substances. His laboratory was notoriously untidy, which critics used to diminish his credibility. Yet it was precisely this disorder that created the conditions for the famous contamination event. What critics called carelessness, history would vindicate as a form of intellectual openness.\"\n\nWhat can be inferred about the author's view of Fleming?",
      answer: "The author believes Fleming's discovery was a combination of luck and scientific preparation, not pure chance",
      distractors: [
        "The author thinks Fleming was a careless scientist who got lucky",
        "The author believes Fleming deliberately created the contamination",
        "The author agrees with critics that Fleming's untidy lab was unprofessional"
      ]
    },
    {
      module: "english",
      topic: "Reading Comprehension",
      text: "Read the passage and answer the question:\n\n\"Coral bleaching events have increased fivefold since the 1980s. While rising sea temperatures are the primary driver, recent studies suggest that coastal runoff containing nitrogen-rich fertilizers accelerates the bleaching process by promoting algal growth that competes with the symbiotic zooxanthellae. Paradoxically, efforts to increase agricultural yield in coastal regions may be undermining the very marine ecosystems that support local fishing economies.\"\n\nWhat paradox does the passage identify?",
      answer: "Agricultural practices meant to improve food production are damaging the marine food sources that communities also depend on",
      distractors: [
        "Coral bleaching is increasing despite global efforts to reduce sea temperatures",
        "Nitrogen fertilizers help algae grow but kill coral simultaneously",
        "Fishing economies are growing even as coral reefs decline"
      ]
    },
    {
      module: "english",
      topic: "Reading Comprehension",
      text: "Read the passage and answer the question:\n\n\"The Dunning-Kruger effect suggests that individuals with limited competence in a domain tend to overestimate their abilities, while true experts often underestimate theirs. However, recent meta-analyses have questioned whether this is a genuine cognitive bias or merely a statistical artifact arising from regression to the mean. If the latter interpretation is correct, the effect tells us more about the mathematics of measurement than about human psychology.\"\n\nWhat is the implication if the \"statistical artifact\" interpretation is correct?",
      answer: "The Dunning-Kruger effect would not reflect a real psychological tendency but rather a predictable mathematical pattern",
      distractors: [
        "Experts would be shown to accurately estimate their abilities",
        "The Dunning-Kruger effect would apply only to specific domains",
        "Incompetent individuals would be aware of their limitations"
      ]
    },

    // --- Para Jumbles (3) ---
    {
      module: "english",
      topic: "Para Jumbles",
      text: "Arrange the following sentences to form a coherent paragraph:\n\nP. This process, known as CRISPR-Cas9, allows scientists to edit genes with unprecedented precision.\nQ. However, ethical concerns about germline editing — changes that can be inherited by future generations — have sparked intense debate.\nR. Gene editing technology has revolutionized molecular biology in the past decade.\nS. Proponents argue that it could eliminate hereditary diseases, while opponents fear unintended consequences and the specter of designer babies.\nT. The technology works by using a guide RNA to direct an enzyme to a specific DNA sequence, where it makes a targeted cut.\n\nChoose the correct order.",
      answer: "R, P, T, Q, S",
      distractors: ["P, T, R, Q, S", "R, T, P, S, Q", "T, P, R, S, Q"]
    },
    {
      module: "english",
      topic: "Para Jumbles",
      text: "Arrange the following sentences to form a coherent paragraph:\n\nP. The resulting compound demonstrated remarkable thermal stability, surviving temperatures exceeding 800 degrees Celsius.\nQ. Researchers at MIT synthesized a novel ceramic material by combining boron nitride nanotubes with a silicon carbide matrix.\nR. This breakthrough could transform the aerospace industry, where materials must withstand extreme heat during re-entry.\nS. Previous attempts to create such composites had failed because the nanotubes would degrade during the sintering process.\nT. The key innovation was a low-temperature plasma-assisted bonding technique that preserved nanotube integrity.\n\nChoose the correct order.",
      answer: "Q, S, T, P, R",
      distractors: ["Q, P, S, T, R", "S, T, Q, P, R", "Q, T, S, R, P"]
    },
    {
      module: "english",
      topic: "Para Jumbles",
      text: "Arrange the following sentences to form a coherent paragraph:\n\nP. These microsaccades, once thought to be mere noise, are now believed to play a crucial role in preventing neural adaptation.\nQ. Without them, a perfectly stabilized retinal image fades from perception within seconds — a phenomenon called Troxler's fading.\nR. The human eye, even when fixated on a single point, is never truly still.\nS. This discovery has implications for display technology, where engineers must account for the eye's natural motion to prevent visual fatigue.\nT. It makes tiny, involuntary movements several times per second.\n\nChoose the correct order.",
      answer: "R, T, P, Q, S",
      distractors: ["R, P, T, Q, S", "T, R, P, S, Q", "P, Q, R, T, S"]
    }
  ],

  // =============================================
  // LOGICAL REASONING — 20 MCQ
  // =============================================
  logic: [
    // --- Coding Deductive Logic (3) ---
    {
      module: "logic",
      topic: "Coding Deductive Logic",
      text: "In a certain code language:\n- \"bright solar panel\" is coded as \"ke mo ra\"\n- \"panel generates power\" is coded as \"ti ra jo\"\n- \"solar power grid\" is coded as \"jo ke ni\"\n- \"bright grid system\" is coded as \"ni mo pa\"\n\nWhat is the code for \"generates\"?",
      answer: "ti",
      distractors: ["ra", "jo", "ke"]
    },
    {
      module: "logic",
      topic: "Coding Deductive Logic",
      text: "In a two-step coding scheme:\nStep 1: Each letter is shifted forward by its position in the word (1st letter +1, 2nd +2, etc.)\nStep 2: The resulting word is reversed.\n\nUsing this scheme, what is the code for \"CAT\"?",
      answer: "WCD",
      distractors: ["DCW", "VDC", "WDE"]
    },
    {
      module: "logic",
      topic: "Coding Deductive Logic",
      text: "In a code language, each word is coded by a rule:\n- \"MOUSE\" is coded as \"PRXVH\"\n- \"TABLE\" is coded as \"WDEOH\"\n- \"CHAIR\" is coded as \"FKDLU\"\n\nWhat will \"PLANT\" be coded as?",
      answer: "SODQW",
      distractors: ["RNCPV", "TPERX", "QMBOW"]
    },

    // --- Data Sufficiency (2) ---
    {
      module: "logic",
      topic: "Data Sufficiency",
      text: "Is the integer n divisible by 12?\n\nStatement I: n is divisible by 6.\nStatement II: n is divisible by 4.\n\nChoose the correct option.",
      answer: "Both statements together are sufficient, but neither alone is sufficient",
      distractors: [
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Each statement alone is sufficient"
      ]
    },
    {
      module: "logic",
      topic: "Data Sufficiency",
      text: "What is the value of x + y?\n\nStatement I: 2x + 3y = 18\nStatement II: x and y are positive integers less than 10 and x > y.\n\nChoose the correct option.",
      answer: "Both statements together are sufficient",
      distractors: [
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Both statements together are not sufficient"
      ]
    },

    // --- Direction Sense (2) ---
    {
      module: "logic",
      topic: "Direction Sense",
      text: "Arun starts from point A and walks 8 km North. He then turns right and walks 5 km. He turns right again and walks 3 km. He then turns left and walks 4 km. Finally, he turns right and walks 5 km, reaching point B.\n\nWhat is the shortest distance between A and B?",
      answer: "9 km",
      distractors: ["10 km", "13 km", "11 km"]
    },
    {
      module: "logic",
      topic: "Direction Sense",
      text: "Priya starts from her office facing East. She walks 8 km, turns left and walks 6 km, turns left again and walks 5 km, turns right and walks 2 km, turns right and walks 3 km.\n\nIn which direction and how far is she from her starting point?",
      answer: "North-East, 10 km",
      distractors: ["North, 10 km", "North-East, 8 km", "East, 6 km"]
    },

    // --- Word Sequence (2) ---
    {
      module: "logic",
      topic: "Word Sequence",
      text: "Arrange the following in a logical/chronological order:\n\n1. Diagnosis\n2. Symptom\n3. Treatment\n4. Recovery\n5. Infection\n6. Medication",
      answer: "5, 2, 1, 3, 6, 4",
      distractors: ["2, 5, 1, 3, 6, 4", "5, 1, 2, 6, 3, 4", "5, 2, 1, 6, 3, 4"]
    },
    {
      module: "logic",
      topic: "Word Sequence",
      text: "Arrange the following in order from smallest to largest:\n\n1. Molecule\n2. Atom\n3. Electron\n4. Cell\n5. Organelle\n6. Organism",
      answer: "3, 2, 1, 5, 4, 6",
      distractors: ["2, 3, 1, 5, 4, 6", "3, 2, 1, 4, 5, 6", "2, 1, 3, 5, 4, 6"]
    },

    // --- Analogy (2) ---
    {
      module: "logic",
      topic: "Analogy",
      text: "SCALPEL : SURGEON :: CHISEL : ?",
      answer: "Sculptor",
      distractors: ["Carpenter", "Mason", "Blacksmith"]
    },
    {
      module: "logic",
      topic: "Analogy",
      text: "TACHOMETER : SPEED :: HYGROMETER : ?",
      answer: "Humidity",
      distractors: ["Pressure", "Temperature", "Altitude"]
    },

    // --- Classification (2) ---
    {
      module: "logic",
      topic: "Classification",
      text: "Find the odd one out:\n\nMercury, Venus, Pluto, Mars, Jupiter",
      answer: "Pluto — it is a dwarf planet, not a planet",
      distractors: [
        "Mercury — it is the smallest",
        "Venus — it rotates in the opposite direction",
        "Jupiter — it is a gas giant unlike the others"
      ]
    },
    {
      module: "logic",
      topic: "Classification",
      text: "Find the odd one out:\n\nAmalgamate, Consolidate, Disintegrate, Unify, Coalesce",
      answer: "Disintegrate — all others mean to combine or bring together",
      distractors: [
        "Amalgamate — it specifically refers to metals",
        "Coalesce — it implies a natural process unlike the others",
        "Consolidate — it implies strengthening, not combining"
      ]
    },

    // --- Number Series (4) ---
    {
      module: "logic",
      topic: "Number Series",
      text: "Find the next number in the series:\n\n2, 6, 14, 30, 62, ?",
      answer: "126",
      distractors: ["124", "128", "130"]
    },
    {
      module: "logic",
      topic: "Number Series",
      text: "Find the next number in the series:\n\n3, 8, 18, 38, 78, ?",
      answer: "158",
      distractors: ["148", "156", "168"]
    },
    {
      module: "logic",
      topic: "Number Series",
      text: "Find the missing number in the series:\n\n1, 1, 2, 3, 5, 8, 13, ?, 34",
      answer: "21",
      distractors: ["20", "22", "24"]
    },
    {
      module: "logic",
      topic: "Number Series",
      text: "Find the next number in the series:\n\n4, 9, 25, 49, 121, ?",
      answer: "169",
      distractors: ["144", "196", "225"]
    },

    // --- Puzzles (3) ---
    {
      module: "logic",
      topic: "Puzzles",
      text: "Six people — A, B, C, D, E, and F — are seated around a circular table facing the center.\n\n- A sits opposite to D.\n- B is immediately to the left of A.\n- C is not adjacent to D.\n- E is immediately to the right of D.\n\nWho is sitting opposite to B?",
      answer: "E",
      distractors: ["C", "F", "D"]
    },
    {
      module: "logic",
      topic: "Puzzles",
      text: "Five students — P, Q, R, S, T — scored different marks in an exam.\n\n- P scored more than Q but less than R.\n- S scored more than R.\n- T scored less than Q.\n- The one who scored the highest did not score 100.\n\nWho scored the second highest?",
      answer: "R",
      distractors: ["P", "S", "Q"]
    },
    {
      module: "logic",
      topic: "Puzzles",
      text: "Four meetings — Marketing (M), Finance (F), HR (H), and Tech (T) — must be scheduled on Monday through Thursday (one per day). The constraints are:\n\n- Finance cannot be on Monday or Thursday.\n- Tech must be scheduled after Marketing but before HR.\n- HR is on Thursday.\n\nOn which day is the Finance meeting?",
      answer: "Wednesday",
      distractors: ["Tuesday", "Monday", "Thursday"]
    }
  ],

  // =============================================
  // QUANTITATIVE — 25 MCQ
  // =============================================
  quant: [
    // --- Divisibility (2) ---
    {
      module: "quant",
      topic: "Divisibility",
      text: "What is the remainder when 7^256 is divided by 10?",
      answer: "1",
      distractors: ["7", "3", "9"]
    },
    {
      module: "quant",
      topic: "Divisibility",
      text: "A six-digit number 73A215 is divisible by 9. What is the value of A?",
      answer: "0",
      distractors: ["3", "6", "9"]
    },

    // --- HCF & LCM (2) ---
    {
      module: "quant",
      topic: "HCF & LCM",
      text: "Three bells toll at intervals of 12, 15, and 20 minutes respectively. If they toll together at 9:00 AM, at what time will they next toll together?",
      answer: "10:00 AM",
      distractors: ["9:30 AM", "10:30 AM", "11:00 AM"]
    },
    {
      module: "quant",
      topic: "HCF & LCM",
      text: "The HCF and LCM of two numbers are 12 and 360 respectively. If one number is 60, what is the other number?",
      answer: "72",
      distractors: ["48", "84", "96"]
    },

    // --- Numbers (2) ---
    {
      module: "quant",
      topic: "Numbers",
      text: "The difference between a two-digit number and the number obtained by reversing its digits is 36. If the sum of the digits is 12, what is the original number?",
      answer: "84",
      distractors: ["48", "93", "75"]
    },
    {
      module: "quant",
      topic: "Numbers",
      text: "If the product of three consecutive odd numbers is 2145, what is the largest of the three numbers?",
      answer: "15",
      distractors: ["13", "17", "19"]
    },

    // --- Decimal Fractions (1) ---
    {
      module: "quant",
      topic: "Decimal Fractions",
      text: "If 0.̅36̅ (0.363636...) is expressed as a fraction in lowest terms, what is the sum of the numerator and denominator?",
      answer: "15",
      distractors: ["47", "11", "99"]
    },

    // --- Profit & Loss (3) ---
    {
      module: "quant",
      topic: "Profit & Loss",
      text: "A shopkeeper marks his goods 40% above the cost price and then offers two successive discounts of 10% and 15%. What is his overall profit or loss percentage?",
      answer: "7.1% profit",
      distractors: ["5% profit", "7.1% loss", "10% profit"]
    },
    {
      module: "quant",
      topic: "Profit & Loss",
      text: "A merchant bought 80 kg of rice at Rs. 40/kg and 120 kg of rice at Rs. 50/kg. He mixed them and sold the mixture at Rs. 52/kg. What is his profit percentage?",
      answer: "13.04%",
      distractors: ["15%", "10%", "12%"]
    },
    {
      module: "quant",
      topic: "Profit & Loss",
      text: "A and B enter a partnership. A invests Rs. 50,000 for 12 months and B invests Rs. 60,000 for 10 months. If the total profit is Rs. 54,000, what is B's share?",
      answer: "Rs. 27,000",
      distractors: ["Rs. 30,000", "Rs. 24,000", "Rs. 32,400"]
    },

    // --- Simple & Compound Interest (2) ---
    {
      module: "quant",
      topic: "Simple & Compound Interest",
      text: "The difference between Compound Interest and Simple Interest on a certain sum at 10% per annum for 3 years is Rs. 155. What is the principal?",
      answer: "Rs. 5,000",
      distractors: ["Rs. 4,500", "Rs. 5,500", "Rs. 6,000"]
    },
    {
      module: "quant",
      topic: "Simple & Compound Interest",
      text: "A sum of Rs. 16,000 is invested at compound interest compounded half-yearly at 10% per annum. What is the amount after 1.5 years?",
      answer: "Rs. 18,522",
      distractors: ["Rs. 18,400", "Rs. 18,600", "Rs. 18,480"]
    },

    // --- Time Speed Distance (3) ---
    {
      module: "quant",
      topic: "Time Speed Distance",
      text: "Two trains of lengths 150m and 200m are running on parallel tracks in opposite directions at speeds of 40 km/h and 50 km/h respectively. How long will they take to completely cross each other?",
      answer: "14 seconds",
      distractors: ["12 seconds", "16 seconds", "18 seconds"]
    },
    {
      module: "quant",
      topic: "Time Speed Distance",
      text: "A boat can travel 36 km downstream in 3 hours and 24 km upstream in 4 hours. What is the speed of the boat in still water?",
      answer: "9 km/h",
      distractors: ["8 km/h", "10 km/h", "7 km/h"]
    },
    {
      module: "quant",
      topic: "Time Speed Distance",
      text: "A person walks from home to office at 5 km/h and returns at 3 km/h. If the total time taken is 4 hours, what is the one-way distance?",
      answer: "7.5 km",
      distractors: ["6 km", "8 km", "10 km"]
    },

    // --- Logarithms (2) ---
    {
      module: "quant",
      topic: "Logarithms",
      text: "If log₂(x) + log₂(x-2) = 3, what is the value of x?",
      answer: "4",
      distractors: ["2", "6", "8"]
    },
    {
      module: "quant",
      topic: "Logarithms",
      text: "If log₁₀(2) = 0.3010 and log₁₀(3) = 0.4771, find the value of log₁₀(72).",
      answer: "1.8573",
      distractors: ["1.8751", "1.9542", "1.7853"]
    },

    // --- Permutation & Combination (3) ---
    {
      module: "quant",
      topic: "Permutation & Combination",
      text: "In how many ways can a committee of 5 be formed from 6 men and 4 women such that the committee includes at least 2 women?",
      answer: "186",
      distractors: ["200", "180", "252"]
    },
    {
      module: "quant",
      topic: "Permutation & Combination",
      text: "How many 4-letter words (with or without meaning) can be formed from the letters of the word 'LOGARITHM' such that no letter is repeated?",
      answer: "3024",
      distractors: ["2520", "3628", "5040"]
    },
    {
      module: "quant",
      topic: "Permutation & Combination",
      text: "In how many ways can 7 people be seated in a row if two specific people must NOT sit adjacent to each other?",
      answer: "3600",
      distractors: ["2400", "4320", "4800"]
    },

    // --- Probability (3) ---
    {
      module: "quant",
      topic: "Probability",
      text: "A bag contains 5 red balls, 4 blue balls, and 3 green balls. If 3 balls are drawn at random, what is the probability that all three are of different colors?",
      answer: "3/11",
      distractors: ["1/4", "2/11", "5/22"]
    },
    {
      module: "quant",
      topic: "Probability",
      text: "Two dice are thrown simultaneously. What is the probability that the sum is at least 10?",
      answer: "1/6",
      distractors: ["1/4", "1/9", "5/36"]
    },
    {
      module: "quant",
      topic: "Probability",
      text: "From a standard deck of 52 cards, two cards are drawn without replacement. What is the probability that both are aces?",
      answer: "1/221",
      distractors: ["1/169", "1/256", "1/208"]
    },

    // --- Ratio & Proportion (2) ---
    {
      module: "quant",
      topic: "Ratio & Proportion",
      text: "The present ages of A and B are in the ratio 5:3. Four years from now, the ratio of their ages will be 3:2. What is B's present age?",
      answer: "12 years",
      distractors: ["15 years", "10 years", "18 years"]
    },
    {
      module: "quant",
      topic: "Ratio & Proportion",
      text: "A mixture contains milk and water in the ratio 7:3. If 10 liters of water is added to the mixture, the new ratio becomes 7:5. What was the original quantity of the mixture?",
      answer: "50 liters",
      distractors: ["40 liters", "60 liters", "35 liters"]
    }
  ],

  // =============================================
  // AUTOMATA (CODING) — 2 problems
  // =============================================
  automata: [
    // --- Problem 1: Array/String Manipulation ---
    {
      module: "automata",
      topic: "Problem Solving",
      text: "SLIDING WINDOW MAXIMUM DIFFERENCE\n\nGiven an array of N integers and a window size K, find the maximum difference (max_element - min_element) within each contiguous window of size K. Print the results for each window separated by spaces.\n\nConstraints:\n- 1 <= N <= 10000\n- 1 <= K <= N\n- -10^6 <= arr[i] <= 10^6\n\nInput Format:\n- First line: Two space-separated integers N and K\n- Second line: N space-separated integers\n\nOutput Format:\n- A single line with (N - K + 1) space-separated integers, each being the max difference in the corresponding window.\n\nExample:\nInput:\n7 3\n1 5 2 8 3 7 4\n\nOutput:\n4 6 6 5 4\n\nExplanation:\n- Window [1,5,2]: max=5, min=1, diff=4\n- Window [5,2,8]: max=8, min=2, diff=6\n- Window [2,8,3]: max=8, min=2, diff=6\n- Window [8,3,7]: max=8, min=3, diff=5\n- Window [3,7,4]: max=7, min=3, diff=4",
      sampleInput: "7 3\n1 5 2 8 3 7 4",
      sampleOutput: "4 6 6 5 4",
      testCases: [
        { input: "5 2\n10 20 30 40 50", output: "10 10 10 10" },
        { input: "6 4\n3 -1 5 2 0 7", output: "6 6 7" },
        { input: "4 4\n1 1 1 1", output: "0" },
        { input: "1 1\n42", output: "0" }
      ],
      solution: "#include <stdio.h>\n\nint main() {\n    int n, k;\n    scanf(\"%d %d\", &n, &k);\n    int arr[10000];\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n    for (int i = 0; i <= n - k; i++) {\n        int maxVal = arr[i], minVal = arr[i];\n        for (int j = i + 1; j < i + k; j++) {\n            if (arr[j] > maxVal) maxVal = arr[j];\n            if (arr[j] < minVal) minVal = arr[j];\n        }\n        if (i > 0) printf(\" \");\n        printf(\"%d\", maxVal - minVal);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      language: "c"
    },

    // --- Problem 2: Function Debugging/Completion ---
    {
      module: "automata",
      topic: "Problem Solving",
      text: "ZIGZAG MATRIX TRAVERSAL\n\nGiven a 2D matrix of size M x N, print the elements in a zigzag (snake) pattern: traverse the first row left to right, the second row right to left, the third row left to right, and so on.\n\nA junior developer wrote the following C code but it has bugs. Fix the code so that it works correctly.\n\n--- Buggy Code ---\n#include <stdio.h>\n\nvoid zigzagTraversal(int matrix[100][100], int m, int n) {\n    for (int i = 0; i < m; i++) {\n        if (i % 2 == 0) {\n            for (int j = 0; j < n; j++)\n                printf(\"%d \", matrix[i][j]);\n        } else {\n            for (int j = 0; j < n; j++)  // BUG HERE\n                printf(\"%d \", matrix[i][j]);  // BUG HERE\n        }\n    }\n}\n\nint main() {\n    int m, n;\n    scanf(\"%d %d\", &m, &n);\n    int matrix[100][100];\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++)\n            scanf(\"%d\", &matrix[i][j]);\n    zigzagTraversal(matrix, m, n);\n    printf(\"\\n\");\n    return 0;\n}\n--- End Buggy Code ---\n\nConstraints:\n- 1 <= M, N <= 100\n- -1000 <= matrix[i][j] <= 1000\n\nInput Format:\n- First line: Two space-separated integers M and N\n- Next M lines: N space-separated integers each\n\nOutput Format:\n- A single line with all elements in zigzag order, separated by spaces.\n\nExample:\nInput:\n3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n\nOutput:\n1 2 3 4 8 7 6 5 9 10 11 12\n\nExplanation:\n- Row 0 (left to right): 1 2 3 4\n- Row 1 (right to left): 8 7 6 5\n- Row 2 (left to right): 9 10 11 12",
      sampleInput: "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12",
      sampleOutput: "1 2 3 4 8 7 6 5 9 10 11 12",
      testCases: [
        { input: "2 3\n1 2 3\n4 5 6", output: "1 2 3 6 5 4" },
        { input: "1 5\n10 20 30 40 50", output: "10 20 30 40 50" },
        { input: "4 2\n1 2\n3 4\n5 6\n7 8", output: "1 2 4 3 5 6 8 7" },
        { input: "2 2\n-1 0\n1 -2", output: "-1 0 -2 1" }
      ],
      solution: "#include <stdio.h>\n\nvoid zigzagTraversal(int matrix[100][100], int m, int n) {\n    for (int i = 0; i < m; i++) {\n        if (i % 2 == 0) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 && j == 0)\n                    printf(\"%d\", matrix[i][j]);\n                else\n                    printf(\" %d\", matrix[i][j]);\n            }\n        } else {\n            for (int j = n - 1; j >= 0; j--) {\n                printf(\" %d\", matrix[i][j]);\n            }\n        }\n    }\n}\n\nint main() {\n    int m, n;\n    scanf(\"%d %d\", &m, &n);\n    int matrix[100][100];\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++)\n            scanf(\"%d\", &matrix[i][j]);\n    zigzagTraversal(matrix, m, n);\n    printf(\"\\n\");\n    return 0;\n}",
      language: "c"
    }
  ],

  // =============================================
  // WEB DESIGN / FULL STACK — 15 MCQ
  // =============================================
  webdesign: [
    // --- HTML (4) ---
    {
      module: "webdesign",
      topic: "HTML",
      text: "Which HTML5 element is most appropriate for marking up a self-contained piece of content that could be independently distributed or reused, such as a blog post or news story?",
      answer: "<article>",
      distractors: ["<section>", "<aside>", "<div>"]
    },
    {
      module: "webdesign",
      topic: "HTML",
      text: "What does the 'novalidate' attribute do when added to an HTML <form> element?",
      answer: "It prevents the browser from performing native form validation when the form is submitted",
      distractors: [
        "It prevents the form data from being sent to the server",
        "It disables all JavaScript validation on the form",
        "It makes all form fields optional regardless of the 'required' attribute"
      ]
    },
    {
      module: "webdesign",
      topic: "HTML",
      text: "Which attribute should be used on an <img> tag to provide a text alternative for screen readers when the image is purely decorative?",
      answer: "alt=\"\" (empty alt attribute)",
      distractors: [
        "role=\"presentation\" without any alt attribute",
        "aria-hidden=\"true\" without any alt attribute",
        "alt=\"decorative image\""
      ]
    },
    {
      module: "webdesign",
      topic: "HTML",
      text: "What is the purpose of the HTML5 <output> element?",
      answer: "It represents the result of a calculation or user action",
      distractors: [
        "It displays preformatted text output from a server",
        "It creates a text area for displaying console logs",
        "It defines a section where external content is embedded"
      ]
    },

    // --- CSS (4) ---
    {
      module: "webdesign",
      topic: "CSS",
      text: "Given the following CSS rules applied to the same element:\n\n#header .nav a { color: red; }\n.nav a.active { color: blue; }\n\nWhat color will an anchor with class 'active' inside '.nav' inside '#header' have?",
      answer: "Red — #header .nav a has higher specificity (1-1-1) than .nav a.active (0-2-1)",
      distractors: [
        "Blue — .active is more specific than the tag selector",
        "Blue — the second rule comes later and overrides the first",
        "Neither — they cancel each other out and the default color applies"
      ]
    },
    {
      module: "webdesign",
      topic: "CSS",
      text: "In CSS Grid, what does the following declaration do?\n\ngrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));",
      answer: "Creates as many columns as can fit in the container, each at least 250px wide and expanding equally to fill remaining space",
      distractors: [
        "Creates exactly 250 columns each 1px wide",
        "Creates columns that are always 250px wide with no flexibility",
        "Creates a single column that is 250px wide and takes up the full row"
      ]
    },
    {
      module: "webdesign",
      topic: "CSS",
      text: "What is the difference between 'visibility: hidden' and 'opacity: 0' in CSS?",
      answer: "Both hide the element visually and keep it in the layout, but opacity: 0 still responds to pointer events while visibility: hidden does not",
      distractors: [
        "visibility: hidden removes the element from the layout while opacity: 0 does not",
        "They are functionally identical in all cases",
        "opacity: 0 removes the element from the accessibility tree while visibility: hidden does not"
      ]
    },
    {
      module: "webdesign",
      topic: "CSS",
      text: "In the CSS box model, if an element has:\nwidth: 200px; padding: 20px; border: 5px solid; margin: 10px;\n\nWhat is the total horizontal space occupied by the element (with box-sizing: content-box)?",
      answer: "270px",
      distractors: ["200px", "250px", "260px"]
    },

    // --- JavaScript (4) ---
    {
      module: "webdesign",
      topic: "JavaScript",
      text: "What will the following code output?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n",
      answer: "3, 3, 3",
      distractors: ["0, 1, 2", "undefined, undefined, undefined", "0, 0, 0"]
    },
    {
      module: "webdesign",
      topic: "JavaScript",
      text: "What is the output of the following code?\n\nconst obj = { a: 1, b: 2, c: 3 };\nconst { a, ...rest } = obj;\nconsole.log(rest);",
      answer: "{ b: 2, c: 3 }",
      distractors: ["{ a: 1 }", "{ a: 1, b: 2, c: 3 }", "[2, 3]"]
    },
    {
      module: "webdesign",
      topic: "JavaScript",
      text: "What does the following async code print?\n\nasync function foo() {\n  console.log('A');\n  await Promise.resolve();\n  console.log('B');\n}\nconsole.log('C');\nfoo();\nconsole.log('D');",
      answer: "C, A, D, B",
      distractors: ["C, A, B, D", "A, B, C, D", "C, D, A, B"]
    },
    {
      module: "webdesign",
      topic: "JavaScript",
      text: "What will the following code return?\n\nconsole.log(typeof null === typeof undefined);",
      answer: "false — typeof null is 'object' and typeof undefined is 'undefined'",
      distractors: [
        "true — both are 'undefined'",
        "true — both are 'object'",
        "Error — you cannot compare typeof results"
      ]
    },

    // --- Web Fundamentals (3) ---
    {
      module: "webdesign",
      topic: "Web Fundamentals",
      text: "Which HTTP status code indicates that the server understood the request but refuses to authorize it, and re-authenticating will NOT help?",
      answer: "403 Forbidden",
      distractors: ["401 Unauthorized", "407 Proxy Authentication Required", "405 Method Not Allowed"]
    },
    {
      module: "webdesign",
      topic: "Web Fundamentals",
      text: "What is the key difference between localStorage and sessionStorage in web browsers?",
      answer: "localStorage persists until explicitly cleared, while sessionStorage is cleared when the browser tab is closed",
      distractors: [
        "localStorage has a 5MB limit while sessionStorage has no limit",
        "localStorage is accessible across different origins while sessionStorage is not",
        "localStorage stores data as objects while sessionStorage stores only strings"
      ]
    },
    {
      module: "webdesign",
      topic: "Web Fundamentals",
      text: "A web application at https://app.example.com makes a fetch request to https://api.example.com/data. The browser blocks the request. What is the most likely cause and solution?",
      answer: "CORS policy — the API server at api.example.com needs to include the Access-Control-Allow-Origin header in its response",
      distractors: [
        "SSL certificate mismatch — both domains must use the same SSL certificate",
        "Same-origin policy — the API must be hosted on the exact same domain and port",
        "Mixed content error — the API must switch to HTTP to match the app protocol"
      ]
    }
  ]

};
