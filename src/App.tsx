import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import TeacherDashboard from "./components/dashboard/TeacherDashboard";
import ProfileView from "./components/dashboard/ProfileView";
import ExamEngine from "./components/exam/ExamEngine";
import AnalyticsView from "./components/dashboard/AnalyticsView";
import PaymentInstructions from "./components/payment/PaymentInstructions";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "./components/ui/sonner";
import { useExamStore } from "./store/examStore";

function App() {
  const { currentView, setView, selectedExamId, selectExam } = useExamStore();

  const navigateTo = (view: any) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans antialiased overflow-x-hidden">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      
      <main className={currentView === 'home' ? '' : 'pt-20'}>
        <AnimatePresence mode="wait">
          {currentView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero onGetStarted={() => navigateTo("dashboard")} />
              <Features />
              <Footer />
            </motion.div>
          )}

          {currentView === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StudentDashboard onStartExam={(id) => selectExam(id)} />
              <Footer />
            </motion.div>
          )}

          {currentView === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <AnalyticsView />
              <Footer />
            </motion.div>
          )}

          {currentView === "teacher" && (
            <motion.div
              key="teacher"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TeacherDashboard />
              <Footer />
            </motion.div>
          )}

          {currentView === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <ProfileView onBack={() => navigateTo("dashboard")} />
              <Footer />
            </motion.div>
          )}

          {currentView === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <PaymentInstructions />
              <Footer />
            </motion.div>
          )}

          {currentView === "exam" && selectedExamId && (
            <motion.div
              key="exam"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ExamEngine 
                examId={selectedExamId} 
                onFinish={() => navigateTo("dashboard")} 
                onCancel={() => navigateTo("dashboard")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;