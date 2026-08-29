import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

const products = [
  {
    id: 1,
    name: "Luxe Merino Blend",
    category: "Premium Yarn",
    color: "Charcoal Grey",
    src: "/ycphotos/1000134240.jpg",
    alt: "Pink crocheted halter top on a mannequin"
  },
  {
    id: 2,
    name: "Silky Cotton",
    category: "Summer Yarn",
    color: "Cream",
    src: "/ycphotos/1000134243.jpg",
    alt: "Purple and pink crocheted cardigan on a mannequin"
  },
  {
    id: 3,
    name: "Art Yarn Special",
    category: "Textured Yarn",
    color: "Multi-color",
    src: "/ycphotos/1000134242.jpg",
    alt: "Green crocheted wrap displayed on a mannequin"
  },
  {
    id: 4,
    name: "Alpaca Dreams",
    category: "Luxury Yarn",
    color: "Blush Pink",
    src: "/ycphotos/1000134245.jpg",
    alt: "Green crocheted cardigan shown in profile on a mannequin"
  },
  {
    id: 5,
    name: "Wool Comfort",
    category: "Worsted Weight",
    color: "Deep Navy",
    src: "/ycphotos/1000134246.jpg",
    alt: "Green crocheted cardigan shown from the back on a mannequin"
  },
  {
    id: 6,
    name: "Celestial Blend",
    category: "Premium Yarn",
    color: "Starlight Silver",
    src: "/ycphotos/1000134247.jpg",
    alt: "Tan and green crocheted sweater on a mannequin"
  }
];

export default function CatalogPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <Eyebrow>Collection</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
          Our Yarn Selection
        </h1>
        <p className="mt-6 max-w-lg text-body text-muted">
          Hand-dyed and curated for the discerning maker. Each collection is a celebration of color, texture, and craft.
        </p>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-content px-6 sm:px-10 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <ImagePlaceholder
                src={product.src}
                alt={product.alt}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                imageClassName="object-top"
                label={`${product.name} yarn`}
                className="aspect-square"
              />
              <div className="flex flex-col gap-2">
                <p className="text-caption font-semibold uppercase text-accent">
                  {product.category}
                </p>
                <h3 className="font-display text-h3 text-foreground">
                  {product.name}
                </h3>
                <p className="text-small text-muted">{product.color}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-content px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-h2 text-foreground">
            Interested in our yarns?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-body text-muted">
            Get in touch to place an order or inquire about custom color commissions.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 font-semibold uppercase text-surface transition-colors hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
