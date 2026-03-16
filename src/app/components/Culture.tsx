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
    <section id="kultura" className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute -top-20 -left-40 w-[500px] h-[500px] glow-orb-blue opacity-30" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] glow-orb-magenta opacity-25" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <SectionLabel>Kultúra</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mt-5 mb-4"
          >
            Kontrasztok harmóniája
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray max-w-2xl mx-auto"
            delay={0.1}
          >
            Az igazi értékek egy szervezet életében nem a falra írt szlogenek –
            hanem a mindennapi döntések.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-blue/15 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,56,255,0.04)] transition-all duration-300"
            >
              <h3 className="font-safiro text-lg text-white mb-4">
                {value.title}
              </h3>
              <ul className="space-y-2">
                {value.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray leading-relaxed flex gap-2"
                  >
                    <span className="text-blue/50 mt-0.5 flex-shrink-0">–</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#konzultacio">Dolgozzunk együtt</Button>
        </motion.div>
      </div>
    </section>
  );
}
