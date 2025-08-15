import React, { useState } from "react";
import { EarlyAccessForm } from "./components/EarlyAccessForm";
import { InteractiveFeatures } from "./components/InteractiveFeatures";
import { LampDemo } from "./components/LampDemo";
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
  Menu,
  X,
} from "lucide-react";

// ---- Simple UI atoms -------------------------------------------------------
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Pill = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur ${className}`}>
    {children}
  </span>
);

const Button = ({ children, href, onClick, variant = "primary", className = "" }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-0";
  const styles = {
    primary:
      "bg-white text-slate-900 hover:bg-slate-200 active:scale-[.98] shadow-lg shadow-black/20",
    ghost:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-[.98]",
  };
  const El = href ? "a" : "button";
  return (
    <El href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </El>
  );
};

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-28">
    <Container>
      <div className="mb-8 sm:mb-10 flex flex-col items-start gap-3">
        {eyebrow && <Pill>{eyebrow}</Pill>}
        {title && (
          <h2 className="text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="max-w-2xl text-left text-sm sm:text-base text-white/70">{subtitle}</p>
        )}
      </div>
      {children}
    </Container>
  </section>
);

// ---- Background ------------------------------------------------------------
const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute left-[-20%] top-[-20%] h-[80vmax] w-[80vmax] rounded-full bg-gradient-to-br from-amber-400/14 to-yellow-300/06 blur-5xl mix-blend-screen" />
      <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 10% 10%, rgba(255,215,0,0.06), transparent 15%), radial-gradient(circle at 90% 90%, rgba(255,200,60,0.04), transparent 25%)'}} />
    </div>
  );
};

// ---- Nav -------------------------------------------------------------------
const Nav = ({ setEarlyAccessOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
        <div className="floating-nav rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/20 supports-[backdrop-filter]:bg-slate-950/60">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#top" className="group inline-flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle with gradient */}
                  <circle cx="16" cy="16" r="15" stroke="url(#gradient1)" strokeWidth="1.5" fill="none"/>
                  {/* Middle circles */}
                  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="0.8" fill="none" opacity="0.7"/>
                  <circle cx="16" cy="16" r="9" stroke="white" strokeWidth="0.6" fill="none" opacity="0.5"/>
                  <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="0.4" fill="none" opacity="0.3"/>
                  {/* Center C with better positioning */}
                  <text x="16" y="21" textAnchor="middle" className="fill-white text-lg font-bold" style={{fontSize: '14px'}}>C</text>
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  CREDI<span className="italic">LENS</span>
                </span>
                <span className="text-[10px] text-white/50 hidden sm:block">Bank Statement Analyzer</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#professionals" className="hover:text-white">For Professionals</a>
              <a href="#security" className="hover:text-white">Security</a>
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </nav>

            <div className="flex items-center gap-2">
              {/* Desktop CTA Button */}
              <button
                onClick={() => setEarlyAccessOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-cyan-600"
              >
                Get Early Access <ArrowRight className="h-3.5 w-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-24 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl">
            <nav className="flex flex-col p-6 space-y-4">
              <a
                href="#features"
                className="text-white/80 hover:text-white py-2 text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#professionals"
                className="text-white/80 hover:text-white py-2 text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Professionals
              </a>
              <a
                href="#security"
                className="text-white/80 hover:text-white py-2 text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <a
                href="#how"
                className="text-white/80 hover:text-white py-2 text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#faq"
                className="text-white/80 hover:text-white py-2 text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button
                onClick={() => {
                  setEarlyAccessOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-base font-medium text-white transition-all hover:from-indigo-600 hover:to-cyan-600"
              >
                Get Early Access <ArrowRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};



// ---- Features ---------------------------------------------------------------
const features = [
  {
    icon: <Upload className="h-5 w-5" />,
    title: "Smart Statement Reading",
    text: "Just upload & go. Drop PDFs or snap photos – any format, any bank. No manual typing.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Automatic Transaction Extraction",
    text: "Every transaction, perfectly captured with high accuracy. No missed entries or typos.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Month‑wise Financial Overview",
    text: "Instant monthly breakdowns of balances, income, expenses and trends.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Smart Pattern Recognition",
    text: "Identify salary credits, EMI payments and recurring activity to see core commitments.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Fraud & Risk Detection",
    text: "Flags suspicious transactions and unusual patterns so you can act early.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
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
    <InteractiveFeatures />
  </Section>
);

// ---- For Financial Professionals --------------------------------------------
const professionalPoints = [
  {
    title: "Faster eligibility screening",
    text: "Screen applicants in minutes with trend, income & EMI insights ready to share.",
  },
  { title: "Reduce wasted applications", text: "Avoid unnecessary bureau hits by spotting red flags earlier." },
  { title: "Improve approval rates", text: "Surface salary consistency, balance sufficiency and FOIR signals." },
  { title: "Professional export & share", text: "Generate industry-standard summaries or export CSV/PDF in a click." },
];

const ForProfessionals = () => (
  <Section
    id="professionals"
    eyebrow={<><Building2 className="h-3.5 w-3.5" /> For Financial Professionals</>}
    title="Built for how financial professionals work"
    subtitle="CREDILENS turns raw statements into eligibility‑ready insights you can act on."
  >
    <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
        <ul className="space-y-3 sm:space-y-4">
          {professionalPoints.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">{p.title}</div>
                <div className="text-xs sm:text-sm text-white/70">{p.text}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 text-xs text-white/60">
          <Pill>Salary & EMI detection</Pill>
          <Pill>Average balance & inflow</Pill>
          <Pill>Cash deposit patterns</Pill>
          <Pill>Bounce/penal charge flags</Pill>
        </div>
      </div>
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm">
          <Metric label="Avg Monthly Balance" value="₹48,230" />
          <Metric label="Salary Consistency" value="11/12 months" />
          <Metric label="EMI Outflow" value="₹22,400" />
          <Metric label="FOIR (est.)" value="34%" />
        </div>
        <div className="mt-4 rounded-xl sm:rounded-2xl border border-dashed border-white/15 p-3 sm:p-4 text-xs sm:text-sm text-white/60">
          Banker‑ready summary: inflow, outflow, EMI list, salary credits, charges, risky patterns.
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="ghost" className="text-xs sm:text-sm"><Share2 className="h-3 w-3 sm:h-4 sm:w-4" /> Share link</Button>
          <Button variant="ghost" className="text-xs sm:text-sm"><Download className="h-3 w-3 sm:h-4 sm:w-4" /> Export PDF</Button>
        </div>
      </div>
    </div>
  </Section>
);

const Metric = ({ label, value }) => (
  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
    <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-white/50">{label}</div>
    <div className="mt-1 text-base sm:text-lg font-semibold text-white">{value}</div>
  </div>
);

// ---- How it works -----------------------------------------------------------
const HowItWorks = () => (
  <Section id="how" eyebrow={<Sparkles className="h-3.5 w-3.5" />} title="Three steps to clarity">
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { icon: <Upload className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Upload", text: "PDFs or clear photos from any bank." },
        { icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />, title: "We analyze", text: "Transactions, salary, EMI, risks & trends." },
        { icon: <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />, title: "You decide", text: "Share summary or export to Excel/PDF." },
      ].map((s, i) => (
        <li key={s.title} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="mb-2 inline-flex items-center gap-2 text-white/80">
            <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl sm:rounded-2xl bg-white/10">{s.icon}</span>
            <span className="text-sm sm:text-base font-semibold text-white">{`${i + 1}. ${s.title}`}</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70">{s.text}</p>
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
        CREDILENS analyzes statements you upload. It does not access bank accounts. Results are for informational purposes and should be used alongside standard underwriting checks.
      </div>
    </div>
  </Section>
);

// ---- FAQ -------------------------------------------------------------------
const FAQ = () => (
  <Section id="faq" title="Frequently asked" subtitle="Short answers, straight talk.">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {[
        {
          q: "Which banks and formats are supported?",
          a: "All major Indian banks. Upload PDFs or clear photos of paper statements.",
        },
        {
          q: "Is pricing available?",
          a: "We’re in early access. Early adopters get a free trial and preferred pricing.",
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
          a: "No. CREDILENS is an analysis tool to help you make faster, better decisions.",
        },
      ].map((f) => (
        <div key={f.q} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="text-sm font-semibold text-white">{f.q}</div>
          <div className="mt-2 text-xs sm:text-sm text-white/70">{f.a}</div>
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
      subtitle="Priority onboarding for financial professionals. Be the first to try CREDILENS and help shape the roadmap."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <form onSubmit={handleSubmit} className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-6">
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
        <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
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
  <label className="block text-sm text-white/80">
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
const Footer = ({ onLegalClick }) => (
  <footer className="relative bg-slate-950 border-t border-white/10">
    <Container>
      <div className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle with gradient */}
                  <circle cx="16" cy="16" r="15" stroke="url(#gradient2)" strokeWidth="1.5" fill="none"/>
                  {/* Middle circles */}
                  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="0.8" fill="none" opacity="0.7"/>
                  <circle cx="16" cy="16" r="9" stroke="white" strokeWidth="0.6" fill="none" opacity="0.5"/>
                  <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="0.4" fill="none" opacity="0.3"/>
                  {/* Center C with better positioning */}
                  <text x="16" y="21" textAnchor="middle" className="fill-white text-lg font-bold" style={{fontSize: '16px'}}>C</text>
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-white">
                  CREDI<span className="italic">LENS</span>
                </span>
                <span className="text-xs text-white/50">Bank Statement Analyzer</span>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-6 max-w-sm">
              Transform bank statements into financial intelligence. Built for DSAs, lenders, and financial professionals.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/overleveraged__/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/over-leveraged" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#professionals" className="text-white/70 hover:text-white transition-colors">For Professionals</a></li>
              <li><a href="#security" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#how" className="text-white/70 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://overleveraged.in/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">OverLeveraged</a></li>
              <li><a href="https://tech.overleveraged.in/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Tech Solutions</a></li>
              <li><button onClick={() => onLegalClick('about')} className="text-white/70 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onLegalClick('contact')} className="text-white/70 hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onLegalClick('privacy')} className="text-white/70 hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onLegalClick('terms')} className="text-white/70 hover:text-white transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onLegalClick('refund')} className="text-white/70 hover:text-white transition-colors text-left">Refund Policy</button></li>
              <li><button onClick={() => onLegalClick('data')} className="text-white/70 hover:text-white transition-colors text-left">Data Protection</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/50">
              © 2025 <span className="font-medium">CREDI<span className="italic">LENS</span></span> by OverLeveraged. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="tel:+918320527385" className="hover:text-white transition-colors">+91 83205 27385</a>
              <a href="mailto:support@overleveraged.in" className="hover:text-white transition-colors">support@overleveraged.in</a>
            </div>
          </div>
          <div className="text-center text-xs text-white/40 mt-4">
            Disclaimer: <span className="font-medium">CREDI<span className="italic">LENS</span></span> is not a lender. Analysis is informational only.
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

// ---- Legal Modal -----------------------------------------------------------
const LegalModal = ({ open, onClose, content }) => {
  if (!open) return null;

  const getLegalContent = (type) => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: `
            <h3>Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create an account, upload bank statements, or contact us for support.</p>

            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>

            <h3>Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h3>Data Retention</h3>
            <p>We retain your information only as long as necessary to provide our services and comply with legal obligations.</p>

            <h3>Your Rights</h3>
            <p>You have the right to access, update, or delete your personal information. Contact us at support@overleveraged.in for assistance.</p>

            <h3>Contact Information</h3>
            <p>For privacy-related questions, contact us at:<br>
            Email: support@overleveraged.in<br>
            Phone: +91 83205 27385</p>
          `
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: `
            <h3>Acceptance of Terms</h3>
            <p>By accessing and using CREDILENS, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h3>Service Description</h3>
            <p>CREDILENS is a bank statement analysis tool that provides financial insights. We are not a lender and do not provide financial advice.</p>

            <h3>User Responsibilities</h3>
            <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>

            <h3>Prohibited Uses</h3>
            <p>You may not use our service for any illegal or unauthorized purpose or to violate any laws in your jurisdiction.</p>

            <h3>Limitation of Liability</h3>
            <p>CREDILENS shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>

            <h3>Termination</h3>
            <p>We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms.</p>
          `
        };
      case 'refund':
        return {
          title: 'Refund Policy',
          content: `
            <h3>Refund Eligibility</h3>
            <p>We offer refunds within 30 days of purchase if you are not satisfied with our service.</p>

            <h3>Refund Process</h3>
            <p>To request a refund, contact us at support@overleveraged.in with your account details and reason for the refund request.</p>

            <h3>Processing Time</h3>
            <p>Refunds are typically processed within 5-7 business days after approval.</p>

            <h3>Non-Refundable Items</h3>
            <p>Custom analysis reports and premium support services are non-refundable after delivery.</p>

            <h3>Contact for Refunds</h3>
            <p>Email: support@overleveraged.in<br>
            Phone: +91 83205 27385</p>
          `
        };
      case 'data':
        return {
          title: 'Data Protection',
          content: `
            <h3>Data Encryption</h3>
            <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.</p>

            <h3>Access Controls</h3>
            <p>We implement strict access controls and authentication mechanisms to protect your data.</p>

            <h3>Data Processing</h3>
            <p>Bank statements are processed securely and deleted after analysis unless you choose to save them.</p>

            <h3>Compliance</h3>
            <p>We comply with applicable data protection regulations including GDPR and Indian data protection laws.</p>

            <h3>Data Breach Response</h3>
            <p>In the unlikely event of a data breach, we will notify affected users within 72 hours.</p>

            <h3>Third-Party Services</h3>
            <p>We do not share your data with third parties except as necessary to provide our services.</p>
          `
        };
      case 'about':
        return {
          title: 'About CREDILENS',
          content: `
            <h3>Our Mission</h3>
            <p>CREDILENS is designed to transform how financial professionals analyze bank statements, making the process faster, more accurate, and more insightful.</p>

            <h3>Our Team</h3>
            <p>We are part of OverLeveraged, a fintech company focused on making debt management and financial analysis more accessible and efficient.</p>

            <h3>Technology</h3>
            <p>Our AI-powered platform can read and analyze bank statements from all major Indian banks, extracting key financial metrics and patterns.</p>

            <h3>For Financial Professionals</h3>
            <p>Built for DSAs, NBFCs, banks, loan officers, financial advisors, and any professional who needs quick, accurate financial assessments.</p>

            <h3>Contact Us</h3>
            <p>Email: support@overleveraged.in<br>
            Phone: +91 83205 27385<br>
            Website: https://overleveraged.in</p>
          `
        };
      case 'contact':
        return {
          title: 'Contact Information',
          content: `
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Here's how you can reach us:</p>

            <h3>Support</h3>
            <p>Email: support@overleveraged.in<br>
            Phone: +91 83205 27385<br>
            Response time: Within 24 hours</p>

            <h3>Business Inquiries</h3>
            <p>For partnerships and business inquiries, please contact us at the above email.</p>

            <h3>Social Media</h3>
            <p>Instagram: @overleveraged__<br>
            LinkedIn: OverLeveraged</p>

            <h3>Office</h3>
            <p>We are a digital-first company. All communications are handled remotely for faster response times.</p>

            <h3>Feedback</h3>
            <p>Your feedback helps us improve. Please don't hesitate to share your thoughts and suggestions.</p>
          `
        };
      default:
        return { title: 'Information', content: '<p>Content not available.</p>' };
    }
  };

  const { title, content: htmlContent } = getLegalContent(content);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border-2 border-cyan-500/30 bg-slate-950/95 backdrop-blur-xl modal-glow">
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(80vh - 120px)' }}>
          <div
            className="prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            style={{
              '--tw-prose-headings': 'rgb(255 255 255)',
              '--tw-prose-body': 'rgb(203 213 225)',
              '--tw-prose-links': 'rgb(56 189 248)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ---- Page ------------------------------------------------------------------
export default function CrediLenseLanding() {
  const [earlyAccessOpen, setEarlyAccessOpen] = React.useState(false);
  const [legalModalOpen, setLegalModalOpen] = React.useState(false);
  const [legalContent, setLegalContent] = React.useState('');

  const handleLegalClick = (type) => {
    setLegalContent(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white selection:bg-amber-500/30">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Background />
      <Nav setEarlyAccessOpen={setEarlyAccessOpen} />
      <LampDemo setEarlyAccessOpen={setEarlyAccessOpen} />
      <Features />
      <ForProfessionals />
      <HowItWorks />
      <Security />
      <FAQ />
      <Footer onLegalClick={handleLegalClick} />
      <EarlyAccessForm open={earlyAccessOpen} setOpen={setEarlyAccessOpen} />
      <LegalModal open={legalModalOpen} onClose={() => setLegalModalOpen(false)} content={legalContent} />
    </div>
  );
}
