import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";

const products = [
  {
    number: "01",
    name: "Ocean Pride",
    color: "Deep blue & silver",
    span: "lg:col-span-7",
    aspect: "aspect-[4/5]"
  },
  {
    number: "02",
    name: "Sunset Vibes",
    color: "Terracotta & gold",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]"
  },
  {
    number: "03",
    name: "Nature’s Call",
    color: "Sage & moss",
    span: "lg:col-span-4",
    aspect: "aspect-square"
  },
  {
    number: "04",
    name: "Royal Jewels",
    color: "Emerald & violet",
    span: "lg:col-span-4",
    aspect: "aspect-square"
  },
  {
    number: "05",
    name: "Classic Ivory",
    color: "Soft & neutral",
    span: "lg:col-span-4",
    aspect: "aspect-square"
  },
  {
    number: "06",
    name: "Passion Purple",
    color: "Deep purple & burgundy",
    span: "lg:col-span-12",
    aspect: "aspect-[16/7]"
  }
];

export function CatalogGridSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>The Collection</Eyebrow>
            <h2 className="mt-4 font-display text-h1 font-bold text-foreground leading-tight">
              Current Colorways
            </h2>
          </div>
          <p className="max-w-xs text-small text-muted">
            Browse the collection and find the colorway that&rsquo;s yours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
          {products.map((product, i) => (
            <Reveal key={product.number} delayMs={(i % 3) * 100} className={product.span}>
              <a href="/catalog" className="img-hover group flex flex-col gap-4">
                <ImagePlaceholder
                  label={`PRODUCT PHOTO — Colorway ${product.number}\nFinished crochet/knit piece\nSquare (1:1)`}
                  className={`${product.aspect} w-full`}
                />
                <div className="flex items-start justify-between gap-4 border-t-2 border-foreground pt-4">
                  <div>
                    <p className="text-caption font-bold text-accent">
                      Colorway {product.number}
                    </p>
                    <h3 className="mt-1 font-display text-h3 font-bold text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-small text-muted">{product.color}</p>
                  </div>
                  <span className="mt-1 flex shrink-0 items-center gap-2 text-caption font-bold uppercase text-foreground">
                    View
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CtaLink href="/catalog">View Full Catalog</CtaLink>
        </div>
      </div>
    </section>
  );
}
