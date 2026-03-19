"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/app/hooks/useHydrated";
import Button from "./ui/Button";

export default function Hero() {
  const hydrated = useHydrated();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero/hero_slixol.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-32 md:pb-40">
        <motion.h1
          initial={hydrated ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-safiro text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6 max-w-4xl"
        >
          Magyarország első digitalizációs és növekedési partnere B2B és ipari
          cégek számára
        </motion.h1>

        <motion.p
          initial={hydrated ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-light-gray max-w-2xl mb-10 leading-relaxed"
        >
          Segítünk megújulni, fejlődni és adaptálódni a digitális térben.
          Marketing, sales támogatás, rendszerintegráció, AI implementálás,
          szakértői márkaépítés. Összehangolva, egy stratégiai partnernél.
        </motion.p>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            href="#konzultacio"
            variant="primary"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Díjmentes konzultáció
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
