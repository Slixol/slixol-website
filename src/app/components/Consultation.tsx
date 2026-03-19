"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

export default function Consultation() {
  const hydrated = useHydrated();
  const calRef = useRef<HTMLDivElement>(null);
  const isCalInView = useInView(calRef, { once: true, margin: "0px 0px 1000px 0px" });

  return (
    <section id="konzultacio" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header — centered */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <AnimatedText
            as="h2"
            className="font-safiro text-2xl md:text-4xl text-white mb-4"
          >
            Kezdődjön el a változás
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base text-light-gray max-w-2xl mx-auto leading-relaxed"
            delay={0.1}
          >
            Az utóbbi két év során közel 500 cégnek tartottuk meg azt a
            stratégiai konzultációt, amire itt is időpontot lehet foglalni.
          </AnimatedText>
        </motion.div>

        {/* Calendly embed — full width, lazy loaded */}
        <motion.div
          ref={calRef}
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
        >
          {isCalInView ? (
            <iframe
              src="https://calendly.com/slixol/felderito-konzultacio?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0e0e0e&text_color=ffffff&primary_color=ef34ff"
              width="100%"
              height="700"
              frameBorder="0"
              loading="lazy"
              title="Felderítő konzultáció foglalása"
              className="w-full min-h-[580px] md:min-h-[700px]"
            />
          ) : (
            <div className="w-full min-h-[580px] md:min-h-[700px] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue/30 border-t-blue rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
