import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function BrandStorySection() {
  return (
    <section className="border-t border-dashed border-border">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-20 sm:px-10 lg:grid-cols-5 lg:gap-16 lg:px-12">
        <ImagePlaceholder
          label="Maker portrait or process shot"
          className="min-h-[18rem] lg:col-span-2"
        />
        <div className="flex flex-col gap-6 lg:col-span-3">
          <Eyebrow>The Maker</Eyebrow>
          <p className="font-display text-h2 text-primary">
            &ldquo;Every skein starts as raw fiber and an idea &mdash; nothing
            leaves the studio until it&rsquo;s something I&rsquo;d keep for
            myself.&rdquo;
          </p>
          <p className="max-w-md text-body text-muted">
            Yarn Couture is a one-person studio building a small catalog of
            handspun, hand-dyed art yarn. Every skein is worked in limited
            runs, so what you see is genuinely one of a kind.
          </p>
        </div>
      </div>
    </section>
  );
}
