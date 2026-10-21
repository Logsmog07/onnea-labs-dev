"use client";

import styles from '@/app/ai-visibility-report/ai-visibility-theme.module.css';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck, Mail, Globe, User, Building } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export function AIVisibilityReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formDataState, setFormDataState] = useState<FormData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormDataState(new FormData(e.target as HTMLFormElement));
    captchaRef.current?.execute();
  };

  const handleCaptchaVerify = async (token: string) => {
    if (!formDataState) {
      setIsSubmitting(false);
      return;
    }
    
    const data = Object.fromEntries(formDataState.entries());
    const accessKey = "2cbe712f-373b-47a4-8009-cc0d37d04343";

    data.access_key = accessKey;
    data['h-captcha-response'] = token;
    data.subject = "New AI Visibility Report Request from Onnea Labs";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        formRef.current?.reset();
      } else {
        alert(`Failed to send request: ${result.message || 'Unknown Error'}`);
      }
    } catch (error) {
      console.error("ERROR SUBMITTING FORM:", error);
      alert("Something went wrong. Please check console or try again later.");
    } finally {
      setIsSubmitting(false);
      setFormDataState(null);
    }
  };

  const handleCaptchaError = () => {
    alert("Captcha verification failed. Please try again.");
    setIsSubmitting(false);
  };

  return (
    <div className={`${styles.formPanel} relative z-10 rounded-[2rem] border border-line bg-surface p-6 shadow-card backdrop-blur-2xl md:p-10 w-full max-w-xl mx-auto lg:mx-0 overflow-hidden`}>
      {/* Top subtle highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10">
              <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-emerald-500/20 animate-[spin_3s_linear_infinite_reverse]" />
              <CheckCircle2 className="h-12 w-12 text-emerald-700" />
            </div>
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-ink">Report Requested</h3>
            <p className="max-w-xs text-lg leading-relaxed text-muted">
              Thanks &mdash; we&apos;ve received your details. Our team is generating your AI Visibility Report.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold text-ink tracking-tight">Request Your Report</h3>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Discover the technical signals influencing how AI systems interpret your business.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className={`space-y-5 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''} transition-opacity duration-300`}>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5" /> Your website <span className="text-accent">*</span>
                </label>
                <div className="relative group">
                  <div className={`${styles.fieldGlow} absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-accent opacity-0 blur transition duration-300 group-focus-within:opacity-30`} />
                  <input required name="website" type="url" placeholder="https://www.yourcompany.com" className={`${styles.field} relative w-full rounded-xl px-5 py-4 text-ink placeholder-muted outline-none bg-canvas border border-line transition-all duration-300 focus:border-line shadow-card`} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Work email <span className="text-accent">*</span>
                </label>
                <div className="relative group">
                  <div className={`${styles.fieldGlow} absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-accent opacity-0 blur transition duration-300 group-focus-within:opacity-30`} />
                  <input required name="email" type="email" placeholder="We'll send the report here" className={`${styles.field} relative w-full rounded-xl px-5 py-4 text-ink placeholder-muted outline-none bg-canvas border border-line transition-all duration-300 focus:border-line shadow-card`} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                    <User className="h-3.5 w-3.5" /> First name <span className="text-accent">*</span>
                  </label>
                  <div className="relative group">
                    <div className={`${styles.fieldGlow} absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-accent opacity-0 blur transition duration-300 group-focus-within:opacity-30`} />
                    <input required name="name" type="text" placeholder="Your name" className={`${styles.field} relative w-full rounded-xl px-5 py-4 text-ink placeholder-muted outline-none bg-canvas border border-line transition-all duration-300 focus:border-line shadow-card`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                    <Building className="h-3.5 w-3.5" /> Company
                  </label>
                  <div className="relative group">
                    <div className={`${styles.fieldGlow} absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-accent opacity-0 blur transition duration-300 group-focus-within:opacity-30`} />
                    <input name="company" type="text" placeholder="Optional" className={`${styles.field} relative w-full rounded-xl px-5 py-4 text-ink placeholder-muted outline-none bg-canvas border border-line transition-all duration-300 focus:border-line shadow-card`} />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className={`${styles.consentControl} relative flex h-5 w-5 mt-0.5 shrink-0 items-center justify-center rounded border border-line bg-canvas transition-colors group-hover:border-line group-hover:bg-tile`}>
                    <input type="checkbox" name="contact_consent" className="peer absolute h-full w-full opacity-0 cursor-pointer" />
                    <div className="pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-muted leading-relaxed group-hover:text-ink transition-colors">
                    Onnea Labs can contact me to talk through the results and discuss potential solutions.
                  </span>
                </label>
              </div>

              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                size="invisible"
                onVerify={handleCaptchaVerify}
                onError={handleCaptchaError}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.primaryAction} theme-primary group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-accent px-8 py-4 font-bold text-surface transition-all hover:bg-hover disabled:opacity-70 mt-6 shadow-card hover:shadow-card`}
              >
                <span className="relative z-10 tracking-wide">{isSubmitting ? 'Submitting...' : 'Get My AI Visibility Report'}</span>
                {!isSubmitting && <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                {isSubmitting && <Loader2 className="relative z-10 h-5 w-5 animate-spin" />}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted mt-6">
                <ShieldCheck className="h-3.5 w-3.5" />
                <p>We respect your privacy and data security.</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
