"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const lines: React.ReactNode[] = [
  "A slixol azoknak szól, akik hisznek a közösség erejében.",
  "Egy hely azok számára...",
  <>...akik felismerik, hogy a <span className="text-blue">valódi változás</span> nem egyéni teljesítmény, hanem közös célok és értékek mentén végzett munka eredménye.</>,
  <>...akikben megvan a <span className="text-blue">bátorság</span>, hogy kérdezzenek; a <span className="text-blue">kitartás</span>, hogy válaszokat találjanak; és az <span className="text-blue">alázat</span>, hogy fejlődjenek.</>,
  <>...akik a megszokott helyett <span className="text-blue">új utakat</span> keresnek, és a változásban nem fenyegetést, hanem <span className="text-blue">lehetőséget</span> látnak.</>,
  <>...akik hisznek abban, hogy az alkotás értéke nem csak a végeredmény, hanem a <span className="text-blue">közösen bejárt út</span>.</>,
  <>...akik mernek <span className="text-blue">kockáztatni</span>, mernek <span className="text-blue">hibázni</span> és képesek <span className="text-blue">tanulni</span> belőle.</>,
  <>...akik nem félnek radikálisan felelősséget vállalni és <span className="text-blue">őszintén kommunikálni</span>.</>,
  "A slixol az ő otthonuk. Mert a legjobb dolgok nem maguktól történnek, azokat meg kell teremteni.",
  "Veled, veletek, közösen. Együtt.",
  "Ha magadra ismersz, te is közénk tartozol. Örülnénk neked a csapatban, akár munkatársként, akár ügyfélként csatlakozol.",
];

function ManifestoLine({
  line,
  index,
  total,
}: {
  line: React.ReactNode;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.08, 1, 1, 0.08]
  );

  // First line and last 3 lines get slight emphasis
  const isEmphasis = index === 0 || index >= total - 3;

  return (
    <motion.p
      ref={ref}
      style={{ opacity }}
      className={`leading-relaxed text-white transition-colors duration-300 ${
        isEmphasis
          ? "font-safiro text-base md:text-lg font-medium"
          : "text-sm md:text-base font-normal"
      } ${index >= 2 && index <= 7 ? "pl-4 md:pl-6" : ""}`}
    >
      {line}
    </motion.p>
  );
}

export default function Manifesto() {
  const hydrated = useHydrated();

  return (
    <section className="section-padding px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-blue opacity-15" />

      <div className="relative mx-auto max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>Manifesto</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6"
          >
            Miért létezünk
          </AnimatedText>
        </div>

        {/* Manifesto card — anchored with frame + left accent */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative elevated-card p-8 md:p-12"
        >
          {/* Left blue accent line */}
          <div
            className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,56,255,0.4), rgba(0,56,255,0.05))",
            }}
          />

          {/* Dot pattern background */}
          <div className="absolute inset-0 bg-dot-pattern opacity-50 rounded-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4 md:space-y-5">
            {lines.map((line, i) => (
              <ManifestoLine
                key={i}
                line={line}
                index={i}
                total={lines.length}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button href="mailto:brief@slixol-media.com">
            Csatlakozz hozzánk
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
