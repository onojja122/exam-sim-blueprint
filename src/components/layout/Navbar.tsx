import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, GraduationCap, Globe, BookOpen, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate: (view: any) => void;
  currentView: string;
}

const Navbar = ({ onNavigate, currentView }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ACADEMY_LOGO = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/071263d0-2320-438d-bf6e-9e7a16dc9f76/academy-logo-216279f5-1775550638482.webp";

  const navItems = [
    { label: "Practice", view: "dashboard", icon: BookOpen },
    { label: "AI Analytics", view: "analytics", icon: Shield },
    { label: "Institutions", view: "teacher", icon: Globe },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-900 overflow-hidden border-2 border-amber-400/50 shadow-lg group-hover:scale-105 transition-transform">
            <img src={ACADEMY_LOGO} alt="POG Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-blue-950 tracking-tighter leading-none">
              PAUL ONOJA GLOBAL
            </h1>
            <p className="text-[10px] font-bold text-amber-600 tracking-[0.2em] uppercase mt-1">
              CBT Academy™
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentView === item.view 
                ? "bg-white text-blue-700 shadow-sm" 
                : "text-slate-500 hover:text-blue-900 hover:bg-white/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full w-12 h-12 text-slate-900 hover:bg-slate-100"
            onClick={() => onNavigate("profile")}
          >
            <User className="w-6 h-6" />
          </Button>
          
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          <Button 
            className="hidden sm:flex bg-blue-900 hover:bg-blue-800 text-white font-black px-8 rounded-xl h-12 shadow-xl shadow-blue-900/10 border-b-4 border-blue-950 active:border-b-0 transition-all"
            onClick={() => onNavigate("dashboard")}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-100"
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                onNavigate(item.view);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-4 w-full p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold"
            >
              <item.icon className="w-6 h-6 text-blue-600" />
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;