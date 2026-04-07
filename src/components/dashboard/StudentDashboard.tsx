import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, TrendingUp, Award, Search, 
  Languages, Flame, Sparkles, Target, 
  BarChart, Globe, ChevronRight, BookOpen, Star
} from "lucide-react";
import { EXAMS } from "@/lib/mockData";
import { useExamStore } from "@/store/examStore";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface StudentDashboardProps {
  onStartExam: (id: string) => void;
}

const StudentDashboard = ({ onStartExam }: StudentDashboardProps) => {
  const { user, activeDashboardTab, setDashboardTab } = useExamStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = EXAMS.filter(e => 
    e.category === activeDashboardTab && 
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header / Stats */}
      <div className="bg-[#0f172a] text-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-2">Welcome back, {user?.name.split(' ')[0]}!</h2>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-3 py-1 font-black text-[10px] tracking-widest uppercase">ID: {user?.candidateId}</Badge>
                <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 px-3 py-1 font-black text-[10px] tracking-widest uppercase">{user?.tier}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Study Streak</p>
                <div className="flex items-center gap-2 justify-end">
                  <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <p className="text-2xl font-black text-white">14 Days</p>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-800 hidden sm:block" />
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Languages Learning</p>
                <p className="text-2xl font-black text-white">{user?.languageProgress.length || 0}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard 
              label="Avg. CBT Score" 
              value="78%" 
              trend="+12%" 
              icon={TrendingUp} 
              color="text-green-400" 
            />
            <StatsCard 
              label="Language Mastery" 
              value="48%" 
              trend="Advancing" 
              icon={Languages} 
              color="text-blue-400" 
            />
            <StatsCard 
              label="Global Certs" 
              value="3" 
              trend="Top 2%" 
              icon={Award} 
              color="text-amber-500" 
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
              {['Nigeria', 'International', 'Language'].map((tab: any) => (
                <button
                  key={tab}
                  onClick={() => setDashboardTab(tab)}
                  className={`flex-1 lg:flex-none px-8 py-3 rounded-xl font-black text-sm whitespace-nowrap transition-all ${
                    activeDashboardTab === tab ? "bg-white text-blue-900 shadow-xl" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab === 'Language' ? 'Language Academy' : `${tab} Exams`}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder={`Search ${activeDashboardTab.toLowerCase()} modules...`}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDashboardTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {activeDashboardTab === 'Language' && user?.languageProgress.map((prog) => (
                <LanguageProgressCard key={prog.languageId} progress={prog} onResume={() => onStartExam(prog.languageId)} />
              ))}
              
              {filteredExams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} onStart={() => onStartExam(exam.id)} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredExams.length === 0 && (activeDashboardTab !== 'Language' || (user?.languageProgress.length === 0 && activeDashboardTab === 'Language')) && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
               <Search className="w-16 h-16 text-slate-300 mx-auto mb-6" />
               <p className="text-xl font-black text-slate-400 uppercase tracking-widest">No modules found matching your search</p>
               <Button variant="link" className="mt-4 text-blue-600 font-black" onClick={() => setSearchQuery('')}>Clear Search</Button>
            </div>
          )}
        </div>
      </div>

      {/* Language Learning Skills Breakdown */}
      {activeDashboardTab === 'Language' && user?.languageProgress && user.languageProgress.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="flex items-center gap-4 mb-10">
            <Languages className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Language Mastery Hub</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Skill Proficiency</h3>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Across all languages</p>
                </div>
              </div>
              <div className="space-y-6 relative z-10">
                {Object.entries(user.languageProgress[0].skills).map(([skill, val]) => (
                  <div key={skill} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover/skill:text-blue-400 transition-colors">{skill}</span>
                      <span className="text-xs font-black text-blue-400">{val}%</span>
                    </div>
                    <Progress value={val} className="h-2 bg-slate-800" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[3rem] p-10 border-2 border-slate-100 shadow-lg shadow-slate-100/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">Achievements</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {user.languageProgress[0].badges.map((badge) => (
                    <div key={badge} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all hover:bg-white hover:shadow-md cursor-default">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Award className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="font-black text-[10px] uppercase tracking-wider text-slate-900">{badge}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 p-4 bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl justify-center cursor-pointer hover:bg-blue-50 transition-colors group">
                    <span className="font-black text-xs text-blue-600 uppercase tracking-widest group-hover:scale-105 transition-transform">View All Badges</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-700 rounded-[3rem] p-10 text-white flex items-center justify-between shadow-xl shadow-blue-200">
                <div>
                   <h4 className="text-xl font-black mb-2">Global Leaderboard</h4>
                   <p className="text-blue-100 text-sm font-bold opacity-80">You are in the top 5% of learners!</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                   <BarChart className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History Table */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-12">
           <div>
             <h3 className="text-3xl font-black text-slate-900 tracking-tight">Activity Log</h3>
             <p className="text-slate-500 font-bold text-sm">Review your past exams and lessons</p>
           </div>
           <button className="text-blue-700 font-black flex items-center gap-2 hover:gap-4 transition-all">
             Full Reports <ChevronRight className="w-5 h-5" />
           </button>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-[2rem] border-2 border-slate-100 shadow-xl shadow-slate-100/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification</th>
                <th className="px-10 py-8 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {user?.history.map((attempt) => (
                <tr key={attempt.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-8">
                    <p className="font-black text-slate-900 text-lg mb-1">{attempt.examTitle}</p>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{attempt.examId.toUpperCase()}</p>
                  </td>
                  <td className="px-10 py-8">
                    <p className="font-black text-slate-700 text-sm">{new Date(attempt.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-black text-blue-900">{attempt.score}/{attempt.total}</span>
                      <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${(attempt.score/attempt.total)*100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <Badge className="bg-green-100 text-green-700 border-none px-4 py-1 font-black text-[10px] uppercase tracking-widest rounded-full">Secured</Badge>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                       <BarChart className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LanguageProgressCard = ({ progress, onResume }: { progress: any, onResume: () => void }) => (
  <motion.div
    layout
    className="group bg-blue-50/30 rounded-[2.5rem] border-2 border-blue-100 p-8 flex flex-col hover:border-blue-300 transition-all hover:shadow-xl"
  >
    <div className="flex justify-between items-start mb-8">
      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
        <Languages className="w-7 h-7" />
      </div>
      <div className="flex flex-col items-end">
        <Badge className="bg-blue-600 text-white border-none px-3 py-1 font-black text-[10px] tracking-widest mb-2">
          {progress.overallProgress}% COMPLETE
        </Badge>
        <div className="flex items-center gap-1.5 text-orange-600">
          <Flame className="w-3.5 h-3.5 fill-orange-600" />
          <span className="text-[10px] font-black uppercase tracking-widest">{progress.streak} DAY STREAK</span>
        </div>
      </div>
    </div>
    
    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{progress.languageName}</h3>
    <p className="text-slate-500 font-bold text-sm mb-8">Continue your journey towards professional proficiency.</p>

    <div className="space-y-4 mb-10">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery Level</span>
        <span className="text-[10px] font-black text-slate-900">Intermediate (B2)</span>
      </div>
      <Progress value={progress.overallProgress} className="h-3 bg-white" />
    </div>

    <button 
      onClick={onResume}
      className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 mt-auto group/btn"
    >
      <Play className="w-5 h-5 fill-white group-hover/btn:scale-110 transition-transform" />
      RESUME LESSON
    </button>
  </motion.div>
);

const ExamCard = ({ exam, onStart }: { exam: any, onStart: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="group relative bg-white rounded-[2.5rem] border-2 border-slate-50 hover:border-blue-600/20 p-8 transition-all hover:shadow-2xl hover:shadow-blue-900/5 overflow-hidden flex flex-col"
  >
    <div className="absolute top-0 right-0 p-6 z-10">
      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full shadow-sm border border-amber-100">
        <Star className="w-3 h-3 fill-amber-600" />
        <span className="text-[10px] font-black uppercase tracking-widest">{exam.popularity}% Popular</span>
      </div>
    </div>

    {exam.imageUrl ? (
      <div className="w-full h-32 mb-8 rounded-2xl overflow-hidden border border-slate-100 shadow-inner relative">
        <img src={exam.imageUrl} alt={exam.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    ) : (
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:scale-110 transition-transform shadow-inner">
        {exam.category === 'Language' ? <Languages className="w-8 h-8" /> : <BookOpen className="w-8 h-8" />}
      </div>
    )}

    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{exam.title}</h3>
    <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8 line-clamp-2">{exam.description}</p>

    <div className="grid grid-cols-2 gap-4 mb-10 mt-auto">
      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
        <p className="font-black text-slate-900">{exam.durationMinutes} Min</p>
      </div>
      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Domain</p>
        <p className="font-black text-slate-900 line-clamp-1">{exam.category}</p>
      </div>
    </div>

    <button 
      onClick={onStart}
      className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-slate-900/10"
    >
      <Play className="w-5 h-5 fill-white" />
      {exam.category === 'Language' ? 'JOIN ACADEMY' : 'START SESSION'}
    </button>
  </motion.div>
);

const StatsCard = ({ label, value, trend, icon: Icon, color }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] flex items-center justify-between hover:border-slate-700 transition-colors group">
    <div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{label}</p>
      <div className="flex items-baseline gap-4">
        <h4 className="text-4xl font-black text-white tracking-tight">{value}</h4>
        <span className={`text-xs font-black ${color}`}>{trend}</span>
      </div>
    </div>
    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${color} group-hover:bg-white/10 transition-colors shadow-inner`}>
      <Icon className="w-8 h-8" />
    </div>
  </div>
);

export default StudentDashboard;