import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Zap, ArrowRight, Play, ShieldCheck, Apple, PlayCircle, Monitor } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const HERO_IMAGE = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/hero-image-4f25e0a9-1775550639723.webp";

  return (
    <div className="relative pt-20 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">New: 2024 Adaptive Mock Exams Live</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Train <span className="text-blue-700">Smart.</span><br />
              Test <span className="text-amber-500">Confident.</span><br />
              Win <span className="text-blue-900 italic underline decoration-blue-600/30">Globally.</span>
            </h1>

            <p className="text-xl text-slate-600 font-bold max-w-lg leading-relaxed mb-12">
              The world-class CBT preparation platform designed to help you dominate JAMB, WAEC, SAT, and IELTS with AI-driven analytics and 100% original syllabus-aligned content.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-black px-12 rounded-2xl h-16 text-lg shadow-2xl shadow-blue-900/20 flex items-center gap-3 group"
                onClick={onGetStarted}
              >
                Start Free Practice
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="flex items-center gap-4 text-slate-900 font-black text-lg hover:text-blue-700 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-blue-700 text-blue-700" />
                </div>
                Take a Tour
              </button>
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-100 mb-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">Available on:</span>
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <PlayCircle className="w-3.5 h-3.5 text-blue-600" />
                Google Play
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Apple className="w-3.5 h-3.5" />
                App Store
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Monitor className="w-3.5 h-3.5 text-amber-500" />
                Windows PC
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-2">
              <div>
                <p className="text-3xl font-black text-slate-900">50K+</p>\
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Questions</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">120</p>\
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Mock Categories</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">98%</p>\
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Success Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
            
            <div className="relative rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 aspect-square lg:aspect-auto lg:h-[700px]">
              <img src={HERO_IMAGE} alt="Students Studying" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-12 bg-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-50"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Ranking</p>
                  <p className="text-lg font-black text-slate-900">Top 1% Global</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-12 bg-blue-900 p-8 rounded-[2rem] shadow-2xl text-white"
              >
                <div className="flex -space-x-4 mb-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-blue-900 bg-amber-500 flex items-center justify-center text-[10px] font-black">+12k</div>
                </div>
                <p className="text-sm font-bold opacity-80">Students practicing live</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;