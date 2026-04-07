import { create } from 'zustand';
import { User, Attempt, LanguageProgress } from '../lib/types';

interface ExamState {
  currentView: 'home' | 'dashboard' | 'teacher' | 'profile' | 'exam' | 'analytics' | 'payment';
  selectedExamId: string | null;
  user: User | null;
  activeDashboardTab: 'Nigeria' | 'International' | 'Language';
  
  // Actions
  setView: (view: 'home' | 'dashboard' | 'teacher' | 'profile' | 'exam' | 'analytics' | 'payment') => void;
  selectExam: (id: string) => void;
  setUser: (user: User) => void;
  addAttempt: (attempt: Attempt) => void;
  updateLanguageProgress: (progress: LanguageProgress) => void;
  setDashboardTab: (tab: 'Nigeria' | 'International' | 'Language') => void;
}

const MOCK_USER: User = {
  id: 'user_001',
  name: 'Paul Adebayo',
  candidateId: 'POG-2024-0892',
  tier: 'Global Professional',
  badges: ['Early Bird', 'Math Pro', 'Streak 7 Days', 'Polyglot I'],
  history: [
    {
      id: 'att_1',
      examId: 'jamb',
      examTitle: 'JAMB Mock 1',
      date: '2024-03-15',
      score: 284,
      total: 400,
      durationSeconds: 5400,
      sections: { 'English': 72, 'Math': 85, 'Physics': 64, 'Chem': 63 }
    },
    {
      id: 'att_2',
      examId: 'sat',
      examTitle: 'SAT Digital Mastery',
      date: '2024-03-10',
      score: 1350,
      total: 1600,
      durationSeconds: 7200,
      sections: { 'Reading': 680, 'Math': 670 }
    }
  ],
  languageProgress: [
    {
      languageId: 'french-delf',
      languageName: 'French',
      overallProgress: 65,
      streak: 12,
      skills: {
        vocabulary: 80,
        grammar: 55,
        reading: 70,
        listening: 60,
        speaking: 50,
        writing: 45
      },
      lastAccessed: '2024-03-20',
      badges: ['French Starter', 'Accent Expert']
    },
    {
      languageId: 'hsk-chinese',
      languageName: 'Chinese (Mandarin)',
      overallProgress: 30,
      streak: 5,
      skills: {
        vocabulary: 40,
        grammar: 20,
        reading: 15,
        listening: 35,
        speaking: 25,
        writing: 5
      },
      lastAccessed: '2024-03-18',
      badges: ['Hanzi Beginner']
    }
  ]
};

export const useExamStore = create<ExamState>((set) => ({
  currentView: 'home',
  selectedExamId: null,
  user: MOCK_USER,
  activeDashboardTab: 'Nigeria',
  
  setView: (view) => set({ currentView: view }),
  selectExam: (id) => set({ selectedExamId: id, currentView: 'exam' }),
  setUser: (user) => set({ user }),
  setDashboardTab: (tab) => set({ activeDashboardTab: tab }),
  addAttempt: (attempt) => set((state) => ({
    user: state.user ? {
      ...state.user,
      history: [attempt, ...state.user.history]
    } : null
  })),
  updateLanguageProgress: (progress) => set((state) => ({
    user: state.user ? {
      ...state.user,
      languageProgress: state.user.languageProgress.map(p => 
        p.languageId === progress.languageId ? progress : p
      ).some(p => p.languageId === progress.languageId) 
        ? state.user.languageProgress.map(p => p.languageId === progress.languageId ? progress : p)
        : [...state.user.languageProgress, progress]
    } : null
  }))
}));