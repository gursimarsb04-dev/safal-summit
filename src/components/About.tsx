import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/lib/constants";

export default function About() {
  return (
    <section className="bg-navy-800 px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <SectionLabel text="THE SUMMIT" />

        <p className="text-2xl font-semibold leading-relaxed text-white md:text-3xl lg:text-4xl">
          {SITE.tagline}
        </p>

        <p className="text-sm text-white/40">
          Powered by {SITE.network}
        </p>
      </div>
    </section>
  );
}
