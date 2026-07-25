export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-caption font-semibold uppercase text-accent">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}
