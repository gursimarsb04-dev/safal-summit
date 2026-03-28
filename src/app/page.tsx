import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PrestigeCards from "@/components/PrestigeCards";
import VideoEmbed from "@/components/VideoEmbed";
import SocialProof from "@/components/SocialProof";
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
      <SocialProof />
      <EmailCTA />
      <FAQ />
      <FinalCTA />
      <BackedBy />
    </>
  );
}
