import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import FinalCTA from "@/components/FinalCTA";
import BackedBy from "@/components/BackedBy";

export const metadata: Metadata = {
  title: "Impact — Safal Summit",
};

const IMPACT_STATS = [
  { value: "187+", label: "Attendees" },
  { value: "20+", label: "States Represented" },
  { value: "5", label: "Industries Covered" },
  { value: "90%", label: "Would Recommend" },
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
            Building the next generation of Sikh leaders.
          </p>
        </div>
      </section>

      {/* Our Origin */}
      <section className="px-6 py-24 bg-navy-900">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel text="OUR STORY" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            How it started.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Safal began at the Anandpur Institute Non-Profit Accelerator
            Bootcamp, when SikhTeens and the United Sikh Movement teamed up
            after recognizing a gap: plenty of Sikh talent and expertise, but
            too little representation in key industries and leadership roles.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            What started as a collaboration between two student organizations
            has grown into a movement &mdash; connecting Sikh professionals
            across the country through mentorship, leadership development, and a
            shared commitment to Seva.
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
            Safal empowers Sikhs through mentorship, community, and leadership
            development, rooted in Gurmat principles. By connecting established
            Sikh professionals with the next generation, we help participants
            grow with purpose and strengthen Sikh representation across
            industries and leadership.
          </p>
        </div>
      </section>

      {/* Industries Represented */}
      <section className="px-6 py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel text="INDUSTRIES" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Where our community leads.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
            {[
              { icon: "💻", name: "Tech & Startups" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "💼", name: "Finance & Consulting" },
              { icon: "⚖️", name: "Law" },
              { icon: "🎨", name: "Arts & Creative" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="min-w-[140px] rounded-xl bg-navy-700 px-6 py-8 text-center"
              >
                <p className="text-2xl mb-2">{industry.icon}</p>
                <p className="text-sm font-medium text-white">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
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

      {/* Backed By */}
      <BackedBy />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
