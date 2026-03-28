"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

const SURVEY_STATS = [
  { value: 95, label: "Rated networking excellent" },
  { value: 100, label: "Venue satisfaction" },
  { value: 87, label: "Would return as mentors" },
];

function AnimatedBar({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex justify-between items-baseline">
        <span className="text-sm text-white/60">{label}</span>
        <span className="text-2xl font-black text-gold">{value}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all ease-out"
          style={{
            width: visible ? `${value}%` : "0%",
            transitionDuration: "1.5s",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-navy-800 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel text="WHAT ATTENDEES SAY" />
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            The numbers speak.
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {SURVEY_STATS.map((stat, i) => (
            <AnimatedBar
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
