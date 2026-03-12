"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const pods = [
  {
    name: "Marketing Pod",
    color: "#EF34FF",
    services: ["PPC", "SEO", "Közösségi média", "Email marketing", "Lead generálás", "OOH"],
    description:
      "Teljes performance marketing lefedettség – a stratégiától a végrehajtásig.",
  },
  {
    name: "Sales Támogatás Pod",
    color: "#0038FF",
    services: ["GTM stratégia", "LinkedIn outreach", "Cold email", "Adatgazdagítás"],
    description:
      "Az értékesítési csapatod mellé állunk – rendszerekkel, folyamatokkal, leads-zel.",
  },
  {
    name: "Systems & Tech Pod",
    color: "#EF34FF",
    services: ["CRM/ERP bevezetés", "Audit", "Webfejlesztés", "Integrációk"],
    description:
      "A digitális infrastruktúra, ami összeköt mindent – és skálázható.",
  },
  {
    name: "AI Pod",
    color: "#0038FF",
    services: ["Folyamat automatizáció", "Intelligens rendszerek", "Hatékonyságnövelés"],
    description:
      "AI-alapú megoldások, amik nem trendet követnek, hanem valódi eredményt hoznak.",
  },
  {
    name: "Brand & Content Pod",
    color: "#EF34FF",
    services: ["Márkaépítés", "Videó produkció", "PR", "LinkedIn tartalom"],
    description:
      "A szakértők márkát építenek, a márkák pedig bizalmat. Mi segítünk mindkettőben.",
  },
];

export default function SlixolModel() {
  const [activePod, setActivePod] = useState<number | null>(null);

  return (
    <section id="modszertan" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>Slixol Modell</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-6"
          >
            Egy kézben a szükséges szakértelem
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-light-gray max-w-3xl mx-auto leading-relaxed"
            delay={0.1}
          >
            A Slixol modell lényege, hogy nem kell 5 különböző ügynökséget
            koordinálnod. Egyetlen integrált csapat, 5 specializált pod,
            összehangolt stratégia.
          </AnimatedText>
        </div>

        {/* Pod visualization - Pentagon layout on desktop, list on mobile */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 700, height: 600 }}>
          {/* Central core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-magenta to-blue flex items-center justify-center z-10"
            animate={{ boxShadow: ["0 0 40px rgba(239,52,255,0.3)", "0 0 60px rgba(0,56,255,0.3)", "0 0 40px rgba(239,52,255,0.3)"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="font-safiro text-white text-lg">slixol</span>
          </motion.div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 600">
            {pods.map((_, i) => {
              const angle = (i * 2 * Math.PI) / pods.length - Math.PI / 2;
              const x = 350 + 220 * Math.cos(angle);
              const y = 300 + 220 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="350" y1="300"
                  x2={x} y2={y}
                  stroke={activePod === i ? pods[i].color : "rgba(255,255,255,0.06)"}
                  strokeWidth="1"
                  style={{ transition: "stroke 0.3s" }}
                />
              );
            })}
          </svg>

          {/* Pod nodes */}
          {pods.map((pod, i) => {
            const angle = (i * 2 * Math.PI) / pods.length - Math.PI / 2;
            const x = 350 + 220 * Math.cos(angle);
            const y = 300 + 220 * Math.sin(angle);

            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer"
                style={{ left: x - 70, top: y - 70 }}
                onMouseEnter={() => setActivePod(i)}
                onMouseLeave={() => setActivePod(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className={`w-[140px] h-[140px] rounded-2xl border flex flex-col items-center justify-center text-center p-3 transition-all duration-300 ${
                    activePod === i
                      ? "bg-white/10 border-white/20"
                      : "bg-white/[0.03] border-white/5"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full mb-2"
                    style={{ backgroundColor: pod.color }}
                  />
                  <span className="font-safiro text-sm text-white leading-tight">
                    {pod.name}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Active pod details */}
          <AnimatePresence>
            {activePod !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md text-center"
              >
                <p className="text-sm text-light-gray mb-2">{pods[activePod].description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {pods[activePod].services.map((s, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-4">
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: pod.color }}
                />
                <h3 className="font-safiro text-lg text-white">{pod.name}</h3>
              </div>
              <p className="text-sm text-gray mb-3">{pod.description}</p>
              <div className="flex flex-wrap gap-2">
                {pod.services.map((s, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href="#szolgaltatasok">Tudj meg többet</Button>
        </motion.div>
      </div>
    </section>
  );
}
