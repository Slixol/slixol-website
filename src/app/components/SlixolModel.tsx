"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const pods = [
  {
    name: "Marketing",
    services: ["PPC", "SEO", "Közösségi média", "Email marketing", "Lead generálás", "OOH"],
    description:
      "PPC, SEO, közösségi média, email marketing, lead generálás, OOH kampányok.",
  },
  {
    name: "Sales támogatás",
    services: ["GTM stratégia", "LinkedIn outreach", "Cold email", "Adatgazdagítás", "Sales automatizálás"],
    description:
      "Go-to-market stratégia, LinkedIn outreach, hideg email kampányok, adatgazdagítás, sales folyamatok digitalizálása és automatizálása",
  },
  {
    name: "Systems & Tech",
    services: ["CRM/ERP bevezetés", "Audit", "Webfejlesztés", "Integrációk"],
    description:
      "CRM/ERP rendszer kiválasztás és bevezetés támogatás, folyamat audit és optimalizálás, webfejlesztés, rendszerintegrációk",
  },
  {
    name: "AI & Automatizáció",
    services: ["Folyamat automatizáció", "Intelligens rendszerek", "Hatékonyságnövelés"],
    description:
      "AI alapú folyamat automatizációk, intelligens rendszerek beépítése az üzleti folyamatokba, hatékonyságnövelés technológiával",
  },
  {
    name: "Brand & Content",
    services: ["Márkaépítés", "Videó produkció", "PR", "LinkedIn tartalom"],
    description:
      "Szakértői márkaépítés, videós tartalomgyártás, szakmai PR, LinkedIn márkaépítés",
  },
];

