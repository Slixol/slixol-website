"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const pods = [
  {
    name: "Marketing",
    services: ["PPC", "SEO", "Közösségi média", "Email marketing", "Lead generálás", "OOH"],
    description:
      "Teljes performance marketing lefedettség – a stratégiától a végrehajtásig. Nem kampányokat futtatunk, hanem rendszert építünk.",
  },
  {
    name: "Sales támogatás",
    services: ["GTM stratégia", "LinkedIn outreach", "Cold email", "Adatgazdagítás"],
    description:
      "Az értékesítési csapatod mellé állunk – rendszerekkel, folyamatokkal és minősített lead-ekkel.",
  },
  {
    name: "Systems & Tech",
    services: ["CRM/ERP bevezetés", "Audit", "Webfejlesztés", "Integrációk"],
    description:
      "A digitális infrastruktúra, ami összeköt mindent – és skálázható. Nem csak bevezetünk, hanem összekötünk.",
  },
  {
    name: "AI & Automatizáció",
    services: ["Folyamat automatizáció", "Intelligens rendszerek", "Hatékonyságnövelés"],
    description:
      "AI-alapú megoldások, amik nem trendet követnek, hanem valódi eredményt hoznak a napi operációban.",
  },
  {
    name: "Brand & Content",
    services: ["Márkaépítés", "Videó produkció", "PR", "LinkedIn tartalom"],
    description:
      "A szakértők márkát építenek, a márkák pedig bizalmat. Mi segítünk, hogy a tudásod láthatóvá váljon.",
  },
];

