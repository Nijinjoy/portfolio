"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Github, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [toast, setToast] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactForm) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      await emailjs.send(serviceId, templateId, values, { publicKey });
      setToast("Message sent successfully.");
    } else {
      setToast("Form validated. Add EmailJS environment variables to enable sending.");
    }
    reset();
  };

  return (
    <section id="contact" className="pb-16 pt-2">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Contact"
          title="Got an app idea? Let's make it real."
          description="Use the form or reach out directly. I respond best to messages with project context, timeline, platform targets, and required integrations."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-display text-xl font-bold">Contact Details</h3>
            <div className="mt-6 grid gap-4">
              {[
                [Mail, "Email", siteConfig.email, `mailto:${siteConfig.email}`],
                [Phone, "Phone", siteConfig.phone, `tel:${siteConfig.phone}`],
                [MapPin, "Location", siteConfig.location, "#"],
                [Github, "GitHub", "github.com/Nijinjoy", siteConfig.github],
                [Linkedin, "LinkedIn", "linkedin.com/in/nijinjoy", siteConfig.linkedin],
              ].map(([Icon, label, value, href]) => (
                <a
                  key={String(label)}
                  href={String(href)}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-primary/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {String(label)}
                    </span>
                    <span className="mt-1 block font-semibold">{String(value)}</span>
                  </span>
                </a>
              ))}
            </div>
            <Button asChild className="mt-6 w-full" variant="secondary">
              <a href="https://cal.com" target="_blank" rel="noreferrer">
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-panel rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} autoComplete="name" className="input" placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} type="email" autoComplete="email" className="input" placeholder="you@example.com" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} type="tel" autoComplete="tel" className="input" placeholder="+971 509050493" />
              </Field>
              <div className="hidden sm:block" />
              <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
                <textarea
                  {...register("message")}
                  className="input min-h-40 resize-y"
                  placeholder="Project goals, timeline, target platforms, integrations..."
                />
              </Field>
            </div>
            <Button className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send It Over"}
            </Button>
          </form>
        </div>
      </div>

      {toast ? (
        <div role="status" className="fixed bottom-6 left-1/2 z-50 flex w-[min(92vw,420px)] -translate-x-1/2 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-medium">{toast}</p>
          <button aria-label="Dismiss notification" onClick={() => setToast(null)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-300">{error}</span> : null}
    </label>
  );
}
