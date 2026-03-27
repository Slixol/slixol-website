"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const blocks = [
  {
    number: "01",
    title: "Marketing és sales szétválva",
    description:
      "A marketing nem integrált az értékesítéssel. Az értékesítés nem támogatott megfelelő eszközökkel.",
  },
  {
    number: "02",
    title: "Rendszerek nincsenek integrálva",
    description:
      "A folyamatok nem digitalizáltak. Az AI lehetőségek kihasználatlanok. A CRM üres vagy még nincs is bevezetve.",
  },
  {
    number: "03",
    title: "Szakértelem nem jelenik meg online",
    description:
      "Évtizedek alatt felépített tudás rejtve marad a digitális térben.",
  },
  {
    number: "04",
    title: "Erősödő verseny",
    description:
      "A piac változik. Az új generációs vevők már máshogy döntenek. A versenytársak gyorsabban adaptálódnak.",
  },
];

export default function Challenge() {
  const hydrated = useHydrated();

  return (
    <section id="kihivas" className="section-padding px-6 relative overflow-hidden">
      {/* Background glow orb — blue only, no magenta mixing */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] glow-orb-blue opacity-30" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-10 md:mb-14 max-w-3xl mx-auto text-center">
          <SectionLabel>A kihívás</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6 mb-8"
          >
            Nő a digitális szakadék
          </AnimatedText>

          {/* Intro — two paragraphs condensed from three */}
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary leading-relaxed"
            delay={0.1}
          >
            A legtöbb ipari és B2B cégnél megvannak az alapok: stabil
            pozíció, tapasztalt csapat, jól működő termékek. De miközben a piac
            digitálisan fejlődik, az offline szakértelem és a digitális jelenlét
            között egyre nagyobb szakadék tátong.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary leading-relaxed mt-5"
            delay={0.15}
          >
            A digitális átalakulás nem egyszeri projekt. Folyamatos adaptálódás
            szükséges — és minél később kezdjük, annál nagyobb a felzárkózás ára.
          </AnimatedText>

          {/* Visual break — blue accent line */}
          <motion.div
            initial={hydrated ? { opacity: 0, scaleX: 0 } : false}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="origin-center w-12 h-0.5 bg-blue mx-auto mt-8 mb-8"
          />

          {/* Hook — visually elevated pull quote */}
          <AnimatedText
            as="p"
            className="font-safiro text-xl md:text-2xl text-white leading-snug"
            delay={0.25}
          >
            A kérdés nem az, hogy szükséges-e a változás.
            <br />
            <span className="text-blue">Hanem az, hogy mikor kezdjük el.</span>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={hydrated ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group elevated-card p-7 md:p-9"
            >
              {/* Number instead of stock icon */}
              <span className="block font-safiro text-2xl text-blue/50 mb-4 heading-card" aria-hidden="true">
                {block.number}
              </span>
              <h3 className="font-safiro text-xl md:text-2xl text-white mb-3 heading-card">
                {block.title}
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                {block.description}
              </p>
            </motion.div>
          ))}

          {/* Center pulsating orb between the 4 cards */}
          <motion.div
            initial={hydrated ? { opacity: 0, scale: 0.5 } : false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center z-10"
          >
            <div className="absolute w-14 h-14 rounded-full bg-blue/15 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute w-10 h-10 rounded-full bg-dark-card border border-blue/20" />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="relative z-10">
              <path d="M4 4l12 12M16 4L4 16" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button href="#konzultacio">Kezdjük el a felzárkózást</Button>
        </motion.div>
      </div>
    </section>
  );
}
