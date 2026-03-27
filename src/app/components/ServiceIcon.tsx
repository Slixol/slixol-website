"use client";

import { motion } from "framer-motion";

interface ServiceIconProps {
  type: "marketing" | "strategy" | "sales" | "systems" | "ai" | "brand";
  isHovered: boolean;
}

const smooth = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } as const;

export default function ServiceIcon({ type, isHovered }: ServiceIconProps) {
  const icons: Record<string, React.ReactNode> = {
    // 01 — Ascending bar chart (3 bars)
    marketing: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <motion.rect
          x="3" y="16" width="5" height="7" rx="1"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scaleY: isHovered ? [1, 1.15, 1] : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "5.5px 23px" }}
        />
        <motion.rect
          x="10.5" y="10" width="5" height="13" rx="1"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scaleY: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          style={{ transformOrigin: "13px 23px" }}
        />
        <motion.rect
          x="18" y="4" width="5" height="19" rx="1"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scaleY: isHovered ? [1, 1.08, 1] : 1 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          style={{ transformOrigin: "20.5px 23px" }}
        />
      </svg>
    ),

    // 02 — Compass (needle + circle)
    strategy: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <motion.circle
          cx="13" cy="13" r="10"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scale: isHovered ? [1, 1.04, 1] : 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "13px 13px" }}
        />
        {/* Compass needle — diamond shape */}
        <motion.path
          d="M13 5 L15.5 13 L13 21 L10.5 13 Z"
          stroke="#4d7aff" strokeWidth="1.2" strokeLinejoin="round" fill="none"
          animate={{ rotate: isHovered ? [0, 15, -10, 0] : 0 }}
          transition={{ duration: 0.7 }}
          style={{ transformOrigin: "13px 13px" }}
        />
        {/* North fill */}
        <motion.path
          d="M13 5 L15.5 13 L10.5 13 Z"
          fill="#4d7aff"
          animate={{ opacity: isHovered ? 0.6 : 0.3 }}
          transition={smooth}
        />
        {/* Cardinal dots */}
        <circle cx="13" cy="2" r="1" fill="#4d7aff" opacity="0.4" />
        <circle cx="24" cy="13" r="1" fill="#4d7aff" opacity="0.4" />
        <circle cx="13" cy="24" r="1" fill="#4d7aff" opacity="0.4" />
        <circle cx="2" cy="13" r="1" fill="#4d7aff" opacity="0.4" />
      </svg>
    ),

    // 03 — Rocket (sales launch, outreach, go-to-market)
    sales: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        {/* Rocket body */}
        <motion.path
          d="M16 3 C16 3 21 5 22 10 L18 14 L12 8 L16 4 Z"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinejoin="round" fill="none"
          animate={{ x: isHovered ? -1 : 0, y: isHovered ? 1 : 0 }}
          transition={smooth}
        />
        {/* Nose cone */}
        <motion.path
          d="M22 10 L24 4 L18 3"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          animate={{ x: isHovered ? -1 : 0, y: isHovered ? 1 : 0 }}
          transition={smooth}
        />
        {/* Window */}
        <motion.circle
          cx="17.5" cy="8.5" r="1.5"
          stroke="#4d7aff" strokeWidth="1.2" fill="none"
          animate={{ x: isHovered ? -1 : 0, y: isHovered ? 1 : 0 }}
          transition={smooth}
        />
        {/* Left fin */}
        <motion.path
          d="M12 8 L8 7 L10 11"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          animate={{ x: isHovered ? -1 : 0, y: isHovered ? 1 : 0 }}
          transition={smooth}
        />
        {/* Bottom fin */}
        <motion.path
          d="M18 14 L19 18 L15 16"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          animate={{ x: isHovered ? -1 : 0, y: isHovered ? 1 : 0 }}
          transition={smooth}
        />
        {/* Flame trails */}
        <motion.path
          d="M10 16 L4 22"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3, pathLength: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.path
          d="M7 14 L3 18"
          stroke="#4d7aff" strokeWidth="1" strokeLinecap="round"
          animate={{ opacity: isHovered ? [0.2, 0.6, 0.2] : 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.path
          d="M12 19 L8 23"
          stroke="#4d7aff" strokeWidth="1" strokeLinecap="round"
          animate={{ opacity: isHovered ? [0.2, 0.6, 0.2] : 0.15 }}
          transition={{ duration: 0.6, delay: 0.2, repeat: isHovered ? Infinity : 0 }}
        />
      </svg>
    ),

    // 04 — Gear / cog (mathematically circular, 8 teeth at center 13,13)
    systems: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <motion.path
          d="M13,3 L15.7,6.5 L20.1,5.9 L19.5,10.3 L23,13 L19.5,15.7 L20.1,20.1 L15.7,19.5 L13,23 L10.3,19.5 L5.9,20.1 L6.5,15.7 L3,13 L6.5,10.3 L5.9,5.9 L10.3,6.5 Z"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinejoin="round" fill="none"
          animate={{ rotate: isHovered ? 22.5 : 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: "13px 13px" }}
        />
        <motion.circle
          cx="13" cy="13" r="3.5"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scale: isHovered ? [1, 0.9, 1] : 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ transformOrigin: "13px 13px" }}
        />
      </svg>
    ),

    // 05 — Processor chip (AI)
    ai: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        {/* Chip body */}
        <motion.rect
          x="7" y="7" width="12" height="12" rx="2"
          stroke="#4d7aff" strokeWidth="1.5" fill="none"
          animate={{ scale: isHovered ? [1, 1.04, 1] : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "13px 13px" }}
        />
        {/* Inner circuit square */}
        <motion.rect
          x="10" y="10" width="6" height="6" rx="1"
          stroke="#4d7aff" strokeWidth="1" fill="none"
          animate={{ opacity: isHovered ? 0.8 : 0.3 }}
          transition={smooth}
        />
        {/* Pins — top */}
        <motion.line x1="10" y1="3" x2="10" y2="7" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0 }} />
        <motion.line x1="16" y1="3" x2="16" y2="7" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.04 }} />
        {/* Pins — bottom */}
        <motion.line x1="10" y1="19" x2="10" y2="23" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.08 }} />
        <motion.line x1="16" y1="19" x2="16" y2="23" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.12 }} />
        {/* Pins — left */}
        <motion.line x1="3" y1="10" x2="7" y2="10" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.06 }} />
        <motion.line x1="3" y1="16" x2="7" y2="16" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.1 }} />
        {/* Pins — right */}
        <motion.line x1="19" y1="10" x2="23" y2="10" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.02 }} />
        <motion.line x1="19" y1="16" x2="23" y2="16" stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ ...smooth, delay: 0.14 }} />
      </svg>
    ),

    // 06 — Megaphone (brand building)
    brand: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        {/* Megaphone body */}
        <motion.path
          d="M4 10 L4 16 L8 16 L16 21 L16 5 L8 10 Z"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinejoin="round" fill="none"
          animate={{ scale: isHovered ? [1, 1.03, 1] : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "10px 13px" }}
        />
        {/* Sound waves */}
        <motion.path
          d="M19 9 Q22 13 19 17"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" fill="none"
          animate={{ opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3, x: isHovered ? [0, 1, 0] : 0 }}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.path
          d="M21 7 Q25 13 21 19"
          stroke="#4d7aff" strokeWidth="1.5" strokeLinecap="round" fill="none"
          animate={{ opacity: isHovered ? [0.2, 0.6, 0.2] : 0.15, x: isHovered ? [0, 1.5, 0] : 0 }}
          transition={{ duration: 0.8, delay: 0.15, repeat: isHovered ? Infinity : 0 }}
        />
      </svg>
    ),
  };

  return (
    <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/[0.12] flex items-center justify-center flex-shrink-0">
      {icons[type]}
    </div>
  );
}
