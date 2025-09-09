import React from "react";
import Container from "@/components/Container";
import ScreenshotsCarousel from "./ScreenshotsCarousel";

const images = [
  { id: 1, src: "/intro-bg.png", alt: "App UI 1" },
  { id: 2, src: "/apple-logo.png", alt: "App UI 2" },
  { id: 3, src: "/google-play.png", alt: "App UI 3" },
];

const Screenshots = () => {
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
          <ScreenshotsCarousel images={images} />
        </div>
      </Container>
    </section>
  );
};

export default Screenshots;
