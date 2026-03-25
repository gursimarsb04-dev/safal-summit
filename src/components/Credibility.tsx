import SectionLabel from "@/components/SectionLabel";
import { CREDIBILITY_LOGOS, CREDIBILITY_STATS } from "@/lib/constants";

export default function Credibility() {
  return (
    <section className="bg-navy-900 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel text="OUR SPEAKERS COME FROM" />
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Where excellence meets impact.
          </h2>
        </div>

        {/* Logo pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {CREDIBILITY_LOGOS.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-white/10 bg-navy-700 px-5 py-2.5 text-sm font-medium text-white/80"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Gold divider */}
        <div className="my-14 flex justify-center">
          <div className="h-px w-24 bg-gold/30" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {CREDIBILITY_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-4xl font-bold text-gold md:text-5xl">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-sm text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
