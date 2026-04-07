import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, Mail, Shield, Award, Calendar, 
  Settings, LogOut, ChevronRight, Edit3, Lock
} from "lucide-react";
import { useExamStore } from "@/store/examStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileViewProps {
  onBack: () => void;
}

const ProfileView = ({ onBack }: ProfileViewProps) => {
  const { user } = useExamStore();

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 font-black text-slate-500 hover:text-blue-900 transition-all"
           >
             <ChevronRight className="w-5 h-5 rotate-180" /> Back to Dashboard
           </button>
           <button className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-blue-700 transition-all">
             <Settings className="w-5 h-5" />
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="md:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 text-center">
                 <div className="w-32 h-32 bg-blue-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 relative">
                    <User className="w-16 h-16 text-blue-700" />
                    <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                       <Edit3 className="w-4 h-4" />
                    </button>
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 tracking-tight">{user?.name}</h3>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{user?.candidateId}</p>
                 <Badge className="bg-blue-900 text-white border-none px-4 py-1.5 font-black text-[10px] tracking-widest uppercase rounded-full">
                    {user?.tier} Member
                 </Badge>
              </div>

              <div className="bg-[#0f172a] p-10 rounded-[3rem] shadow-xl text-white">
                 <h4 className="font-black mb-6 uppercase tracking-widest text-[10px] text-slate-500">Subscription Status</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-bold opacity-70">Plan Type</span>
                       <span className="text-sm font-black">Annual Global</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-bold opacity-70">Expires</span>
                       <span className="text-sm font-black">March 2025</span>
                    </div>
                 </div>
                 <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 rounded-2xl h-14 font-black">
                    Manage Access
                 </Button>
              </div>
           </div>

           <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
                 <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Achievements & Badges</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {user?.badges.map((badge, i) => (
                       <div key={i} className="flex flex-col items-center p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                             <Award className={`w-8 h-8 ${i === 1 ? 'text-amber-500' : 'text-blue-600'}`} />
                          </div>
                          <span className="text-[10px] font-black text-slate-900 text-center uppercase tracking-widest">{badge}</span>
                       </div>
                    ))}
                    <div className="flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 border-dashed border-slate-200 opacity-50">
                       <Lock className="w-6 h-6 text-slate-300 mb-2" />
                       <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Locked</span>
                    </div>
                 </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
                 <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Account Information</h3>
                 <div className="space-y-8">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                          <Mail className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                          <p className="font-bold text-slate-900">paul.adebayo@global.edu.ng</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                          <Shield className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Security Status</p>
                          <p className="font-bold text-green-600">Verified & Secure (2FA Active)</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                          <Calendar className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Member Since</p>
                          <p className="font-bold text-slate-900">January 15, 2023</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 pt-10 border-t border-slate-100 flex justify-between items-center">
                    <button className="flex items-center gap-3 text-red-500 font-black text-sm uppercase tracking-widest hover:text-red-700 transition-all">
                       <LogOut className="w-5 h-5" /> Sign Out Global Session
                    </button>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">v4.2.0-Production</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;