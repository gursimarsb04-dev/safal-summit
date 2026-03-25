import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import VideoEmbed from "@/components/VideoEmbed";
import FinalCTA from "@/components/FinalCTA";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Recap — Safal Summit",
};

export default function RecapPage() {
  const highlightStats = STATS.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            June 19-21, 2024
          </p>
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.85] tracking-tight text-white">
            RECAP.
          </h1>
          <p className="mt-6 text-xl italic text-white/60 max-w-2xl mx-auto">
            A look back at the moments that defined us.
          </p>
        </div>
      </section>

      {/* About the Experience */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionLabel text="THE EXPERIENCE" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Three Days That Changed Everything
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Safal Summit 2024 brought together hundreds of Sikh professionals,
              entrepreneurs, and changemakers for an unforgettable experience of
              growth, connection, and purpose. From powerful keynotes to intimate
              strategy sessions, every moment was designed to elevate.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-700">
            <Image
              src="/images/recap/experience.jpg"
              alt="Summit experience"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoEmbed />

      {/* Summit Highlights */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel text="THE HIGHLIGHTS" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Summit Highlights
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* The Collective Impact — stats card */}
            <div className="rounded-xl bg-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                The Collective Impact
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-black text-gold">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fireside Keynotes — photo card */}
            <div className="relative overflow-hidden rounded-xl bg-navy-700 min-h-[250px]">
              <Image
                src="/images/recap/keynotes.jpg"
                alt="Fireside keynotes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-bold text-white">
                  The Fireside Keynotes
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Intimate conversations with industry-defining leaders.
                </p>
              </div>
            </div>

            {/* Tactical Strategy Sessions — full width */}
            <div className="relative overflow-hidden rounded-xl bg-navy-700 min-h-[300px] md:col-span-2">
              <Image
                src="/images/recap/sessions.jpg"
                alt="Strategy sessions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white">
                  Tactical Strategy Sessions
                </h3>
                <p className="mt-2 text-white/60">
                  Hands-on workshops that sharpened skills and sparked new ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
