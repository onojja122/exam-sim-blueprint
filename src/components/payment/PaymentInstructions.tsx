import React from "react";
import { motion } from "framer-motion";
import { Building2, Copy, CheckCircle2, ArrowLeft, ShieldCheck, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useExamStore } from "@/store/examStore";

const PaymentInstructions = () => {
  const { setView } = useExamStore();

  const bankDetails = {
    bank: "Access Bank",
    name: "Paul Onoja",
    account: "0044041678",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-[80vh] flex flex-col items-center">
      <div className="max-w-3xl w-full px-4">
        <button 
          onClick={() => setView("home")}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Plans
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-blue-100 border border-white"
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-blue-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Payment Instructions</h1>
            <p className="text-slate-500 font-medium">Please follow these steps to activate your premium access.</p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-24 h-24 text-blue-700" />
              </div>
              <div className="relative z-10">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Official Bank Details</label>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Bank Name</p>
                      <p className="text-xl font-black text-slate-900">{bankDetails.bank}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Account Name</p>
                      <p className="text-xl font-black text-slate-900">{bankDetails.name}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full hover:bg-white"
                      onClick={() => copyToClipboard(bankDetails.name, "Account Name")}
                    >
                      <Copy className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Account Number</p>
                      <p className="text-3xl font-black text-blue-700 tracking-tighter">{bankDetails.account}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="rounded-2xl border-2 border-blue-100 text-blue-700 font-black hover:bg-blue-50"
                      onClick={() => copyToClipboard(bankDetails.account, "Account Number")}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-950 text-white rounded-[2.5rem] p-8 md:p-10 mb-8 shadow-xl shadow-blue-200">
            <h3 className="text-xl font-black mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-400" />
              Verification Steps
            </h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                <div>
                  <p className="font-bold text-lg mb-1">Make the Transfer</p>
                  <p className="text-blue-200 text-sm leading-relaxed">Use your preferred banking app to transfer the amount corresponding to your chosen plan.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                <div>
                  <p className="font-bold text-lg mb-1">Take a Screenshot</p>
                  <p className="text-blue-200 text-sm leading-relaxed">Capture the success screen of your transaction. Ensure the date and amount are clearly visible.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                <div>
                  <p className="font-bold text-lg mb-1">Send for Activation</p>
                  <p className="text-blue-200 text-sm leading-relaxed">Send your proof of payment along with your Candidate ID to our support team.</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/2348031234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl text-sm font-black transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a 
                      href="mailto:payments@pogcbt.com" 
                      className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm font-black transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email Proof
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
            Activation typically takes 15-30 minutes during business hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentInstructions;