"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: { num: string; title: string; items: string[] };
  icon: React.ReactNode;
  index: number;
  hydrated: boolean;
}

const cardAccents = [
  {
    // 01 - kék
    gradient:
      "radial-gradient(circle at 80% 20%, rgba(0,56,255,0.06), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 80% 20%, rgba(0,56,255,0.12), transparent 60%)",
    spotlight: "rgba(0,56,255,0.08)",
    glow: "0 0 12px rgba(0,56,255,0.15)",
    glowHover: "0 0 30px rgba(0,56,255,0.12)",
    border: "rgba(0,56,255,0.12)",
    borderHover: "rgba(0,56,255,0.25)",
    bulletColor: "text-blue",
    iconGlowClass: "icon-glow-blue",
    iconBg: "bg-blue/[0.12]",
    iconText: "text-blue",
  },
  {
    // 02 - magenta
    gradient:
      "radial-gradient(circle at 20% 80%, rgba(239,52,255,0.05), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 20% 80%, rgba(239,52,255,0.10), transparent 60%)",
    spotlight: "rgba(239,52,255,0.07)",
    glow: "0 0 12px rgba(239,52,255,0.12)",
    glowHover: "0 0 30px rgba(239,52,255,0.10)",
    border: "rgba(239,52,255,0.10)",
    borderHover: "rgba(239,52,255,0.22)",
    bulletColor: "text-magenta",
    iconGlowClass: "icon-glow-magenta",
    iconBg: "bg-magenta/[0.12]",
    iconText: "text-magenta",
  },
  {
    // 03 - kék
    gradient:
      "radial-gradient(circle at 20% 30%, rgba(0,56,255,0.06), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 20% 30%, rgba(0,56,255,0.12), transparent 60%)",
    spotlight: "rgba(0,56,255,0.08)",
    glow: "0 0 12px rgba(0,56,255,0.15)",
    glowHover: "0 0 30px rgba(0,56,255,0.12)",
    border: "rgba(0,56,255,0.12)",
    borderHover: "rgba(0,56,255,0.25)",
    bulletColor: "text-blue",
    iconGlowClass: "icon-glow-blue",
    iconBg: "bg-blue/[0.12]",
    iconText: "text-blue",
  },
  {
    // 04 - magenta
    gradient:
      "radial-gradient(circle at 90% 70%, rgba(239,52,255,0.05), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 90% 70%, rgba(239,52,255,0.10), transparent 60%)",
    spotlight: "rgba(239,52,255,0.07)",
    glow: "0 0 12px rgba(239,52,255,0.12)",
    glowHover: "0 0 30px rgba(239,52,255,0.10)",
    border: "rgba(239,52,255,0.10)",
    borderHover: "rgba(239,52,255,0.22)",
    bulletColor: "text-magenta",
    iconGlowClass: "icon-glow-magenta",
    iconBg: "bg-magenta/[0.12]",
    iconText: "text-magenta",
  },
  {
    // 05 - kék
    gradient:
      "radial-gradient(circle at 50% 90%, rgba(0,56,255,0.06), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 50% 90%, rgba(0,56,255,0.12), transparent 60%)",
    spotlight: "rgba(0,56,255,0.08)",
    glow: "0 0 12px rgba(0,56,255,0.15)",
    glowHover: "0 0 30px rgba(0,56,255,0.12)",
    border: "rgba(0,56,255,0.12)",
    borderHover: "rgba(0,56,255,0.25)",
    bulletColor: "text-blue",
    iconGlowClass: "icon-glow-blue",
    iconBg: "bg-blue/[0.12]",
    iconText: "text-blue",
  },
  {
    // 06 - magenta
    gradient:
      "radial-gradient(circle at 70% 40%, rgba(239,52,255,0.05), transparent 60%)",
    gradientHover:
      "radial-gradient(circle at 70% 40%, rgba(239,52,255,0.10), transparent 60%)",
    spotlight: "rgba(239,52,255,0.07)",
    glow: "0 0 12px rgba(239,52,255,0.12)",
    glowHover: "0 0 30px rgba(239,52,255,0.10)",
    border: "rgba(239,52,255,0.10)",
    borderHover: "rgba(239,52,255,0.22)",
    bulletColor: "text-magenta",
    iconGlowClass: "icon-glow-magenta",
    iconBg: "bg-magenta/[0.12]",
    iconText: "text-magenta",
  },
];

export default function ServiceCard({
  service,
  icon,
  index,
  hydrated,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const accent = cardAccents[index];
  const isWide = [0, 3, 4].includes(index);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [],
  );

  return (
    <motion.div
      ref={cardRef}
      initial={hydrated ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl border p-6 cursor-default ${isWide ? "lg:col-span-2" : ""}`}
      style={{
        background: isHovered ? accent.gradientHover : accent.gradient,
        borderColor: isHovered ? accent.borderHover : accent.border,
        boxShadow: isHovered ? accent.glowHover : "none",
        transition: "background 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Cursor spotlight — desktop only */}
      {isHovered && (
        <div
          className="absolute inset-0 z-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${accent.spotlight}, transparent 40%)`,
          }}
        />
      )}

      {/* Hover accent line — top */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] z-10"
        style={{
          background: "linear-gradient(to right, #0038ff, #ef34ff)",
        }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className={`w-10 h-10 rounded-xl ${accent.iconBg} flex items-center justify-center flex-shrink-0 ${accent.iconGlowClass}`}
            animate={
              isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className={accent.iconText}>{icon}</span>
          </motion.div>
          <div>
            <span
              className={`font-mono text-gradient-blue-magenta ${isWide ? "text-5xl lg:text-6xl" : "text-4xl"} font-bold leading-none`}
            >
              {service.num}
            </span>
            <h3 className="font-safiro text-lg text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Item list */}
        <ul className="space-y-1.5">
          {service.items.map((item) => (
            <li
              key={item}
              className="text-sm text-gray leading-relaxed flex gap-2"
            >
              <span
                className={`${accent.bulletColor} opacity-60 mt-0.5 flex-shrink-0`}
              >
                –
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* "Részletek →" reveal on hover */}
      <motion.span
        className={`absolute bottom-4 right-4 text-xs font-medium ${accent.bulletColor} z-10`}
        initial={{ opacity: 0, x: 8 }}
        animate={
          isHovered ? { opacity: 0.7, x: 0 } : { opacity: 0, x: 8 }
        }
        transition={{ duration: 0.25 }}
      >
        Részletek →
      </motion.span>
    </motion.div>
  );
}
