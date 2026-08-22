import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left side: Bold Text Content */}
        <ImagePlaceholder
          label="Hero image — art yarn in the studio"
          className="order-2 min-h-[24rem] border-y-0 border-r lg:order-1 lg:min-h-[40rem]"
        />

        <div className="order-1 flex flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:order-2 lg:px-12 lg:py-0">
          <Eyebrow>Artisan Yarn Collection</Eyebrow>

          <h1 className="font-display text-display text-foreground leading-tight">
            Yarn <span className="text-accent">Couture</span>
          </h1>

          <p className="max-w-md text-body text-muted leading-relaxed">
            One-of-a-kind art yarn, hand-dyed and finished in small batches for makers who care where their fiber comes from.
          </p>

          <div className="flex gap-4">
            <a href="/catalog" className="inline-block rounded-sm bg-primary px-6 py-3 font-semibold uppercase text-surface transition-colors hover:bg-primary-hover">
              Explore Collection
            </a>
            <a href="/contact" className="inline-block rounded-sm border-2 border-primary px-6 py-3 font-semibold uppercase text-primary transition-colors hover:bg-primary/5">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