const podIcons = [
  <svg key="marketing" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="sales" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="systems" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>,
  <svg key="ai" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4z" /><path d="M9 8v1a3 3 0 0 0 6 0V8" /><path d="M12 12v3" /><path d="M8 22h8" /><path d="M7 15h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" /></svg>,
  <svg key="brand" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

const podOffsets = [
  { x: 200, y: 80 },   // Marketing — top-left
  { x: -200, y: 80 },  // Sales — top-right
  { x: 150, y: -80 },  // Systems — bottom-left
  { x: 0, y: -80 },    // AI — bottom-center
  { x: -150, y: -80 }, // Brand — bottom-right
];
const podDelays = [0.2, 0.3, 0.4, 0.5, 0.6];

/* ------------------------------------------------------------------ */
/*  Desktop radial layout:                                             */
/*  Top row:    [Marketing]  [Sales]                                   */
/*  Center:     SLIXOL X with connector lines                          */
/*  Bottom row: [Systems]  [AI]  [Brand]                               */
/* ------------------------------------------------------------------ */

function PodCard({
  pod,
  index,
  hoveredPod,
  setHoveredPod,
  animDelay,
  initialOffset,
  isInView,
}: {
  pod: (typeof pods)[number];
  index: number;
  hoveredPod: number | null;
  setHoveredPod: (i: number | null) => void;
  animDelay: number;
  initialOffset?: { x?: number; y?: number };
  isInView?: boolean;
}) {
  const hydrated = useHydrated();
  const isHovered = hoveredPod === index;

  return (
    <motion.div
      initial={hydrated ? { opacity: 0, scale: 0.6, x: initialOffset?.x ?? 0, y: initialOffset?.y ?? 20 } : false}
      animate={isInView ? { opacity: 1, scale: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: animDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
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

      {/* Description */}
      <p className="text-xs text-light-gray leading-relaxed mb-3">{pod.description}</p>

      {/* Service tags — always visible */}
      <div className="flex flex-wrap gap-1.5">
        {pod.services.map((service) => (
          <span
            key={service}
            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-gray"
          >
            {service}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SlixolModel() {
  const hydrated = useHydrated();
  const [hoveredPod, setHoveredPod] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const isDesktopInView = useInView(desktopRef, { once: true, margin: "-100px" });

  function handleMobileToggle(index: number) {
    setMobileExpanded((prev) => (prev === index ? null : index));
  }

  return (
    <section id="modszertan" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
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
            Központi stratégia, szakértői csapatokkal. Nem egy klasszikus marketing ügynökségként
            működünk, hanem egy olyan integrált digitalizációs és növekedési partner vagyunk, ahol
            különálló szakértői csapatok (agency podok) dolgoznak együtt – egy központi stratégiai
            vezetés alatt.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray max-w-2xl mx-auto leading-relaxed mt-4"
            delay={0.2}
          >
            Mi egyben látjuk a teljes képet és biztosítjuk, hogy minden elem egymással összehangolva
            támogassa a fejlődést, megújulást, adaptálódást.
          </AnimatedText>
        </div>

        {/* ============================================================ */}
        {/*  DESKTOP: X-centered radial layout                           */}
        {/* ============================================================ */}
        <div className="hidden lg:block" ref={desktopRef}>
          <div className="relative max-w-6xl mx-auto">
            {/* Background glow orbs */}
            <div className="glow-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0" />
            <div className="glow-orb-magenta absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none z-0" />

            {/* Top row: Marketing + Sales */}
            <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
              {[0, 1].map((podIndex) => (
                <PodCard
                  key={podIndex}
                  pod={pods[podIndex]}
                  index={podIndex}
                  hoveredPod={hoveredPod}
                  setHoveredPod={setHoveredPod}
                  animDelay={podDelays[podIndex]}
                  initialOffset={podOffsets[podIndex]}
                  isInView={isDesktopInView}
                />
              ))}
            </div>

            {/* Center: X logo with labels, connector lines, and glassmorphism */}
            <div className="relative flex flex-col items-center justify-center py-12 z-10">
              {/* Connector lines behind the center element */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Line to Marketing (top-left) */}
                <motion.div
                  className="absolute transition-all duration-300"
                  style={{
                    width: "360px",
                    height: "1px",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 50%",
                    background: hoveredPod === 0
                      ? "linear-gradient(to left, rgba(0,56,255,0.5), rgba(0,56,255,0.02))"
                      : "linear-gradient(to left, rgba(255,255,255,0.1), rgba(255,255,255,0.01))",
                    boxShadow: hoveredPod === 0 ? "0 0 8px rgba(0,56,255,0.3)" : "none",
                  }}
                  initial={{ rotate: -148, scaleX: 0, opacity: 0 }}
                  animate={isDesktopInView ? { rotate: -148, scaleX: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                {/* Line to Sales (top-right) */}
                <motion.div
                  className="absolute transition-all duration-300"
                  style={{
                    width: "360px",
                    height: "1px",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 50%",
                    background: hoveredPod === 1
                      ? "linear-gradient(to right, rgba(0,56,255,0.5), rgba(0,56,255,0.02))"
                      : "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.01))",
                    boxShadow: hoveredPod === 1 ? "0 0 8px rgba(0,56,255,0.3)" : "none",
                  }}
                  initial={{ rotate: -32, scaleX: 0, opacity: 0 }}
                  animate={isDesktopInView ? { rotate: -32, scaleX: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                {/* Line to Systems (bottom-left) */}
                <motion.div
                  className="absolute transition-all duration-300"
                  style={{
                    width: "320px",
                    height: "1px",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 50%",
                    background: hoveredPod === 2
                      ? "linear-gradient(to left, rgba(0,56,255,0.5), rgba(0,56,255,0.02))"
                      : "linear-gradient(to left, rgba(255,255,255,0.1), rgba(255,255,255,0.01))",
                    boxShadow: hoveredPod === 2 ? "0 0 8px rgba(0,56,255,0.3)" : "none",
                  }}
                  initial={{ rotate: 155, scaleX: 0, opacity: 0 }}
                  animate={isDesktopInView ? { rotate: 155, scaleX: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                {/* Line to AI (straight down) */}
                <motion.div
                  className="absolute transition-all duration-300"
                  style={{
                    width: "1px",
                    height: "180px",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "50% 0%",
                    background: hoveredPod === 3
                      ? "linear-gradient(to bottom, rgba(0,56,255,0.5), rgba(0,56,255,0.02))"
                      : "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.01))",
                    boxShadow: hoveredPod === 3 ? "0 0 8px rgba(0,56,255,0.3)" : "none",
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={isDesktopInView ? { scaleY: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                {/* Line to Brand (bottom-right) */}
                <motion.div
                  className="absolute transition-all duration-300"
                  style={{
                    width: "320px",
                    height: "1px",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 50%",
                    background: hoveredPod === 4
                      ? "linear-gradient(to right, rgba(0,56,255,0.5), rgba(0,56,255,0.02))"
                      : "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.01))",
                    boxShadow: hoveredPod === 4 ? "0 0 8px rgba(0,56,255,0.3)" : "none",
                  }}
                  initial={{ rotate: 25, scaleX: 0, opacity: 0 }}
                  animate={isDesktopInView ? { rotate: 25, scaleX: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              {/* Top label */}
              <motion.span
                initial={hydrated ? { opacity: 0, y: 10 } : false}
                animate={isDesktopInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[11px] uppercase tracking-[0.25em] text-blue font-medium mb-6"
              >
                Központi stratégia
              </motion.span>

              {/* Glassmorphism X logo */}
              <motion.div
                initial={hydrated ? { opacity: 0, scale: 0.5 } : false}
                animate={isDesktopInView ? { opacity: 1, scale: [0.5, 1.1, 1] } : undefined}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-[140px] h-[140px] rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center z-10"
                style={{
                  boxShadow:
                    "0 0 60px rgba(0,56,255,0.15), 0 0 120px rgba(0,56,255,0.05), inset 0 0 30px rgba(255,255,255,0.02)",
                }}
              >
                <Image
                  src="/logos/slixol-x-magenta.png"
                  alt="Slixol X"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </motion.div>

              {/* Bottom label */}
              <motion.span
                initial={hydrated ? { opacity: 0, y: -10 } : false}
                animate={isDesktopInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[11px] uppercase tracking-[0.25em] text-blue font-medium mt-6"
              >
                Egy ügyfél, egy rendszer
              </motion.span>
            </div>

            {/* Bottom row: Systems, AI, Brand */}
            <div className="grid grid-cols-3 gap-6 mt-8 relative z-10">
              {[2, 3, 4].map((podIndex) => (
                <PodCard
                  key={podIndex}
                  pod={pods[podIndex]}
                  index={podIndex}
                  hoveredPod={hoveredPod}
                  setHoveredPod={setHoveredPod}
                  animDelay={podDelays[podIndex]}
                  initialOffset={podOffsets[podIndex]}
                  isInView={isDesktopInView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  MOBILE: Accordion layout with always-visible tags           */}
        {/* ============================================================ */}
        <div className="lg:hidden flex flex-col gap-3">
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              initial={hydrated ? { opacity: 0, y: 20 } : false}
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
                    <span
                      className={`transition-colors duration-300 ${
                        mobileExpanded === i ? "text-blue" : "text-gray"
                      }`}
                    >
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

                {/* Service tags — always visible on mobile too */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {pod.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-gray"
                    >
                      {service}
                    </span>
                  ))}
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
                      <p className="text-sm text-light-gray leading-relaxed">
                        {pod.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
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
