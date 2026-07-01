"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";
import { categories, type FAQItem } from "@/app/lib/faqData";

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span className="text-base text-white group-hover:text-blue transition-colors pr-4">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-secondary flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-secondary leading-relaxed pr-8 whitespace-pre-line">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const hydrated = useHydrated();

  return (
    <section id="gyik" className="section-padding px-6 relative overflow-hidden">
      {/* Background glow — blue only */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] glow-orb-blue opacity-20" />

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>GYIK</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6"
          >
            Gyakori kérdések
          </AnimatedText>
        </div>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={hydrated ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-safiro text-lg text-blue mb-4 heading-card">
                {cat.title}
              </h3>
              <div>
                {cat.items.map((item, j) => (
                  <AccordionItem key={j} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
