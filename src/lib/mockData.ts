import { Exam, Question } from './types';

export const EXAMS: Exam[] = [
  {
    id: 'jamb',
    title: 'JAMB (UTME) Practice',
    category: 'Nigeria',
    durationMinutes: 120,
    totalQuestions: 180,
    description: 'Full-length UTME simulation including Use of English and three core subjects.',
    sections: ['Use of English', 'Mathematics', 'Physics', 'Chemistry'],
    subjects: ['English', 'Math', 'Physics', 'Chem', 'Bio', 'Gov', 'Eco', 'Lit'],
    popularity: 98
  },
  {
    id: 'sat',
    title: 'SAT Digital Mastery',
    category: 'International',
    durationMinutes: 134,
    totalQuestions: 98,
    description: 'The latest Digital SAT format covering Reading, Writing, and Math with adaptive difficulty.',
    sections: ['Reading & Writing', 'Math'],
    subjects: ['Reading', 'Writing', 'Math (Calc)', 'Math (No-Calc)'],
    popularity: 92,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/sat-exam-prep-99a47471-1775552325144.webp'
  },
  {
    id: 'ielts',
    title: 'IELTS Academic Prep',
    category: 'International',
    durationMinutes: 165,
    totalQuestions: 80,
    description: 'Master the IELTS with full simulation of Listening, Reading, and Writing sections.',
    sections: ['Reading', 'Listening', 'Writing'],
    subjects: ['English'],
    popularity: 95
  },
  {
    id: 'toefl',
    title: 'TOEFL iBT Global Prep',
    category: 'International',
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Official TOEFL iBT structure covering Reading, Listening, Speaking, and Writing.',
    sections: ['Reading', 'Listening', 'Speaking', 'Writing'],
    subjects: ['English Proficiency'],
    popularity: 94
  },
  {
    id: 'gre',
    title: 'GRE General Prep',
    category: 'International',
    durationMinutes: 230,
    totalQuestions: 80,
    description: 'Quantitative, Verbal, and Analytical Writing for Graduate School applications.',
    sections: ['Verbal', 'Quantitative', 'Analytical Writing'],
    subjects: ['General Aptitude'],
    popularity: 89
  },
  {
    id: 'gmat',
    title: 'GMAT Focus Edition',
    category: 'International',
    durationMinutes: 135,
    totalQuestions: 64,
    description: 'Business school prep focusing on Quantitative Reasoning, Verbal Reasoning, and Data Insights.',
    sections: ['Quantitative', 'Verbal', 'Data Insights'],
    subjects: ['Management Aptitude'],
    popularity: 87
  },
  {
    id: 'lsat',
    title: 'LSAT Law Prep',
    category: 'International',
    durationMinutes: 175,
    totalQuestions: 100,
    description: 'Legal aptitude testing including Logical Reasoning, Analytical Reasoning, and Reading Comprehension.',
    sections: ['Logical Reasoning', 'Analytical Reasoning', 'Reading'],
    subjects: ['Law'],
    popularity: 84
  },
  {
    id: 'mcat',
    title: 'MCAT Medical Prep',
    category: 'International',
    durationMinutes: 450,
    totalQuestions: 230,
    description: 'The premier medical entrance exam covering Biological, Chemical, and Psychological Foundations.',
    sections: ['Biology', 'Chemistry', 'Psychology', 'Critical Analysis'],
    subjects: ['Medicine'],
    popularity: 86
  },
  {
    id: 'hsk-chinese',
    title: 'HSK Chinese Academy',
    category: 'Language',
    durationMinutes: 90,
    totalQuestions: 50,
    description: 'From Beginner to Mastery. Prepare for HSK 1-6 with AI-powered lessons.',
    sections: ['Vocabulary', 'Grammar', 'Listening', 'Reading'],
    subjects: ['Mandarin'],
    popularity: 88,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/chinese-learning-module-49a47471-1775552325144.webp'
  },
  {
    id: 'french-delf',
    title: 'DELF/DALF French',
    category: 'Language',
    durationMinutes: 100,
    totalQuestions: 40,
    description: 'Achieve French proficiency from A1 to C2 with native speaker audio and AI feedback.',
    sections: ['Oral', 'Written', 'Reading'],
    subjects: ['French'],
    popularity: 91,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/french-learning-module-d82c234f-1775552324850.webp'
  },
  {
    id: 'german-goethe',
    title: 'Goethe German Mastery',
    category: 'Language',
    durationMinutes: 110,
    totalQuestions: 45,
    description: 'Official German proficiency prep for Goethe and TestDaF certifications.',
    sections: ['Hören', 'Lesen', 'Schreiben', 'Sprechen'],
    subjects: ['German'],
    popularity: 85,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/german-language-module-449beada-1775553052945.webp'
  },
  {
    id: 'japanese-jlpt',
    title: 'JLPT Japanese Academy',
    category: 'Language',
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Master Kanji, Vocabulary, and Grammar for N5 to N1 JLPT levels.',
    sections: ['Kanji', 'Grammar', 'Reading', 'Listening'],
    subjects: ['Japanese'],
    popularity: 83,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/japanese-language-module-2095f412-1775553053607.webp'
  },
  {
    id: 'english-advanced',
    title: 'English Global Advanced',
    category: 'Language',
    durationMinutes: 90,
    totalQuestions: 50,
    description: 'Advanced proficiency and exam prep for international business and academic success.',
    sections: ['Advanced Vocabulary', 'Business Writing', 'Oral Fluency'],
    subjects: ['English'],
    popularity: 96,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/english-proficiency-module-0970beb9-1775553052234.webp'
  },
  {
    id: 'spanish-learning',
    title: 'Spanish Essentials',
    category: 'Language',
    durationMinutes: 60,
    totalQuestions: 30,
    description: 'Master Spanish for global communication and professional success.',
    sections: ['Vocabulary', 'Grammar', 'Speaking'],
    subjects: ['Spanish'],
    popularity: 82,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/spanish-learning-module-565d598c-1775552325031.webp'
  },
  {
    id: 'arabic-learning',
    title: 'Arabic for Professionals',
    category: 'Language',
    durationMinutes: 100,
    totalQuestions: 40,
    description: 'Master Modern Standard Arabic for business and diplomacy in the Middle East.',
    sections: ['Script', 'Conversation', 'Grammar'],
    subjects: ['Arabic'],
    popularity: 80,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/arabic-language-module-ced89fea-1775553053710.webp'
  },
  {
    id: 'waec',
    title: 'WAEC / WASSCE Prep',
    category: 'Nigeria',
    durationMinutes: 150,
    totalQuestions: 50,
    description: 'Syllabus-aligned mock exams for major WAEC subjects.',
    sections: ['Objective', 'Theory (Simulation)'],
    subjects: ['English', 'Math', 'Physics', 'Chem', 'Bio', 'Civic'],
    popularity: 96
  }
];

