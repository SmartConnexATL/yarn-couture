import { Eyebrow } from "@/components/eyebrow";

export function CatalogTeaserSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div>
              <Eyebrow>Shop Our Collection</Eyebrow>
              <h2 className="mt-4 font-display text-h2 text-foreground">
                Discover Our Yarns
              </h2>
            </div>

            <p className="max-w-md text-body text-muted leading-relaxed">
              Browse our curated collection of hand-dyed, artisan yarns. Each piece is crafted in limited quantities to ensure quality and uniqueness. From luxe blends to textured art yarns, find the perfect fiber for your next project.
            </p>

            <div className="flex gap-3">
              <span className="text-h3 font-display text-accent">✓</span>
              <div>
                <p className="font-semibold text-foreground">Premium Quality</p>
                <p className="text-small text-muted">Sourced and crafted with care</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-h3 font-display text-accent">✓</span>
              <div>
                <p className="font-semibold text-foreground">Limited Runs</p>
                <p className="text-small text-muted">One-of-a-kind batches</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-h3 font-display text-accent">✓</span>
              <div>
                <p className="font-semibold text-foreground">Custom Orders</p>
                <p className="text-small text-muted">Inquire about special colors</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="/catalog" className="inline-block rounded-sm bg-primary px-8 py-3 font-semibold uppercase text-surface transition-colors hover:bg-primary-hover">
                View Catalog
              </a>
              <a href="/contact" className="inline-block rounded-sm border-2 border-primary px-8 py-3 font-semibold uppercase text-primary transition-colors hover:bg-primary/5">
                Contact
              </a>
            </div>
          </div>

          {/* Decorative element or image placeholder */}
          <div className="relative">
            <div className="bg-primary/10 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center">
                <p className="text-h3 font-display text-primary mb-4">Featured</p>
                <p className="text-body text-muted">Product showcase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
