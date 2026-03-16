import Image from "next/image";

interface ImagePlaceholderProps {
  className?: string;
  src?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  className = "aspect-video",
  src,
  alt = "",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`bg-white/[0.06] rounded-xl flex items-center justify-center ${className}`}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/20"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}
