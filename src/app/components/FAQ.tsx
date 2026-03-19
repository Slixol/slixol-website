"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import { useHydrated } from "@/app/hooks/useHydrated";

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
        a: "A slixol Magyarország első digitalizációs és növekedési partnere B2B ipari cégek számára. Integrált digitális növekedési rendszereket építünk – marketingtől a CRM bevezetésig, sales támogatástól az AI automatizációig.",
      },
      {
        q: "Miben különböztök egy klasszikus marketing ügynökségtől?",
        a: "Házunk alatt különálló szakértői csapatok (podok) dolgoznak – marketing, sales, tech, AI, brand – de egy központi stratégiai vezetés alatt. Ez biztosítja, hogy minden elem összehangoltan működjön és támogassa a növekedést.\n\nSok esetben az ügyfél problémája nem a marketing eszközökben keresendő, hanem a működésben, stratégiában: szervezeti, folyamati, vagy technológiai szintű. Mi ezeket is feltárjuk és széles szakértői hálózatunkkal megoldási tervet készítünk rá.",
      },
      {
        q: "Kikkel dolgoztok általában?",
        a: "Többségében a KKV szektor sűrűjével, akik rendelkeznek éves szinten legalább 10-15 millió Ft marketing- és fejlesztési büdzsével, és szeretnének digitális érettségükkel szintet lépni. Olyan cégekkel, akiknél stratégiai cél a piaci pozíciójuk megerősítése és az üzleti hatékonyságuk növelése.",
      },
      {
        q: "Mikor vagytok jó választás?",
        a: "Akkor, ha valaki nemcsak gyorsan elindítható kampányt keres, hanem rendszerszintű megoldásokat és vállalkozói szemléletet is. Ha nem 1 héten belül akar \"valamit gyorsan\", hanem átgondolt, hosszú távú építkezésben gondolkodik.",
      },
      {
        q: "Mikor nem ti vagytok a jó választás?",
        a: "Ha valaki havi 50.000 Ft-ból szeretné \"meglökné\" a marketinget, sajnos nem tudunk segíteni. Nem vagyunk rengeteg ügyfelet kiszolgáló ügynökség: szakértő csapatként, butik ügynökségként dolgozunk, szenior kollégákkal és megbízható partnerekkel, ennek megfelelő árstruktúrával.",
      },
      {
        q: "Mennyibe kerül veletek dolgozni?",
        a: "Marketing fókuszú havi együttműködéseknél a minimum havidíjunk nettó 200.000 Ft-tól indul. Komplexebb webes, tanácsadói vagy digitalizációs projektek esetén a teljes projektköltség gyakran több milliós nagyságrendű, a projekt összetettségétől és hosszától függően.",
      },
      {
        q: "Dolgoztok alvállalkozókkal?",
        a: "Marketing kivitelezési feladatokat jellemzően házon belüli csapattal látjuk el. Komplexebb projekteknél, ahol szükséges, bevonunk specialistákat: fejlesztő cégeket, rendszerintegrátorokat vagy akár UX kutatókat. De a projekt stratégiai ívét, az ügyfélkapcsolatot és a minőségbiztosítást itt is mindig mi tartjuk kézben. Ügyfeleink szeretik, ha mi tudjuk őket és igényeiket megfelelően képviselni és összehangoltan menedzselni a különböző projekteket.",
      },
      {
        q: "Milyen gyakran kapunk riportokat vagy visszajelzést?",
        a: "Általában havi ritmusban működünk, és minden hónap végén értékelünk: mi történt, mire jutottunk, mi következik.",
      },
    ],
  },
  {
    title: "Együttműködés folyamata",
    items: [
      {
        q: "Mi történik a stratégiai konzultáción?",
        a: "Egy strukturált, kb. 60 perces online meeting során körbejárjuk az üzleti célokat, marketing- és digitalizációs kihívásokat. Átnézzük a jelenlegi helyzetet, és azonosítjuk azokat a területeket, ahol érdemben tudunk segíteni. Ha úgy érezzük, hogy nem fogunk tudni hatékony támogatást nyújtani, azt is őszintén elmondjuk. A konzultáció díjmentes.",
      },
      {
        q: "Hogyan lehet a legegyszerűbben elindulni?",
        a: "Egy díjmentes stratégiai konzultációval, ahol megnézzük, van-e értelme és alapja az együttműködésnek. Ha igen, akkor indulhat a közös tervezés.",
      },
      {
        q: "Mennyi idő alatt indul el egy együttműködés?",
        a: "Ez nagyban függ a projekt és a megvalósítandó célok összetettségétől. Skálázható PPC kampányokat már az első konzultáció után általában kb. 3 héten belül el tudjuk indítani.",
      },
    ],
  },
  {
    title: "Szolgáltatások és projekttípusok",
    items: [
      {
        q: "Milyen típusú projekteket visztek?",
        a: "Hosszabb távú együttműködésekben gondolkodunk, jellemzően márkaépítés, leadgenerálás, PPC rendszerek, digitális stratégia vagy digitális rendszertervezés területén. Komplex projektek, ahol fontos a stratégiai gondolkodás és a vállalkozói szemlélet. Büszkék vagyunk rá, hogy ügyfélmegtartási mutatónk folyamatosan javul, jelenleg átlagosan 2 évig (LTV) dolgozunk folyamatosan együtt ügyfeleinkkel.",
      },
      {
        q: "Dolgoztok egyszeri kampányokon is?",
        a: "Ritkábban. Inkább hosszabb távú partnerségekben gondolkodunk, ahol rendszerszintű változást lehet elérni. Ha tudnánk segíteni egy ügyfélnek, de jelenleg még nem tud ekkora összeget marketing és digitalizációs támogatásra fordítani, akkor szoktunk projektalapú megoldásokat összerakni, legyen szó egy auditról vagy részletes tanácsadásról.",
      },
      {
        q: "Van lehetőség csak tanácsadásra, kivitelezés nélkül?",
        a: "Igen. Sokan keresnek meg úgy, hogy belső csapat dolgozik, de irányt, keretet vagy validációt kérnek tőlünk.",
      },
      {
        q: "Tudtok segíteni, ha B2B piacra lövünk?",
        a: "Igen, ez az egyik fő szakterületünk. A legtöbb projektünk B2B fókuszú: ipari, technológiai, vagy szolgáltató szektorokban.",
      },
      {
        q: "Tudtok segíteni külföldi piacra lépésében is?",
        a: "Volt már példa ilyen projektre, a piaci lokalizációtól a teljes digitális jelenlét kiépítéséig.",
      },
    ],
  },
  {
    title: "Digitalizációs és stratégiai támogatás",
    items: [
      {
        q: "Segítetek digitalizációs rendszerek bevezetésében is?",
        a: "Igen, főleg az előkészítésben és a bevezetési folyamat támogatásában, végigkísérésében: folyamatfeltárás, specifikáció, kiválasztás, partnermenedzsment. A technikai implementációt általában partnercégekkel együtt valósítjuk meg.",
      },
      {
        q: "Tudtok segíteni CRM vagy ERP rendszer bevezetésében is?",
        a: "Jelenleg nem fejlesztünk ilyen termékeket, de ismerjük a magyar piac szinte összes szereplőjét, és támogatni tudjuk az előkészítést, igénydefiniálást, partnerkiválasztást. Nem hagyjuk az ügyfelet egyedül a döntésnél. Segítünk megfogalmazni az üzleti igényeket, és ezek alapján javaslatot adunk néhány testhezálló megoldásra – majd, ha szükséges, partnert is keresünk a bevezetéshez és támogatói szerepet töltünk be az egész folyamat során, az ügyfelünk érdekeit és céljait képviselve.",
      },
      {
        q: "Mi történik, ha nem tudjuk pontosan, mire van szükségünk?",
        a: "Ez sokszor a kiindulópont. A legtöbb ügyfél nem egy konkrét szolgáltatással keres meg minket, hanem egy érzéssel: valami nem elég hatékony, valami nem áll össze. Mi segítünk ezt közösen kibontani – és onnan továbbépíteni.",
      },
      {
        q: "Van értelme megkeresni titeket, ha nincs külön marketinges a cégnél?",
        a: "Igen – sőt, ilyenkor még fontosabb, hogy valaki segítse az iránytartást. Nem fogunk házon belüli marketingest \"kiváltani\", de tudunk stratégiai támaszt adni, és segíteni, hogy a rendszer működni tudjon.",
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
        <span className="text-base text-white group-hover:text-blue transition-colors pr-4">
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
  const hydrated = useHydrated();

  return (
    <section id="gyik" className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] glow-orb-magenta opacity-25" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] glow-orb-blue opacity-30" />
      <div className="mx-auto max-w-3xl relative z-10">
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
              initial={hydrated ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-safiro text-lg text-blue mb-4">
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
