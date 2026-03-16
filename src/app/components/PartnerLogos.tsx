"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./ui/AnimatedText";

const partnerFiles = [
  "partner-01.png", "partner-02.png", "partner-03.svg", "partner-04.jpeg",
  "partner-05.png", "partner-06.png", "partner-07.png", "partner-08.svg",
  "partner-09.svg", "partner-10.jpg", "partner-11.png", "partner-12.png",
  "partner-13.png", "partner-14.png", "partner-15.png", "partner-16.png",
  "partner-17.png", "partner-18.png", "partner-19.png", "partner-20.svg",
  "partner-21.jpg", "partner-22.png", "partner-23.png", "partner-24.png",
  "partner-25.png", "partner-26.jpg", "partner-27.png", "partner-28.png",
  "partner-29.svg", "partner-30.svg", "partner-31.png", "partner-32.png",
  "partner-33.webp", "partner-34.png", "partner-35.png", "partner-36.png",
  "partner-37.png", "partner-38.png", "partner-39.png", "partner-40.png",
  "partner-41.png", "partner-42.svg", "partner-43.png", "partner-44.png",
  "partner-45.png", "partner-46.png", "partner-47.png", "partner-48.png",
  "partner-49.png", "partner-50.png", "partner-51.jpg", "partner-52.png",
  "partner-53.svg", "partner-54.png", "partner-55.avif", "partner-56.png",
  "partner-57.svg", "partner-58.png", "partner-59.png", "partner-60.png",
];

const row1 = partnerFiles.slice(0, 30);
const row2 = partnerFiles.slice(30);

function LogoItem({ file, index }: { file: string; index: number }) {
  return (
    <div className="flex-shrink-0 w-[120px] h-[60px] md:w-[150px] md:h-[70px] flex items-center justify-center mx-6 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
      <Image
        src={`/partners/${file}`}
        alt={`Partner ${index + 1}`}
        width={150}
        height={70}
        className="object-contain max-h-full w-auto"
        unoptimized={file.endsWith(".svg")}
      />
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <AnimatedText
          as="h2"
          className="font-safiro text-3xl md:text-4xl text-white"
        >
          Ők már elindultak a digitalizáció útján
        </AnimatedText>
      </div>

      {/* Row 1 - left to right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((file, i) => (
            <LogoItem key={`r1-${i}`} file={file} index={i % row1.length} />
          ))}
        </div>
      </motion.div>

      {/* Row 2 - right to left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex animate-marquee-reverse">
          {[...row2, ...row2].map((file, i) => (
            <LogoItem key={`r2-${i}`} file={file} index={i % row2.length} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
