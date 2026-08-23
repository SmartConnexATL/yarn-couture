const styles = {
  solid: "bg-foreground text-surface hover:bg-accent hover:text-foreground",
  outline:
    "border-2 border-foreground text-foreground hover:bg-foreground hover:text-surface",
  "solid-inverted": "bg-surface text-foreground hover:bg-accent hover:text-foreground",
  "outline-inverted":
    "border-2 border-surface text-surface hover:bg-surface hover:text-foreground"
} as const;

export function CtaLink({
  href,
  children,
  variant = "solid",
  inverted = false
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  inverted?: boolean;
}) {
  const key = inverted ? (`${variant}-inverted` as const) : variant;

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 px-9 py-4 text-small font-bold uppercase tracking-widest transition-colors duration-300 ${styles[key]}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  );
}
