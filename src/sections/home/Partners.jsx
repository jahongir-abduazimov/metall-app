import React from "react";
import Container from "@/components/Container";

const partners = [
  { name: "Partner A" },
  { name: "Partner B" },
  { name: "Partner C" },
  { name: "Partner D" },
  { name: "Partner E" },
  { name: "Partner F" },
];

const Partners = () => {
  return (
    <section className="py-14 md:py-16 bg-white">
      <Container>
        w
        <div className="text-center mb-10">
          <h2 className="text-3xl md:4xl font-extrabold text-gray-900">
            Наши партнеры
          </h2>
          <p className="text-gray-600 mt-2">Доверяют лидеры отрасли</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-6 animate-partners-marquee w-[200%]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="h-16 w-40 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100 transition flex-shrink-0"
              >
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
