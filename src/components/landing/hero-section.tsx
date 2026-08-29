import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid min-h-[60vh] grid-cols-1 lg:min-h-[70vh] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="order-2 flex flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:order-1 lg:px-16 lg:py-0">
          <Reveal className="flex flex-col gap-8">
            <Eyebrow>Handmade Crochet &amp; Knit</Eyebrow>

            <h1 className="font-display text-display font-black leading-[0.92] text-foreground">
              Wear Your
              <br />
              <span className="text-accent">Culture.</span>
            </h1>

            <p className="max-w-sm text-body leading-relaxed text-muted">
              Handmade pieces inspired by your story.
            </p>

            <div>
              <CtaLink href="/catalog">Explore Colorways</CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={150} className="relative order-1">
          <span
            className="absolute left-4 top-4 z-10 h-8 w-8 border-l-2 border-t-2 border-accent sm:left-6 sm:top-6"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-4 right-4 z-10 h-8 w-8 border-b-2 border-r-2 border-accent sm:bottom-6 sm:right-6"
            aria-hidden="true"
          />
          <ImagePlaceholder
            src="/ycphotos/hero_photo.jpg"
            alt="Green crocheted cardigan on a mannequin"
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            imageClassName="object-top"
            label="PHOTO 1 — Hero image
Finished crochet/knit piece
Portrait (9:16) or square, magazine-cover quality"
            className="img-hover h-full min-h-[25vh] border-y-0 border-r-0 lg:min-h-[80vh] lg:border-l lg:border-r-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
