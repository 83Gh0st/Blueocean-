import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Statement from "@/components/home/Statement";
import Marquee from "@/components/home/Marquee";
import ProductLines from "@/components/home/ProductLines";
import StatsTicker from "@/components/home/StatsTicker";
import WhyUs from "@/components/home/WhyUs";
import Capabilities from "@/components/home/Capabilities";
import ProcessFlow from "@/components/home/ProcessFlow";
import CtaBand from "@/components/home/CtaBand";
import ContactSection from "@/components/home/ContactSection";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Premium Water Treatment Chemistry, Manufactured in the UAE",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Statement />
      <Marquee />
      <ProductLines />
      <StatsTicker />
      <div className="wrap">
        <WaveDivider />
      </div>
      <WhyUs />
      <Capabilities />
      <ProcessFlow />
      <CtaBand />
      <ContactSection />
    </>
  );
}
