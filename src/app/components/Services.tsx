"use client";

import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const services = [
  {
    num: "/01",
    title: "Performance marketing",
    items: ["PPC kampányok", "ABM stratégia", "Email marketing", "SEO optimalizáció", "B2B lead generálás"],
  },
  {
    num: "/02",
    title: "Stratégia és tanácsadás",
    items: ["Pozicionálás", "Digital transformation roadmap", "GTM stratégia", "Versenyelemzés"],
  },
  {
    num: "/03",
    title: "Sales támogatás",
    items: ["GTM kivitelezés", "Cold outbound", "LinkedIn outreach", "Sales automatizáció"],
  },
  {
    num: "/04",
    title: "Rendszerek és technológia",
    items: ["CRM/ERP bevezetés", "B2B webfejlesztés", "Portálok", "Tech stack optimalizálás"],
  },
  {
    num: "/05",
    title: "AI & Automatizáció",
    items: ["Folyamat automatizálás", "Chatbotok", "Data enrichment", "Intelligens riportok"],
  },
  {
    num: "/06",
    title: "Szakértői márkaépítés",
    items: ["Videó produkció", "Whitepapers", "Social media", "Podcast", "PR & Events"],
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="font-safiro text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Szolgáltatások
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-light-gray"
            delay={0.1}
          >
            Integrált digitális megoldások a növekedéshez
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-magenta/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <span className="font-safiro text-3xl text-white/10 group-hover:text-magenta/30 transition-colors duration-300">
                {service.num}
              </span>
              <h3 className="font-safiro text-xl text-white mt-4 mb-6">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-magenta/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="font-safiro text-3xl md:text-4xl text-white mb-4">
            Kezdődjön el a változás
          </h3>
          <p className="text-light-gray mb-8 max-w-xl mx-auto">
            Egy ingyenes konzultáció, ami megmutatja, hol tartasz most – és hová
            juthatsz el velünk.
          </p>
          <Button href="#konzultacio">Felderítő konzultáció</Button>
        </motion.div>
      </div>
    </section>
  );
}
