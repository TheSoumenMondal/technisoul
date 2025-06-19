import AboutPage from "@/components/custom/about-us";
import { CareersPage } from "@/components/custom/career-options";
import Footer from "@/components/custom/footer";

import HeroSection from "@/components/custom/hero-section";
import SecondPage from "@/components/custom/second-page";
import ThirdPage from "@/components/custom/third-page";

export default function Home() {
  return (
    <div className="w-full max-w-6xl flex flex-col">
      {/* <div className="fixed top-0 inset-0 z-0 bg-gradient-to-r from-blue-200/30 via-purple-100/50 to-pink-100/50 rounded-xl blur-xl"></div> */}
      <div className="w-full z-10">
        <HeroSection />
        <SecondPage />
        <ThirdPage />
        <AboutPage />
        <CareersPage />
        <Footer/>
      </div>
    </div>
  );
}
