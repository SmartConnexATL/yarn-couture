import { ImagePlaceholder } from "@/components/image-placeholder";

export default function Home() {
  return (
    <main>
      {/* ===== SECTION 1: HERO — Magazine Full-Bleed ===== */}
      <section className="bg-surface overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] lg:min-h-screen items-stretch">
          {/* Left: Bold Typography */}
          <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-0 order-2 lg:order-1 bg-gradient-to-br from-surface via-surface to-surface/95">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[2px] text-accent mb-8 block">
                ━━ Handmade Crochet & Knit ━━
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 text-foreground font-black">
                Wear Your<br />
                <span className="text-accent italic">Culture</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted mb-12 max-w-md">
                Unique, handmade crochet and knitted pieces inspired by your story. Hand-dyed art yarn in bold, beautiful colors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/catalog"
                  className="inline-flex items-center justify-center bg-foreground text-surface px-8 py-4 font-bold uppercase text-xs tracking-wider hover:bg-accent hover:text-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  ✨ Explore Colorways
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-foreground text-foreground px-8 py-4 font-bold uppercase text-xs tracking-wider hover:bg-foreground hover:text-surface transition-all duration-300 hover:shadow-lg"
                >
                  💌 Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right: Full-Bleed Image */}
          <div className="order-1 lg:order-2 min-h-[40vh] lg:min-h-full relative">
            <ImagePlaceholder
              label="PHOTO 1: Hero Image

Your best yarn photo OR finished crochet piece
Aspect Ratio: Portrait (9:16) or Square (1:1)
Mood: Bold, beautiful, magazine cover quality"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface/20 lg:to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURED COLLECTION — Asymmetrical ===== */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary text-surface">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Large Feature Image */}
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-2xl">
              <ImagePlaceholder
                label="PHOTO 2: Featured Collection Close-Up

Detailed, artistic close-up of your yarn
Show color depth, texture, light play
Aspect Ratio: Square (1:1)
Mood: Artisanal, tactile, magazine beauty shot"
                className="aspect-square w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[2px] text-accent mb-4 block">
                  ━━ Featured Collection ━━
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.2] font-black">
                  Handmade
                  <br />
                  <span className="text-accent italic">With Love</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-surface/95 font-light">
                Each piece is hand-crocheted and hand-knitted using premium, hand-dyed fibers. We celebrate culture, style, and personal expression through every stitch.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-surface/95 font-light border-l-4 border-accent pl-6 italic">
                From sports-inspired pieces to cultural tributes — your story deserves to be worn with pride.
              </p>

              <div className="pt-4">
                <a
                  href="/catalog"
                  className="inline-flex items-center justify-center bg-accent text-foreground px-8 py-4 font-bold uppercase text-xs tracking-wider hover:bg-surface hover:text-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  ✨ View All Colors
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHY YARN COUTURE — 3 Features with Images ===== */}
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[2px] text-accent block">
              ━━ What Makes Us Different ━━
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-foreground font-black">
              Support.
              <br />
              <span className="text-accent italic">Style. Passion.</span>
            </h2>
            <p className="text-center text-muted text-base sm:text-lg max-w-2xl mx-auto font-light">
              Every piece is a celebration of handcraft, quality, and cultural expression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PHOTO 3A: Handmade Craftsmanship

Hands crocheting or finished piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">🧶 Handmade</h3>
                <p className="text-muted leading-relaxed">
                  Each piece is hand-crocheted or hand-knitted with meticulous attention to detail and love.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PHOTO 3B: Colorful Collection

Bundle of colorful finished pieces or yarn
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">🎨 Inspired by Culture</h3>
                <p className="text-muted leading-relaxed">
                  Designs celebrating nations, sports, and stories. Your culture deserves to be celebrated.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PHOTO 3C: Community & Pride

