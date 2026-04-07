import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, CheckCircle, ChevronLeft, ChevronRight, 
  Flag, Settings, X, Shield, LayoutGrid, 
  Brain, Mic, Volume2, 
  PenTool, Headphones, Award, Sparkles, BookOpenCheck
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle,
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import Results from "./Results";
import { toast } from "sonner";
import { MOCK_QUESTIONS, EXAMS } from "@/lib/mockData";
import { Question, AIResponse } from "@/lib/types";

interface ExamEngineProps {
  examId: string;
  onFinish: () => void;
  onCancel: () => void;
}

const ExamEngine = ({ examId, onFinish, onCancel }: ExamEngineProps) => {
  const currentExam = EXAMS.find(e => e.id === examId);
  const questions = MOCK_QUESTIONS[examId] || MOCK_QUESTIONS['jamb'];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [timeLeft, setTimeLeft] = useState(currentExam?.durationMinutes ? currentExam.durationMinutes * 60 : 3600); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Language Module Specific State
  const [isRecording, setIsRecording] = useState(false);
  const [writingContent, setWritingContent] = useState("");
  const [aiFeedback, setAiFeedback] = useState<AIResponse | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const currentQuestion = questions[currentIdx];
  const isLanguageModule = currentExam?.category === 'Language';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        toast.error("Anti-Cheat System: Security violation detected.");
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelect = (idx: number) => {
    setAnswers({ ...answers, [currentIdx]: idx });
  };

  const handleSpeaking = () => {
    setIsRecording(true);
    toast.info("AI is listening to your pronunciation...");
    setTimeout(() => {
      setIsRecording(false);
      setAnswers({ ...answers, [currentIdx]: "recorded" });
      toast.success("Pronunciation captured! AI evaluating...");
      evaluateAI('speaking');
    }, 3000);
  };

  const handleWritingSubmit = () => {
    if (writingContent.length < 50) {
      toast.error("Please write a more detailed response (at least 50 characters).");
      return;
    }
    setIsEvaluating(true);
    setAnswers({ ...answers, [currentIdx]: writingContent });
    evaluateAI('writing');
  };

  const evaluateAI = (type: string) => {
    setIsEvaluating(true);
    // Mock AI Feedback
    setTimeout(() => {
      setIsEvaluating(false);
      const mockFeedback: AIResponse = type === 'speaking' ? {
        score: 85,
        feedback: "Excellent fluency and intonation. Pay attention to the 'r' sounds in the middle of words.",
        suggestions: ["Practice 'noir' pronunciation", "Maintain steady pace"]
      } : {
        score: 72,
        feedback: "Good structure and vocabulary usage. However, there are some minor grammatical errors in the third sentence regarding verb conjugation.",
        corrections: ["Je mange -> Correct", "Nous mangeons -> Correct"]
      };
      setAiFeedback(mockFeedback);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast.success(`${isLanguageModule ? 'Learning Module' : 'Exam'} submitted successfully!`);
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  if (isSubmitted) {
    return <Results 
      questions={questions} 
      answers={answers} 
      onClose={onFinish} 
      examName={currentExam?.title || "Global Mock"}
    />;
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col font-sans selection:bg-blue-100">
      {/* Enterprise Exam Header */}
      <header className="bg-[#0f172a] text-white px-8 py-6 flex items-center justify-between shadow-2xl z-20">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20">POG</div>
             <div className="hidden lg:block border-l border-slate-700 pl-6">
               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 leading-none mb-1">Paul Onoja Global Academy™</div>
               <div className="text-base font-black uppercase tracking-widest text-white leading-none">{currentExam?.title}</div>
             </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-800/80 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-xl shadow-inner">
            <Clock className={`w-6 h-6 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-blue-400'}`} />
            <span className={`font-mono text-2xl font-black ${timeLeft < 300 ? 'text-red-500' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-2 rounded-full">
             <Shield className="w-4 h-4 text-green-500" />
             <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">Adaptive AI Core v4.2</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="w-12 h-12 text-slate-400 hover:text-white hover:bg-slate-800 rounded-2xl transition-all">
              <Settings className="w-6 h-6" />
            </Button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-12 px-10 rounded-2xl shadow-xl shadow-blue-500/20 ml-4 group">
                  {isLanguageModule ? 'Complete Module' : 'Submit Mock'}
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="rounded-[3rem] border-slate-100 p-10 md:p-14">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl font-black text-slate-900 tracking-tight">Ready to Finish?</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-500 font-bold text-lg mt-4 leading-relaxed">
                    You have completed <span className="text-blue-700 font-black">{Object.keys(answers).length}</span> out of <span className="text-blue-700 font-black">{questions.length}</span> activities.
                    <br />Your proficiency results and global analytics will be generated instantly.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-4 mt-10">
                  <AlertDialogCancel className="rounded-2xl font-black h-16 border-2 border-slate-100 hover:bg-slate-50">Continue Practice</AlertDialogCancel>
                  <AlertDialogAction onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800 rounded-2xl font-black h-16 px-12 text-lg shadow-xl shadow-blue-200">
                    Confirm & Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Exam Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-14 lg:p-24 relative">
          <div className="max-w-4xl mx-auto pb-48">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-16">
              <div>
                 <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-none px-3 py-0.5 rounded-lg font-black text-[10px] tracking-widest uppercase">
                      {currentQuestion.type === 'speaking' ? 'Speaking Practice' : 
                       currentQuestion.type === 'writing' ? 'Writing Task' : 
                       currentQuestion.type === 'listening' ? 'Listening Lab' : 
                       currentQuestion.type === 'vocabulary' ? 'Vocabulary Builder' :
                       currentQuestion.type === 'grammar' ? 'Grammar Lesson' :
                       'Knowledge Check'}
                    </Badge>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Difficulty: {isLanguageModule ? 'Adaptive Proficiency' : 'Standard'}</span>
                 </div>
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                   {isLanguageModule ? `Lesson Activity ${currentIdx + 1}` : `Question ${currentIdx + 1}`}
                 </h2>
              </div>
              <div className="flex items-center gap-4">
                 <Badge className="bg-white text-slate-500 border-2 border-slate-100 px-6 py-3 font-black rounded-2xl shadow-sm uppercase tracking-[0.2em] text-[10px]">
                   {currentQuestion.subject}
                 </Badge>
                 <button className="w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 hover:text-amber-500 hover:border-amber-200 shadow-sm transition-all group">
                    <Flag className="w-6 h-6 group-hover:scale-110" />
                 </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200/50 border-2 border-slate-50 p-12 md:p-20 mb-16 relative"
              >
                <div className="absolute -top-6 left-12 bg-blue-700 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                  {isLanguageModule ? 'Interactive Module' : 'Original POG Content'}
                </div>
                
                <div className="mb-12">
                  {currentQuestion.type === 'listening' && (
                    <div className="flex items-center gap-6 p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 mb-10">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-blue-700 transition-all">
                        <Volume2 className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-blue-900 font-black">Listening Prompt</p>
                        <p className="text-blue-700/70 text-sm font-bold">Click play to hear the native speaker.</p>
                      </div>
                    </div>
                  )}
                  <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: currentQuestion.text }} />
                </div>
                
                {/* Activity Interaction Area */}
                {currentQuestion.type === 'speaking' ? (
                  <div className="flex flex-col items-center gap-8 py-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSpeaking}
                      disabled={isRecording}
                      className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'} shadow-2xl text-white`}
                    >
                      <Mic className="w-12 h-12" />
                    </motion.button>
                    <p className="font-black text-slate-500 uppercase tracking-widest text-sm">
                      {isRecording ? 'Listening...' : 'Tap to start speaking'}
                    </p>
                    {aiFeedback && (
                      <AIFeedbackBox feedback={aiFeedback} />
                    )}
                  </div>
                ) : currentQuestion.type === 'writing' ? (
                  <div className="space-y-8">
                    <Textarea 
                      placeholder="Type your response in the target language here..."
                      className="min-h-[300px] rounded-[2rem] border-4 border-slate-50 bg-slate-50 p-8 text-xl font-bold focus:border-blue-600 focus:bg-white transition-all outline-none"
                      value={writingContent}
                      onChange={(e) => setWritingContent(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button 
                        onClick={handleWritingSubmit} 
                        disabled={isEvaluating} 
                        className="h-16 px-12 rounded-2xl bg-[#0f172a] hover:bg-blue-700 font-black text-lg transition-all shadow-xl"
                      >
                        {isEvaluating ? 'AI Analyzing...' : 'Analyze Writing'}
                        < PenTool className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                    {aiFeedback && (
                      <AIFeedbackBox feedback={aiFeedback} />
                    )}
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {currentQuestion.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`w-full text-left p-8 rounded-[2.5rem] border-4 transition-all duration-300 flex items-center gap-8 group relative overflow-hidden
                          ${answers[currentIdx] === i 
                            ? 'border-blue-700 bg-blue-50/50 shadow-xl shadow-blue-100' 
                            : 'border-slate-50 bg-slate-50/50 hover:border-blue-200 hover:bg-white shadow-sm hover:shadow-lg'}`}
                      >
                        <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center font-black text-2xl transition-all duration-500
                          ${answers[currentIdx] === i ? 'bg-blue-700 border-blue-700 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-300 group-hover:border-blue-300 group-hover:text-blue-700'}`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className={`text-2xl font-black transition-colors ${answers[currentIdx] === i ? 'text-blue-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                          {option}
                        </span>
                        {answers[currentIdx] === i && (
                          <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            className="absolute right-10 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckCircle className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Floating Navigation Navigation */}
            <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 pointer-events-none">
              <div className="bg-white/80 backdrop-blur-3xl border-4 border-white shadow-[0_40px_100px_-10px_rgba(0,0,0,0.15)] rounded-[3rem] p-5 flex items-center justify-between pointer-events-auto">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-12 rounded-[2rem] h-20 font-black text-slate-500 hover:bg-slate-100 text-lg"
                  disabled={currentIdx === 0}
                  onClick={() => {
                    setCurrentIdx(prev => prev - 1);
                    setAiFeedback(null);
                  }}
                >
                  <ChevronLeft className="w-7 h-7 mr-3" />
                  PREV
                </Button>
                
                <div className="hidden md:flex items-center gap-3">
                   {questions.map((_, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          setCurrentIdx(i);
                          setAiFeedback(null);
                        }}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 
                          ${currentIdx === i ? 'w-12 bg-blue-700 shadow-lg shadow-blue-200' : answers[i] !== undefined ? 'bg-blue-300' : 'bg-slate-200 hover:bg-slate-300'}`}
                      />
                   ))}
                </div>

                {currentIdx < questions.length - 1 ? (
                  <Button 
                    size="lg" 
                    className="bg-[#0f172a] hover:bg-black text-white px-12 rounded-[2rem] h-20 font-black shadow-2xl text-lg group"
                    onClick={() => {
                      setCurrentIdx(prev => prev + 1);
                      setAiFeedback(null);
                    }}
                  >
                    NEXT
                    <ChevronRight className="w-7 h-7 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    className="bg-blue-700 hover:bg-blue-800 text-white px-12 rounded-[2rem] h-20 font-black shadow-2xl text-lg animate-pulse"
                    onClick={handleSubmit}
                  >
                    FINISH
                    <CheckCircle className="w-7 h-7 ml-3" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Global Navigator Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside 
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-[420px] bg-white border-l-2 border-slate-50 flex flex-col z-10 shadow-3xl"
            >
              <div className="p-12 border-b-2 border-slate-50">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="font-black text-slate-900 text-xl uppercase tracking-[0.2em]">Module Progress</h3>
                  <button onClick={() => setIsSidebarOpen(false)} className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-slate-900 transition-colors">
                    <X className="w-7 h-7" />
                  </button>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Activities Completed</span>
                  <span className="text-sm font-black text-blue-700">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-4 bg-slate-50 rounded-full" />
              </div>

              <div className="flex-1 overflow-y-auto p-12">
                <div className="grid grid-cols-4 gap-6">
                  {questions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentIdx(i);
                        setAiFeedback(null);
                      }}
                      className={`aspect-square rounded-[1.5rem] border-4 flex flex-col items-center justify-center transition-all duration-500 relative
                        ${currentIdx === i ? 'border-blue-700 bg-white shadow-2xl scale-110 z-10' : 'border-transparent'}
                        ${answers[i] !== undefined 
                          ? 'bg-blue-700 border-blue-700 text-white shadow-xl shadow-blue-100' 
                          : 'bg-slate-50 text-slate-300 hover:border-blue-200 hover:text-blue-700 hover:bg-white'}`}
                    >
                      {q.type === 'speaking' ? <Mic className="w-4 h-4" /> : 
                       q.type === 'writing' ? <PenTool className="w-4 h-4" /> : 
                       q.type === 'listening' ? <Headphones className="w-4 h-4" /> : 
                       q.type === 'vocabulary' ? <BookOpenCheck className="w-4 h-4" /> :
                       <span className="text-xl font-black">{i + 1}</span>}
                    </button>
                  ))}
                </div>

                <div className="mt-16 space-y-6">
                   <div className="p-8 rounded-[2.5rem] bg-indigo-50 border-2 border-indigo-100/50">
                      <div className="flex items-center gap-4 text-indigo-900 font-black text-sm mb-3">
                         <Brain className="w-6 h-6 text-indigo-600" />
                         Adaptive Mastery
                      </div>
                      <p className="text-xs text-indigo-800/80 leading-relaxed font-bold">
                        AI is monitoring your response patterns. Difficulty will automatically increase as you show consistent mastery in {currentQuestion.subject}.
                      </p>
                   </div>

                   <div className="flex items-center gap-4 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                      <Award className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest">Potential Reward</p>
                        <p className="text-xs font-black text-amber-900">Polyglot Badge +50 XP</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-12 bg-slate-50 border-t-2 border-slate-100">
                <div className="flex flex-col gap-6">
                  <Button 
                    variant="outline" 
                    className="w-full h-20 font-black border-2 border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100 rounded-[2rem] transition-all text-lg"
                    onClick={onCancel}
                  >
                    <X className="w-6 h-6 mr-3" />
                    EXIT SESSION
                  </Button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {!isSidebarOpen && (
           <button 
             onClick={() => setIsSidebarOpen(true)}
             className="fixed right-10 top-1/2 -translate-y-1/2 bg-[#0f172a] text-white w-20 h-20 rounded-[2rem] shadow-3xl hover:bg-blue-700 transition-all flex items-center justify-center z-30 animate-in slide-in-from-right"
           >
             <LayoutGrid className="w-10 h-10" />
           </button>
        )}
      </div>
    </div>
  );
};

const AIFeedbackBox = ({ feedback }: { feedback: AIResponse }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full mt-10 p-8 rounded-[3rem] bg-blue-50 border-2 border-blue-200"
  >
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
          <Sparkles className="w-7 h-7" />
        </div>
        <div>
          <h4 className="text-xl font-black text-blue-900">AI Proficiency Analysis</h4>
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Real-time Feedback Engine</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Mastery Score</p>
        <p className="text-4xl font-black text-blue-700">{feedback.score}%</p>
      </div>
    </div>
    
    <div className="p-6 bg-white rounded-2xl border border-blue-100 mb-6">
      <p className="text-slate-700 font-bold leading-relaxed">{feedback.feedback}</p>
    </div>

    {feedback.suggestions && (
      <div className="space-y-3">
        <p className="text-xs font-black text-blue-900 uppercase tracking-widest">Key Suggestions:</p>
        {feedback.suggestions.map((s, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {s}
          </div>
        ))}
      </div>
    )}

    {feedback.corrections && (
      <div className="space-y-3">
        <p className="text-xs font-black text-blue-900 uppercase tracking-widest">Grammar Corrections:</p>
        {feedback.corrections.map((c, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            {c}
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

export default ExamEngine;