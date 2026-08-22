import { ImagePlaceholder } from "@/components/image-placeholder";
import { Eyebrow } from "@/components/eyebrow";

export default function Home() {
  return (
    <main>
      {/* Magazine-Style Hero Section */}
      <section className="bg-primary text-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Left: Bold Typography */}
          <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-0">
            <div className="max-w-lg">
              <p className="text-caption font-bold uppercase tracking-widest text-surface/80 mb-8">
                Artisan Yarn Collection
              </p>

              <h1 className="font-display text-7xl leading-tight mb-8">
                <span className="block">Yarn</span>
                <span className="block text-accent">Couture</span>
              </h1>

              <p className="text-lg leading-relaxed text-surface/90 mb-12 max-w-md">
                Hand-dyed, limited-edition art yarn for makers who demand excellence. Each collection tells a story.
              </p>

              <div className="flex gap-4">
                <a
                  href="/catalog"
                  className="inline-block bg-surface text-primary px-8 py-4 font-semibold uppercase text-sm tracking-wide hover:bg-surface/90 transition"
                >
                  Shop Now
                </a>
                <a
                  href="/about"
                  className="inline-block border-2 border-surface text-surface px-8 py-4 font-semibold uppercase text-sm tracking-wide hover:bg-surface/10 transition"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>

          {/* Right: Large Featured Image */}
          <ImagePlaceholder
            label="Hero image — featured yarn collection"
            className="min-h-[50vh] lg:min-h-full"
          />
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>Collection Spotlight</Eyebrow>
              <h2 className="font-display text-5xl text-foreground mt-4 mb-8 leading-tight">
                Crafted for Creators
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Each skein is hand-dyed in small batches, ensuring exceptional color depth and uniqueness. We work with premium fibers selected for their beauty and performance.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-10">
                From luxury blends to experimental textures, our collections are designed for makers who refuse to compromise on quality.
              </p>
              <a
                href="/catalog"
                className="inline-block bg-accent text-surface px-8 py-4 font-semibold uppercase text-sm tracking-wide hover:bg-accent-hover transition"
              >
                View Collection
              </a>
            </div>

            <ImagePlaceholder
              label="Collection detail shot"
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="bg-primary text-surface">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <h2 className="font-display text-5xl text-center mb-16">Why Choose Yarn Couture</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-h1 font-display text-accent">01</div>
              <h3 className="font-display text-2xl">Premium Fibers</h3>
              <p className="text-surface/90 leading-relaxed">
                Sourced from trusted suppliers who share our commitment to quality and sustainability.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-h1 font-display text-accent">02</div>
              <h3 className="font-display text-2xl">Hand-Dyed</h3>
              <p className="text-surface/90 leading-relaxed">
                Each batch is dyed in small quantities using techniques perfected over years of craft.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-h1 font-display text-accent">03</div>
              <h3 className="font-display text-2xl">Limited Edition</h3>
              <p className="text-surface/90 leading-relaxed">
                Every collection is produced in small runs, ensuring your yarn is genuinely one-of-a-kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-16 text-center">
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="font-display text-5xl text-foreground mt-6 mb-6">
              Ready to Create?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re looking for a specific color, interested in a custom order, or just want to chat about yarn, we&apos;d love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-surface px-10 py-4 font-semibold uppercase text-sm tracking-wide hover:bg-primary/90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
