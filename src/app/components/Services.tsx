"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import ImagePlaceholder from "./ui/ImagePlaceholder";

interface Service {
  num: string;
  title: string;
  headline: string;
  items: string[];
}

const services: Service[] = [
  {
    num: "01",
    title: "Performance marketing",
    headline: "A növekedés egyik motorja",
    items: [
      "PPC kampányok",
      "ABM stratégia",
      "Email marketing",
      "SEO optimalizáció",
      "B2B lead generálás",
    ],
  },
  {
    num: "02",
    title: "Stratégia és tanácsadás",
    headline: "Az irány, ami összeköt mindent",
    items: [
      "Pozicionálás",
      "Digital transformation roadmap",
      "GTM stratégia",
      "Versenyelemzés",
    ],
  },
  {
    num: "03",
    title: "Sales támogatás",
    headline: "Értékesítés, ami rendszerre épül",
    items: [
      "GTM kivitelezés",
      "Cold outbound",
      "LinkedIn outreach",
      "Sales automatizáció",
    ],
  },
  {
    num: "04",
    title: "Rendszerek és technológia",
    headline: "A digitális infrastruktúra alapja",
    items: [
      "CRM/ERP bevezetés",
      "B2B webfejlesztés",
      "Portálok",
      "Tech stack optimalizálás",
    ],
  },
  {
    num: "05",
    title: "AI & Automatizáció",
    headline: "Intelligens megoldások, valós hatás",
    items: [
      "Folyamat automatizálás",
      "Chatbotok",
      "Data enrichment",
      "Intelligens riportok",
    ],
  },
  {
    num: "06",
    title: "Szakértői márkaépítés",
    headline: "A tudásod láthatóvá válik",
    items: [
      "Videó produkció",
      "Whitepapers",
      "Social media",
      "Podcast",
      "PR & Events",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

  function handleMobileToggle(index: number) {
    setMobileExpanded((prev) => (prev === index ? null : index));
  }

  return (
    <section id="szolgaltatasok" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mb-3"
          >
            Szolgáltatások
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray"
            delay={0.1}
          >
            Integrált digitális megoldások a növekedéshez
          </AnimatedText>
        </div>

        {/* Desktop: Book layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:flex min-h-[550px] rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
        >
          {services.map((service, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={service.num}
                layout
                className={`overflow-hidden ${
                  isActive
                    ? "flex-1"
                    : "w-12 border-l border-white/[0.06] cursor-pointer hover:bg-white/[0.04] transition-colors duration-200"
                }`}
                onClick={() => !isActive && setActiveIndex(i)}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {isActive ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="p-8 lg:p-10 h-full flex flex-col"
                    >
                      <h3 className="font-safiro text-2xl lg:text-3xl text-white mb-6">
                        {service.title}
                      </h3>

                      <div className="mb-6">
                        <span className="text-xs uppercase tracking-widest text-gray mb-3 block">
                          Mit csinálunk:
                        </span>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-light-gray flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-blue/50 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-1 min-h-0 mb-6">
                        <ImagePlaceholder className="aspect-video w-full" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 rounded-full border border-blue/20 text-blue">
                          {service.title}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="font-safiro text-base font-semibold text-white/30 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => handleMobileToggle(i)}
                className={`w-full rounded-2xl backdrop-blur-md border p-4 text-left transition-colors duration-300 cursor-pointer ${
                  mobileExpanded === i
                    ? "bg-white/[0.08] border-blue/30"
                    : "bg-white/[0.04] border-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-safiro text-sm text-white/30">
                      {service.num}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {service.title}
                    </span>
                  </div>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray"
                    animate={{ rotate: mobileExpanded === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {mobileExpanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-3">
                      <h3 className="font-safiro text-lg text-white mb-3">
                        {service.headline}
                      </h3>
                      <ul className="space-y-2 mb-4">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-light-gray flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-blue/50 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ImagePlaceholder className="aspect-video w-full" />
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs px-3 py-1 rounded-full border border-blue/20 text-blue">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
