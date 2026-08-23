import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

/**
 * Section 5 — optional per the photo request guide. The maker photo is
 * "nice to have," not required to launch. If it never arrives, remove this
 * import from page.tsx rather than leaving an empty placeholder live.
 */
export function MakerSection() {
  return (
    <section className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 flex flex-col justify-center gap-6 lg:order-1">
            <div className="flex flex-col gap-4">
              <Eyebrow>Behind the Craft</Eyebrow>
              <h2 className="font-display text-h1 font-bold text-foreground leading-tight">
                The Maker
                <br />
                <span className="text-accent">Behind the Craft</span>
              </h2>
            </div>

            <p className="max-w-md text-body text-muted leading-relaxed">
              Yarn Couture is a one-person studio. Every piece that leaves it has been in the same pair of hands from the first stitch to the last.
            </p>
          </Reveal>

          <Reveal delayMs={150} className="order-1 lg:order-2">
            <ImagePlaceholder
              label="MAKER PHOTO — Optional
Hands working, holding a finished piece, or studio shot
Portrait (2:3) or square (1:1)"
              className="img-hover min-h-[26rem] lg:min-h-[34rem] h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
