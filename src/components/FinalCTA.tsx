import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-900 px-6 py-24 md:py-32">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,201,127,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <SectionLabel text="SAVE THE DATE" />

        <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {SITE.date}
        </h2>

        <p className="text-lg text-white/60">
          {SITE.venue} &middot; {SITE.city}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-light"
          >
            APPLY NOW
          </Link>
          <Link
            href="/impact"
            className="rounded-full border border-gold px-8 py-3 text-sm font-semibold tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
