import React from "react";
import Container from "@/components/Container";
import FeaturesTabs from "./FeaturesTabs";

async function getScreenshots() {
  try {
    const res = await fetch("http://192.168.0.105:8001/api/features/tabs/");
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

const Features = async () => {
  const features = await getScreenshots();
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Преимущества работы с нами
          </h2>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные услуги по поставке, продаже и покупке металлов и
            сплавов. Широкий ассортимент, выгодные цены, быстрая обработка
            заявок и консультации экспертов.
          </p>
        </div>
        <FeaturesTabs tabs={features} />
      </Container>
    </section>
  );
};

export default Features;
