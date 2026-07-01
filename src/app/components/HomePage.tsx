import dynamic from "next/dynamic";
import Header from "./Header";
import Hero from "./Hero";
import MarqueeStrip from "./MarqueeStrip";
import ScrollToSection from "./ScrollToSection";
import type { HeroContent } from "@/app/lib/seoRoutes";

// Lazy load below-the-fold sections to reduce initial JS bundle
const Challenge = dynamic(() => import("./Challenge"));
const SlixolModel = dynamic(() => import("./SlixolModel"));
const HowWeWork = dynamic(() => import("./HowWeWork"));
const Services = dynamic(() => import("./Services"));
const CaseStudies = dynamic(() => import("./CaseStudies"));
const PartnerLogos = dynamic(() => import("./PartnerLogos"));
const Culture = dynamic(() => import("./Culture"));
const Manifesto = dynamic(() => import("./Manifesto"));
const Consultation = dynamic(() => import("./Consultation"));
const FAQ = dynamic(() => import("./FAQ"));
const Footer = dynamic(() => import("./Footer"));

interface HomePageProps {
  /** Route-specific hero override (omitted on the homepage) */
  hero?: HeroContent;
  /** Section id to auto-scroll to on load (for SEO sub-routes) */
  scrollTo?: string;
}

export default function HomePage({ hero, scrollTo }: HomePageProps) {
  return (
    <>
      {scrollTo && <ScrollToSection id={scrollTo} />}
      <Header />
      <main>
        <Hero
          badge={hero?.badge}
          heading={hero?.heading}
          subtitle={hero?.subtitle}
        />
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
