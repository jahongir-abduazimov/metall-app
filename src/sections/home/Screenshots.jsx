"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";

// Placeholder images: use project assets or remote placeholders
const images = [
  { id: 1, src: "/intro-bg.png", alt: "App UI 1" },
  { id: 2, src: "/apple-logo.png", alt: "App UI 2" },
  { id: 3, src: "/google-play.png", alt: "App UI 3" },
];

const Screenshots = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Screenshots / UI Preview
          </h2>
          <p className="md:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a few screens from the mobile experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[9/16] mx-auto w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px] rounded-[2.2rem] border border-slate-200 bg-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5 overflow-hidden">
            {/* Phone bezel */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-black/10"></div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 rounded-b-2xl bg-black/80 z-10"></div>

            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover"
              priority
            />

            {/* Controls */}
            <div className="absolute inset-x-0 bottom-0 pb-4 flex items-center justify-between px-4">
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow ring-1 ring-slate-200 backdrop-blur transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrent(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      current === idx
                        ? "bg-slate-900 ring-2 ring-white/90"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow ring-1 ring-slate-200 backdrop-blur transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex items-center justify-center gap-4 overflow-x-auto px-2">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrent(idx)}
                className={`relative h-20 w-12 sm:h-24 sm:w-14 shrink-0 rounded-xl overflow-hidden ring-1 transition ${
                  current === idx
                    ? "ring-slate-900 ring-2"
                    : "ring-slate-200 hover:ring-slate-300"
                }`}
                aria-label={`Open slide ${idx + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Screenshots;
