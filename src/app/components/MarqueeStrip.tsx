"use client";

const words = ["megújulás", "fejlődés", "adaptálódás"];

export default function MarqueeStrip() {
  const content = Array(10)
    .fill(words)
    .flat()
    .map((word, i) => (
      <span key={i} className="flex items-center gap-6 mx-6">
        <span className="font-safiro text-lg md:text-xl uppercase tracking-widest whitespace-nowrap">
          {word}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </span>
    ));

  return (
    <div className="bg-blue py-3 overflow-hidden">
      <div className="flex animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
