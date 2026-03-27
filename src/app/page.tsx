import dynamic from "next/dynamic";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";

// Lazy load below-the-fold sections to reduce initial JS bundle
const Challenge = dynamic(() => import("./components/Challenge"));
const SlixolModel = dynamic(() => import("./components/SlixolModel"));
const HowWeWork = dynamic(() => import("./components/HowWeWork"));
const Services = dynamic(() => import("./components/Services"));
const CaseStudies = dynamic(() => import("./components/CaseStudies"));
const PartnerLogos = dynamic(() => import("./components/PartnerLogos"));
const Culture = dynamic(() => import("./components/Culture"));
const Manifesto = dynamic(() => import("./components/Manifesto"));
const Consultation = dynamic(() => import("./components/Consultation"));
const FAQ = dynamic(() => import("./components/FAQ"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <Challenge />
        <SlixolModel />
        <HowWeWork />
        <Services />
        <CaseStudies />
        <PartnerLogos />
        <Culture />
        <Manifesto />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
