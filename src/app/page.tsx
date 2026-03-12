"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Challenge from "./components/Challenge";
import SlixolModel from "./components/SlixolModel";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import PartnerLogos from "./components/PartnerLogos";
import Culture from "./components/Culture";
import Manifesto from "./components/Manifesto";
import Consultation from "./components/Consultation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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
