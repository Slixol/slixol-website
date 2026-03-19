"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const lines = [
  "A slixol azoknak szól, akik hisznek a közösség erejében.",
  "Egy hely azok számára...",
  "...akik felismerik, hogy a valódi változás nem egyéni teljesítmény, hanem közös célok és értékek mentén végzett munka eredménye.",
  "...akikben megvan a bátorság, hogy kérdezzenek; a kitartás, hogy válaszokat találjanak; és az alázat, hogy fejlődjenek.",
  "...akik a megszokott helyett új utakat keresnek, és a változásban nem fenyegetést, hanem lehetőséget látnak.",
  "...akik hisznek abban, hogy az alkotás értéke nem csak a végeredmény, hanem a közösen bejárt út.",
  "...akik mernek kockáztatni, mernek hibázni és képesek tanulni belőle.",
  "...akik nem félnek radikálisan felelősséget vállalni és őszintén kommunikálni.",
  "A slixol az ő otthonuk. Mert a legjobb dolgok nem maguktól történnek, azokat meg kell teremteni.",
  "Veled, veletek, közösen. Együtt.",
  "Ha magadra ismersz, te is közénk tartozol. Örülnénk neked a csapatban, akár munkatársként, akár ügyfélként csatlakozol.",
];

function ManifestoLine({ line, index, total }: { line: string; index: number; total: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.6]);

  const isEmphasis = index === 0 || index >= total - 3;

  return (
    <motion.p
      ref={ref}
      style={{ opacity }}
      className={`font-safiro font-semibold leading-snug text-white transition-colors duration-300 ${
        isEmphasis
          ? "text-xl md:text-3xl"
          : "text-lg md:text-2xl"
      } ${line.startsWith("...") ? "pl-4 md:pl-8" : ""}`}
    >
      {line}
    </motion.p>
  );
}

export default function Manifesto() {
  const hydrated = useHydrated();

  return (
    <section className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
        <motion.span
          initial={hydrated ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block font-safiro text-5xl md:text-7xl lg:text-8xl text-gradient-blue-magenta opacity-20 uppercase tracking-widest mb-12 text-center select-none"
        >
          manifesto
        </motion.span>

        <div className="space-y-5 md:space-y-7">
          {lines.map((line, i) => (
            <ManifestoLine key={i} line={line} index={i} total={lines.length} />
          ))}
        </div>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="mailto:brief@slixol-media.com">Csatlakozz hozzánk</Button>
        </motion.div>
      </div>
    </section>
  );
}
