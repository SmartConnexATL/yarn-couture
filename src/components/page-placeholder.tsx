import { Eyebrow } from "@/components/eyebrow";

export function PagePlaceholder({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="mx-auto flex max-w-content flex-col gap-6 px-6 py-24 sm:px-10 lg:px-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-h1 text-foreground">{title}</h1>
      <p className="max-w-md text-body text-muted">{description}</p>
    </main>
  );
}
