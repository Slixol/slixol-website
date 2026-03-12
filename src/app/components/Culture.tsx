"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const values = [
  {
    title: "Nem túl komolyan",
    points: [
      "Komolyak vagyunk a munkánkban, de nem magunkban.",
      "Humor, kreativitás és energia – ezek hajtanak minket.",
    ],
  },
  {
    title: "Radikális felelősséget vállalva",
    points: [
      "Nem mutogatunk – megoldjuk.",
      "Ha hiba van, először a tükörbe nézünk.",
      "Ownership, nem taszkmenedzsment.",
    ],
  },
  {
    title: "Nyíltan kommunikálva",
    points: [
      "Nincs rejtett agenda.",
      "Mondjuk, ha valami nem működik – és azt is, ha igen.",
      "Transzparencia az alapértelmezett.",
    ],
  },
  {
    title: "Agilisan és hatékonyan",
    points: [
      "Sprint-ekben gondolkodunk, nem projektekben.",
      "Gyors iteráció, kevés bürokrácia.",
      "A sebesség versenyelőny.",
    ],
  },
  {
    title: "Ügyfélcentrikusan",
    points: [
      "Az ügyfél sikere a mi sikerünk.",
      "Nem eladunk – megoldást szállítunk.",
      "Hosszú távon gondolkodunk.",
    ],
  },
  {
    title: "Reziliensen",
    points: [
      "A kudarcból tanulunk, nem megállunk.",
      "Változik a piac? Adaptálódunk.",
      "Az ellenállóság a fenntarthatóság alapja.",
    ],
  },
];

export default function Culture() {
  return (
    <section id="kultura" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>Kultúra</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-6"
          >
            Kontrasztok harmóniája
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-light-gray max-w-2xl mx-auto"
            delay={0.1}
          >
            Az igazi értékek egy szervezet életében nem a falra írt szlogenek –
            hanem a mindennapi döntések.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-magenta/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h3 className="font-safiro text-xl text-white mb-5">
                {value.title}
              </h3>
              <ul className="space-y-2.5">
                {value.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray leading-relaxed flex gap-2"
                  >
                    <span className="text-magenta/60 mt-1 flex-shrink-0">–</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href="#konzultacio">Dolgozzunk együtt</Button>
        </motion.div>
      </div>
    </section>
  );
}
