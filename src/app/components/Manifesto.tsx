"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./ui/Button";

const lines = [
  "A slixol azoknak szól, akik hisznek a közösség erejében.",
  "Egy hely azok számára...",
  "...akik nem elégszenek meg a középszerűvel.",
  "...akik mernek kérdezni, és mernek válaszolni.",
  "...akik a változásban lehetőséget látnak, nem fenyegetést.",
  "...akik tudják, hogy egyedül gyorsabb, de együtt messzebb jutunk.",
  "...akik építenek, nem csak álmodnak.",
  "...akik a kudarcból is tanulságot csinálnak.",
  "...akik nem várják a jövőt – hanem csinálják.",
  "A slixol az ő otthonuk. A te otthonod.",
  "Veled, veletek, közösen. Együtt.",
  "Ha magadra ismersz, te is közénk tartozol.",
];

function ManifestoLine({ line, index, total }: { line: string; index: number; total: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 1, 1, 0.35]);
  const fontWeight = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [400, 600, 600, 400]);

  const isEmphasis = index === 0 || index >= total - 3;

  return (
    <motion.p
      ref={ref}
      style={{ opacity, fontWeight }}
      className={`font-safiro leading-snug transition-colors duration-300 ${
        isEmphasis
          ? "text-2xl md:text-4xl"
          : "text-xl md:text-3xl"
      } ${line.startsWith("...") ? "pl-4 md:pl-8" : ""}`}
    >
      {line}
    </motion.p>
  );
}

export default function Manifesto() {
  return (
    <section className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block font-safiro text-5xl md:text-7xl lg:text-8xl text-white/[0.03] uppercase tracking-widest mb-12 text-center select-none"
        >
          manifesto
        </motion.span>

        <div className="space-y-5 md:space-y-7">
          {lines.map((line, i) => (
            <ManifestoLine key={i} line={line} index={i} total={lines.length} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#konzultacio">Csatlakozz hozzánk</Button>
        </motion.div>
      </div>
    </section>
  );
}
