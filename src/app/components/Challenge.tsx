"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const blocks = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 8l16 16M24 8L8 24" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Marketing és sales szétválva",
    description:
      "A marketing nem integrált az értékesítéssel. Az értékesítés nem támogatott megfelelő eszközökkel.",
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
      "A folyamatok nem digitalizáltak. Az AI lehetőségek kihasználatlanok. A CRM üres vagy még nincs is bevezetve a szervezetben.",
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
      "Évtizedek alatt felépített tudás rejtve marad a digitális térben.",
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
      "A piac változik. Az új generációs vevők már máshogy döntenek. A versenytársak gyorsabban adaptálódnak.",
  },
];

export default function Challenge() {
  const hydrated = useHydrated();

  return (
    <section id="kihivas" className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] glow-orb-blue opacity-40" />
      <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] glow-orb-magenta opacity-30" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12 max-w-3xl mx-auto text-center">
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
            A legtöbb ipari és B2B cégnél megvannak az alapok: (még) stabil
            pozíció, tapasztalt csapat, jól működő termékek vagy szolgáltatások.
            De miközben számos piac már digitálisan is fejlődik, sok vállalat
            offline szakértelme és digitális jelenléte között egyre nagyobb
            szakadék tátong.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray leading-relaxed mt-4"
            delay={0.15}
          >
            A digitális átalakulás nem egyszeri projekt vagy kampány. Ehhez
            folyamatos fejlődés és adaptálódás szükséges. Minél később kezdjük
            el, annál nagyobb erőforrást igényel a felzárkózás.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray leading-relaxed mt-4"
            delay={0.2}
          >
            A kérdés tehát nem az, hogy szükséges-e a változás. Hanem az, hogy
            mikor kezdjük el.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-white font-medium mt-4"
            delay={0.25}
          >
            Mert a digitalizáció halad. Te miért maradnál?
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={hydrated ? { opacity: 0, y: 20 } : false}
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

          {/* Center pulsating orb between the 4 cards */}
          <motion.div
            initial={hydrated ? { opacity: 0, scale: 0.5 } : false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 items-center justify-center z-10"
          >
            <div className="absolute w-16 h-16 rounded-full bg-blue/20 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute w-12 h-12 rounded-full bg-blue/10 backdrop-blur-sm border border-blue/20" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative z-10">
              <path d="M4 4l12 12M16 4L4 16" stroke="#0038FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#konzultacio">Kezdjük el a felzárkózást</Button>
        </motion.div>
      </div>
    </section>
  );
}
