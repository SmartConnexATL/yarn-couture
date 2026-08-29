import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";

export function FeaturedPieceSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <span
              className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-accent"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-accent"
              aria-hidden="true"
            />
            <ImagePlaceholder
              src="/ycphotos/1000134290.jpg"
              alt="Patchwork crochet sweater in olive, tan, and cream on a mannequin"
              sizes="(min-width: 1024px) 50vw, 100vw"
              imageClassName="object-top"
              label="PHOTO 2 — Featured piece
Detailed close-up of your best handmade piece
Square (1:1) or portrait (2:3) — show craftsmanship, color, texture"
              className="img-hover h-full min-h-[26rem] lg:min-h-[34rem]"
            />
          </Reveal>

          <Reveal delayMs={150} className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow>Featured Piece</Eyebrow>
              <h2 className="font-display text-h1 font-bold leading-tight text-foreground">
                Handmade
                <br />
                <span className="text-accent">With Love</span>
              </h2>
            </div>

            <p className="max-w-md text-body leading-relaxed text-foreground/80">
              Each piece is hand-crocheted with care.
            </p>

            <p className="max-w-md text-body leading-relaxed text-muted">
              Every stitch is worked by hand, one piece at a time — no shortcuts, no mass production. What you see is what was made, in the exact hours it took to make it.
            </p>

            <div>
              <CtaLink href="/catalog" variant="outline">
                View All
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
