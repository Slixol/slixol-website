"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
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
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-blue border border-blue/30 rounded-full">
            B2B digitalizáció & növekedés
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-safiro text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6 max-w-4xl"
        >
          Magyarország első digitalizációs és növekedési partnere B2B és ipari
          cégek számára
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base md:text-lg text-light-gray max-w-2xl mb-10 leading-relaxed"
        >
          Segítünk megújulni, fejlődni és adaptálódni – hogy cégként ne csak
          lépést tarts, hanem te határozd meg az irányt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
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
