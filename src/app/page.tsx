import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedPieceSection } from "@/components/landing/featured-piece-section";
import { WhyDifferentSection } from "@/components/landing/why-different-section";
import { CatalogGridSection } from "@/components/landing/catalog-grid-section";
import { MakerSection } from "@/components/landing/maker-section";
import { Reveal } from "@/components/reveal";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPieceSection />
      <WhyDifferentSection />
      <CatalogGridSection />
      <MakerSection />

      {/* Closing contact band — no new photography required */}
      <section id="contact" className="border-t-2 border-accent bg-surface">
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <Reveal className="mb-12 flex justify-center sm:justify-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-accent bg-accent/10 px-6 py-3">
              <PinIcon className="h-5 w-5 text-accent" strokeWidth={1.8} />
              <p className="text-small font-bold uppercase tracking-wide text-foreground">
                Visit our booth &mdash; September 12, 2026
              </p>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 font-bold text-foreground">
                Let&rsquo;s Create Together
              </h2>
              <p className="mt-3 max-w-sm text-small text-muted">
                Questions, custom orders, or just want to see the colors in person? Reach out.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:items-end">
              <div className="flex flex-col gap-2 sm:items-end">
                <a
                  href="mailto:itsyarncouture@gmail.com"
                  className="flex items-center gap-2 font-bold text-foreground hover:text-accent"
                >
                  <MailIcon className="h-4 w-4 text-accent" />
                  itsyarncouture@gmail.com
                </a>
                <a
                  href="tel:6788029122"
                  className="flex items-center gap-2 text-small text-muted hover:text-accent"
                >
                  <PhoneIcon className="h-4 w-4 text-accent" />
                  678-802-9122
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/the_yarncouture/"
                  className="text-muted hover:text-accent transition-colors"
                  title="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" strokeWidth={1.8} />
                </a>
                <a
                  href="https://www.facebook.com/the.yarncouture/"
                  className="text-muted hover:text-accent transition-colors"
                  title="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
