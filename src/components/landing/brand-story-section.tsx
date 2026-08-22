import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function BrandStorySection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Large Image */}
          <ImagePlaceholder
            label="Maker portrait or process shot"
            className="min-h-[28rem] lg:min-h-[32rem]"
          />

          {/* Right: Story & Quote */}
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-4">
              <Eyebrow>The Artist Behind</Eyebrow>
              <h2 className="font-display text-h2 text-foreground">
                Crafted with Passion
              </h2>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 py-4">
              <p className="font-display text-h3 text-primary italic">
                &ldquo;Every skein starts as raw fiber and an idea &mdash; nothing leaves the studio until it&rsquo;s something I&rsquo;d keep for myself.&rdquo;
              </p>
            </blockquote>

            <p className="text-body text-muted leading-relaxed">
              Yarn Couture is a one-person studio dedicated to creating exceptional handspun, hand-dyed art yarn. Every skein is worked in limited runs using time-honored techniques and premium fibers, ensuring each piece is genuinely one of a kind.
            </p>

            <div className="flex gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-small text-muted">
                Premium fibers selected with care and expertise
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-small text-muted">
                Hand-dyed in small batches for superior color quality
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-small text-muted">
                Limited production ensures authentic artisanal value
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
