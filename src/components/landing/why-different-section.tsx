import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { GlobeIcon, HeartIcon, HookIcon } from "@/components/icons";

const points = [
  {
    index: "01",
    title: "Handmade",
    copy: "Every piece is worked by hand, stitch by stitch — no factories, no shortcuts.",
    image: "PHOTO 3A — Handmade\nHands actively crocheting or knitting\nSquare (1:1)",
    src: "/ycphotos/1000134244.jpg",
    alt: "Green crocheted cardigan with multicolor detail on a mannequin",
    aspect: "aspect-[3/4]",
    offset: "",
    Icon: HookIcon
  },
  {
    index: "02",
    title: "Inspired by Culture",
    copy: "Colorways and designs drawn from nations, sports, and the stories people carry.",
    image: "PHOTO 3B — Inspired by Culture\nCulture-inspired piece or colorful collection\nSquare (1:1)",
    src: "/ycphotos/1000134248.jpg",
    alt: "Coral and magenta crocheted top with multicolor stitching on a mannequin",
    aspect: "aspect-square",
    offset: "lg:mt-16",
    Icon: GlobeIcon
  },
  {
    index: "03",
    title: "Built on Passion",
    copy: "A brand built for the people who wear it — made to be worn with pride.",
    image: "PHOTO 3C — Built on Passion\nPeople wearing or enjoying finished pieces\nSquare (1:1)",
    src: "/ycphotos/1000134241.jpg",
    alt: "Purple and pink textured crocheted cardigan on a mannequin",
    aspect: "aspect-[4/5]",
    offset: "",
    Icon: HeartIcon
  }
];

export function WhyDifferentSection() {
  return (
    <section id="why-different" className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal className="mb-16 max-w-2xl">
          <Eyebrow>What Makes Us Different</Eyebrow>
          <h2 className="mt-4 font-display text-h1 font-bold leading-tight text-foreground">
            Support. Style. Passion.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {points.map((point, i) => (
            <Reveal key={point.index} delayMs={i * 100} className={`flex flex-col gap-6 ${point.offset}`}>
              <ImagePlaceholder
                src={point.src}
                alt={point.alt}
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 30vw, 100vw"
                imageClassName="object-top"
                label={point.image}
                className={`img-hover w-full ${point.aspect}`}
              />
              <div className="flex flex-col gap-4 border-t-2 border-foreground pt-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-foreground shadow-sm">
                    <point.Icon className="h-8 w-8" strokeWidth={1.8} />
                  </span>
                  <p className="font-display text-h2 font-black text-foreground/15">{point.index}</p>
                </div>
                <h3 className="font-display text-h3 font-bold text-foreground">{point.title}</h3>
                <p className="text-small leading-relaxed text-muted">{point.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
