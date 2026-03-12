"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const blocks = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 8l16 16M24 8L8 24" stroke="#EF34FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Marketing és sales szétválva",
    description:
      "A legtöbb cégnél a marketing és az értékesítés két külön világ. Az üzenetek, a célközönség és a mérőszámok nem találkoznak.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="#EF34FF" strokeWidth="2" />
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#EF34FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Szakértelem nem jelenik meg online",
    description:
      "Évtizedes tudás és tapasztalat rejtve marad. A potenciális ügyfelek nem találnak rátok, mert digitálisan láthatatlanok vagytok.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
    <section id="kihivas" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>A kihívás</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-8"
          >
            Nő a digitális szakadék
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-light-gray leading-relaxed"
            delay={0.1}
          >
            A magyar B2B és ipari cégek többsége még mindig hagyományos
            eszközökkel próbál növekedni egy digitális világban. A marketing
            kampányok szétszórtak, az értékesítési folyamatok manuálisak, a
            rendszerek nem beszélnek egymással.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-white font-medium mt-6"
            delay={0.2}
          >
            Mert a digitalizáció halad. Te miért maradnál?
          </AnimatedText>
        </div>

        {/* Central X motif + 4 blocks */}
        <div className="relative">
          {/* Central animated X */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 opacity-10"
            >
              <svg viewBox="0 0 100 100" fill="none">
                <path d="M20 20L80 80M80 20L20 80" stroke="#EF34FF" strokeWidth="3" />
                <path d="M50 10V90M10 50H90" stroke="#0038FF" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-magenta/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="mb-4">{block.icon}</div>
                <h3 className="font-safiro text-xl text-white mb-3">
                  {block.title}
                </h3>
                <p className="text-gray leading-relaxed text-sm">
                  {block.description}
                </p>
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
          <Button href="#modszertan">Kezdjük el a felzárkózást</Button>
        </motion.div>
      </div>
    </section>
  );
}
