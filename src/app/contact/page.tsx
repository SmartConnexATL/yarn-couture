"use client";

import { FormEvent, useState } from "react";
import { Eyebrow } from "@/components/eyebrow";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace with your Google Form action URL
    const googleFormURL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";

    if (!googleFormURL) {
      console.error("Google Form URL not configured");
      setIsLoading(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append("entry.123456789", formData.name); // Replace with your Google Form field ID for name
    formPayload.append("entry.987654321", formData.email); // Replace with your Google Form field ID for email
    formPayload.append("entry.456789123", formData.phone); // Replace with your Google Form field ID for phone
    formPayload.append("entry.789123456", formData.comments); // Replace with your Google Form field ID for comments

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formPayload,
        mode: "no-cors"
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", comments: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Header Section */}
      <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <Eyebrow>Get in Touch</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
          Inquire About Our Yarns
        </h1>
        <p className="mt-6 max-w-lg text-body text-muted">
          Have questions about our products or interested in a custom order? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-2xl px-6 sm:px-10 lg:px-12 lg:pb-24">
        {submitted ? (
          <div className="rounded-lg border border-accent bg-surface p-8 text-center">
            <h2 className="font-display text-h2 text-foreground">Thank you!</h2>
            <p className="mt-4 text-body text-muted">
              We've received your inquiry and will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-foreground">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-border bg-surface px-4 py-3 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-foreground">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-border bg-surface px-4 py-3 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold text-foreground">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-border bg-surface px-4 py-3 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="Your phone number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="comments" className="font-semibold text-foreground">
                Comments or Questions *
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
                rows={6}
                className="border border-border bg-surface px-4 py-3 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-sm bg-primary px-8 py-3 font-semibold uppercase text-surface transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
