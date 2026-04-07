import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Crown, Languages, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExamStore } from "@/store/examStore";

const tiers = [
  {
    name: "Free Starter",
    price: "0",
    description: "Basic access for early-stage exam preparation and vocabulary building.",
    features: ["10 Free Mock Exams/Month", "Basic Language Vocab", "Subject-wise Practice", "Basic Progress Tracking"],
    cta: "Start Free",
    icon: <Zap className="w-6 h-6" />,
    color: "slate"
  },
  {
    name: "Premium Scholar",
    price: "15,000",
    description: "Perfect for standard CBT exams and foundational language modules.",
    features: ["Unlimited Nigeria Mocks", "Level A1-A2 Language Content", "AI Performance Insights", "Full Answer Explanations", "Priority Email Support"],
    cta: "Get Scholar",
    icon: <Crown className="w-6 h-6" />,
    color: "blue",
    popular: true
  },
  {
    name: "Global Professional",
    price: "75,000",
    description: "Complete access to international exams and advanced language modules.",
    features: ["All International Exams", "Full B1-C2 Language Engine", "AI Speaking Assessment", "Writing Feedback System", "Visa Prep Materials", "Scholarship Directory"],
    cta: "Go Global Pro",
    icon: <Languages className="w-6 h-6" />,
    color: "indigo"
  },
  {
    name: "Multi-Language Elite",
    price: "120,000",
    description: "For elite learners seeking dual-language professional certifications.",
    features: ["Full Dual-Language Access", "Official Certification Vouchers", "1-on-1 AI Tutoring Mock", "Advanced Business Writing", "Global Networking Hub", "Elite Portfolio Review"],
    cta: "Go Elite",
    icon: <Star className="w-6 h-6 text-amber-500" />,
    color: "amber"
  },
  {
    name: "Corporate Enterprise",
    price: "Custom",
    description: "Scalable testing and language solutions for schools and organizations.",
    features: ["Unlimited Student Nodes", "Advanced Admin Controls", "Custom Exam Creation", "API & LMS Integration", "Dedicated Account Manager", "Staff Language Training"],
    cta: "Contact Sales",
    icon: <Building2 className="w-6 h-6" />,
    color: "slate"
  }
];

const Pricing = () => {
  const { setView } = useExamStore();

  const handleSelect = (tierName: string) => {
    if (tierName === "Free Starter") {
       setView("dashboard");
    } else {
       setView("payment");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
             <Sparkles className="w-5 h-5 text-blue-600" />
             <span className="text-blue-700 font-black text-xs uppercase tracking-[0.4em]">Tiered Excellence</span>
          </motion.div>
          <h3 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-8">
            Invest in Your <span className="text-blue-700">Future.</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Whether you're prepping for local exams or mastering a new language for global opportunities, we have the right plan for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border-2 flex flex-col h-full transition-all duration-500
                ${tier.popular ? 'border-blue-600 bg-white shadow-2xl shadow-blue-100 scale-105 z-10' : 'border-slate-50 bg-slate-50/50 backdrop-blur-sm shadow-sm hover:border-blue-200 hover:bg-white'}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Recommended
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110
                ${tier.color === 'blue' ? 'bg-blue-700 text-white' : 
                  tier.color === 'amber' ? 'bg-amber-100 text-amber-700' : 
                  tier.color === 'indigo' ? 'bg-indigo-600 text-white' :
                  tier.color === 'emerald' ? 'bg-emerald-600 text-white' :
                  'bg-white text-slate-600'}`}
              >
                {tier.icon}
              </div>

              <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{tier.name}</h4>
              <p className="text-slate-500 text-sm font-bold mb-8 leading-relaxed line-clamp-2">{tier.description}</p>
              
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-slate-900 text-4xl font-black tracking-tighter">
                  {tier.price === 'Custom' ? '' : '₦'}{tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">/ Access</span>
                )}
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, f) => (
                  <div key={f} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0
                      ${tier.popular ? 'bg-blue-100 text-blue-700' : 'bg-white text-slate-300 shadow-sm'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handleSelect(tier.name)}
                className={`w-full h-14 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95
                  ${tier.popular ? 'bg-blue-700 hover:bg-blue-800 shadow-blue-200 text-white' : 'bg-slate-900 hover:bg-black shadow-slate-200 text-white'}`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;