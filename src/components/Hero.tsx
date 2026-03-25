import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-bg.mov" type="video/quicktime" />
      </video>

      {/* Fallback static image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ zIndex: -1 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-950/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo mark */}
        <Image
          src="/images/logo.avif"
          alt="Safal logo"
          width={64}
          height={64}
          className="h-16 w-16"
        />

        {/* Giant SAFAL text */}
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tight text-white">
          SAFAL
        </h1>

        {/* CTA */}
        <Link
          href="/apply"
          className="group inline-flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold-light"
        >
          <span className="text-gold transition-transform group-hover:translate-x-1">
            &rarr;
          </span>{" "}
          Get Started
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-4 px-6 py-4 text-sm font-medium tracking-wide text-white/70">
          <span>{SITE.date}</span>
          <span className="text-gold">&middot;</span>
          <span>{SITE.venue}</span>
          <span className="text-gold">&middot;</span>
          <span>{SITE.city}</span>
        </div>
      </div>
    </section>
  );
}
