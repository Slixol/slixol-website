"use client";

import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

export default function Consultation() {
  return (
    <section id="konzultacio" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 md:p-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative blurred circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-blue/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <AnimatedText
              as="h2"
              className="font-safiro text-2xl md:text-4xl text-white mb-3"
            >
              Kezdődjön el a változás
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-base text-light-gray mb-3 max-w-2xl mx-auto"
              delay={0.1}
            >
              Egy díjmentes, 60 perces felderítő konzultáció, ahol megismerjük a
              céged, a kihívásaid és a céljaid.
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-sm text-gray mb-8 max-w-xl mx-auto"
              delay={0.15}
            >
              Nem pitchelünk – kérdezünk, hallgatunk, és felvázoljuk, hogyan
              segíthetünk.
            </AnimatedText>

            <Button href="mailto:hello@slixol.com" variant="primary">
              Díjmentes felderítő konzultáció
            </Button>

            <p className="mt-5 text-xs text-gray/40">
              Vagy foglalj időpontot közvetlenül – Calendly link hamarosan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
