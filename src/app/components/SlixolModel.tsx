"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
      className={`relative rounded-2xl p-5 lg:p-6 cursor-pointer transition-all duration-300 ${
        isHovered
          ? "border border-blue/30 bg-dark-surface shadow-[0_0_30px_rgba(0,56,255,0.06)]"
          : "elevated-card"
      }`}
      onMouseEnter={() => setHoveredPod(index)}
      onMouseLeave={() => setHoveredPod(null)}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-2">
        <span className={`transition-colors duration-300 ${isHovered ? "text-blue" : "text-gray"}`}>
          {podIcons[index]}
        </span>
        <span className="font-safiro text-lg text-white heading-card">{pod.name}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-secondary leading-relaxed mb-3">{pod.description}</p>

      {/* Service tags — always visible */}
      <div className="flex flex-wrap gap-1.5">
        {pod.services.map((service) => (
          <span
            key={service}
            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-secondary"
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
  const [activePod, setActivePod] = useState(0);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isDesktopInView = useInView(desktopRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    function updateActivePod() {
      if (window.innerWidth >= 1024) return; // lg: desktop uses radial, no-op
      const podEls = container!.querySelectorAll<HTMLDivElement>("[data-pod-index]");
      let bestIndex = 0;
      let bestDistance = Infinity;
      const center = window.innerHeight * 0.5;
      podEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < bestDistance) {
          bestDistance = dist;
          bestIndex = Number(el.dataset.podIndex);
        }
      });
      setActivePod(bestIndex);
    }

    window.addEventListener("scroll", updateActivePod, { passive: true });
    window.addEventListener("resize", updateActivePod, { passive: true });
    updateActivePod();
    return () => {
      window.removeEventListener("scroll", updateActivePod);
      window.removeEventListener("resize", updateActivePod);
    };
  }, []);

  return (
    <section id="modszertan" className="section-padding px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <SectionLabel>slixol Modell</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6 mb-6"
          >
            Egy kézben a szükséges szakértelem
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
            delay={0.1}
          >
            Nem egy klasszikus ügynökség vagyunk – integrált digitalizációs és növekedési partner,
            ahol különálló szakértői csapatok dolgoznak együtt, egy központi stratégiai vezetés alatt.
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed mt-5"
            delay={0.2}
          >
            Egyben látjuk a teljes képet. Minden elem összehangolva támogatja
            a fejlődést, megújulást, adaptálódást.
          </AnimatedText>
        </div>

        {/* ============================================================ */}
        {/*  DESKTOP: X-centered radial layout                           */}
        {/* ============================================================ */}
        <div className="hidden lg:block" ref={desktopRef}>
          <div className="relative max-w-6xl mx-auto">
            {/* Background glow orb — blue only */}
            <div className="glow-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0" />

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
        {/*  MOBILE: Scroll-pod showcase — one pod at a time             */}
        {/* ============================================================ */}
        <div className="lg:hidden" ref={mobileContainerRef}>
          {/* 5-dot mini progress indicator */}
          <div className="flex items-center justify-center gap-2.5 mb-8">
            {pods.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activePod === i ? 1 : 0.7,
                  opacity: activePod === i ? 1 : 0.3,
                }}
                transition={{ duration: 0.2 }}
                className={`rounded-full transition-colors duration-300 ${
                  activePod === i
                    ? "w-5 h-2 bg-blue"
                    : "w-2 h-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Pod cards — 2-center-3 structured layout */}
          <div className="space-y-3">

            {/* Top row: pods 0 (Marketing) and 1 (Sales) */}
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  data-pod-index={i}
                  initial={hydrated ? { opacity: 0, y: 16 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`rounded-xl border p-3 transition-all duration-300 ${
                    activePod === i
                      ? "border-blue/30 bg-dark-surface shadow-[0_0_24px_rgba(0,56,255,0.06)]"
                      : "elevated-card opacity-60"
                  }`}
                >
                  {/* Icon + Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`transition-colors duration-300 ${activePod === i ? "text-blue" : "text-gray"}`}>
                      {React.cloneElement(podIcons[i] as React.ReactElement<{ width: number; height: number }>, { width: 16, height: 16 })}
                    </span>
                    <span className="font-safiro text-sm text-white heading-card leading-tight">{pods[i].name}</span>
                  </div>

                  {/* Description — visible on wider top-row cards */}
                  <p className="text-xs text-secondary leading-relaxed mb-2 line-clamp-2">{pods[i].description}</p>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-1">
                    {pods[i].services.map((service) => (
                      <span
                        key={service}
                        className={`px-2 py-0.5 rounded-md border text-[10px] transition-all duration-300 ${
                          activePod === i
                            ? "bg-blue/[0.08] border-blue/20 text-blue/80"
                            : "bg-white/[0.04] border-white/[0.08] text-secondary"
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center: glassmorphism X logo + vertical connector lines + labels */}
            <div className="relative flex flex-col items-center py-3">
              {/* Vertical line UP to top row */}
              <div className="w-px h-5 bg-gradient-to-t from-white/10 to-transparent mb-1" />

              {/* "Központi stratégia" label */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue font-medium mb-3">
                Központi stratégia
              </span>

              {/* Glassmorphism circle */}
              <div
                className="relative w-20 h-20 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
                style={{
                  boxShadow: "0 0 40px rgba(0,56,255,0.15), 0 0 80px rgba(0,56,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)",
                }}
              >
                <Image
                  src="/logos/slixol-x-magenta.png"
                  alt="Slixol X"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* "Egy ügyfél, egy rendszer" label */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue font-medium mt-3 mb-1">
                Egy ügyfél, egy rendszer
              </span>

              {/* Vertical line DOWN to bottom row */}
              <div className="w-px h-5 bg-gradient-to-b from-white/10 to-transparent mt-1" />
            </div>

            {/* Bottom row: pods 2 (Systems), 3 (AI), 4 (Brand) */}
            <div className="grid grid-cols-3 gap-2">
              {[2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  data-pod-index={i}
                  initial={hydrated ? { opacity: 0, y: 16 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`rounded-xl border p-3 transition-all duration-300 ${
                    activePod === i
                      ? "border-blue/30 bg-dark-surface shadow-[0_0_24px_rgba(0,56,255,0.06)]"
                      : "elevated-card opacity-60"
                  }`}
                >
                  {/* Icon + Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`transition-colors duration-300 ${activePod === i ? "text-blue" : "text-gray"}`}>
                      {React.cloneElement(podIcons[i] as React.ReactElement<{ width: number; height: number }>, { width: 16, height: 16 })}
                    </span>
                    <span className="font-safiro text-sm text-white heading-card leading-tight">{pods[i].name}</span>
                  </div>

                  {/* Service tags only — no description (3-col cards are narrow) */}
                  <div className="flex flex-wrap gap-1">
                    {pods[i].services.map((service) => (
                      <span
                        key={service}
                        className={`px-2 py-0.5 rounded-md border text-[10px] transition-all duration-300 ${
                          activePod === i
                            ? "bg-blue/[0.08] border-blue/20 text-blue/80"
                            : "bg-white/[0.04] border-white/[0.08] text-secondary"
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button href="#szolgaltatasok">Tudj meg többet</Button>
        </motion.div>
      </div>
    </section>
  );
}
