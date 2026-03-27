"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

export default function Consultation() {
  const hydrated = useHydrated();
  const calRef = useRef<HTMLDivElement>(null);
  // Preload early — 2000px before entering viewport
  const isCalInView = useInView(calRef, { once: true, margin: "0px 0px 2000px 0px" });

  return (
    <section id="konzultacio" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>Konzultáció</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6 mb-6"
          >
            Kezdődjön el a változás
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
            delay={0.1}
          >
            Az utóbbi két év során közel 500 cégnek tartottuk meg azt a
            stratégiai konzultációt, amire itt is időpontot lehet foglalni.
          </AnimatedText>
        </div>

        {/* Calendly embed — seamless, no wrapper box */}
        <motion.div
          ref={calRef}
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full overflow-hidden"
        >
          {isCalInView ? (
            <iframe
              src="https://calendly.com/slixol/felderito-konzultacio?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0e0e0e&text_color=ffffff&primary_color=4d7aff"
              width="100%"
              height="700"
              frameBorder="0"
              loading="lazy"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
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
