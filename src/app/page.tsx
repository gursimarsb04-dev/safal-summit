import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PrestigeCards from "@/components/PrestigeCards";
import VideoEmbed from "@/components/VideoEmbed";
import MentorSpotlight from "@/components/MentorSpotlight";
import EmailCTA from "@/components/EmailCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import BackedBy from "@/components/BackedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PrestigeCards />
      <VideoEmbed />
      <MentorSpotlight />
      <EmailCTA />
      <FAQ />
      <FinalCTA />
      <BackedBy />
    </>
  );
}
