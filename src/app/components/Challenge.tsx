"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const blocks = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 8l16 16M24 8L8 24" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Marketing és sales szétválva",
    description:
      "A legtöbb cégnél a marketing és az értékesítés két külön világ. Az üzenetek, a célközönség és a mérőszámok nem találkoznak.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" stroke="#0038FF" strokeWidth="2" />
        <rect x="18" y="18" width="10" height="10" stroke="#0038FF" strokeWidth="2" />
        <path d="M14 9h4M9 14v4" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Rendszerek nincsenek integrálva",
    description:
      "CRM, ERP, marketing automatizáció, weboldal – mind külön sziget. Az adatok nem áramlanak, a döntések nem adatvezéreltek.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="#0038FF" strokeWidth="2" />
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Szakértelem nem jelenik meg online",
    description:
      "Évtizedes tudás és tapasztalat rejtve marad. A potenciális ügyfelek nem találnak rátok, mert digitálisan láthatatlanok vagytok.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 24l8-8 4 4 12-12" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8h8v8" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Erősödő verseny",
    description:
      "A versenytársaid már digitalizálnak. Aki most nem lép, az nemcsak lemarad – kiszorul a piacról.",
  },
];

export default function Challenge() {
  return (
    <section id="kihivas" className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] glow-orb-blue opacity-40" />
      <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] glow-orb-magenta opacity-30" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>A kihívás</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mt-5 mb-6"
          >
            Nő a digitális szakadék
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray leading-relaxed"
            delay={0.1}
          >
            A magyar B2B és ipari cégek többsége még mindig hagyományos
            eszközökkel próbál növekedni egy digitális világban. A marketing
            kampányok szétszórtak, az értékesítési folyamatok manuálisak, a
            rendszerek nem beszélnek egymással.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-white font-medium mt-4"
            delay={0.2}
          >
            Mert a digitalizáció halad. Te miért maradnál?
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-blue/15 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,56,255,0.04)] transition-all duration-300"
            >
              <div className="mb-3 text-blue">{block.icon}</div>
              <h3 className="font-safiro text-lg text-white mb-2">
                {block.title}
              </h3>
              <p className="text-gray leading-relaxed text-sm">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#modszertan">Kezdjük el a felzárkózást</Button>
        </motion.div>
      </div>
    </section>
  );
}
