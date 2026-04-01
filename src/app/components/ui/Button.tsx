"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-magenta text-white hover:bg-magenta/80 hover:shadow-lg hover:shadow-magenta/25",
    secondary: "bg-blue text-white hover:bg-blue/80 hover:shadow-lg hover:shadow-blue/25",
    outline:
      "border border-white/20 text-white hover:border-blue hover:text-blue bg-transparent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const MotionTag = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <MotionTag
      {...(props as Record<string, unknown>)}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </MotionTag>
  );
}
