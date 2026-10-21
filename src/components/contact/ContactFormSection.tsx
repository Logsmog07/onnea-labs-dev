"use client";

import { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, ArrowRight, Mail, Clock, ChevronDown, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const viewportConfig = { once: true, margin: '-100px' };

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const mapServiceParamToValue = (param: string | null) => {
    if (!param) return "none";
    const p = param.toLowerCase();
    if (p === 'seo') return 'seo';
    if (p === 'web-development' || p === 'development') return 'web-development';
    if (p === 'design' || p === 'digital-design') return 'digital-design';
    if (p === 'email-marketing' || p === 'email') return 'email-marketing';
    if (p === 'social-media' || p === 'social-media-marketing') return 'social-media-marketing';
    if (p === 'analytics' || p === 'web-analytics') return 'web-analytics';
    return "none";
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formDataState, setFormDataState] = useState<FormData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormDataState(new FormData(e.target as HTMLFormElement));

    // Trigger Invisible CAPTCHA
    captchaRef.current?.execute();
  };

  const handleCaptchaVerify = async (token: string) => {
    if (!formDataState) {
      setIsSubmitting(false);
      return;
    }

    const data = Object.fromEntries(formDataState.entries());

    // Ensure access_key is set for JS submission
    data.access_key = "2cbe712f-373b-47a4-8009-cc0d37d04343";
    data['h-captcha-response'] = token;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        formRef.current?.reset();
      } else {
        alert(`Failed to send message: ${result.message || 'Unknown Error'}`);
      }
    } catch (error) {
      console.error("❌ ERROR SUBMITTING FORM:", error);
      alert("Something went wrong. Please check console.");
    } finally {
      setIsSubmitting(false);
      setFormDataState(null);
    }
  };

  const handleCaptchaError = () => {
    alert("Captcha verification failed. Please try again.");
    setIsSubmitting(false);
  };

  const steps = [
    { title: 'We review your brief', desc: 'We look at what you\'ve shared and your current setup.' },
    { title: 'Free initial review', desc: 'We send back a short, honest take on the clearest opportunities.' },
    { title: 'Intro call', desc: 'A short call to go deeper and see if there\'s a fit.' },
    { title: 'Proposal', desc: 'If it makes sense, we share a clear scope and next steps.' },
  ];

  return (
    <section id="contact-form" className="relative overflow-hidden pt-8 pb-10 md:pt-10 md:pb-12 dark-section scroll-mt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] right-[20%] h-[600px] w-[600px] bg-transparent" />
        <div className="absolute bottom-[20%] left-[20%] h-[600px] w-[600px] bg-transparent" />
      </div>

      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-7"
          >
            <div
              className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] animate-pulse bg-transparent"
              style={{ animationDuration: '4s' }}
            />

            <div className="relative z-10 rounded-2xl border border-line bg-surface p-6 shadow-card backdrop-blur-xl md:p-8 lg:p-10">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-20 text-center md:py-24"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                    <CheckCircle2 className="h-10 w-10 text-emerald-700" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-ink">Message sent</h3>
                  <p className="max-w-sm text-lg leading-relaxed text-muted">
                    Thanks — we’ll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-10 rounded-xl border border-line bg-surface px-8 py-3 font-medium text-ink transition-colors hover:bg-tile"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8 md:mb-10">
                    <h3 className="mb-3 text-2xl font-bold text-ink md:text-3xl">Book a Demo</h3>
                    <p className="text-lg text-muted">Tell us what you&apos;re working on and we&apos;ll come back with something useful.</p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className={`space-y-5 md:space-y-6 ${isSubmitting ? 'opacity-70 pointer-events-none transition-opacity duration-300' : 'transition-opacity duration-300'}`}>
                    <input type="hidden" name="access_key" value="2cbe712f-373b-47a4-8009-cc0d37d04343" />
                    <input type="hidden" name="captcha" value="true" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ delay: 0.1 }} className="space-y-2">
                        <label className="text-sm font-medium text-ink">Name</label>
                        <input required name="name" type="text" placeholder="Your full name" className="form-surface w-full rounded-xl px-4 py-3.5 text-ink placeholder-muted transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus" />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ delay: 0.2 }} className="space-y-2">
                        <label className="text-sm font-medium text-ink">Email</label>
                        <input required name="email" type="email" placeholder="We'll only use this to reply" className="form-surface w-full rounded-xl px-4 py-3.5 text-ink placeholder-muted transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ delay: 0.3 }} className="space-y-2">
                        <label className="text-sm font-medium text-ink">Company</label>
                        <input name="company" type="text" placeholder="Optional, but useful for context" className="form-surface w-full rounded-xl px-4 py-3.5 text-ink placeholder-muted transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus" />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ delay: 0.4 }} className="space-y-2">
                        <label className="text-sm font-medium text-ink">Service Required</label>
                        <div className="relative">
                          <select name="service" defaultValue={mapServiceParamToValue(serviceParam)} className="form-surface w-full appearance-none rounded-xl px-4 py-3.5 pr-12 text-ink transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus">
                            <option value="none">Select a service</option>
                            <option value="seo">SEO / GEO</option>
                            <option value="web-development">Web Development</option>
                            <option value="digital-design">Digital Design / UI UX</option>
                            <option value="email-marketing">Email Marketing Automation</option>
                            <option value="social-media-marketing">Social Media Marketing</option>
                            <option value="web-analytics">Web Analytics & Auditing</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ delay: 0.5 }} className="space-y-2">
                      <label className="text-sm font-medium text-ink">Message</label>
                      <textarea name="message" required rows={6} placeholder="Describe your goals, challenges, or where the current setup feels stuck" className="form-surface w-full resize-none rounded-xl px-4 py-4 text-ink placeholder-muted transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus"></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportConfig}
                      transition={{ delay: 0.55 }}
                      className="mt-8 rounded-2xl border border-line bg-canvas p-4 pt-5"
                    >
                      <HCaptcha
                        ref={captchaRef}
                        size="invisible"
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={handleCaptchaVerify}
                        onError={handleCaptchaError}
                        onExpire={() => setIsSubmitting(false)}
                      />

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="theme-primary relative flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-accent to-accent font-medium text-surface shadow-card transition-all duration-200 hover:-translate-y-[1px] hover:shadow-card active:translate-y-0 disabled:pointer-events-none disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Request Demo
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      <p className="mt-[10px] text-center text-[12px] text-muted">
                        No spam. We reply within 24 hours.
                      </p>

                      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-muted">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span>Secure submission</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>No obligations</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5" />
                          <span>Quick response</span>
                        </div>
                      </div>
                    </motion.div>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5 lg:col-span-5 lg:gap-6"
          >
            <div className="rounded-xl border border-line bg-surface p-7 md:p-8">
              <h3 className="mb-7 text-xl font-bold tracking-tight text-ink">What happens next?</h3>
              <div className="relative ml-4 space-y-7 border-l border-line">
                {steps.map((step, idx) => (
                  <div key={idx} className="group relative pl-8">
                    <div className="absolute left-[-16px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-canvas transition-colors group-hover:border-line group-hover:bg-tile">
                      <span className="text-xs font-bold text-muted group-hover:text-accent">{idx + 1}</span>
                    </div>
                    <h4 className="mb-1.5 text-base font-semibold text-ink">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface p-7 md:p-8">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">Direct Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-ink">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  hello@onnealabs.com
                </li>
                <li className="flex items-center gap-3 text-sm text-ink">
                  <Clock className="h-4 w-4 shrink-0 text-emerald-700" />
                  Response within 24 hours
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface p-7 md:p-8">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">Why Onnea Labs</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-ink">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tile">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  Focus on clarity, conversion, and measurable improvement
                </li>
                <li className="flex items-start gap-3 text-sm text-ink">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tile">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  Practical recommendations before unnecessary scope
                </li>
                <li className="flex items-start gap-3 text-sm text-ink">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tile">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  Premium execution without noisy agency theatre
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function ContactFormSection() {
  return (
    <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-surface rounded-2xl" />}>
      <ContactFormInner />
    </Suspense>
  );
}
