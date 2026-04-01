"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

const values = [
  {
    title: "Nem túl komolyan",
    points: [
      "Merünk nevetni magunkon és nem vesszük magunkat túl komolyan.",
      "Arra törekszünk, hogy élvezetet és könnyedséget találjunk munkában, miközben megőrizzük a professzionalizmust.",
      "Legyünk autentikusak, de tudjuk hol a határ.",
    ],
  },
  {
    title: "Radikális felelősséget vállalva",
    points: [
      "Kölcsönösen arra ösztönözzük egymást, hogy vállaljunk felelősséget tetteinkért.",
      "Törekszünk a fejlődésre, vállaljuk a felelősséget személyes és szakmai fejlődésünkért.",
      "Gyorsan és ego mentesen beismerjük, ha hibáztunk.",
    ],
  },
  {
    title: "Nyíltan kommunikálva",
    points: [
      "Aktívan hallgatunk, ahelyett, hogy egyből defenzíven reagálnánk.",
      "Tisztelettel bánunk egymással és nem személyeskedünk, amikor nem értünk egyet másokkal.",
    ],
  },
  {
    title: "Agilisan és hatékonyan",
    points: [
      "Újragondoljuk a problémákat, hogy gyakorlati megoldásokat találjunk a nehéz kérdésekre.",
      "Megkérdőjelezzük a berögzült feltételezéseket, ha indokolt, és jobb megközelítéseket javaslunk.",
      "A gyors jobb, mint a lassú.",
      "Nyitott elmével, befogadóan reagálunk egymás ötleteire.",
    ],
  },
  {
    title: "Ügyfélcentrikusan",
    points: [
      "Az ügyfélből indulunk ki, aztán haladunk visszafelé.",
      "Aktívan hallgatunk, hogy megértsük ügyfeleink nézőpontját.",
      "Őszinte érdeklődést mutatunk ügyfeleink sikere iránt.",
      "Proaktívan azonosítjuk és kezeljük ügyfeleink problémáit, mielőtt azok eszkalálódnának.",
    ],
  },
  {
    title: "Reziliensen",
    points: [
      "Szembenézünk a kihívásokkal és megoldásokon dolgozunk, ahelyett, hogy elkerülnénk őket.",
      "A kudarcokat és megpróbáltatásokat tanulási lehetőségként használjuk fel, hogy közösen fejlődjünk és tanuljunk belőlük.",
      "Nyugodtan és magabiztosan alkalmazkodunk a változásokhoz és váratlan eseményekhez.",
    ],
  },
];

const faceBase: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

function FlipCard({
  value,
  index,
  hydrated,
}: {
  value: (typeof values)[number];
  index: number;
  hydrated: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={hydrated ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className="group min-h-[340px] md:min-h-[360px] cursor-pointer"
        style={{ perspective: "1000px" }}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
      >
        <div
          className="relative w-full min-h-[340px] md:min-h-[360px]"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── FRONT FACE ── */}
          <div
            className="rounded-2xl p-7 md:p-8 flex flex-col justify-between"
            style={{
              ...faceBase,
              background: "#1c2545",
              border: "1px solid rgba(77,122,255,0.22)",
              opacity: isFlipped ? 0 : 1,
              transition: "opacity 0s linear 0.3s",
            }}
          >
            {/* Subtle blue gradient blob */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(0,56,255,0.2), transparent 50%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center gap-5">
              {/* Number — blue accent */}
              <span className="text-5xl font-bold font-safiro text-blue/20 heading-display">
                {number}
              </span>

              {/* Title */}
              <h3 className="font-safiro text-xl md:text-2xl text-white heading-card">
                {value.title}
              </h3>

              {/* Hint */}
              <span className="text-xs text-white/25 transition-colors group-hover:text-white/50">
                Felfedezés &rarr;
              </span>
            </div>

            {/* Bottom blue accent line */}
            <div
              className="relative z-10 h-[1.5px] rounded-full mt-4"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,56,255,0.3), transparent)",
              }}
            />
          </div>

          {/* ── BACK FACE ── */}
          <div
            className="rounded-2xl p-7 md:p-8 flex flex-col"
            style={{
              ...faceBase,
              transform: "rotateY(180deg)",
              background: "#1e284a",
              border: "1px solid rgba(77,122,255,0.28)",
              opacity: isFlipped ? 1 : 0,
              transition: "opacity 0s linear 0.3s",
            }}
          >
            {/* Blue gradient blob — slightly more intense on back */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,56,255,0.22), transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header row */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-bold font-safiro text-blue/50">
                  {number}
                </span>
                <span className="text-white/20">&mdash;</span>
                <h3 className="font-safiro text-base text-white">
                  {value.title}
                </h3>
              </div>

              {/* Blue divider */}
              <div
                className="h-[1.5px] rounded-full mb-5"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,56,255,0.3), transparent)",
                }}
              />

              {/* Bullet points */}
              <ul className="space-y-3 flex-1">
                {value.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-secondary leading-relaxed flex gap-3 items-start"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue/40" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Back hint */}
              <span className="text-xs text-white/25 mt-4 text-right">
                &larr; Vissza
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Culture() {
  const hydrated = useHydrated();

  return (
    <section
      id="kultura"
      className="section-padding px-6 relative overflow-hidden"
    >
      {/* Background glow — blue only */}
      <div className="absolute -top-20 -left-40 w-[500px] h-[500px] glow-orb-blue opacity-25" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>Kultúra</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6 mb-6"
          >
            Kontrasztok harmóniája
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto"
            delay={0.1}
          >
            Az igazi értékek egy szervezet életében azok a viselkedésmódok és
            készségek, amelyeket kölcsönösen értékelünk egymásban. Az értékekről
            könnyű beszélni. Megélni őket már nehezebb. De pont ettől izgalmas.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <FlipCard key={i} value={value} index={i} hydrated={hydrated} />
          ))}
        </div>

        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button href="#konzultacio">Dolgozzunk együtt</Button>
        </motion.div>
      </div>
    </section>
  );
}
