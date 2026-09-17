import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PhotoCard } from "@/components/photo-card";

export const metadata: Metadata = {
  title: "Collabs",
  description:
    "See The Yarn Couture's creative collaborations with other designers and creatives, bringing custom crochet fashion to life.",
  alternates: {
    canonical: "/collabs"
  }
};

type CollabPhoto = {
  src?: string;
  alt: string;
  imageClassName?: string;
};

type Collab = {
  slug: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photos: CollabPhoto[];
};

const collabs: Collab[] = [
  {
    slug: "yung-kendro",
    eyebrow: "A Creative Collaboration in Crochet Fashion",
    title: "The Yarn Couture x Yung Kendro",
    paragraphs: [
      "The Yarn Couture collaborated with Yung Kendro to bring his vision of custom crochet fashion to life through an original clothing prototype designed specifically for him. This one-of-a-kind piece combines creativity, craftsmanship, and streetwear-inspired style.",
      "While attending the Atlanta Streetwear Market, the unique crochet outfit attracted significant attention from both men and women, sparking conversations and showcasing the possibilities of handmade fashion. This collaboration highlights the power of individuality, creativity, and the growing appreciation for crochet in contemporary streetwear."
    ],
    photos: [
      {
        src: "/ycphotos/collabs/1000040831.jpg",
        alt: "Yung Kendro wearing The Yarn Couture crochet beanie and sweater, back view showing hand-crocheted lettering",
        imageClassName: "object-top"
      },
      {
        src: "/ycphotos/collabs/1000040830.jpg",
        alt: "Yung Kendro wearing The Yarn Couture crochet beanie and sweater at the Atlanta Streetwear Market",
        imageClassName: "object-top"
      },
      {
        src: "/ycphotos/collabs/1000040829.jpg",
        alt: "Close-up of the custom crochet beanie and sweater set made for Yung Kendro",
        imageClassName: "object-top"
      },
      {
        src: "/ycphotos/collabs/1000040053.jpg",
        alt: "Flat lay of the finished crochet beanie and sweater with hand-crocheted lettering"
      },
      {
        src: "/ycphotos/collabs/1000040852.jpg",
        alt: "Crochet beanie and sweater set with flame appliques"
      },
      {
        src: "/ycphotos/collabs/1000040054.jpg",
        alt: "Detail of hand-crocheted flame appliques in progress"
      },
      {
        src: "/ycphotos/collabs/1000044995.jpg",
        alt: "Detail of hand-crocheted lettering on a cream crochet beanie"
      },
      {
        src: "/ycphotos/collabs/1000044996.jpg",
        alt: "Detail of hand-crocheted lettering on a multicolor crochet beanie"
      },
      {
        src: "/ycphotos/collabs/1000047205.jpg",
        alt: "Hand-crocheted flame appliques in progress, multiple colorways"
      },
      {
        src: "/ycphotos/collabs/1000047216.jpg",
        alt: "Hand-crocheted lettering detail on pink and red crochet beanies"
      },
      {
        src: "/ycphotos/collabs/1000040851.jpg",
        alt: "Detail of hand-crocheted lettering on a cream crochet beanie"
      }
    ]
  }
];

export default function CollabsPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <Eyebrow>Collabs</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-h1 text-foreground">
            Creative Collaborations
          </h1>
          <p className="mt-6 max-w-lg text-body text-muted">
            As The Yarn Couture continues to grow our brand, we look forward
            to collaborating with other creatives.
          </p>
        </div>
      </section>

      {collabs.map((collab, i) => (
        <section
          key={collab.slug}
          className={`border-b border-border ${i % 2 === 1 ? "bg-surface-alt" : ""}`}
        >
          <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
            <Eyebrow>{collab.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-h2 text-foreground">
              {collab.title}
            </h2>
            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {collab.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {collab.photos.map((photo, j) =>
                photo.src ? (
                  <div key={j} className={j < 3 ? "mt-6" : ""}>
                    <PhotoCard
                      src={photo.src}
                      alt={photo.alt}
                      imageClassName={photo.imageClassName}
                    />
                  </div>
                ) : (
                  <div key={j} className={j < 3 ? "mt-6" : ""}>
                    <ImagePlaceholder
                      label={photo.alt}
                      className="aspect-[4/5] w-full"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-h2 text-foreground">
            Have a vision you&apos;d like to bring to life?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-body text-muted">
            We&apos;d love to hear about it. Reach out to explore a
            collaboration with The Yarn Couture.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-foreground px-8 py-3 font-semibold text-surface transition-colors hover:bg-foreground/90"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
