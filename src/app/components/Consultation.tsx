"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

export default function Consultation() {
  const hydrated = useHydrated();
  const calRef = useRef<HTMLDivElement>(null);
  const isCalInView = useInView(calRef, { once: true, margin: "0px 0px 2000px 0px" });

  useEffect(() => {
    if (!isCalInView) return;
    // Load Calendly widget script once when section is near viewport
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [isCalInView]);

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

        {/* Calendly inline widget */}
        <motion.div
          ref={calRef}
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full overflow-hidden"
        >
          {isCalInView ? (
            <div
              className="calendly-inline-widget w-full min-h-[580px] md:min-h-[700px]"
              data-url="https://calendly.com/slixol/felderito-konzultacio?hide_gdpr_banner=1&background_color=0e0e0e&text_color=ffffff"
              style={{ minWidth: "320px", height: "700px" }}
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
