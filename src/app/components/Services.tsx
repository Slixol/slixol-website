"use client";

import { useState } from "react";
import SectionLabel from "./ui/SectionLabel";
import AnimatedText from "./ui/AnimatedText";
import ServiceCard from "./ServiceCard";
import { useHydrated } from "@/app/hooks/useHydrated";

const services = [
  {
    num: "01",
    title: "Performance marketing",
    items: [
      "PPC kampányok",
      "Account-based marketing (ABM)",
      "E-mail marketing és marketing automatizáció",
      "SEO és tartalmi optimalizálás",
      "B2B lead generálás",
    ],
  },
  {
    num: "02",
    title: "Stratégia és tanácsadás",
    items: [
      "Pozicionálás ipari B2B piacokon",
      "Digitális transzformációs roadmap",
      "Go-to-market stratégia új termékekhez és exportpiacokra",
      "Marketing és sales tanácsadás",
      "Digitalizációs tanácsadás és roadmap készítés",
    ],
  },
  {
    num: "03",
    title: "Sales támogatás",
    items: [
      "Go-to-market kivitelezés",
      "Hideg e-mail kampányok kivitelezése (cold outbound)",
      "Értékesítési folyamatok digitalizálása",
      "Sales enablement anyagok, prezentációk, technikai dokumentációk",
      "LinkedIn outreach kivitelezése",
    ],
  },
  {
    num: "04",
    title: "Rendszerek és technológia",
    items: [
      "CRM/ERP kiválasztás és bevezetés támogatás",
      "B2B weboldal fejlesztés lead generálásra optimalizálva",
      "Ügyfélportálok és B2B e-ker platformok fejlesztése",
      "Tech stack tervezés és implementáció",
    ],
  },
  {
    num: "05",
    title: "AI & Automatizáció",
    items: [
      "AI támogatott folyamat automatizációk",
      "Intelligens chatbotok",
      "Data enrichment sales támogatáshoz",
      "Egyedi AI megoldások",
      "AI integráció meglévő rendszerekbe",
    ],
  },
  {
    num: "06",
    title: "Szakértői márkaépítés",
    items: [
      "Edukatív, videós tartalomgyártás",
      "Statikus tartalmak: whitepapers, esettanulmányok",
      "Social media menedzsment",
      "Termékfotózás",
      "Podcastek és szakmai PR",
      "Event marketing támogatás",
    ],
  },
];

export default function Services() {
  const hydrated = useHydrated();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="szolgaltatasok" className="section-padding px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-14">
          <SectionLabel>Szolgáltatások</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-4xl lg:text-5xl heading-section text-white mt-6 mb-6"
          >
            Integrált megoldások a növekedéshez
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto"
            delay={0.1}
          >
            Hat szakértői terület, egy összehangolt stratégia.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.num}
              service={service}
              index={i}
              hydrated={hydrated}
              isAnyHovered={hoveredIndex !== null}
              isHovered={hoveredIndex === i}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
