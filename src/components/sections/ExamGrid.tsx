import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Globe, Star, ArrowRight, ShieldCheck, GraduationCap, Briefcase, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const exams = [
  { id: "jamb", name: "JAMB / UTME", category: "Nigeria", type: "Standardized", popularity: 5, tags: ["University Entrance"] },
  { id: "waec", name: "WAEC (SSCE)", category: "Nigeria", type: "Certificate", popularity: 5, tags: ["Secondary School"] },
  { id: "ielts", name: "IELTS Academic", category: "International", type: "English Prof.", popularity: 5, tags: ["Study Abroad"] },
  { id: "toefl", name: "TOEFL iBT", category: "International", type: "English Prof.", popularity: 4, tags: ["USA/Canada"] },
  { id: "sat", name: "SAT Reasoning", category: "International", type: "Aptitude", popularity: 5, tags: ["Ivy League"] },
  { id: "french-delf", name: "French Academy", category: "Language", type: "DELF/DALF", popularity: 5, tags: ["European Prof."] },
  { id: "german-goethe", name: "German Academy", category: "Language", type: "Goethe", popularity: 4, tags: ["TestDaF"] },
  { id: "hsk-chinese", name: "Chinese Academy", category: "Language", type: "HSK", popularity: 4, tags: ["Mandarin"] },
  { id: "japanese-jlpt", name: "Japanese Academy", category: "Language", type: "JLPT", popularity: 4, tags: ["N5-N1"] },
  { id: "gre", name: "GRE General", category: "International", type: "Graduate", popularity: 4, tags: ["Masters/PhD"] },
  { id: "gmat", name: "GMAT Focus", category: "International", type: "Business", popularity: 4, tags: ["MBA"] },
  { id: "lsat", name: "LSAT", category: "International", type: "Law", popularity: 4, tags: ["Law School"] },
];

interface ExamGridProps {
  onSelectExam: (id: string) => void;
}

const ExamGrid = ({ onSelectExam }: ExamGridProps) => {
  const [activeTab, setActiveTab] = useState<"all" | "Nigeria" | "International" | "Language">("all");
  const [search, setSearch] = useState("");

  const filteredExams = exams.filter(exam => {
    const matchesTab = activeTab === "all" || exam.category === activeTab;
    const matchesSearch = exam.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Select Your Path</h2>
            <p className="text-slate-600 text-lg">Choose from our world-class examination simulations and advanced language learning modules.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input 
                placeholder="Search pathways..." 
                className="pl-10 h-12 w-full sm:w-[350px] rounded-xl border-slate-200 focus-visible:ring-blue-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {["all", "Nigeria", "International", "Language"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap flex items-center gap-2
                ${activeTab === tab ? 
                  'bg-blue-700 text-white shadow-xl shadow-blue-200' : 
                  'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              {tab === "all" ? "All Pathways" : tab}
              {tab === "Nigeria" && <MapPin className="w-4 h-4" />}
              {tab === "International" && <Globe className="w-4 h-4" />}
              {tab === "Language" && <Languages className="w-4 h-4" />}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredExams.map((exam, idx) => (
            <motion.div
              layout
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => onSelectExam(exam.id)}
            >
              <div className="h-full bg-white border border-slate-200 rounded-[2rem] p-8 transition-all hover:border-blue-200 hover:shadow-[0_20px_50px_-12px_rgba(30,58,138,0.12)] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="secondary" className={`
                      rounded-lg py-1 px-3 border-none font-bold uppercase text-[10px] tracking-widest
                      ${exam.category === 'Nigeria' ? 'bg-green-100 text-green-700' : 
                        exam.category === 'International' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}
                    `}>
                      {exam.category}
                    </Badge>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < exam.popularity ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-tight">
                    {exam.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-bold mb-6 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-blue-500" />
                    {exam.type} Mastery
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {exam.tags.map((tag, t) => (
                      <span key={t} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md font-bold">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center text-blue-700 font-black text-sm group-hover:gap-2 transition-all">
                      Join Path
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {exam.category === 'Language' ? <Languages className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredExams.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No matching pathways found</h3>
            <p className="text-slate-500">Try another category or search term.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExamGrid;