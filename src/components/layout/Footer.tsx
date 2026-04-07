import React from "react";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Apple, Monitor, PlayCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-amber-400 to-blue-900 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white shadow-lg">POG</div>
              <h3 className="text-xl font-black text-white tracking-tighter">PAUL ONOJA GLOBAL</h3>
            </div>
            <p className="text-sm leading-relaxed font-medium max-w-sm">
              Empowering the next generation of global leaders through world-class CBT preparation and AI-driven educational technology.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Exam Categories</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Nigerian (JAMB/WAEC)</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">International (SAT/IELTS)</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Recruitments</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Get Our Apps</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                <PlayCircle className="w-4 h-4 text-blue-500" />
                <span>Google Play Store</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                <Apple className="w-4 h-4 text-slate-200" />
                <span>Apple App Store</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                <Monitor className="w-4 h-4 text-amber-500" />
                <span>Windows PC App</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contact Global</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs uppercase tracking-tighter opacity-50 mb-1">Headquarters</span>
                  <span>Abuja & United Kingdom</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>admissions@paulonojaglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div className="space-y-2">
              <h5 className="text-white font-black text-sm uppercase tracking-[0.2em]">Legal Disclaimer</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-bold italic">
                “This platform is an independent educational practice academy and is not affiliated with, endorsed by, or partnered with any official examination body. All questions are original and created strictly for practice and preparation purposes.”
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black uppercase tracking-widest">
          <p>© {currentYear} PAUL ONOJA GLOBAL CBT ACADEMY™. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;