"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="bg-navy-800 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <SectionLabel text="WHAT PEOPLE ARE SAYING" />
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-navy-700 p-8 md:p-12">
          <p className="mb-8 text-center text-lg italic leading-relaxed text-white/80 md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-navy-600">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-white/50">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-gold hover:text-gold"
          >
            &larr;
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-gold" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-gold hover:text-gold"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
