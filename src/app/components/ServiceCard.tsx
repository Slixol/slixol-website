"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceIcon from "./ServiceIcon";

const iconTypes = [
  "marketing",
  "strategy",
  "sales",
  "systems",
  "ai",
  "brand",
] as const;

interface ServiceCardProps {
  service: { num: string; title: string; items: string[] };
  index: number;
  hydrated: boolean;
  isAnyHovered: boolean;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

export default function ServiceCard({
  service,
  index,
  hydrated,
  isAnyHovered,
  isHovered,
  onHover,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    function check() {
      if (!el) return;
      // Only activate scroll tracking on mobile (< 768px)
      if (window.innerWidth >= 768) {
        setScrollActive(false);
        return;
      }
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      setScrollActive(rect.top >= 0 && rect.top < trigger);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const effectiveActive = isHovered || scrollActive;
  // isDimmed: desktop-only — on mobile scroll doesn't set isAnyHovered
  const isDimmed = isAnyHovered && !isHovered;

  return (
    <motion.div
      ref={cardRef}
      initial={hydrated ? { opacity: 0, y: 24 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark-card flex flex-col cursor-default"
      style={{
        opacity: isDimmed ? 0.45 : 1,
        borderColor: effectiveActive ? "rgba(0,56,255,0.3)" : undefined,
        boxShadow: effectiveActive
          ? "0 0 40px rgba(0,56,255,0.08), inset 0 0 60px rgba(0,56,255,0.02)"
          : "none",
        transition:
          "opacity 0.4s ease, border-color 0.3s ease, box-shadow 0.4s ease, background 0.3s ease",
        background: effectiveActive ? "#1a1a1a" : undefined,
      }}
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500"
        style={{
          background: effectiveActive
            ? "linear-gradient(to bottom, #4d7aff, rgba(0,56,255,0.1))"
            : "linear-gradient(to bottom, rgba(0,56,255,0.15), transparent)",
          width: effectiveActive ? "3px" : "2px",
        }}
      />

      {/* Dot pattern overlay — visible on hover/scroll-active (agency.framer reference) */}
      <div
        className="absolute inset-0 bg-dot-pattern transition-opacity duration-500 pointer-events-none"
        style={{ opacity: effectiveActive ? 1 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10 p-7 md:p-8 flex flex-col flex-1">
        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-5">
          <ServiceIcon type={iconTypes[index]} isHovered={effectiveActive} />
          <h3 className="font-safiro text-xl md:text-2xl text-white heading-card">
            {service.title}
          </h3>
        </div>

        {/* Item list — consistent dot bullets, stagger on hover */}
        <ul className="space-y-2.5 flex-1">
          {service.items.map((item, i) => (
            <motion.li
              key={item}
              className="text-sm text-secondary leading-relaxed flex gap-3 items-start"
              animate={{
                opacity: effectiveActive ? 1 : 0.7,
                x: effectiveActive ? 4 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: effectiveActive ? i * 0.03 : 0,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue/40 mt-1.5 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
