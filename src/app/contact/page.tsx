import { Eyebrow } from "@/components/eyebrow";

export default function ContactPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <Eyebrow>Get in Touch</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
          Inquire About Our Yarns
        </h1>
        <p className="mt-6 max-w-lg text-body text-muted">
          Have questions about our products or interested in a custom order? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-2xl px-6 sm:px-10 lg:px-12 lg:pb-24">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe6vKOhCz7g4NY7R7AGoGXUsX9xU_O2JXlSft5x3iNPKSdM0A/viewform?embedded=true"
          width="100%"
          height={1350}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          className="w-full"
        >
          Loading…
        </iframe>
      </section>
    </main>
  );
}