People wearing finished crochet pieces
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">💚 Built on Passion</h3>
                <p className="text-muted leading-relaxed">
                  A brand born from love for craft. Supporting makers and celebrating unique, individual style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: PRODUCT CATALOG ===== */}
      <section className="bg-gradient-to-br from-foreground via-primary to-foreground text-surface">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[2px] text-accent block">
              ━━ Our Collection ━━
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-black">Current Colorways</h2>
            <p className="text-base sm:text-lg text-surface/90 font-light">
              Browse our collection and find your next obsession
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Product 1 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 1

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Ocean Pride
                </h3>
                <p className="text-surface/80">
                  Deep blue & silver — perfect for ocean lovers
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 2

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Sunset Vibes
                </h3>
                <p className="text-surface/80">
                  Warm terracotta & gold — celebrate in style
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 3

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Nature's Call
                </h3>
                <p className="text-surface/80">
                  Sage & moss tones — earthy and timeless
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 4

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Royal Jewels
                </h3>
                <p className="text-surface/80">
                  Emerald & violet — bold and luxurious
                </p>
              </div>
            </div>

            {/* Product 5 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 5

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Classic Ivory
                </h3>
                <p className="text-surface/80">
                  Soft & neutral — goes with everything
                </p>
              </div>
            </div>

            {/* Product 6 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  label="PRODUCT PHOTO 6

Finished crochet/knit piece
Aspect Ratio: Square (1:1)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-bold uppercase text-sm tracking-wide mb-2">
                  Handmade Crochet
                </p>
                <h3 className="font-display text-2xl text-surface mb-2">
                  Passion Purple
                </h3>
                <p className="text-surface/80">
                  Deep purple with burgundy — moody & chic
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/catalog"
              className="inline-block bg-accent text-primary px-10 py-4 font-semibold uppercase text-sm tracking-wide hover:bg-accent/90 transition"
            >
              View Full Catalog
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CALL TO ACTION ===== */}
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl mx-auto">
            {/* Main CTA */}
            <div className="text-center mb-16 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[2px] text-accent block">
                ━━ Get In Touch ━━
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground font-black leading-[1.1]">
                Let&apos;s Create
                <br />
                <span className="text-accent italic">Together</span>
              </h2>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto font-light">
                Have questions? Want to see colors in person? Ready to place an order? We're here and excited to connect with fellow makers.
              </p>

              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-foreground text-surface px-10 py-5 font-bold uppercase text-xs tracking-wider hover:bg-accent hover:text-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  💌 Send Inquiry
                </a>
              </div>
            </div>

            {/* Festival Highlight */}
            <div className="mb-12 bg-gradient-to-r from-accent/5 to-accent/10 border-2 border-accent rounded-lg p-8 text-center">
              <p className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">
                🎉 See Us Live
              </p>
              <h3 className="text-foreground font-black text-2xl sm:text-3xl mb-4">
                Visit our booth on September 12th!
              </h3>
              <p className="text-muted text-base leading-relaxed max-w-xl mx-auto">
                Experience the colors in person. Chat with us about your creative projects. Discover your next favorite yarn.
              </p>
            </div>

            {/* Contact Info */}
            <div className="pt-12 border-t border-border space-y-8">
              <p className="text-center text-muted uppercase text-xs font-bold tracking-widest">Quick Contact</p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center sm:text-left">
                <a
                  href="mailto:itsyarncouature@gmail.com"
                  className="hover:text-accent transition font-bold text-foreground group"
                >
                  <p className="text-xs uppercase text-muted mb-1">Email</p>
                  <p className="text-base">itsyarncouture@gmail.com</p>
                </a>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <a
                  href="tel:6788029122"
                  className="hover:text-accent transition font-bold text-foreground"
                >
                  <p className="text-xs uppercase text-muted mb-1">Phone</p>
                  <p className="text-base">678-802-9122</p>
                </a>
              </div>

              <div className="flex gap-8 justify-center items-center">
                <a
                  href="https://www.instagram.com/the_yarncouture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 hover:scale-110 transition transform"
                  title="Instagram"
                >
                  {/* Instagram Icon */}
                  <svg className="w-8 h-8 text-accent group-hover:text-accent/80 transition" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61590583277686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 hover:scale-110 transition transform"
                  title="Facebook"
                >
                  {/* Facebook Icon */}
                  <svg className="w-8 h-8 text-accent group-hover:text-accent/80 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
