import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";

const values = [
  {
    title: "Quality",
    description:
      "Each batch is hand-crafted with meticulous attention to detail, ensuring vibrant colors and exceptional texture."
  },
  {
    title: "Sustainability",
    description:
      "We're committed to responsible sourcing and ethical production practices that respect our planet."
  },
  {
    title: "Creativity",
    description:
      "We inspire makers by providing premium materials that bring their creative visions to life."
  }
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="font-display text-h1 text-foreground">
              Made by hand,
              <br />
              <span className="italic text-accent">made with love.</span>
            </h1>
            <p className="max-w-sm text-body text-muted">
              Yarn Couture began around a coffee table, two hooks, and a
              basket of yarn, and grew into a small studio devoted to color,
              texture, and the slow joy of making something by hand.
            </p>
          </div>
          <div className="relative lg:col-span-7">
            <div className="relative rotate-1 border-[10px] border-surface bg-surface shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/ycphotos/makers-at-work.png"
                  alt="Two crocheters sharing yarn, tea, and a finished granny-square piece"
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <span
              aria-hidden
              className="absolute -left-5 -bottom-5 hidden h-20 w-20 -rotate-12 items-center justify-center rounded-full border border-accent bg-background text-caption uppercase tracking-widest text-accent sm:flex"
            >
              Est.
            </span>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h2 className="font-display text-h2 text-foreground">
              The Art of Yarn
            </h2>
            <p className="text-body text-muted [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:font-display [&::first-letter]:text-6xl [&::first-letter]:leading-[0.8] [&::first-letter]:text-accent">
              Yarn Couture was born from a passion for exceptional fiber and a
              commitment to sustainable craftsmanship. Every piece is
              hand-crocheted in small batches, ensuring quality and
              uniqueness that mass production simply cannot match.
            </p>
            <p className="text-body text-muted">
              We believe that the materials you use matter. Our yarns are
              sourced from trusted suppliers who share our values of quality
              and responsibility. Whether you&apos;re a seasoned crochet
              artist or just beginning your yarn journey, we create fibers
              that inspire creativity.
            </p>
            <p className="relative mt-4 max-w-md font-display text-h3 italic leading-snug text-foreground before:absolute before:-left-3 before:-top-8 before:font-display before:text-[4rem] before:text-accent/40 before:content-['“']">
              Every piece carries the warmth of the hands that made it.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-xs lg:col-span-2 lg:max-w-none lg:justify-self-end">
            <div className="relative -rotate-3 border-[10px] border-surface bg-surface shadow-xl transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/ycphotos/1000134249.jpg"
                  alt="Blue crocheted cape shown from the back on a mannequin"
                  fill
                  sizes="(min-width: 1024px) 30vw, 70vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="px-3 pb-4 pt-3 text-center font-display text-small italic text-muted">
                Hand-crocheted, hand-finished
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-b border-border bg-surface-alt">
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <Eyebrow>What We Stand For</Eyebrow>
          <h2 className="mb-4 mt-4 font-display text-h2 text-foreground">
            Our Values
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-border border-t border-border">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="grid grid-cols-1 items-baseline gap-3 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <span
                  aria-hidden
                  className="font-display text-4xl text-accent/30 sm:col-span-2"
                >
                  0{i + 1}
                </span>
                <h3 className="font-display text-h3 text-accent sm:col-span-3">
                  {value.title}
                </h3>
                <p className="text-body text-muted sm:col-span-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-h2 text-foreground">
            Ready to see the collection?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-body text-muted">
            Every piece is made to order with the finest materials, one skein
            at a time.
          </p>
          <a
            href="/catalog"
            className="mt-8 inline-block rounded-md bg-foreground px-8 py-3 font-semibold text-surface transition-colors hover:bg-foreground/90"
          >
            View the Collection
          </a>
        </div>
      </section>
    </main>
  );
}
