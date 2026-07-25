import { Eyebrow } from "@/components/eyebrow";

export function CatalogTeaserSection() {
  return (
    <section className="border-t border-dashed border-border bg-primary">
      <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-6 py-20 sm:px-10 lg:px-12">
        <Eyebrow>Coming Soon</Eyebrow>
        <h2 className="font-display text-h2 text-surface">
          The catalog is coming.
        </h2>
        <p className="max-w-md text-body text-surface/80">
          We&rsquo;re building the full product catalog next. Check back soon
          to browse and inquire about available pieces.
        </p>
      </div>
    </section>
  );
}
