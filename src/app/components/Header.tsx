"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";

const navItems = [
  { label: "Módszertan", href: "#modszertan" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Esettanulmányok", href: "#esettanulmanyok" },
  { label: "Kultúra", href: "#kultura" },
  { label: "GYIK", href: "#gyik" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 overflow-visible ${
          mobileOpen
            ? "bg-transparent"
            : scrolled
              ? "backdrop-blur-xl bg-dark/70 border-b border-white/5"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between overflow-visible">
          {/* Logo */}
          <a href="#" className="relative z-[110] flex items-center gap-2">
            <Image
              src="/logos/slixol-x-magenta.png"
              alt="Slixol"
              width={36}
              height={36}
              priority
            />
            <span className="font-safiro text-xl text-white tracking-tight">
              slixol
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — matches Hero flat magenta style */}
          <div className="hidden lg:block">
            <a
              href="#konzultacio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm text-white border border-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#ef34ff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(239,52,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              Felderítő konzultáció
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menü megnyitása"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — outside header to avoid backdrop-filter containing block */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-dark/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-safiro text-white hover:text-blue transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  href="#konzultacio"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Felderítő konzultáció
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
