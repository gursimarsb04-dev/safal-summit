import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { EXPECT_CARDS } from "@/lib/constants";

export default function PrestigeCards() {
  return (
    <section className="bg-navy-900 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <SectionLabel text="WHAT TO EXPECT" />
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What to expect
            <br />
            <span className="text-white/60">Join us for a three day summit designed to spark ideas, forge partnerships, and shape what&apos;s next.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EXPECT_CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative h-72 overflow-hidden rounded-xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-80"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold">
                  {card.category}
                </span>
                <h3 className="mb-1 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
