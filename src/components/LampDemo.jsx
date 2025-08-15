import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { ShieldCheck, Building2, CheckCircle } from "lucide-react";

export function LampDemo({ setEarlyAccessOpen }) {
  return (
    <LampContainer className="relative" id="top">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 sm:py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent leading-tight">
        Transform Bank Statements <br className="hidden sm:block" />
        <span className="sm:hidden">Into Financial Intelligence</span>
        <span className="hidden sm:inline">Into Financial Intelligence</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-6 text-center text-base sm:text-lg text-slate-400 max-w-xl sm:max-w-2xl px-4 mx-auto">
        Upload any statement, get complete analysis in seconds. Stop manually tracking transactions – our AI reads your bank statements and gives you the clarity you need.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row px-4">
        <button
          onClick={() => setEarlyAccessOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-base font-medium text-white transition-all hover:from-indigo-600 hover:to-cyan-600">
          Join the Early Access
        </button>
        <a
          href="#how"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3 text-base font-medium text-slate-300 transition-all hover:bg-slate-700/50">
          See How It Works
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400 px-4">
        <div className="inline-flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" /> Bank‑grade encryption
        </div>
        <div className="inline-flex items-center gap-2">
          <Building2 className="h-4 w-4" /> Works with all major banks
        </div>
        <div className="inline-flex items-center gap-2">
          <CheckCircle className="h-4 w-4" /> No manual typing
        </div>
      </motion.div>
    </LampContainer>
  );
}
