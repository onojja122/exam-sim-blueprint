import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, Target, AlertCircle, Brain, 
  Lightbulb, Calendar, ArrowRight, Share2, Download
} from "lucide-react";
import { useExamStore } from "@/store/examStore";
import { Badge } from "@/components/ui/badge";

const AnalyticsView = () => {
  const { user } = useExamStore();

  const WEAK_TOPICS = [
    { name: "Organic Chemistry", score: 42, color: "bg-red-500", label: "Focus Needed" },
    { name: "Complex Numbers", score: 58, color: "bg-amber-500", label: "Improving" },
    { name: "Usage & Sentence Structure", score: 64, color: "bg-blue-500", label: "Good" },
  ];

  const PREDICTIONS = [
    { name: "JAMB Prediction", score: "312", total: "400", confidence: "94%" },
    { name: "SAT Prediction", score: "1420", total: "1600", confidence: "88%" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <div className="bg-blue-900 text-white pt-10 pb-32 overflow-hidden relative">
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <Badge className="bg-blue-600/50 text-white border-blue-400/30 px-4 py-1.5 rounded-full font-black text-[10px] tracking-widest uppercase mb-6">AI Performance Engine v2.0</Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 leading-none">Intelligence <span className="text-amber-400">Analysis.</span></h1>
              <p className="text-xl font-bold text-blue-100 max-w-xl">Deep cognitive mapping of your learning progress and predictive success modeling.</p>
            </div>
            <div className="flex gap-4">
               <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl font-black text-sm border border-white/10 transition-all">
                 <Download className="w-5 h-5" /> Export PDF
               </button>
               <button className="flex items-center gap-3 bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-2xl font-black text-sm text-blue-950 transition-all shadow-xl shadow-amber-500/20">
                 <Share2 className="w-5 h-5" /> Share Profile
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Chart Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 p-12 border border-slate-100">
              <div className="flex justify-between items-center mb-16">
                <div>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight">Score Progression</h3>
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">Global Benchmark vs Your Performance</p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-blue-700" />
                     <span className="text-xs font-black text-slate-600">You</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-slate-200" />
                     <span className="text-xs font-black text-slate-600">Avg</span>
                   </div>
                </div>
              </div>

              {/* Simple CSS Chart */}
              <div className="h-80 flex items-end justify-between gap-4">
                {[45, 62, 58, 75, 82, 78, 91].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4">
                    <div className="relative w-full group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-blue-700 rounded-2xl shadow-xl shadow-blue-700/10 group-hover:bg-blue-600 transition-colors cursor-pointer"
                      />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white text-[10px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                        {h}%
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wk {i+1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Critical Weaknesses</h4>
                  <p className="text-slate-500 font-bold text-sm mb-10 leading-relaxed">The AI has identified 3 topics where your performance is significantly below the global target.</p>
                  
                  <div className="space-y-6">
                    {WEAK_TOPICS.map((topic, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-black text-slate-900">{topic.name}</span>
                          <span className="text-xs font-black text-slate-400">{topic.score}%</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                           <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${topic.score}%` }}
                            className={`h-full ${topic.color} rounded-full`} 
                           />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Success Roadmap</h4>
                  <p className="text-slate-500 font-bold text-sm mb-10 leading-relaxed">Personalized 7-day plan generated by POG AI to bridge your performance gaps.</p>
                  
                  <div className="space-y-4">
                     {[
                       { day: "Mon", task: "Organic Chemistry Revision", time: "2h" },
                       { day: "Tue", task: "Math Practice Test #4", time: "3h" },
                       { day: "Wed", task: "English Comprehension", time: "1h" },
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <div className="text-center min-w-[40px]">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.day}</p>
                          </div>
                          <div className="flex-1">
                             <p className="text-sm font-black text-slate-900">{item.task}</p>
                             <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{item.time} Duration</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Side Predictions */}
          <div className="space-y-8">
            <div className="bg-[#0f172a] text-white p-12 rounded-[3rem] shadow-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Brain className="w-32 h-32" />
               </div>
               
               <h3 className="text-2xl font-black mb-10 relative z-10">AI Score Predictions</h3>
               
               <div className="space-y-12 relative z-10">
                  {PREDICTIONS.map((pred, i) => (
                    <div key={i} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{pred.name}</span>
                         <Badge className="bg-green-500/20 text-green-400 border-none px-2 py-0.5 font-black text-[8px] uppercase">{pred.confidence} Confidence</Badge>
                       </div>
                       <div className="flex items-baseline gap-2 mb-2">
                         <span className="text-6xl font-black text-white tracking-tighter">{pred.score}</span>
                         <span className="text-xl font-bold text-slate-500">/ {pred.total}</span>
                       </div>
                       <p className="text-xs text-slate-400 font-bold leading-relaxed">Based on current trajectory, you are in the top 5% of global candidates for this category.</p>
                    </div>
                  ))}
               </div>

               <button className="w-full mt-10 bg-blue-700 hover:bg-blue-600 text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-700/20">
                 Unlock Deep Insights <ArrowRight className="w-5 h-5" />
               </button>
            </div>

            <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 tracking-tight">Upcoming Deadlines</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Exam Calendar</p>
                  </div>
               </div>

               <div className="space-y-6">
                  {[
                    { name: "JAMB Registration", date: "April 12, 2024", urgent: true },
                    { name: "Digital SAT Session", date: "May 04, 2024", urgent: false },
                    { name: "IELTS Academic", date: "June 18, 2024", urgent: false },
                  ].map((dead, i) => (
                    <div key={i} className="flex justify-between items-center">
                       <div>
                         <p className="text-sm font-black text-slate-900">{dead.name}</p>
                         <p className="text-xs font-bold text-slate-400">{dead.date}</p>
                       </div>
                       {dead.urgent && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;