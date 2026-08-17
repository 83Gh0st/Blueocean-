import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Origin from "@/components/about/Origin";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import Gallery from "@/components/about/Gallery";
import CtaBand from "@/components/home/CtaBand";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Our Story — Blue Ocean Chemicals",
  description:
    "Blue Ocean For Chemicals Manufacturing LLC — why we formulate water treatment chemistry for Gulf conditions specifically, our values, and how a batch of chemistry moves from our Ajman facility to your plant.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Origin />
      <div className="wrap">
        <WaveDivider />
      </div>
      <Values />
      <Timeline />
      <Gallery />
      <CtaBand />
    </>
  );
}
