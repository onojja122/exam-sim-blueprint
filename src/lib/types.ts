export interface Question {
  id: number;
  subject: string;
  topic: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  audioUrl?: string;
  type?: 'multiple-choice' | 'speaking' | 'writing' | 'listening' | 'vocabulary' | 'grammar';
  level?: string;
}

export interface Exam {
  id: string;
  title: string;
  category: 'Nigeria' | 'International' | 'Language';
  durationMinutes: number;
  totalQuestions: number;
  description: string;
  sections: string[];
  subjects: string[];
  popularity: number;
  imageUrl?: string;
}

export interface LanguageSkill {
  name: string;
  proficiency: number; // 0-100
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
}

export interface LanguageProgress {
  languageId: string;
  languageName: string;
  overallProgress: number;
  streak: number;
  skills: {
    vocabulary: number;
    grammar: number;
    reading: number;
    listening: number;
    speaking: number;
    writing: number;
  };
  lastAccessed: string;
  badges: string[];
}

export interface User {
  id: string;
  name: string;
  candidateId: string;
  tier: 'Free Starter' | 'Premium Scholar' | 'Global Professional' | 'Multi-Language Elite' | 'Corporate Enterprise';
  history: Attempt[];
  badges: string[];
  languageProgress: LanguageProgress[];
}

export interface Attempt {
  id: string;
  examId: string;
  examTitle: string;
  date: string;
  score: number;
  total: number;
  durationSeconds: number;
  sections: Record<string, number>;
}

export interface AIResponse {
  score: number;
  feedback: string;
  corrections?: string[];
  suggestions?: string[];
}