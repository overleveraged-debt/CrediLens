import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  BarChart3,
  Brain,
  AlertTriangle,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Building2,
  Share2,
  Download,
  PhoneCall,
  Mail,
} from "lucide-react";

// ---- Simple UI atoms -------------------------------------------------------
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Pill = ({ children, className = "" }) => (
  <span className={`pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur ${className}`}>
    {children}
  </span>
);

const Button = ({ children, href, onClick, variant = "primary", className = "" }) => {
  const base = "btn inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-0";
  const styles = {
    primary:
      "btn-primary bg-white text-slate-900 hover:bg-slate-200 active:scale-[.98] shadow-lg shadow-black/20",
    ghost:
      "btn-ghost bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-[.98]",
  };
  const El = href ? "a" : "button";
  return (
    <El href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </El>
  );
};

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="relative scroll-mt-24 py-20 sm:py-28">
    <Container>
      <div className="mb-10 flex flex-col items-start gap-3">
        {eyebrow && <Pill>{eyebrow}</Pill>}
        {title && (
          <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="max-w-2xl text-left text-white/70">{subtitle}</p>
        )}
      </div>
      {children}
    </Container>
  </section>
);

// ---- Background ------------------------------------------------------------
const Background = ({ theme = "aurora-grid" }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Base layers per theme */}
      {theme === "aurora-grid" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(800px_400px_at_-10%_20%,rgba(56,189,248,0.25),transparent_60%),linear-gradient(to_br,#0b1020,#060a18)]" />
          <svg className="absolute inset-0 h-full w-full opacity-[.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="absolute bottom-[-4rem] right-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </>
      )}

      {theme === "aurora-flow" && (
        <>
          <style>{`
        html { scroll-behavior: smooth; }
        /* Light-theme overrides to flip dark-tailwind utility classes at runtime */
        .light-theme [class*="text-white"] { color: #0f172a !important; }
        .light-theme [class*="text-white/"] { color: rgba(15,23,42,0.75) !important; }
        .light-theme [class*="bg-white/5"] { background-color: #ffffff !important; box-shadow: 0 6px 20px rgba(2,6,23,0.04) !important; }
        .light-theme [class*="bg-white/10"] { background-color: #ffffff !important; }
        .light-theme [class*="border-white"] { border-color: rgba(2,6,23,0.06) !important; }
        .light-theme .sticky { background-color: rgba(255,255,255,0.96) !important; border-color: rgba(2,6,23,0.06) !important; }
        .light-theme [class*="bg-slate-900"] { background-color: transparent !important; }
        .light-theme [class*="bg-slate-950"] { background-color: transparent !important; }

        /* Spectrum theme overrides (glass-frost-spectrum) */
        .spectrum .pill { background: linear-gradient(90deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08)); border-color: rgba(99,102,241,0.08) !important; color: #0f172a !important; }
        .spectrum .btn-primary { background: linear-gradient(90deg,#7c3aed,#06b6d4) !important; color: white !important; box-shadow: 0 8px 30px rgba(99,102,241,0.12) !important; border: none !important; }
        .spectrum .btn-ghost { background: rgba(255,255,255,0.6) !important; color: #0f172a !important; border-color: rgba(2,6,23,0.06) !important; }
        .spectrum .glass-card { background: rgba(255,255,255,0.65) !important; border-color: rgba(2,6,23,0.06) !important; box-shadow: 0 10px 30px rgba(99,102,241,0.06), inset 0 1px 0 rgba
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1020,#060a18)]" />
          <div className="absolute left-[-10%] top-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-indigo-400/25 to-fuchsia-300/20 blur-3xl mix-blend-screen" style={{ animation: 'floatx 16s ease-in-out infinite' }} />
          <div className="absolute right-[-15%] top-[10%] h-[55vmax] w-[55vmax] rounded-full bg-gradient-to-br from-cyan-300/25 to-teal-300/20 blur-3xl mix-blend-screen" style={{ animation: 'floaty 18s ease-in-out infinite' }} />
          <div className="absolute bottom-[-20%] left-[10%] h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-br from-purple-400/20 to-blue-300/20 blur-3xl mix-blend-screen" style={{ animation: 'floatx 22s ease-in-out -4s infinite' }} />
        </>
      )}

      {theme === "mesh" && (
        <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_10%_10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(60rem_30rem_at_90%_20%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(50rem_30rem_at_50%_120%,rgba(244,114,182,0.18),transparent_60%),linear-gradient(180deg,#0b1020,#060a18)]" />
      )}

      {theme === "stripes" && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1020,#060a18)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 24px)' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 22px)' }} />
        </>
      )}

      {theme === "dots" && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1020,#060a18)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px', backgroundPosition: '0 0' }} />
        </>
      )}

      {theme === "triangles" && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1020,#060a18)]" />
          <svg className="absolute inset-0 h-full w-full opacity-[.06]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="tri" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="skewX(-12)">
                <polygon points="0,80 40,0 80,80" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tri)" />
          </svg>
        </>
      )}

      {theme === "dark-minimal" && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0f1e,#070b17)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(99,102,241,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_120%,rgba(56,189,248,0.12),transparent_60%)]" />
        </>
      )}

      {/* --- White / Light background options --- */}
      {theme === "white-minimal" && (
        <>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f7f7f9]" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(40rem 20rem at 50% 20%, rgba(2,6,23,0.03), transparent 40%)' }} />
        </>
      )}

      {theme === "white-texture" && (
        <>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.07 }} />
        </>
      )}

      {theme === "white-dots" && (
        <>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(15,23,42,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.35 }} />
        </>
      )}

      {theme === "white-animated" && (
        <>
          <style>{`
            @keyframes light-sheen { 0%{transform:translateX(-20%)}50%{transform:translateX(20%)}100%{transform:translateX(-20%)} }
          `}</style>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#fbfbfd]" />
          <div className="absolute left-[-40%] top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/60 to-transparent transform-gpu" style={{ animation: 'light-sheen 8s linear infinite', opacity: 0.45 }} />
        </>
      )}

      {theme === "glass-frost" && (
        <>
          <div className="absolute inset-0 bg-white/96 backdrop-blur-lg" />
          <div className="absolute left-[-12%] top-[-18%] h-[55vmax] w-[55vmax] rounded-full bg-gradient-to-br from-indigo-200/18 to-cyan-200/12 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-18%] bottom-[-12%] h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-br from-pink-200/14 to-yellow-100/10 blur-3xl mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] pointer-events-none" />
        </>
      )}

      {theme === "glass-frost-soft" && (
        <>
          <style>{`
            @keyframes gfFloat { 0% { transform: translateY(0) scale(1);} 50% { transform: translateY(-6%) scale(1.02);} 100% { transform: translateY(0) scale(1);} }
          `}</style>
          <div className="absolute inset-0 bg-white/97 backdrop-blur-2xl" />
          <div style={{ animation: 'gfFloat 18s ease-in-out infinite' }} className="absolute -left-16 -top-16 h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-br from-indigo-100/30 to-cyan-100/24 blur-3xl mix-blend-multiply" />
          <div style={{ animation: 'gfFloat 22s ease-in-out -6s infinite' }} className="absolute -right-20 -bottom-10 h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-rose-100/20 to-yellow-100/16 blur-2xl mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(40rem_16rem_at_60%_20%,rgba(2,6,23,0.02),transparent 40%)] pointer-events-none" />
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><defs><filter id=\"n\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\"0.9\" numOctaves=\"2\" seed=\"2\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter></defs><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.02\"/></svg>")', opacity: 0.6 }} />
        </>
      )}

      {theme === "glass-frost-spectrum" && (
        <>
          <style>{`
            @keyframes sheen { 0% { transform: translateX(-30%);} 50% { transform: translateX(30%);} 100% { transform: translateX(-30%);} }
          `}</style>
          <div className="absolute inset-0 bg-white/96 backdrop-blur-xl" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(60rem 30rem at 10% 20%, rgba(99,102,241,0.14), transparent 30%), radial-gradient(40rem 20rem at 90% 70%, rgba(236,72,153,0.08), transparent 30%)' }} />
          <div className="absolute left-[-30%] top-0 h-full w-[30%] transform-gpu" style={{ animation: 'sheen 8s linear infinite', backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)', opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(2,6,23,0.02))', mixBlendMode: 'overlay' }} />
        </>
      )}

      {theme === "glass-frost-geometric" && (
        <>
          <div className="absolute inset-0 bg-white/96 backdrop-blur-md" />
          <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ggrid" width="240" height="240" patternUnits="userSpaceOnUse">
                <rect width="120" height="120" fill="rgba(255,255,255,0.02)"></rect>
                <rect x="120" y="120" width="120" height="120" fill="rgba(255,255,255,0.02)"></rect>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ggrid)" />
          </svg>
          <div className="absolute -left-12 -top-12 h-[40vmax] w-[40vmax] rounded-2xl bg-gradient-to-br from-indigo-100/14 to-cyan-100/10 blur-3xl mix-blend-screen" />
          <div className="absolute right-[-10%] bottom-[-8%] h-[30vmax] w-[30vmax] rounded-2xl bg-gradient-to-br from-rose-100/12 to-yellow-100/10 blur-2xl mix-blend-screen" />
        </>
      )}

      {theme === "glass-frost-minimal" && (
        <>
          <div className="absolute inset-0 bg-white/97 backdrop-blur-sm" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(2,6,23,0.02) 100%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(2,6,23,0.01) 0 1px, transparent 1px 40px)' , opacity:0.04 }} />
        </>
      )}

      {theme === "glass-frost-retro" && (
        <>
          <style>{`
            @keyframes retroFloat { 0% { transform: translateY(0);} 50% { transform: translateY(-4%);} 100% { transform: translateY(0);} }
          `}</style>
          <div className="absolute inset-0 bg-white/96 backdrop-blur-md" />
          <div style={{ animation: 'retroFloat 20s ease-in-out infinite' }} className="absolute -left-8 -top-8 h-[48vmax] w-[48vmax] rounded-full bg-gradient-to-br from-amber-100/20 to-pink-100/10 blur-3xl mix-blend-overlay" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(2,6,23,0.01))' }} />
        </>
      )}
    
      {theme === "emerald-calm" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#021b16] to-[#041924]" />
          <div className="absolute left-[-18%] top-[-18%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-400/12 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-12%] bottom-[-8%] h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-br from-teal-400/16 to-emerald-300/10 blur-3xl mix-blend-screen" />
        </>
      )}

      {theme === "sunset-ember" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1226] to-[#2b0b1a]" />
          <div className="absolute left-[-20%] top-[-12%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-orange-400/20 to-pink-400/12 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-14%] bottom-[-6%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-yellow-300/14 to-orange-300/10 blur-3xl mix-blend-screen" />
        </>
      )}

      {theme === "midnight-sapphire" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-[#07143a]" />
          <div className="absolute left-[-10%] top-[-20%] h-[55vmax] w-[55vmax] rounded-full bg-gradient-to-br from-sky-600/18 to-indigo-700/12 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-18%] bottom-[-10%] h-[38vmax] w-[38vmax] rounded-full bg-gradient-to-br from-indigo-500/12 to-sky-400/8 blur-3xl mix-blend-screen" />
        </>
      )}

      {theme === "modern-teal" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#032022] to-[#04232a]" />
          <div className="absolute left-[-15%] top-[-12%] h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-br from-teal-400/18 to-cyan-300/12 blur-3xl mix-blend-screen" />
          <div className="absolute right-[-12%] bottom-[-10%] h-[36vmax] w-[36vmax] rounded-full bg-gradient-to-br from-emerald-300/12 to-teal-200/8 blur-2xl mix-blend-screen" />
        </>
      )}

      {theme === "steel-gold" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] to-[#111214]" />
          <div className="absolute left-[-20%] top-[-18%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-gray-500/10 to-amber-300/12 blur-4xl mix-blend-overlay" />
          <div className="absolute right-[-18%] bottom-[-10%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-yellow-300/10 to-amber-200/8 blur-3xl mix-blend-screen" />
        </>
      )}

      $1

      {theme === "obsidian-matte" && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute left-[-15%] top-[-10%] h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-sky-700/18 to-indigo-900/08 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-10%] bottom-[-6%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-cyan-500/12 to-indigo-500/10 blur-3xl mix-blend-screen" />
        </>
      )}

      {theme === "nebula-glow" && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute left-[-20%] top-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-gradient-to-br from-cyan-400/22 to-indigo-500/14 blur-4xl mix-blend-screen" />
          <div className="absolute right-[-15%] bottom-[-10%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-purple-400/18 to-rose-400/10 blur-3xl mix-blend-screen" />
        </>
      )}

      {theme === "carbon-fiber" && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 8px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 8px)' }} />
        </>
      )}

      {theme === "gold-rim" && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute left-[-20%] top-[-20%] h-[80vmax] w-[80vmax] rounded-full bg-gradient-to-br from-amber-400/14 to-yellow-300/06 blur-5xl mix-blend-screen" />
          <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 10% 10%, rgba(255,215,0,0.06), transparent 15%), radial-gradient(circle at 90% 90%, rgba(255,200,60,0.04), transparent 25%)'}} />
        </>
      )}

      {theme === "onyx-marble" && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0.5px, transparent 0.5px)' }} />
        </>
      )}

      {theme === "black-minimal" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#030303]" />
        </>
      )}
    </div>
  );
};

// ---- Nav -------------------------------------------------------------------
const Nav = ({ theme, setTheme }) => (
  <div className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
    <Container className="flex h-16 items-center justify-between">
      <a href="#top" className="group inline-flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-300 text-slate-900 font-bold">CL</div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">Credi Lense</span>
          <span className="text-[10px] text-white/50">Bank Statement Analyzer</span>
        </div>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#dsa" className="hover:text-white">For DSAs</a>
        <a href="#security" className="hover:text-white">Security</a>
        <a href="#how" className="hover:text-white">How it works</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
        {/* Theme picker */}
        <div className="hidden items-center gap-2 lg:flex">
          <span className="text-[10px] uppercase tracking-wide text-white/40">Background</span>
          <select
            aria-label="Background theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 outline-none"
          >
            <option value="aurora-grid">Aurora Grid</option>
            <option value="aurora-flow">Aurora Flow</option>
            <option value="mesh">Mesh Gradient</option>
            <option value="stripes">Diagonal Stripes</option>
            <option value="dots">Dot Pattern</option>
            <option value="triangles">Triangles</option>
            <option value="dark-minimal">Dark Minimal</option>
            <option value="white-minimal">White Minimal</option>
            <option value="white-texture">White Texture</option>
            <option value="white-dots">White Dots</option>
            <option value="white-animated">White Sheen</option>
            <option value="glass-frost">Glass Frost (Classic)</option>
            <option value="glass-frost-soft">Glass Frost — Soft</option>
            <option value="glass-frost-spectrum">Glass Frost — Spectrum Sheen</option>
            <option value="glass-frost-geometric">Glass Frost — Geometric</option>
            <option value="glass-frost-minimal">Glass Frost — Minimal</option>
            <option value="glass-frost-retro">Glass Frost — Retro</option>
            <option value="emerald-calm">Emerald Calm</option>
            <option value="sunset-ember">Sunset Ember</option>
            <option value="midnight-sapphire">Midnight Sapphire</option>
            <option value="modern-teal">Modern Teal</option>
            <option value="steel-gold">Steel & Gold</option>
            <option value="mint-breeze">Mint Breeze</option>
            <option value="obsidian-matte">Obsidian Matte</option>
            <option value="nebula-glow">Nebula Glow</option>
            <option value="carbon-fiber">Carbon Fiber</option>
            <option value="gold-rim">Gold Accent</option>
            <option value="onyx-marble">Onyx Marble</option>
            <option value="black-minimal">Black Minimal</option> 
          </select>
        </div>
      </nav>
      <div className="flex items-center gap-2">
        <Pill className="hidden sm:inline-flex"><Sparkles className="h-3.5 w-3.5" /> Early Access</Pill>
        <Button href="#early" className="">Get Early Access <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </Container>
  </div>
);

// ---- Hero ------------------------------------------------------------------
const Hero = () => (
  <header id="top" className="relative overflow-hidden pt-16">
    <Container className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <Pill className="mx-auto w-fit"><Sparkles className="h-3.5 w-3.5" /> Built for Indian DSAs</Pill>
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Turn Your Bank Statements Into Instant Financial Insights
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/70">
          Upload any statement, get complete analysis in seconds. Stop manually tracking transactions – our AI reads your bank statements and gives you the clarity you need.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#early">Join the Early Access</Button>
          <Button href="#demo" variant="ghost">See a Quick Demo</Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/50">
          <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Bank‑grade encryption</div>
          <div className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> Works with all major banks</div>
          <div className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No manual typing</div>
        </div>
      </motion.div>
      {/* Demo frame */}
      <motion.div
        id="demo"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="demo-frame glass-card mx-auto mt-12 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <div className="rounded-2xl bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-white/60">Live Preview</div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" /> AI Analysis Ready
            </div>
          </div>
          {/* Faux preview panels */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="col-span-1 rounded-2xl border border-dashed border-white/20 bg-slate-950/40 p-4">
              <div className="flex items-center gap-2 text-white/80"><Upload className="h-4 w-4" /><span className="text-sm font-medium">Upload Statement</span></div>
              <div className="mt-3 h-28 rounded-xl border border-dashed border-white/20 bg-slate-950/40"></div>
              <p className="mt-2 text-xs text-white/50">PDFs or clear photos – any bank.</p>
            </div>
            <div className="col-span-1 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/80"><BarChart3 className="h-4 w-4" /><span className="text-sm font-medium">Month‑wise Overview</span></div>
              <div className="mt-3 h-28 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10"></div>
              <p className="mt-2 text-xs text-white/50">Balances, income, expenses at a glance.</p>
            </div>
            <div className="col-span-1 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/80"><Brain className="h-4 w-4" /><span className="text-sm font-medium">Ask in Plain English</span></div>
              <div className="mt-3 h-28 rounded-xl border border-white/10 bg-slate-950/40"></div>
              <p className="mt-2 text-xs text-white/50">“What’s my lowest balance this year?”</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  </header>
);

// ---- Features ---------------------------------------------------------------
const features = [
  {
    icon: <Upload className="h-5 w-5 icon-accent" />,
    title: "Smart Statement Reading",
    text: "Just upload & go. Drop PDFs or snap photos – any format, any bank. No manual typing.",
  },
  {
    icon: <FileText className="h-5 w-5 icon-accent" />,
    title: "Automatic Transaction Extraction",
    text: "Every transaction, perfectly captured with high accuracy. No missed entries or typos.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 icon-accent" />,
    title: "Month‑wise Financial Overview",
    text: "Instant monthly breakdowns of balances, income, expenses and trends.",
  },
  {
    icon: <Brain className="h-5 w-5 icon-accent" />,
    title: "Smart Pattern Recognition",
    text: "Identify salary credits, EMI payments and recurring activity to see core commitments.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 icon-accent" />,
    title: "Fraud & Risk Detection",
    text: "Flags suspicious transactions and unusual patterns so you can act early.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 icon-accent" />,
    title: "Ask Questions in Plain English",
    text: "Ask anything like ‘lowest balance this year?’ or ‘groceries spend in May?’ and get answers.",
  },
];

const Features = () => (
  <Section
    id="features"
    eyebrow={<><Sparkles className="h-3.5 w-3.5" /> Product</>}
    title="Everything you need to read bank statements – fast"
    subtitle="Minimal steps. Maximum clarity. Built for speed and accuracy."
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="glass-card group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-white/80">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10">{f.icon}</span>
            <h3 className="text-base font-semibold text-white">{f.title}</h3>
          </div>
          <p className="text-sm text-white/70">{f.text}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

// ---- For DSAs ---------------------------------------------------------------
const dsaPoints = [
  {
    title: "Faster eligibility screening",
    text: "Screen applicants in minutes with trend, income & EMI insights ready to share.",
  },
  { title: "Reduce wasted logins", text: "Avoid avoidable bureau hits & logins by spotting red flags earlier." },
  { title: "Improve approval rates", text: "Surface salary consistency, balance sufficiency and FOIR signals." },
  { title: "Clean export & share", text: "Generate banker‑friendly summaries or export CSV/PDF in a click." },
];

const ForDSA = () => (
  <Section
    id="dsa"
    eyebrow={<><Building2 className="h-3.5 w-3.5" /> For DSAs</>}
    title="Built around how DSAs actually work"
    subtitle="Credi Lense turns raw statements into eligibility‑ready insights you can act on."
  >
    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
      <div className="glass-card rounded-3xl border border-white/10 bg-white/5 p-6">
        <ul className="space-y-4">
          {dsaPoints.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
              <div>
                <div className="text-sm font-semibold text-white">{p.title}</div>
                <div className="text-sm text-white/70">{p.text}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2 text-xs text-white/60">
          <Pill>Salary & EMI detection</Pill>
          <Pill>Average balance & inflow</Pill>
          <Pill>Cash deposit patterns</Pill>
          <Pill>Bounce/penal charge flags</Pill>
        </div>
      </div>
      <div className="glass-card rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Metric label="Avg Monthly Balance" value="₹48,230" />
          <Metric label="Salary Consistency" value="11/12 months" />
          <Metric label="EMI Outflow" value="₹22,400" />
          <Metric label="FOIR (est.)" value="34%" />
        </div>
        <div className="mt-4 rounded-2xl border border-dashed border-white/15 p-4 text-white/60">
          Banker‑ready summary: inflow, outflow, EMI list, salary credits, charges, risky patterns.
        </div>
        <div className="mt-4 flex gap-3">
          <Button variant="ghost"><Share2 className="h-4 w-4" /> Share link</Button>
          <Button variant="ghost"><Download className="h-4 w-4" /> Export PDF</Button>
        </div>
      </div>
    </div>
  </Section>
);

const Metric = ({ label, value }) => (
  <div className="glass-metric rounded-2xl border border-white/10 bg-white/5 p-4">
    <div className="text-[11px] uppercase tracking-wide text-white/50">{label}</div>
    <div className="mt-1 text-lg font-semibold text-white">{value}</div>
  </div>
);

// ---- How it works -----------------------------------------------------------
const HowItWorks = () => (
  <Section id="how" eyebrow={<Sparkles className="h-3.5 w-3.5" />} title="Three steps to clarity">
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {[
        { icon: <Upload className="h-5 w-5" />, title: "Upload", text: "PDFs or clear photos from any bank." },
        { icon: <Brain className="h-5 w-5" />, title: "We analyze", text: "Transactions, salary, EMI, risks & trends." },
        { icon: <BarChart3 className="h-5 w-5" />, title: "You decide", text: "Share summary or export to Excel/PDF." },
      ].map((s, i) => (
        <li key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 inline-flex items-center gap-2 text-white/80">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10">{s.icon}</span>
            <span className="text-base font-semibold text-white">{`${i + 1}. ${s.title}`}</span>
          </div>
          <p className="text-sm text-white/70">{s.text}</p>
        </li>
      ))}
    </ol>
  </Section>
);

// ---- Security ---------------------------------------------------------------
const Security = () => (
  <Section
    id="security"
    eyebrow={<ShieldCheck className="h-3.5 w-3.5" />}
    title="Privacy & Security, by default"
    subtitle="We treat financial data with the highest care."
  >
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ul className="space-y-4">
        {[
          "Bank‑grade encryption in transit & at rest",
          "Your data is never sold; you’re in control",
          "One‑click data deletion from dashboard",
          "India data residency options for enterprises",
        ].map((t) => (
          <li key={t} className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-cyan-400" />
            <span className="text-sm text-white/80">{t}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        Credi Lense analyzes statements you upload. It does not access bank accounts. Results are for informational purposes and should be used alongside standard underwriting checks.
      </div>
    </div>
  </Section>
);

// ---- FAQ -------------------------------------------------------------------
const FAQ = () => (
  <Section id="faq" title="Frequently asked" subtitle="Short answers, straight talk.">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {[
        {
          q: "Which banks and formats are supported?",
          a: "All major Indian banks. Upload PDFs or clear photos of paper statements.",
        },
        {
          q: "Is pricing available?",
          a: "We’re in early access. Founding DSAs get a free trial and preferred pricing.",
        },
        {
          q: "How accurate is the data extraction?",
          a: "Designed for very high accuracy with human‑readable review. You can edit before export.",
        },
        {
          q: "What about security?",
          a: "Encrypted in transit & at rest, with strict access controls and deletion on request.",
        },
        {
          q: "Can I export and share the analysis?",
          a: "Yes – generate a banker‑friendly summary or export CSV/PDF in one click.",
        },
        {
          q: "Is this a lending product?",
          a: "No. Credi Lense is an analysis tool to help you make faster, better decisions.",
        },
      ].map((f) => (
        <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">{f.q}</div>
          <div className="mt-2 text-sm text-white/70">{f.a}</div>
        </div>
      ))}
    </div>
  </Section>
);

// ---- Early access form ------------------------------------------------------
const EarlyAccess = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section
      id="early"
      eyebrow={<Sparkles className="h-3.5 w-3.5" />}
      title="Join the Early Access"
      subtitle="Priority onboarding for DSAs. Be the first to try Credi Lense and help shape the roadmap."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Full name" name="name" required />
            <Input label="Mobile" name="phone" type="tel" required />
            <Input label="Email" name="email" type="email" />
            <Input label="DSA firm" name="firm" />
            <Input label="City" name="city" />
            <Input label="Monthly case volume" name="volume" placeholder="e.g., 30–50" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Button>
              Request Access <ArrowRight className="h-4 w-4" />
            </Button>
            <span className="text-xs text-white/60">No spam. We’ll reach out on WhatsApp or email.</span>
          </div>
          {sent && (
            <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">
              Thank you! You’re on the list. We’ll contact you shortly.
            </div>
          )}
        </form>
        <div className="md:col-span-2 glass-card rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-sm font-semibold text-white">What you’ll get</div>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> 30‑day free trial when we launch</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Priority onboarding & support</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Founding DSA pricing</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Early feature access</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
            <div className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4" /> +91‑XXXXXXXXXX</div>
            <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@credilense.com</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Input = ({ label, name, type = "text", placeholder, required }) => (
  <label className="block text-sm text-white/80 spectrum-label">
    <span className="mb-1 block text-xs text-white/60">{label}{required && <span className="text-rose-300"> *</span>}</span>
    <input
      className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder-white/30 outline-none ring-0 transition focus:border-white/20"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  </label>
);

// ---- Footer -----------------------------------------------------------------
const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <Container className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
      <div>© {new Date().getFullYear()} Credi Lense. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#security" className="hover:text-white">Security</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
        <a href="#early" className="hover:text-white">Early Access</a>
      </div>
      <div>Disclaimer: Credi Lense is not a lender. Analysis is informational only.</div>
    </Container>
  </footer>
);

// ---- Page ------------------------------------------------------------------
export default function CrediLenseLanding() {
  const [theme, setTheme] = React.useState("aurora-grid");
  React.useEffect(() => {
    const map = {
      "glass-frost-spectrum": "spectrum",
      "emerald-calm": "emerald",
      "sunset-ember": "sunset",
      "midnight-sapphire": "sapphire",
      "modern-teal": "teal",
      "steel-gold": "steel",
      "mint-breeze": "mint",
      "obsidian-matte": "obsidian",
      "nebula-glow": "nebula",
      "carbon-fiber": "carbon",
      "gold-rim": "goldrim",
      "onyx-marble": "onyx",
      "black-minimal": "blackminimal"
    };
    const all = Object.values(map);
    const applied = map[theme];
    const root = document.documentElement;
    all.forEach(c => root.classList.remove(c));
    if (applied) root.classList.add(applied);
  }, [theme]);
  const isLight = ["white-minimal","white-texture","white-dots","white-animated","glass-frost","glass-frost-soft","glass-frost-spectrum","glass-frost-geometric","glass-frost-minimal","glass-frost-retro"].includes(theme);
  const paletteClassMap = {
    "glass-frost-spectrum": "spectrum",
    "emerald-calm": "emerald",
    "sunset-ember": "sunset",
    "midnight-sapphire": "sapphire",
    "modern-teal": "teal",
    "steel-gold": "steel",
