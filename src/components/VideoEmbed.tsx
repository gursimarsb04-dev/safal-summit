"use client";

import { useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

export default function VideoEmbed() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-navy-800 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <SectionLabel text="SUMMIT EXPERIENCE" />
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Watch the 2024 Experience
          </h2>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-700">
          <video
            ref={videoRef}
            controls={playing}
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/recap-video.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button
              onClick={handlePlay}
              className="group absolute inset-0 z-10 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="absolute inset-0 bg-navy-950/40" />
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-8 w-8 text-gold"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
