"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { useHydrated } from "@/app/hooks/useHydrated";

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
      "A beérkező, havi megkeresések száma a duplájára, esetenként a triplájára nőtt. A nyári szezonban teljes kapacitás kihasználtságot értünk el, sőt az igény még magasabb is volt, mint amit a cég ki tudott szolgálni.",
  },
  {
    client: "Hydropool",
    subtitle: "kiszámítható ajánlatkérési csatorna",
    tags: ["PPC stratégia", "Sales támogatás", "Kreatív támogatás"],
    challenge:
      "Az ajánlatkérések mennyisége és minősége messze elmaradt a márka piaci potenciáljától.",
    solution:
      "Erős PPC stratégiával, különböző eszközök tesztelésével, valamint új kreatív megoldásokkal sikerült fordítani a helyzeten - kiszámítható és fenntartható ajánlatkérési csatorna épült ki az online térben.",
    resultHighlight: "Havi 100+ lead",
    resultDetail:
      "Kiszámítható ajánlatkérési csatornák épültek fel, ami kb. havi 100 lead beérkezését szállítja ebben a prémium szegmensben. 2025 januárjában a cég eddigi legsikeresebb évkezdését értük el közösen az ügyféllel.",
  },
  {
    client: "Ariston",
    subtitle: "digitális stratégia új alapokon",
    tags: ["PPC stratégia", "E-mail marketing", "Szakmai márkaépítés"],
    challenge:
      "Az online jelenlétük nem volt kellően hatékony, a hirdetési rendszerek nem támogatták optimálisan sem a márkaismertséget, sem az értékesítési célokat.",
    solution:
      "Egy mérhető és fenntartható digitális stratégia kialakítása, amely erősíti a márka B2B és B2C eléréseit is. Strukturált PPC és EDM stratégiát építettünk ki, szakmai jelenlétüket pedig megerősítettük a digitális térben, támogatva az ügyfelek információszerzését és döntéshozatalát.",
    resultHighlight: "40.000+ kattintás, 54% konverzió",
    resultDetail:
      "Egyik példaként említhetjük az erős Google fókuszú always-on kampányok felépítését, aminek köszönhetően több mint 40.000 kattintás érkezett a weboldalra 2024-ben. A kattintások 54%-át pedig beérkező konverzióként könyvelhettük el, ami kimagasló aránynak számít ebben az iparágban.",
  },
  {
    client: "REHM",
    subtitle: "a hegesztőipar jövőjének építése",
    tags: ["Szakmai tartalmak", "Új sales támogató csatorna"],
    challenge:
      "Hegesztés automatizálás témájában edukálni a szakmát és elindítani egy iparági diskurzust, amire korábban nem volt hatékony kommunikációs csatorna kiépítve.",
    solution:
      "Strukturált tartalomstratégiát alakítottunk ki, amely edukatív és kreatív videós tartalmakra épült. Fő platform a TikTok csatornájuk lett, ami teljesen organikusan növekedett, több százezres megtekintéseket, aktív szakmai kommenteket és vitákat generálva, ezzel erős szakmai márkaépítést indítva el. Egy merészebb, kísérletező kommunikáció ilyen réspiaci iparágakban is eredményesen tud működni.",
    resultHighlight: "10x követők, 1M+ elérés",
    resultDetail:
      "A merész TikTok stratégiának köszönhetően ebben a réspiaci szektorban 7 hónap alatt, organikusan: követők száma 10x, 1M feletti elért közönség, beérkező megkeresések és ajánlatkérések egy eddig nem használt csatornáról, teltházas nyílt napok.",
  },
];

export default function CaseStudies() {
  const hydrated = useHydrated();

  return (
    <section id="esettanulmanyok" className="section-padding px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>Esettanulmányok</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-5 mb-3"
          >
            Amit építünk, működik
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary"
            delay={0.1}
          >
            Valós rendszerek, valós eredmények
          </AnimatedText>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.client}
              initial={hydrated ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="elevated-card overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: content (~60%) */}
                <div className="flex-[3] p-6 md:p-8 lg:p-10">
                  <h3 className="font-safiro text-xl md:text-2xl text-white">
                    {c.client}
                    <span className="text-secondary font-inter text-sm md:text-base ml-2">
                      — {c.subtitle}
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
                      <span className="text-xs uppercase tracking-widest text-white font-semibold mb-1 block">
                        Kihívás
                      </span>
                      <p className="text-secondary leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-white font-semibold mb-1 block">
                        Megoldás
                      </span>
                      <p className="text-secondary leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-white font-semibold mb-1 block">
                        Eredmény
                      </span>
                      <p className="font-safiro text-lg md:text-xl text-blue mb-1">
                        {c.resultHighlight}
                      </p>
                      <p className="text-secondary text-xs leading-relaxed">
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

        {/* CTA */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 15 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <AnimatedText
            as="h3"
            className="font-safiro text-2xl md:text-3xl text-white mb-2"
          >
            Építsünk együtt
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-sm text-secondary mb-6"
            delay={0.1}
          >
            Megújulás, fejlődés, adaptálódás
          </AnimatedText>
          <Button href="#konzultacio">Díjmentes stratégiai konzultáció</Button>
        </motion.div>
      </div>
    </section>
  );
}
