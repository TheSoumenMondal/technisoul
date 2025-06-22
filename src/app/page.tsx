"use client";

import ScrollReveal from "@/components/custom/ScrollReveal";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/custom/hero-section"));
const ShowCaseSecondPage = dynamic(
  () => import("@/components/custom/showcase-second-page")
);
const SecondPage = dynamic(() => import("@/components/custom/second-page"));
const ThirdPage = dynamic(() => import("@/components/custom/third-page"));
const AboutPage = dynamic(() => import("@/components/custom/about-us"));
const CareersPage = dynamic(() => import("@/components/custom/career-options"));
const Footer = dynamic(() => import("@/components/custom/footer"));

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ShowCaseSecondPage />
      </ScrollReveal>
      <ScrollReveal>
        <SecondPage />
      </ScrollReveal>
      <ScrollReveal>
        <ThirdPage />
      </ScrollReveal>
      <ScrollReveal>
        <AboutPage />
      </ScrollReveal>
      <ScrollReveal>
        <CareersPage />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
