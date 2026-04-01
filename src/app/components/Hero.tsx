"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/app/hooks/useHydrated";

export default function Hero() {
  const hydrated = useHydrated();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero/hero_slixol.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-32 md:pt-40">
        {/* Heading + blue line + B2B subtitle */}
        <motion.h1
          initial={hydrated ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-safiro text-4xl md:text-5xl lg:text-6xl leading-[1.08] heading-display text-white mb-5 max-w-4xl"
        >
          Magyarország első digitalizációs és növekedési partnere
        </motion.h1>

        <motion.div
          initial={hydrated ? { opacity: 0, scaleX: 0 } : false}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left w-16 h-0.5 bg-blue mb-4"
        />

        <motion.p
          initial={hydrated ? { opacity: 0, y: 8 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-safiro text-lg md:text-xl text-white/70 mb-8"
        >
          B2B és ipari cégek számára
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={hydrated ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-secondary max-w-xl mb-12 leading-relaxed"
        >
          Segítünk megújulni, fejlődni és adaptálódni a digitális térben.
          Marketing, sales támogatás, rendszerintegráció, AI implementálás,
          szakértői márkaépítés. Összehangolva, egy stratégiai partnernél.
        </motion.p>

        {/* CTA — exciting pulsing glow button */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6"
        >
          <motion.a
            href="#konzultacio"
            className="group relative inline-flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="relative inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-white text-sm sm:text-base border border-white/20 transition-all duration-300"
              style={{
                backgroundColor: "#ef34ff",
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLSpanElement).style.boxShadow = "0 0 20px rgba(239,52,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLSpanElement).style.boxShadow = "none";
              }}
            >
              Díjmentes konzultáció
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transform group-hover:translate-x-0.5 transition-transform duration-300"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.a>

          {/* Secondary text link */}
          <motion.a
            href="#modszertan"
            className="hidden md:inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
            whileHover={{ x: 4 }}
          >
            Hogyan dolgozunk?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