export const MOCK_QUESTIONS: Record<string, Question[]> = {
  jamb: [
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Logarithms',
      text: `Find the value of x if log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 2) = 5.`,
      options: ['6', '\u00b16', '4', '8'],
      correct: 0,
      explanation: `Using log properties: log(a) + log(b) = log(ab). So log<sub>2</sub>(x\u00b2 - 4) = 5. x\u00b2 - 4 = 2\u2075 = 32. x\u00b2 = 36. x = 6 (since x > 2).`,
      type: 'multiple-choice'
    },
    {
      id: 2,
      subject: 'English',
      topic: 'Synonyms',
      text: `The principal was <b>meticulous</b> in his record-keeping.`,
      options: ['Careless', 'Thorough', 'Quick', 'Sloppy'],
      correct: 1,
      explanation: `Meticulous means showing great attention to detail; very careful and precise.`,
      type: 'multiple-choice'
    }
  ],
  sat: [
    {
      id: 1,
      subject: 'Math',
      topic: 'Linear Equations',
      text: `If 3x + 6 = 12, what is the value of 3x - 6?`,
      options: ['0', '6', '12', '18'],
      correct: 0,
      explanation: `3x + 6 = 12 => 3x = 6. Therefore, 3x - 6 = 6 - 6 = 0.`,
      type: 'multiple-choice'
    }
  ],
  'french-delf': [
    {
      id: 1,
      subject: 'French',
      topic: 'Vocabulary',
      text: `Quel est le mot correct pour "The library"?`,
      options: ["La librairie", "Le bureau", "La bibliothèque", "L'école"],
      correct: 2,
      explanation: `In French, "La bibliothèque" is the library, whereas "La librairie" is a bookstore.`,
      type: 'vocabulary'
    },
    {
      id: 2,
      subject: 'French',
      topic: 'Grammar',
      text: `Choisissez la forme correcte: Je ___ un livre.`,
      options: ['lit', 'lis', 'lisons', 'lisez'],
      correct: 1,
      explanation: `For the pronoun "Je", the conjugation of "lire" is "lis".`,
      type: 'grammar'
    },
    {
      id: 3,
      subject: 'French',
      topic: 'Listening',
      text: `Listen to the audio and identify the object described. <br/>(Audio: "C'est un objet utilisé pour écrire.")`,
      options: ['Un livre', 'Un stylo', 'Une table', 'Un sac'],
      correct: 1,
      explanation: `The audio describes an object used for writing, which is a pen (un stylo).`,
      type: 'listening'
    },
    {
      id: 4,
      subject: 'French',
      topic: 'Speaking',
      text: `Pronounce the following sentence clearly: "Le petit chat noir dort sur le tapis bleu."`,
      options: [],
      correct: -1,
      explanation: `AI evaluation will score your pronunciation accuracy and fluency.`,
      type: 'speaking'
    },
    {
      id: 5,
      subject: 'French',
      topic: 'Writing',
      text: `Describe your daily routine in French (at least 5 sentences).`,
      options: [],
      correct: -1,
      explanation: `AI feedback will analyze your grammar, vocabulary, and sentence structure.`,
      type: 'writing'
    }
  ],
  'german-goethe': [
    {
      id: 1,
      subject: 'German',
      topic: 'Vocabulary',
      text: `Was bedeutet "Der Flughafen"?`,
      options: ["The Hospital", "The Airport", "The Train Station", "The Hotel"],
      correct: 1,
      explanation: `"Der Flughafen" means The Airport in German.`,
      type: 'vocabulary'
    },
    {
      id: 2,
      subject: 'German',
      topic: 'Grammar',
      text: `Choose the correct article: ___ Tisch ist braun.`,
      options: ['Der', 'Die', 'Das', 'Den'],
      correct: 0,
      explanation: `"Tisch" (table) is a masculine noun, so it takes the article "Der" in the nominative case.`,
      type: 'grammar'
    },
    {
      id: 3,
      subject: 'German',
      topic: 'Speaking',
      text: `Pronounce the following: "Guten Tag, wie geht es Ihnen heute?"`,
      options: [],
      correct: -1,
      explanation: `AI will evaluate your German pronunciation and accent.`,
      type: 'speaking'
    }
  ],
  'hsk-chinese': [
    {
      id: 1,
      subject: 'Chinese',
      topic: 'Vocabulary',
      text: `What is the HSK 1 word for "Hello"?`,
      options: ['Zàijiàn', 'Nǐ hǎo', 'Xièxiè', 'Duìbùqǐ'],
      correct: 1,
      explanation: `Nǐ hǎo (你好) is the standard Chinese greeting for "Hello".`,
      type: 'vocabulary'
    },
    {
      id: 2,
      subject: 'Chinese',
      topic: 'Grammar',
      text: `Translate: "I am a student."`,
      options: ['Wǒ shì xuéshēng', 'Wǒ xǐhuān xuéshēng', 'Wǒ yǒu xuéshēng', 'Wǒ qù xuéshēng'],
      correct: 0,
      explanation: `"Wǒ shì xuéshēng" (我是学生) means "I am a student".`,
      type: 'grammar'
    }
  ],
  'english-advanced': [
    {
      id: 1,
      subject: 'English',
      topic: 'Advanced Vocabulary',
      text: `Which word is a synonym for "Ubiquitous"?`,
      options: ['Rare', 'Pervasive', 'Temporary', 'Hidden'],
      correct: 1,
      explanation: `Ubiquitous means present, appearing, or found everywhere; pervasive is a close synonym.`,
      type: 'vocabulary'
    },
    {
      id: 2,
      subject: 'English',
      topic: 'Writing',
      text: `Draft a formal email requesting a scholarship extension (at least 150 words).`,
      options: [],
      correct: -1,
      explanation: `AI will evaluate your professional tone, structure, and grammar.`,
      type: 'writing'
    }
  ]
};