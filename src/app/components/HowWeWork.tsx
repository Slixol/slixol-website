"use client";

import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const steps = [
  {
    num: "01",
    title: "Felderítő konzultáció",
    tag: "díjmentes",
    description:
      "60 perces online meeting, ahol megismerjük a céged, a kihívásaid és a céljaid. Nem pitchelünk – kérdezünk és hallgatunk.",
  },
  {
    num: "02",
    title: "Stratégiai audit",
    description:
      "Elemezzük a marketing, sales és rendszer infrastruktúrádat. Azonosítjuk a réseket, a duplikációkat és a lehetőségeket.",
  },
  {
    num: "03",
    title: "Integrált növekedési terv",
    description:
      "Roadmap készítés – konkrét lépésekkel, időtávokkal, felelősökkel. Nem egy PowerPoint, hanem egy működő terv.",
  },
  {
    num: "04",
    title: "Párhuzamos építkezés",
    description:
      "A pod-ok összehangoltan dolgoznak. A marketing nem vár a tech-re, a sales nem vár a content-re. Minden egyszerre halad.",
  },
  {
    num: "05",
    title: "Folyamatos optimalizálás",
    description:
      "Havi finomhangolás, negyedéves értékelés. Mérjük, elemezzük, iterálunk. Az eredmények beszélnek.",
  },
  {
    num: "06",
    title: "Hosszú távú partnerség",
    description:
      "Az átlag együttműködési idő 26 hónap. Nem projekteket viszünk – hanem vállalatokat növesztünk.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Hogyan dolgozunk?
          </AnimatedText>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex gap-6 md:gap-8 group pb-12 last:pb-0"
              >
                {/* Number node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-dark flex items-center justify-center group-hover:border-magenta/40 transition-colors duration-300">
                    <span className="font-safiro text-sm md:text-base text-gray group-hover:text-magenta transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3 md:pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-safiro text-xl md:text-2xl text-white">
                      {step.title}
                    </h3>
                    {step.tag && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-magenta/10 text-magenta border border-magenta/20">
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray text-sm md:text-base leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href="#konzultacio">Díjmentes konzultáció</Button>
        </motion.div>
      </div>
    </section>
  );
}
