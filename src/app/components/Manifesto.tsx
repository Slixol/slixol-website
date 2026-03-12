"use client";

import { motion } from "framer-motion";
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

export default function Manifesto() {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magenta/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block font-safiro text-5xl md:text-7xl lg:text-8xl text-white/5 uppercase tracking-widest mb-16 text-center"
        >
          manifesto
        </motion.span>

        <div className="space-y-6 md:space-y-8">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`font-safiro leading-snug ${
                i === 0 || i >= lines.length - 3
                  ? "text-2xl md:text-4xl text-white"
                  : "text-xl md:text-3xl text-light-gray"
              } ${line.startsWith("...") ? "pl-4 md:pl-8" : ""}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href="#konzultacio">Csatlakozz hozzánk</Button>
        </motion.div>
      </div>
    </section>
  );
}
