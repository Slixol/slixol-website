"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    title: "Alapinformációk a slixolról",
    items: [
      {
        q: "Mivel foglalkoztok pontosan?",
        a: "Digitalizációs és növekedési partnerként segítünk B2B és ipari cégeknek abban, hogy marketing, sales, rendszerek és márkaépítés terén integráltan fejlődjenek. Nem egy területre specializálódunk – hanem az egész rendszert építjük.",
      },
      {
        q: "Miben különböztök egy klasszikus marketing ügynökségtől?",
        a: "Nem csak kampányokat futtatunk. A marketing mellett foglalkozunk sales támogatással, rendszerintegrációval, AI automatizációval és márkaépítéssel is. Az 5 pod-os modellünk biztosítja, hogy minden terület összehangoltan működjön.",
      },
      {
        q: "Kikkel dolgoztok általában?",
        a: "Elsősorban B2B és ipari szektorbeli közepes és nagyvállalatok a célcsoportunk – gyártók, kereskedők, szolgáltatók, akik komolyan gondolják a digitális átalakulást.",
      },
      {
        q: "Mikor vagytok jó választás?",
        a: "Amikor a céged kinőtte a jelenlegi marketing és sales megoldásokat, és rendszerszintű fejlődésre van szükség. Amikor nem egy újabb ügynökséget keresel, hanem stratégiai partnert.",
      },
      {
        q: "Mikor nem ti vagytok a jó választás?",
        a: "Ha egyetlen, izolált kampányra van szükséged, vagy ha a céged még nincs abban a fázisban, ahol az integrált megközelítés megtérül. Ilyenkor is szívesen ajánlunk megfelelő partnert.",
      },
      {
        q: "Mennyibe kerül veletek dolgozni?",
        a: "Havi retainer alapon dolgozunk, a pontos összeg a scope-tól függ. A felderítő konzultáción felmérjük az igényeket, és utána készítünk személyre szabott ajánlatot.",
      },
      {
        q: "Dolgoztok alvállalkozókkal?",
        a: "A core csapat házon belül van. Speciális területeken (pl. videó produkció, PR) bevont partnerekkel dolgozunk, de a stratégia és a koordináció mindig nálunk marad.",
      },
      {
        q: "Milyen gyakran kapunk riportokat?",
        a: "Havi rendszerességgel készítünk részletes riportot, negyedévente pedig stratégiai értékelést tartunk. A napi kommunikáció Slack-en vagy a megbeszélt csatornákon folyik.",
      },
    ],
  },
  {
    title: "Együttműködés folyamata",
    items: [
      {
        q: "Mi történik a stratégiai konzultáción?",
        a: "60 perces online meeting, ahol megismerjük a céged, a jelenlegi helyzeted és a céljaid. Nem pitchelünk – kérdezünk, hallgatunk, és felvázoljuk, hogyan segíthetünk.",
      },
      {
        q: "Hogyan lehet a legegyszerűbben elindulni?",
        a: "Foglalj egy díjmentes felderítő konzultációt. 60 perc, online, kötelezettségek nélkül. Ha kölcsönösen úgy látjuk, hogy jó fit, elkészítjük az ajánlatot.",
      },
      {
        q: "Mennyi idő alatt indul el egy együttműködés?",
        a: "A konzultációtól az indulásig általában 2-4 hét telik el – az audit, a stratégia és a csapat felállítása ennyi időt vesz igénybe.",
      },
    ],
  },
  {
    title: "Szolgáltatások és projekttípusok",
    items: [
      {
        q: "Milyen típusú projekteket visztek?",
        a: "Teljes digitalizációs programoktól kezdve (marketing + sales + rendszerek) egyedi projektekig (weboldal, CRM bevezetés, kampány) mindent vállalunk, ami a növekedési mandátumba illik.",
      },
      {
        q: "Dolgoztok egyszeri kampányokon is?",
        a: "Elsősorban hosszú távú partnerségekben gondolkodunk, de ha egyértelmű a scope és a cél, egyszeri projektet is vállalunk.",
      },
      {
        q: "Van lehetőség csak tanácsadásra?",
        a: "Igen, kínálunk stratégiai tanácsadást és audit szolgáltatást is, ahol a megvalósítást a ti csapatotok vagy más partnerek végzik.",
      },
      {
        q: "Tudtok segíteni B2B piacra?",
        a: "Ez a fő profilunk. A B2B értékesítési ciklus, a döntéshozói struktúra és a hosszú lead time mind olyan terület, ahol nagy tapasztalatunk van.",
      },
      {
        q: "Tudtok segíteni külföldi piacra lépésben?",
        a: "Igen, több ügyfelünknél támogatjuk a nemzetközi terjeszkedést – akár marketing, akár sales, akár rendszerek oldaláról.",
      },
    ],
  },
  {
    title: "Digitalizációs és stratégiai támogatás",
    items: [
      {
        q: "Segítetek digitalizációs rendszerek bevezetésében?",
        a: "Igen, a Systems & Tech pod pontosan erre specializálódott – CRM, ERP, marketing automatizáció, integrációk, webfejlesztés.",
      },
      {
        q: "Tudtok segíteni CRM/ERP bevezetésében?",
        a: "Igen, a rendszer kiválasztásától a bevezetésen át a csapat betanításáig minden lépésben támogatunk.",
      },
      {
        q: "Mi történik, ha nem tudjuk, mire van szükségünk?",
        a: "Pontosan erre való a felderítő konzultáció és a stratégiai audit. Segítünk feltérképezni, hogy hol tartotok és merre érdemes indulni.",
      },
      {
        q: "Van értelme megkeresni, ha nincs marketinges a cégnél?",
        a: "Abszolút. Sok ügyfelünk úgy indul, hogy nincs házon belüli marketing csapat. Mi vagyunk az a csapat – csak kívülről.",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span className="text-base text-white group-hover:text-magenta transition-colors pr-4">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-gray flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray leading-relaxed pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="gyik" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Gyakran Ismételt Kérdések
          </AnimatedText>
        </div>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-safiro text-lg text-magenta mb-4">
                {cat.title}
              </h3>
              <div>
                {cat.items.map((item, j) => (
                  <AccordionItem key={j} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
