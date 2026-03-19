"use client";

import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

interface Step {
  num: string;
  title: string;
  tag?: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Felderítő konzultáció",
    tag: "díjmentes",
    description:
      "Egy strukturált online meeting során feltárjuk az üzleti célokat, a jelenlegi digitális állapotot és a növekedési kihívásokat. Azonosítjuk, hol tudunk segíteni, vagy őszintén elmondjuk, ha nem mi leszünk a megfelelő választás.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Stratégiai audit",
    description:
      "Elemzés a marketing, sales, belsős rendszerek és folyamatok jelenlegi állapotáról. Azonosítjuk a növekedési lehetőségeket, szűk keresztmetszeteket és prioritásokat.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M8 11h6" />
        <path d="M11 8v6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Integrált növekedési terv",
    description:
      "Kidolgozzuk a teljes rendszert: marketing + sales + tech + AI + szakértői brand. Meghatározzuk az integrációs pontokat, és készítünk egy részletes roadmap-et.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 10l2 2 4-4" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Párhuzamos építkezés",
    description:
      "Szakértői csapataink (podok) párhuzamosan dolgoznak, de rendszeres egyeztetéssel biztosítjuk az összhangot. Minden elem támogatja a másikat, így biztosítva az integrált működést.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Folyamatos optimalizálás",
    description:
      "Havonta finomhangolunk, negyedévente részletesen értékelünk. Folyamatosan mérjük az eredményeket, közösen tanulunk és fejlődünk belőlük. Skálázzuk ami működik, módosítjuk ami nem.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.5 2v6h-6" />
        <path d="M2.5 22v-6h6" />
        <path d="M21.5 8A9.96 9.96 0 0 0 12 2a9.96 9.96 0 0 0-7.5 3.5" />
        <path d="M2.5 16A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 7.5-3.5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Hosszú távú partnerség",
    description:
      "Nem projektalapú, hanem biztonságot nyújtó partneri viszony keretében dolgozunk együtt ügyfeleinkkel, ahol együtt növekszünk, közös érdekek mentén. Átlagosan 2+ év az együttműködési mutató (átlag LTV 26 hónap).",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const hydrated = useHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={hydrated ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative p-6 md:p-8 rounded-xl border transition-all duration-500 ${
        isInView
          ? "border-blue/30 bg-dark-card shadow-[0_0_40px_rgba(0,56,255,0.06)]"
          : "border-white/[0.06] bg-white/[0.01]"
      }`}
    >
      <div className="flex gap-5 md:gap-8">
        {/* Icon + Number */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isInView
                ? "bg-blue/20 shadow-[0_0_16px_rgba(0,56,255,0.15)]"
                : "bg-blue/10"
            }`}
          >
            <span
              className={`w-5 h-5 transition-colors duration-500 ${
                isInView ? "text-blue" : "text-gray"
              }`}
            >
              {step.icon}
            </span>
          </div>
          <span
            className={`font-safiro text-3xl md:text-4xl transition-colors duration-500 ${
              isInView ? "text-blue" : "text-white/10"
            }`}
          >
            {step.num}
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-safiro text-lg md:text-xl text-white">
              {step.title}
            </h3>
            {step.tag && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20">
                {step.tag}
              </span>
            )}
          </div>
          <p className="text-gray text-sm leading-relaxed max-w-lg">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="py-16 md:py-24 px-6" ref={containerRef}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white"
          >
            Hogyan dolgozunk?
          </AnimatedText>
        </div>

        {/* Vertical progress bar layout */}
        <div className="grid grid-cols-[4px_1fr] gap-6">
          {/* Progress track */}
          <div className="relative bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue rounded-full"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
