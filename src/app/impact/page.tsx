import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Impact — Safal Summit",
};

const IMPACT_STATS = [
  { value: "1000+", label: "Professionals" },
  { value: "50+", label: "Cities" },
  { value: "3", label: "Summits" },
  { value: "100+", label: "Companies" },
];

export default function ImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.85] tracking-tight text-white">
            IMPACT.
          </h1>
          <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
            Building a movement that elevates the Sikh professional collective.
          </p>
        </div>
      </section>

      {/* Mission Narrative */}
      <section className="px-6 py-24 bg-navy-800">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel text="OUR MISSION" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Elevating the Sikh Professional Collective
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Safal Network exists to connect, empower, and uplift Sikh
            professionals worldwide. Through curated summits, mentorship
            programs, and an ever-growing network, we are building the
            infrastructure for collective excellence. Our mission is to ensure
            every Sikh professional has access to the community, resources, and
            opportunities they need to thrive.
          </p>
        </div>
      </section>

      {/* Impact by the Numbers */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl mb-12">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-navy-700 p-8 text-center"
              >
                <p className="text-4xl font-black text-gold md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="px-6 py-24 bg-navy-800">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel text="COMMUNITY" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Community Stories
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl min-h-[400px] bg-navy-700">
              <Image
                src="/images/impact/community.jpg"
                alt="Community member"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg italic text-white/90">
                  &ldquo;Safal Summit connected me with mentors who changed the
                  trajectory of my career.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-gold">
                  &mdash; Summit Attendee
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl min-h-[400px] bg-navy-700">
              <Image
                src="/images/impact/hero.jpg"
                alt="Community gathering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg italic text-white/90">
                  &ldquo;Being part of this community has given me the
                  confidence to lead with authenticity.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-gold">
                  &mdash; Summit Attendee
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
