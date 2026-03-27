"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  { label: "Módszertan", href: "#modszertan" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Esettanulmányok", href: "#esettanulmanyok" },
  { label: "Kultúra", href: "#kultura" },
  { label: "GYIK", href: "#gyik" },
];

const legalLinks = [
  { label: "Adatkezelési szabályzat", href: "/docs/Adatkezelesi_Szabalyzat.pdf" },
  { label: "Adatvédelmi és adatbiztonsági szabályzat", href: "/docs/ADATVEDELMI-ES-ADATBIZTONSAGI-SZABALYZAT.pdf" },
  { label: "Adatkezelési tevékenység nyilvántartása", href: "/docs/Adatkezelesi_tevekenyseg_nyilvantartasa.pdf" },
  { label: "Incidens szabályzat", href: "/docs/Incidens_szabalyzat_nyilvantartas.pdf" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/__slixol__/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/slixol/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@slixolmedia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@slixol",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const overscrollCount = useRef(0);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      // Only trigger when scrolled to the very bottom and trying to scroll down
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom && e.deltaY > 0) {
        overscrollCount.current++;
        // After 3 consecutive overscroll attempts, jump to consultation
        if (overscrollCount.current >= 3) {
          overscrollCount.current = 0;
          document.getElementById("konzultacio")?.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        overscrollCount.current = 0;
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <footer className="bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo + tagline */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logos/slixol-x-magenta.png"
                  alt="Slixol"
                  width={32}
                  height={32}
                />
                <span className="font-safiro text-xl text-white tracking-tight">
                  slixol
                </span>
              </a>
              <p className="text-sm text-secondary max-w-xs">
                Magyarország első digitalizációs és növekedési partnere B2B és
                ipari cégek számára.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-safiro text-sm text-white mb-4">Navigáció</h4>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-secondary hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-safiro text-sm text-white mb-4">Elérhetőség</h4>
              <div className="flex flex-col gap-3 text-sm text-secondary">
                <a
                  href="mailto:brief@slixol-media.com"
                  className="hover:text-white transition-colors"
                >
                  brief@slixol-media.com
                </a>
                <a
                  href="tel:+36203773315"
                  className="hover:text-white transition-colors"
                >
                  +36 20 377 3315
                </a>
                <p>1125 Budapest, Galgóczy utca 36</p>
              </div>
            </div>

            {/* Legal / Szabályzatok */}
            <div>
              <h4 className="font-safiro text-sm text-white mb-4">Szabályzatok</h4>
              <nav className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-safiro text-sm text-white mb-4">Közösségi média</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-secondary hover:text-blue transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-secondary">
              &copy; {new Date().getFullYear()} Slixol. Minden jog fenntartva.
            </p>
            <p className="text-xs text-secondary/40">
              megújulás &middot; fejlődés &middot; adaptálódás
            </p>
          </div>
        </div>
      </div>

      {/* Half-cut large X logo — clicking scrolls to consultation */}
      <a
        href="#konzultacio"
        aria-label="Vissza a konzultáció szekcióhoz"
        className="relative h-32 md:h-48 flex items-end justify-center overflow-hidden cursor-pointer group"
      >
        <Image
          src="/logos/slixol-x-magenta.png"
          alt=""
          width={300}
          height={300}
          className="translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none"
        />
      </a>
    </footer>
  );
}
