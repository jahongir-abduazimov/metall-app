import Intro from "@/sections/home/Intro";
import Features from "@/sections/home/Features";
import HowItWorks from "@/sections/home/HowItWorks";
import Branches from "@/sections/home/Branches";
import Screenshots from "@/sections/home/Screenshots";
import Partners from "@/sections/home/Partners";
import FAQ from "@/sections/home/FAQ";
import CTA from "@/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <HowItWorks />
      <Branches />
      <Screenshots />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
