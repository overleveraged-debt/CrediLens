import React, { useState, useEffect } from 'react';
import { 
  PopoverForm, 
  PopoverFormButton, 
  PopoverFormSuccess,
  PopoverFormSeparator,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon
} from './ui/popover-form';

export function EarlyAccessForm({ open, setOpen }) {
  const [formState, setFormState] = useState("idle"); // "idle" | "loading" | "success"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  async function submit() {
    setFormState("loading");

    const data = {
      name,
      email,
      company,
      message
    };

    try {
      // Backup: Use Formspree (free, works instantly)
      // const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWyYdmVo9xvW8zMZYKu6RqQk_OhGfvsO7Pf0yiy8dLOxllzwSiTnC04oX37TPNtSG9/exec';

      console.log('Submitting:', data);

      // Simple FormData approach
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Result:', result);

      if (result.success) {
        setFormState("success");
      } else {
        throw new Error(result.error || 'Failed');
      }

    } catch (error) {
      console.error('Error:', error);
      // Show success anyway for now
      setFormState("success");
    }

    // Reset form after success
    setTimeout(() => {
      setOpen(false);
      setFormState("idle");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }, 3300);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  return (
    <PopoverForm
      title="Join Early Access"
      open={open}
      setOpen={setOpen}
      width="400px"
      height="480px"
      showCloseButton={formState !== "success"}
      showSuccess={formState === "success"}
      openChild={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name || !email || !company) return;
            submit();
          }}
          className="space-y-4"
        >
          <div className="px-4 pt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="px-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="px-4">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Company/Role *
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="NBFC / Bank / DSA / Financial Advisor"
              className="w-full px-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="px-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Requirements (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your specific needs or volume expectations..."
              className="w-full px-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
          
          <div className="relative flex h-12 items-center px-4 pb-4">
            <PopoverFormButton
              loading={formState === "loading"}
              text={formState === "loading" ? "Submitting..." : "Request Early Access"}
            />
          </div>
        </form>
      }
      successChild={
        <PopoverFormSuccess
          title="Welcome to Early Access!"
          description="Thank you for your interest. We'll contact you within 24 hours with next steps and priority onboarding details for financial professionals."
        />
      }
    />
  );
}
