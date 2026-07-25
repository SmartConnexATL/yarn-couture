import { BrandStorySection } from "@/components/landing/brand-story-section";
import { CatalogTeaserSection } from "@/components/landing/catalog-teaser-section";
import { HeroSection } from "@/components/landing/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <CatalogTeaserSection />
    </main>
  );
}
