"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-navy-900 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Frequently Asked
        </h2>

        <div className="divide-y divide-white/10">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-4 text-lg font-medium text-white">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-xl text-gold">
                  {openIndex === i ? "\u2212" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <p className="pb-6 text-sm leading-relaxed text-white/60">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
