import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import PrestigeCards from "@/components/PrestigeCards";
import VideoEmbed from "@/components/VideoEmbed";
import Credibility from "@/components/Credibility";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsBar />
      <PrestigeCards />
      <VideoEmbed />
      <Credibility />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
