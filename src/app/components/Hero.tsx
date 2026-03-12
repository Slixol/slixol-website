"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBlurBackground from "./HeroBlurBackground";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated blur background */}
      <HeroBlurBackground />

      {/* X symbol watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logos/slixol-x-white-dark.png"
          alt=""
          width={600}
          height={600}
          className="opacity-[0.04] select-none"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-safiro text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8"
        >
          Magyarország első digitalizációs és növekedési partnere B2B és ipari
          cégek számára
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-light-gray max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Segítünk megújulni, fejlődni és adaptálódni – hogy cégként ne csak
          lépést tarts, hanem te határozd meg az irányt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
