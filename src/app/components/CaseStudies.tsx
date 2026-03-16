"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import ImagePlaceholder from "./ui/ImagePlaceholder";

interface CaseStudy {
  client: string;
  subtitle: string;
  tags: string[];
  challenge: string;
  solution: string;
  resultHighlight: string;
  resultDetail: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "VPT Caravan",
    subtitle: "az újjászületés útján",
    tags: ["Digitális átalakulás", "Lead generálás", "Webfejlesztés"],
    challenge:
      "A lakóautózást, mint életérzést beépíteni a köztudatba és közelebb hozni a magyar célközönséghez, miközben feltöltjük a bérlési üzletág kapacitásait.",
    solution:
      "Teljes digitális átalakulás: weboldal újragondolása, digitális lead generáló- és brand stratégia, ami a márkaismertség növelésétől a konkrét ajánlatkérésekig vezeti az érdeklődőket.",
    resultHighlight: "2-3x havi megkeresés",
    resultDetail:
      "A nyári szezonban teljes kapacitás kihasználtságot értünk el, sőt az igény még magasabb is volt, mint amit a cég ki tudott szolgálni.",
  },
  {
    client: "Hydropool",
    subtitle: "kiszámítható ajánlatkérési csatorna",
    tags: ["PPC stratégia", "Sales támogatás", "Kreatív támogatás"],
    challenge:
      "Az ajánlatkérések mennyisége és minősége messze elmaradt a márka piaci potenciáljától.",
    solution:
      "Erős PPC stratégiával, különböző eszközök tesztelésével, valamint új kreatív megoldásokkal sikerült fordítani a helyzeten.",
    resultHighlight: "Havi 100+ lead",
    resultDetail:
      "Kiszámítható ajánlatkérési csatornák épültek fel ebben a prémium szegmensben. 2025 januárjában a cég eddigi legsikeresebb évkezdését értük el.",
  },
  {
    client: "Ariston",
    subtitle: "digitális stratégia új alapokon",
    tags: ["PPC stratégia", "E-mail marketing", "Szakmai márkaépítés"],
    challenge:
      "Az online jelenlétük nem volt kellően hatékony, a hirdetési rendszerek nem támogatták optimálisan sem a márkaismertséget, sem az értékesítési célokat.",
    solution:
      "Strukturált PPC és EDM stratégiát építettünk ki, szakmai jelenlétüket pedig megerősítettük a digitális térben.",
    resultHighlight: "40.000+ kattintás, 54% konverzió",
    resultDetail:
      "Erős Google fókuszú always-on kampányok felépítése, kimagasló konverziós aránnyal az iparágban.",
  },
  {
    client: "REHM",
    subtitle: "a hegesztőipar jövőjének építése",
    tags: ["Szakmai tartalmak", "Új sales csatorna"],
    challenge:
      "Hegesztés automatizálás témájában edukálni a szakmát és elindítani egy iparági diskurzust, amire korábban nem volt hatékony kommunikációs csatorna.",
    solution:
      "Strukturált tartalomstratégia, edukatív és kreatív videós tartalmakra építve. Fő platform a TikTok, ami teljesen organikusan növekedett.",
    resultHighlight: "10x követők, 1M+ elérés",
    resultDetail:
      "Beérkező megkeresések és ajánlatkérések egy eddig nem használt csatornáról, teltházas nyílt napok.",
  },
];

export default function CaseStudies() {
  return (
    <section id="esettanulmanyok" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Esettanulmányok</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mt-5 mb-3"
          >
            Amit építünk, működik
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray"
            delay={0.1}
          >
            Valós rendszerek, valós eredmények
          </AnimatedText>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-blue/15 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: content (~60%) */}
                <div className="flex-[3] p-6 md:p-8 lg:p-10">
                  <h3 className="font-safiro text-xl md:text-2xl text-white">
                    {c.client}
                    <span className="text-gray font-inter text-sm md:text-base ml-2">
                      – {c.subtitle}
                    </span>
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full border border-blue/20 text-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gray mb-1 block">
                        Kihívás
                      </span>
                      <p className="text-light-gray leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gray mb-1 block">
                        Megoldás
                      </span>
                      <p className="text-light-gray leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gray mb-1 block">
                        Eredmény
                      </span>
                      <p className="font-safiro text-lg md:text-xl text-blue mb-1">
                        {c.resultHighlight}
                      </p>
                      <p className="text-gray text-xs leading-relaxed">
                        {c.resultDetail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: image placeholder (~40%) */}
                <div className="flex-[2] p-6 md:p-8 lg:p-10 flex items-center">
                  <ImagePlaceholder className="aspect-[4/3] w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
