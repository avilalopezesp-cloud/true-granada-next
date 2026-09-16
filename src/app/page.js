import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIsTrue from "@/components/WhatIsTrue";
import AdventurePlanner from "@/components/AdventurePlannerBoundary";
import HowItWorks from "@/components/HowItWorks";
import Experiences from "@/components/Experiences";
import WhyTrue from "@/components/WhyTrue";
import Community from "@/components/Community";
import Blog from "@/components/Blog";
import CTAFinal from "@/components/CTAFinal";
import InstagramStrip from "@/components/InstagramStrip";
import Footer from "@/components/Footer";
import HomeAdventureHeading from "./HomeAdventureHeading";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <WhatIsTrue />

      <section className="relative overflow-hidden bg-ink py-[100px]" id="adventure">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(201,165,90,.08),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1160px] px-7">
          <HomeAdventureHeading />
          <AdventurePlanner />
        </div>
      </section>

      <HowItWorks />
      <Experiences />
      <WhyTrue />
      <Community />
      <Blog />
      <CTAFinal />
      <InstagramStrip />
      <Footer />
    </>
  );
}
