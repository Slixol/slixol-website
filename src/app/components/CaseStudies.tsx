"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const featured = {
  client: "VPT Caravan",
  tags: ["Digitális átalakulás", "Lead generálás", "Webfejlesztés"],
  challenge:
    "A VPT Caravan egy tradicionális családi vállalkozás, amelynek online jelenlétük gyakorlatilag nem létezett. A megkeresések csak ajánlásból érkeztek.",
  solution:
    "Teljes digitális átalakítás: új weboldal, PPC kampányok, CRM bevezetés, sales folyamat automatizáció és content stratégia párhuzamosan.",
  result: "Havi megkeresések 2-3x növekedés, teljes kapacitás kihasználtság",
};

const cases = [
  {
    client: "Hydropool",
    tags: ["PPC", "Sales támogatás"],
    result: "Havi 100+ lead, legsikeresebb évkezdés a cég történetében",
  },
  {
    client: "Ariston",
    tags: ["PPC", "EDM", "Márkaépítés"],
    result: "40.000+ kattintás, 54% konverzió",
  },
  {
    client: "REHM",
    tags: ["TikTok", "Content"],
    result: "10x követőszám, 1M+ elérés, teltházas nyílt napok",
  },
];

export default function CaseStudies() {
  return (
    <section id="esettanulmanyok" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>Esettanulmányok</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-4"
          >
            Amit építünk, működik
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-light-gray"
            delay={0.1}
          >
            Valós rendszerek, valós eredmények
          </AnimatedText>
        </div>

        {/* Featured case study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-magenta/5 to-blue/5"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-magenta/20 text-magenta"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-safiro text-3xl md:text-4xl text-white mb-8">
            {featured.client}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray mb-2 block">
                Kihívás
              </span>
              <p className="text-light-gray text-sm leading-relaxed">
                {featured.challenge}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gray mb-2 block">
                Megoldás
              </span>
              <p className="text-light-gray text-sm leading-relaxed">
                {featured.solution}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gray mb-2 block">
                Eredmény
              </span>
              <p className="text-white font-medium text-lg">{featured.result}</p>
            </div>
          </div>
        </motion.div>

        {/* 3 case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue/20 transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-white/10 text-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-safiro text-2xl text-white mb-4">
                {c.client}
              </h3>
              <p className="text-light-gray text-sm">{c.result}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="font-safiro text-3xl md:text-4xl text-white mb-3">
            Építsünk együtt
          </h3>
          <p className="text-light-gray mb-8">
            Megújulás, fejlődés, adaptálódás
          </p>
          <Button href="#konzultacio">Díjmentes stratégiai konzultáció</Button>
        </motion.div>
      </div>
    </section>
  );
}
