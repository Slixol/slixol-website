"use client";

const words = ["megújulás", "fejlődés", "adaptálódás"];

export default function MarqueeStrip() {
  const content = Array(10)
    .fill(words)
    .flat()
    .map((word, i) => (
      <span key={i} className="flex items-center gap-6 mx-6">
        <span className="font-safiro text-xs md:text-sm tracking-widest whitespace-nowrap">
          {word}
        </span>
        <span className="w-1 h-1 rounded-full bg-white/40" />
      </span>
    ));

  return (
    <div className="bg-white/[0.04] backdrop-blur-md border-y border-white/[0.06] py-1.5 overflow-hidden">
      <div className="flex animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
