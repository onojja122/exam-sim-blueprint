import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Brain, Award, ArrowRight, Home, 
  BarChart3, RefreshCcw, Share2, Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ResultsProps {
  questions: any[];
  answers: Record<number, number>;
  onClose: () => void;
  examName: string;
}

const Results = ({ questions, answers, onClose, examName }: ResultsProps) => {
  const correctAnswers = questions.filter((q, i) => q.correct === answers[i]).length;
  const scorePercentage = Math.round((correctAnswers / questions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[4rem] shadow-3xl overflow-hidden relative"
        >
          {/* Top Branding Bar */}
          <div className="bg-[#0f172a] p-10 text-white flex justify-between items-center">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center font-black">POG</div>
                <div>
                   <h3 className="text-lg font-black tracking-tight">{examName}</h3>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Official Practice Result</p>
                </div>
             </div>
             <Badge className="bg-green-500/20 text-green-400 border-none px-4 py-1 font-black text-[10px] tracking-widest uppercase">Verified Submission</Badge>
          </div>

          <div className="p-12 md:p-20 text-center">
             <motion.div
               initial={{ rotate: -10, opacity: 0 }}
               animate={{ rotate: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="w-48 h-48 bg-blue-50 rounded-full flex flex-col items-center justify-center mx-auto mb-12 border-8 border-white shadow-2xl relative"
             >
                <span className="text-6xl font-black text-blue-900">{scorePercentage}%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Score</span>
                <div className="absolute -top-4 -right-4 bg-amber-400 text-blue-950 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                   <Award className="w-6 h-6" />
                </div>
             </motion.div>

             <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
               {scorePercentage >= 70 ? "Exceptional Performance!" : "Solid Effort, Keep Pushing!"}
             </h2>
             <p className="text-slate-500 font-bold text-lg mb-16 max-w-lg mx-auto leading-relaxed">
               You correctly answered <span className="text-blue-700 font-black">{correctAnswers} out of {questions.length}</span> questions in record time.
             </p>

             <div className="grid md:grid-cols-2 gap-8 mb-20 text-left">
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                        <Brain className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-slate-900 tracking-tight text-lg">AI Suggestion</h4>
                   </div>
                   <p className="text-sm font-bold text-slate-500 leading-relaxed italic">
                     "Your spatial reasoning is excellent, but we noticed a slight delay in Mathematics Section B. Focus on Logarithms and Quadratic Equations in your next session to boost your percentile."
                   </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-slate-900 tracking-tight text-lg">Percentile Rank</h4>
                   </div>
                   <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-black text-slate-900 tracking-tighter">92.4</span>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Top 8% Global</span>
                   </div>
                   <div className="h-2 w-full bg-slate-200 rounded-full">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '92.4%' }} />
                   </div>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#0f172a] hover:bg-black text-white font-black px-12 rounded-2xl h-16 shadow-2xl"
                  onClick={onClose}
                >
                  <Home className="w-5 h-5 mr-3" />
                  Go to Dashboard
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-slate-200 hover:bg-slate-50 font-black px-12 rounded-2xl h-16"
                  onClick={() => window.location.reload()}
                >
                  <RefreshCcw className="w-5 h-5 mr-3" />
                  Try Another Mock
                </Button>
             </div>
          </div>
          
          <div className="bg-slate-50 p-10 border-t border-slate-100 flex items-center justify-center gap-10">
             <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <Shield className="w-4 h-4" />
                Original POG Content
             </div>
             <div className="w-1 h-1 rounded-full bg-slate-300" />
             <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <Share2 className="w-4 h-4" />
                Global Accreditation
             </div>
          </div>
        </motion.div>

        <p className="mt-12 text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] italic">
          “Train Smart. Test Confident. Win Globally.”
        </p>
      </div>
    </div>
  );
};

export default Results;