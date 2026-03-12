"use client";

import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

export default function Consultation() {
  return (
    <section id="konzultacio" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-magenta/5 to-blue/5 relative overflow-hidden"
        >
          {/* Decorative blurred circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-magenta/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <AnimatedText
              as="h2"
              className="font-safiro text-3xl md:text-5xl text-white mb-4"
            >
              Kezdődjön el a változás
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-lg text-light-gray mb-4 max-w-2xl mx-auto"
              delay={0.1}
            >
              Egy díjmentes, 60 perces felderítő konzultáció, ahol megismerjük a
              céged, a kihívásaid és a céljaid.
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-base text-gray mb-10 max-w-xl mx-auto"
              delay={0.15}
            >
              Nem pitchelünk – kérdezünk, hallgatunk, és felvázoljuk, hogyan
              segíthetünk.
            </AnimatedText>

            <Button href="mailto:hello@slixol.com" variant="primary">
              Díjmentes felderítő konzultáció
            </Button>

            {/* Calendly embed placeholder */}
            <p className="mt-6 text-xs text-gray/50">
              Vagy foglalj időpontot közvetlenül – Calendly link hamarosan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
