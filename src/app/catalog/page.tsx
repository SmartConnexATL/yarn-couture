import { Eyebrow } from "@/components/eyebrow";
import { PhotoCard } from "@/components/photo-card";

const photos = [
  {
    id: "1",
    src: "/ycphotos/1000134240.jpg",
    alt: "Pink crocheted halter top",
    imageClassName: "object-[50%_5%]",
  },
  {
    id: "2",
    src: "/ycphotos/1000134241.jpg",
    alt: "Crocheted piece detail",
    imageClassName: "object-[50%_0%]",
  },
  {
    id: "3",
    src: "/ycphotos/1000134242.jpg",
    alt: "Green crocheted wrap",
    imageClassName: "object-[50%_20%]",
  },
  {
    id: "4",
    src: "/ycphotos/1000134243.jpg",
    alt: "Green crocheted open cardigan",
    imageClassName: "object-[50%_15%]",
  },
  {
    id: "5",
    src: "/ycphotos/1000134244.jpg",
    alt: "Crocheted design",
    imageClassName: "object-[50%_25%]",
  },
  {
    id: "6",
    src: "/ycphotos/1000134245.jpg",
    alt: "Green crocheted cardigan profile",
    imageClassName: "object-[50%_25%]",
  },
  {
    id: "7",
    src: "/ycphotos/1000134246.jpg",
    alt: "Tan crocheted cardigan back view",
    imageClassName: "object-[50%_15%]",
  },
  {
    id: "8",
    src: "/ycphotos/1000134247.jpg",
    alt: "Tan and green crocheted sweater",
    imageClassName: "object-[50%_15%]",
  },
  {
    id: "9",
    src: "/ycphotos/1000134248.jpg",
    alt: "Crocheted piece",
    imageClassName: "object-[50%_20%]",
  },
  {
    id: "10",
    src: "/ycphotos/1000134249.jpg",
    alt: "Crocheted work",
    imageClassName: "object-[50%_5%]",
  },
  {
    id: "11",
    src: "/ycphotos/1000134250.jpg",
    alt: "Detailed crochet",
    imageClassName: "object-[50%_10%]",
  },
  {
    id: "12",
    src: "/ycphotos/1000134286.jpg",
    alt: "Crochet artwork",
  },
  {
    id: "13",
    src: "/ycphotos/1000134288.jpg",
    alt: "Handmade crochet piece",
    imageClassName: "object-[50%_10%]",
  },
  {
    id: "14",
    src: "/ycphotos/1000134290.jpg",
    alt: "Finished crochet work",
    imageClassName: "object-[50%_60%]",
  },
];

export default function CatalogPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <Eyebrow>Collection</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
          Our Work
        </h1>
        <p className="mt-6 max-w-lg text-body text-muted">
          A curated collection of hand-crafted crochet pieces. Click on any
          photo to explore the details.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              imageClassName={photo.imageClassName}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-h2 text-foreground">
            Interested in commissioning a piece?
          </h2>
          <p className="mt-6 mx-auto max-w-lg text-body text-muted">
            Each piece is made to order with the finest materials. Reach out to
            discuss your vision.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-foreground px-8 py-3 font-semibold text-surface hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
