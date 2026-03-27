"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

interface Step {
  num: string;
  title: string;
  tag?: string;
  description: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Felderítő konzultáció",
    tag: "díjmentes",
    description:
      "Egy strukturált online meeting során feltárjuk az üzleti célokat, a jelenlegi digitális állapotot és a növekedési kihívásokat. Azonosítjuk, hol tudunk segíteni, vagy őszintén elmondjuk, ha nem mi leszünk a megfelelő választás.",
  },
  {
    num: "02",
    title: "Stratégiai audit",
    description:
      "Elemzés a marketing, sales, belsős rendszerek és folyamatok jelenlegi állapotáról. Azonosítjuk a növekedési lehetőségeket, szűk keresztmetszeteket és prioritásokat.",
  },
  {
    num: "03",
    title: "Integrált növekedési terv",
    description:
      "Kidolgozzuk a teljes rendszert: marketing + sales + tech + AI + szakértői brand. Meghatározzuk az integrációs pontokat, és készítünk egy részletes roadmap-et.",
  },
  {
    num: "04",
    title: "Párhuzamos építkezés",
    description:
      "Szakértői csapataink (podok) párhuzamosan dolgoznak, de rendszeres egyeztetéssel biztosítjuk az összhangot. Minden elem támogatja a másikat, így biztosítva az integrált működést.",
  },
  {
    num: "05",
    title: "Folyamatos optimalizálás",
    description:
      "Havonta finomhangolunk, negyedévente részletesen értékelünk. Folyamatosan mérjük az eredményeket, közösen tanulunk és fejlődünk belőlük. Skálázzuk ami működik, módosítjuk ami nem.",
  },
  {
    num: "06",
    title: "Hosszú távú partnerség",
    description:
      "Nem projektalapú, hanem biztonságot nyújtó partneri viszony keretében dolgozunk együtt ügyfeleinkkel, ahol együtt növekszünk, közös érdekek mentén. Átlagosan 2+ év az együttműködési mutató (átlag LTV 26 hónap).",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const hydrated = useHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function check() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      setIsActive(rect.top >= 0 && rect.top < trigger);
    }

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={hydrated ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative p-6 md:p-8 rounded-2xl transition-all duration-500 ${
        isActive
          ? "border border-blue/30 bg-dark-card shadow-[0_0_40px_rgba(0,56,255,0.06)]"
          : "elevated-card"
      }`}
    >
      <div className="flex gap-5 md:gap-6">
        {/* Number */}
        <span
          className={`flex-shrink-0 font-safiro text-3xl md:text-4xl transition-colors duration-500 heading-card ${
            isActive ? "text-blue" : "text-white/10"
          }`}
        >
          {step.num}
        </span>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-safiro text-xl md:text-2xl text-white heading-card">
              {step.title}
            </h3>
            {step.tag && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20">
                {step.tag}
              </span>
            )}
          </div>
          <p className="text-secondary text-sm leading-relaxed max-w-lg">
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
    <section className="section-padding px-6" ref={containerRef}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white"
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
          <div className="space-y-4">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
