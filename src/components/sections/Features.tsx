import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Users, Smartphone, Globe, MonitorSmartphone } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Smart Exam Engine",
    description: "Replicates official exam timing, section navigation, and auto-submit functionality for a 100% realistic experience.",
    color: "bg-blue-600"
  },
  {
    icon: Brain,
    title: "AI Adaptive Mode",
    description: "Our engine adjusts difficulty levels in real-time based on your performance to maximize learning efficiency.",
    color: "bg-amber-500"
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Get instant score breakdowns, weak topic detection, and predictive scoring for international benchmarks.",
    color: "bg-indigo-600"
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Sync",
    description: "Practice on your Windows PC at home, and continue on your iPhone or Android device on the go. Sync progress instantly.",
    color: "bg-purple-600"
  },
  {
    icon: Users,
    title: "Teacher Dashboard",
    description: "Specialized tools for schools and CBT centers to manage students, monitor live exams, and export performance reports.",
    color: "bg-rose-600"
  },
  {
    icon: Shield,
    title: "Anti-Cheat Guard",
    description: "Enterprise-grade fullscreen simulation and behavior monitoring to prepare students for high-stakes exam environments.",
    color: "bg-green-600"
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-black text-[10px] tracking-widest uppercase mb-6 border-none">The Academy Advantage</Badge>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            World-Class CBT Prep <span className="text-blue-700">Reimagined.</span>
          </h2>
          <p className="text-xl text-slate-500 font-bold leading-relaxed">
            We don't just provide questions; we provide an intelligent ecosystem that simulates success before you even step into the exam hall.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-transparent hover:border-blue-100 transition-all group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, className }: any) => (
  <span className={`inline-block ${className}`}>{children}</span>
);

export default Features;