"use client"

import React, { useState } from "react";
import Image from "next/image";

const ScreenshotsCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  if (!images || images.length === 0) {
    return <div className="text-center py-8">No screenshots available.</div>;
  }

  return (
    <>
      <div className="relative aspect-[9/16] mx-auto w-[280px] md:w-[340px] lg:w-[360px] xl:w-[380px] rounded-[2.2rem] border border-slate-200 bg-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5 overflow-hidden">
        {/* Phone bezel */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-black/10"></div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 rounded-b-2xl bg-black/80 z-10"></div>

        <Image
          src={images[current]?.image}
          alt="app screenshot"
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
              src={img.image}
              alt="screenshot"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ScreenshotsCarousel;
