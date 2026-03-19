"use client";

import AnimatedText from "./ui/AnimatedText";
import ServiceCard from "./ServiceCard";
import { useHydrated } from "@/app/hooks/useHydrated";

interface Service {
  num: string;
  title: string;
  items: string[];
}

const serviceIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

const services: Service[] = [
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

  return (
    <section id="szolgaltatasok" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <AnimatedText
            as="h2"
            className="font-safiro text-3xl md:text-5xl lg:text-6xl text-white mb-3"
          >
            Szolgáltatások
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-base md:text-lg text-light-gray"
            delay={0.1}
          >
            integrált digitális megoldások a növekedéshez
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.num}
              service={service}
              icon={serviceIcons[i]}
              index={i}
              hydrated={hydrated}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
