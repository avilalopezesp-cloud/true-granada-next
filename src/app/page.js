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

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <WhatIsTrue />

      <section className="relative overflow-hidden bg-ink py-[100px]" id="adventure">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(201,165,90,.08),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1160px] px-7">
          <div className="reveal mb-9 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold">Choose Your Adventure</p>
            <h2 className="mx-auto my-3.5 max-w-[560px] font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-white">
              En menos de un minuto<br />diseñamos una propuesta <em className="font-light italic text-gold">para ti.</em>
            </h2>
          </div>
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
