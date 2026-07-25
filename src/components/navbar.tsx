import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <Link href="/" className="font-display text-h3 text-foreground">
          Yarn Couture
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-caption font-semibold uppercase text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
