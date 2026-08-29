import Image from "next/image";

export function ImagePlaceholder({
  label,
  className = "",
  src,
  alt,
  sizes = "100vw",
  priority = false,
  imageClassName = ""
}: {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  imageClassName?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden border border-border bg-surface ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-surface p-8 text-center ${className}`}
    >
      <p className="max-w-[24ch] whitespace-pre-line text-small text-muted">{label}</p>
    </div>
  );
}
