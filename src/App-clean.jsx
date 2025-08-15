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
const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10">
    {/* Gradient base */}
    <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(800px_400px_at_-10%_20%,rgba(56,189,248,0.25),transparent_60%),linear-gradient(to_br,#0b1020,#060a18)]" />
    {/* Subtle grid overlay */}
    <svg className="absolute inset-0 h-full w-full opacity-[.08]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {/* Glow accents */}
    <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
    <div className="absolute bottom-[-4rem] right-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
  </div>
);

// ---- Nav -------------------------------------------------------------------
const Nav = () => (
  <div className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
    <Container className="flex h-16 items-center justify-between">
      <a href="#top" className="group inline-flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-300 text-slate-900 font-bold">CL</div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">Credi Lense</span>
          <span className="text-[10px] text-white/50">Bank Statement Analyzer</span>
        </div>
      </a>
      <nav className="hidden gap-6 text-sm text-white/80 md:flex">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#dsa" className="hover:text-white">For DSAs</a>
        <a href="#security" className="hover:text-white">Security</a>
        <a href="#how" className="hover:text-white">How it works</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
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
    </Container>
  </header>
);

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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
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
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
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
  return (
    <div className="min-h-screen text-white selection:bg-indigo-500/30">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Background />
      <Nav />
      <Hero />
      <Features />
      <ForDSA />
      <HowItWorks />
      <Security />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
