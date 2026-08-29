import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="grid grid-cols-1 border-b border-border lg:grid-cols-5">
        <div className="order-2 flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:order-1 lg:col-span-2 lg:px-12 lg:py-24">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="max-w-md font-display text-h1 text-foreground">
            Yarn Couture
          </h1>
          <p className="max-w-sm text-body text-muted">
            Handcrafted with passion, dyed with intention, and designed for makers who believe in quality.
          </p>
        </div>
        <ImagePlaceholder
          src="/ycphotos/1000134250.jpg"
          alt="Coral crochet outfit on a mannequin"
          sizes="(min-width: 1024px) 60vw, 100vw"
          imageClassName="object-top"
          label="Yarn couture studio"
          className="order-1 min-h-[20rem] border-y-0 lg:order-2 lg:col-span-3 lg:min-h-[32rem] lg:border-l lg:border-r-0"
        />
      </section>

      {/* Brand Story Section */}
      <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-h2 text-foreground">
              The Art of Yarn
            </h2>
            <p className="text-body text-muted">
              Yarn Couture was born from a passion for exceptional fiber and a commitment to sustainable craftsmanship. Every skein is hand-dyed in small batches, ensuring quality and uniqueness that mass production simply cannot match.
            </p>
            <p className="text-body text-muted">
              We believe that the materials you use matter. Our yarns are sourced from trusted suppliers who share our values of quality and responsibility. Whether you&apos;re a seasoned crochet artist or just beginning your yarn journey, we create fibers that inspire creativity.
            </p>
          </div>
          <ImagePlaceholder
            src="/ycphotos/1000134249.jpg"
            alt="Blue crocheted cape shown from the back on a mannequin"
            sizes="(min-width: 1024px) 50vw, 100vw"
            imageClassName="object-top"
            label="Yarn dyed in color"
            className="min-h-[20rem] lg:min-h-[24rem]"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <h2 className="mb-12 font-display text-h2 text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-h3 text-accent">Quality</h3>
              <p className="text-body text-muted">
                Each batch is hand-crafted with meticulous attention to detail, ensuring vibrant colors and exceptional texture.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-h3 text-accent">Sustainability</h3>
              <p className="text-body text-muted">
                We&apos;re committed to responsible sourcing and ethical production practices that respect our planet.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-h3 text-accent">Creativity</h3>
              <p className="text-body text-muted">
                We inspire makers by providing premium materials that bring their creative visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
