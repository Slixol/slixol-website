"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-magenta border border-magenta/30 rounded-full"
    >
      {children}
    </motion.span>
  );
}
