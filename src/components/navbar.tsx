import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Yarn Couture"
            width={180}
            height={80}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-caption font-semibold uppercase text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:underline"
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
