"use client";

const words = ["megújulás", "fejlődés", "adaptálódás"];

export default function MarqueeStrip() {
  const content = Array(10)
    .fill(words)
    .flat()
    .map((word, i) => (
      <span key={i} className="flex items-center gap-4 mx-4 sm:gap-8 sm:mx-8">
        <span className="font-safiro text-[11px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap text-white/50">
          {word}
        </span>
        <span className="w-1 h-1 rounded-full bg-blue/40" />
      </span>
    ));

  return (
    <div className="relative">
      {/* Top blue accent line — landin-inspired section break */}
      <div className="section-break-blue" />

      <div className="bg-white/[0.03] backdrop-blur-md border-y border-white/[0.06] py-3 overflow-hidden">
        <div className="flex animate-marquee">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