const podIcons = [
  <svg key="marketing" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="sales" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="systems" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>,
  <svg key="ai" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4z" /><path d="M9 8v1a3 3 0 0 0 6 0V8" /><path d="M12 12v3" /><path d="M8 22h8" /><path d="M7 15h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" /></svg>,
  <svg key="brand" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

// Left column: client-facing pods (indices 0, 1)
const leftPods = [0, 1];
// Right column: capability-building pods (indices 2, 3, 4)
const rightPods = [2, 3, 4];

function PodCard({
  pod,
  index,
  hoveredPod,
  setHoveredPod,
  side,
  animDelay,
}: {
  pod: (typeof pods)[number];
  index: number;
  hoveredPod: number | null;
  setHoveredPod: (i: number | null) => void;
  side: "left" | "right";
  animDelay: number;
}) {
  const isHovered = hoveredPod === index;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: animDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative rounded-2xl border backdrop-blur-sm p-5 lg:p-6 cursor-pointer transition-all duration-300 ${
        isHovered
          ? "border-blue/30 bg-white/[0.06] shadow-[0_0_30px_rgba(0,56,255,0.06)]"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15]"
      }`}
      onMouseEnter={() => setHoveredPod(index)}
      onMouseLeave={() => setHoveredPod(null)}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-2">
        <span className={`transition-colors duration-300 ${isHovered ? "text-blue" : "text-gray"}`}>
          {podIcons[index]}
        </span>
        <span className="text-sm font-medium text-white">{pod.name}</span>
      </div>

      {/* Description — always visible */}
      <p className="text-xs text-light-gray leading-relaxed mb-3">{pod.description}</p>

      {/* Service tags — appear on hover with stagger */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 pt-1">
              {pod.services.map((service, j) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ delay: j * 0.04, duration: 0.2 }}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-gray"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ConnectorLine({
  side,
  isActive,
  delay,
}: {
  side: "left" | "right";
  isActive: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`hidden lg:block h-px transition-all duration-300 ${
        side === "left" ? "ml-auto" : "mr-auto"
      }`}
      style={{
        width: "100%",
        background: isActive
          ? "linear-gradient(to " +
            (side === "left" ? "left" : "right") +
            ", rgba(0,56,255,0.5), rgba(0,56,255,0.05))"
          : "linear-gradient(to " +
            (side === "left" ? "left" : "right") +
            ", rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        boxShadow: isActive ? "0 0 8px rgba(0,56,255,0.3)" : "none",
      }}
    />
  );
}

export default function SlixolModel() {
  const [hoveredPod, setHoveredPod] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  function handleMobileToggle(index: number) {
    setMobileExpanded((prev) => (prev === index ? null : index));
  }

  return (
    <section id="modszertan" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Slixol Modell</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mt-5 mb-4"
          >
            Egy kézben a szükséges szakértelem
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray max-w-2xl mx-auto leading-relaxed"
            delay={0.1}
          >
            Nem kell 5 különböző ügynökséget koordinálnod. Egyetlen integrált
            csapat, 5 specializált pod, összehangolt stratégia.
          </AnimatedText>
        </div>

        {/* Desktop: Converging Spokes layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Background glow orbs */}
            <div className="glow-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0" />
            <div className="glow-orb-magenta absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none z-0" />

            {/* 3-column grid: left pods | spine | right pods */}
            <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-0 relative z-10">
              {/* Left column — 2 pods with connectors */}
              <div className="flex flex-col justify-center gap-5">
                {leftPods.map((podIndex, i) => (
                  <div key={podIndex} className="flex items-center gap-0">
                    <div className="flex-1">
                      <PodCard
                        pod={pods[podIndex]}
                        index={podIndex}
                        hoveredPod={hoveredPod}
                        setHoveredPod={setHoveredPod}
                        side="left"
                        animDelay={0.4 + i * 0.12}
                      />
                    </div>
                    <div className="w-10 flex-shrink-0">
                      <ConnectorLine
                        side="left"
                        isActive={hoveredPod === podIndex}
                        delay={0.3}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center column — SLIXOL spine */}
              <div className="flex flex-col items-center h-full py-4">
                {/* Top spine line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex-1 w-px"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.08))",
                  }}
                />

                {/* Central SLIXOL core */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-[140px] h-[140px] rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 my-4"
                  style={{ boxShadow: "0 0 60px rgba(0,56,255,0.2)" }}
                >
                  <span className="font-safiro text-2xl text-white tracking-wider uppercase">
                    slixol
                  </span>
                </motion.div>

                {/* Bottom spine line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex-1 w-px"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  }}
                />
              </div>

              {/* Right column — 3 pods with connectors */}
              <div className="flex flex-col justify-center gap-5">
                {rightPods.map((podIndex, i) => (
                  <div key={podIndex} className="flex items-center gap-0">
                    <div className="w-10 flex-shrink-0">
                      <ConnectorLine
                        side="right"
                        isActive={hoveredPod === podIndex}
                        delay={0.3}
                      />
                    </div>
                    <div className="flex-1">
                      <PodCard
                        pod={pods[podIndex]}
                        index={podIndex}
                        hoveredPod={hoveredPod}
                        setHoveredPod={setHoveredPod}
                        side="right"
                        animDelay={0.4 + i * 0.12}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden flex flex-col gap-3">
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => handleMobileToggle(i)}
                className={`w-full rounded-2xl backdrop-blur-md border p-4 text-left transition-colors duration-300 cursor-pointer ${
                  mobileExpanded === i
                    ? "bg-white/[0.08] border-blue/30"
                    : "bg-white/[0.04] border-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`transition-colors duration-300 ${mobileExpanded === i ? "text-blue" : "text-gray"}`}>
                      {podIcons[i]}
                    </span>
                    <span className="text-sm font-medium text-white">{pod.name}</span>
                  </div>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray"
                    animate={{ rotate: mobileExpanded === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {mobileExpanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-light-gray leading-relaxed mb-3">
                        {pod.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pod.services.map((service, j) => (
                          <motion.span
                            key={service}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.04 }}
                            className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-gray"
                          >
                            {service}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#szolgaltatasok">Tudj meg többet</Button>
        </motion.div>
      </div>
    </section>
  );
}
