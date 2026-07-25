import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5">
      <div className="order-2 flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:order-1 lg:col-span-2 lg:px-12 lg:py-0">
        <Eyebrow>Art Yarn Catalog</Eyebrow>
        <h1 className="max-w-md font-display text-h1 text-foreground lg:text-display">
          Yarn Couture
        </h1>
        <p className="max-w-sm text-body text-muted">
          One-of-a-kind art yarn, hand-dyed and finished in small batches for
          makers who care where their fiber comes from.
        </p>
      </div>
      <ImagePlaceholder
        label="Hero image — art yarn in the studio"
        className="order-1 min-h-[20rem] border-y-0 lg:order-2 lg:col-span-3 lg:min-h-[32rem] lg:border-l lg:border-r-0"
      />
    </section>
  );
}
