import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoCard } from "@/components/photo-card";

export const metadata: Metadata = {
  title: "Cultural Collection",
  description:
    "Explore The Yarn Couture's Pana-Cat hats and Pana-Tops, inspired by Panamanian culture and celebration.",
  alternates: {
    canonical: "/cultural",
  },
};

const collections = [
  {
    title: "Pana-Cat Hats",
    photos: [
      {
        src: "/ycphotos/cultural/1000147772.PNG",
        alt: "Pana-Cat crochet hat worn at the Panama Canal",
        imageClassName: "object-top",
      },
      {
        src: "/ycphotos/cultural/5920006650426861303.PNG",
        alt: "Pana-Cat crochet hat worn during a Panamanian celebration",
        imageClassName: "object-top",
      },
      {
        src: "/ycphotos/cultural/8869263203504140223.PNG",
        alt: "Matching Pana-Cat crochet hats worn at a historic Panamanian site",
        imageClassName: "object-top",
      },
    ],
  },
  {
    title: "Pana-Tops",
    photos: [
      {
        src: "/ycphotos/cultural/2396043675082353400.PNG",
        alt: "Pana-Top crochet sweater shown from the front and back",
        imageClassName: "object-top",
      },
      {
        src: "/ycphotos/cultural/4557054767512951011.PNG",
        alt: "Pana-Top crochet sweater worn during a Panamanian celebration",
        imageClassName: "object-top",
      },
    ],
  },
];

export default function CulturalPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <Eyebrow>Cultural</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
            Heritage in Every Stitch
          </h1>
          <p className="mt-6 max-w-lg text-body text-muted">
            A celebration of Panamanian culture through handcrafted crochet
            hats and tops.
          </p>
        </div>
      </section>

      {collections.map((collection) => (
        <section key={collection.title}>
          <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <Eyebrow>Cultural Collection</Eyebrow>
            <h2 className="mt-4 font-display text-h2 text-foreground">
              {collection.title}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {collection.photos.map((photo) => (
                <PhotoCard
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  imageClassName={photo.imageClassName}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
