import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Upload, Monitor, 
  BarChart3, Shield, Search, Filter,
  MoreVertical, CheckCircle2, Languages, Globe2, BookOpenCheck,
  Award, TrendingUp, Sparkles, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TeacherDashboard = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [activeMode, setActiveMode] = useState<'Exams' | 'Languages'>('Exams');

  const handleBulkUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      toast.success("Successfully imported 150 students from Excel template.");
    }, 2000);
  };

  const STUDENTS = [
    { name: "Chioma Okoro", id: "POG-STU-001", active: true, progress: 85, avg: 72, language: "French", langLevel: "B2", streak: 15 },
    { name: "David Mensah", id: "POG-STU-002", active: true, progress: 40, avg: 68, language: "German", langLevel: "A2", streak: 4 },
    { name: "Fatima Yusuf", id: "POG-STU-003", active: false, progress: 100, avg: 91, language: "Chinese", langLevel: "HSK 4", streak: 28 },
    { name: "Samuel Peterson", id: "POG-STU-004", active: true, progress: 12, avg: 45, language: "Spanish", langLevel: "A1", streak: 2 },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Admin Header */}
      <div className="bg-[#0f172a] text-white pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-3xl shadow-2xl shadow-blue-600/20">A</div>
              <div>
                <h1 className="text-4xl font-black tracking-tight mb-2">Institutional Console</h1>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                     <Globe2 className="w-4 h-4 text-blue-500" />
                     Global Academy Node Active
                   </div>
                   <div className="w-1 h-1 rounded-full bg-slate-700" />
                   <div className="text-slate-400 text-xs font-black uppercase tracking-widest">
                     Premium Enterprise
                   </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="bg-slate-800 p-1.5 rounded-2xl flex shadow-inner">
                  <button 
                    onClick={() => setActiveMode('Exams')}
                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === 'Exams' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    CBT Center
                  </button>
                  <button 
                    onClick={() => setActiveMode('Languages')}
                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === 'Languages' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    Language Lab
                  </button>
               </div>
               <Button 
                variant="outline" 
                className="bg-transparent border-slate-700 text-white hover:bg-slate-800 rounded-2xl h-14 px-8 font-black"
                onClick={handleBulkUpload}
                disabled={isUploading}
               >
                 <Upload className={`w-5 h-5 mr-3 ${isUploading ? 'animate-bounce' : ''}`} />
                 Bulk Student Import
               </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <AdminStat label="Managed Students" value="2,840" icon={Users} color="text-blue-400" />
             <AdminStat label={activeMode === 'Exams' ? "Active CBTs" : "Active Learners"} value={activeMode === 'Exams' ? "42" : "892"} icon={activeMode === 'Exams' ? Monitor : Languages} color="text-green-400" />
             <AdminStat label="Module Completions" value="14,2k" icon={BookOpenCheck} color="text-amber-400" />
             <AdminStat label="Avg. Proficiency" value={activeMode === 'Exams' ? "74%" : "B2 Upper"} icon={Shield} color="text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Live Monitoring Table */}
           <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-10">
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{activeMode} Control Suite</h3>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Real-time performance monitoring</p>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                       <div className="relative flex-1 sm:flex-none">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="text" placeholder="Filter by name..." className="pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold outline-none focus:border-blue-600 transition-all w-full sm:w-64" />
                       </div>
                       <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-colors shadow-sm">
                          <Filter className="w-5 h-5" />
                       </button>
                    </div>
                 </div>

                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-slate-100">
                             <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Candidate</th>
                             <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{activeMode === 'Exams' ? 'Status' : 'Target Language'}</th>
                             <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</th>
                             <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{activeMode === 'Exams' ? 'Avg. Score' : 'Proficiency'}</th>
                             <th className="pb-6"></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-50">
                          {STUDENTS.map((stu, i) => (
                             <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="py-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-blue-900 text-xs shadow-inner">{stu.name.charAt(0)}</div>
                                      <div>
                                         <p className="font-black text-slate-900 text-sm">{stu.name}</p>
                                         <p className="text-[10px] font-bold text-slate-400">{stu.id}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="py-6">
                                   {activeMode === 'Exams' ? (
                                     <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${stu.active ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
                                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{stu.active ? 'Active Mock' : 'Offline'}</span>
                                     </div>
                                   ) : (
                                     <div className="flex items-center gap-2">
                                       <Languages className="w-4 h-4 text-blue-500" />
                                       <span className="text-xs font-black text-slate-700">{stu.language}</span>
                                     </div>
                                   )}
                                </td>
                                <td className="py-6">
                                   <div className="flex items-center gap-3">
                                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                         <div className="h-full bg-blue-600 rounded-full" style={{ width: `${stu.progress}%` }} />
                                      </div>
                                      <span className="text-[10px] font-black text-slate-400">{stu.progress}%</span>
                                   </div>
                                </td>
                                <td className="py-6">
                                   <span className={`text-sm font-black ${stu.avg >= 70 ? 'text-green-600' : 'text-slate-900'}`}>
                                      {activeMode === 'Exams' ? `${stu.avg}%` : stu.langLevel}
                                   </span>
                                </td>
                                <td className="py-6 text-right">
                                   <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                      <MoreVertical className="w-5 h-5" />
                                   </button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 
                 <div className="mt-10 pt-10 border-t border-slate-100 flex justify-between items-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {STUDENTS.length} of 2,840 students</p>
                    <button className="text-blue-700 font-black text-xs uppercase tracking-widest hover:underline">View All Records</button>
                 </div>
              </div>
           </div>

           {/* Quick Actions Side */}
           <div className="space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden">
                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl" />
                 <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">System Analytics</h3>
                 <div className="space-y-6">
                    <InstitutionalMetric label="Overall Success" value="94%" icon={CheckCircle2} color="text-green-500" />
                    <InstitutionalMetric label="Global Nodes" value="12 Locations" icon={Globe2} color="text-blue-500" />
                    <InstitutionalMetric label="Certs Issued" value="128 YTD" icon={Award} color="text-amber-500" />
                    <InstitutionalMetric label="Avg. Score" value="72.4%" icon={TrendingUp} color="text-indigo-500" />
                 </div>
                 
                 <Button className="w-full mt-10 bg-slate-900 hover:bg-black text-white font-black h-16 rounded-2xl flex items-center justify-center gap-3 transition-all border-none shadow-xl shadow-slate-200">
                    <BarChart3 className="w-5 h-5" /> Generate PDF Report
                 </Button>
              </div>

              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-[3rem] shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden group">
                 <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Languages className="w-40 h-40" />
                 </div>
                 <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                       <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black tracking-tight">Staff Training</h3>
                 </div>
                 <p className="text-sm font-bold text-slate-400 mb-8 leading-relaxed relative z-10">Enable specialized language modules for corporate staff development and assessment.</p>
                 <button 
                  onClick={() => toast.success("Corporate language program setup initiated.")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl relative z-10 shadow-xl shadow-blue-900/40 transition-all active:scale-95"
                 >
                    Setup Program
                 </button>
              </div>

              <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
                 <div className="flex items-center gap-3 mb-3 text-amber-800">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Quick Tip</span>
                 </div>
                 <p className="text-xs font-bold text-amber-900/70 leading-relaxed">
                    You can now export language proficiency reports specifically for visa and scholarship applications.
                 </p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

const AdminStat = ({ label, value, icon: Icon, color }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-800/50 transition-colors group">
     <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${color} mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
     </div>
     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
     <h4 className="text-3xl font-black text-white tracking-tighter">{value}</h4>
  </div>
);

const InstitutionalMetric = ({ label, value, icon: Icon, color }: any) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white transition-colors">
     <div className="flex items-center gap-4">
        <Icon className={`w-5 h-5 ${color}`} />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
     </div>
     <span className="text-lg font-black text-slate-900 tracking-tight">{value}</span>
  </div>
);

export default TeacherDashboard;