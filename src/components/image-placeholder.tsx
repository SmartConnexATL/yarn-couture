export function ImagePlaceholder({
  label,
  className = ""
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-surface p-8 text-center ${className}`}
    >
      <p className="max-w-[24ch] whitespace-pre-line text-small text-muted">{label}</p>
    </div>
  );
}
