import React from "react";
import Container from "@/components/Container";
import BranchesInteractive from "./BranchesInteractive";

async function getScreenshots() {
  try {
    const res = await fetch("http://192.168.0.105:8001/api/branches/");
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

const Branches = async () => {
  const branches = await getScreenshots();
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Филиалы / Карта
          </h2>
          <p className="md:text-lg text-gray-600">
            Ближайшие пункты приема и сервисные точки.
          </p>
        </div>
        <BranchesInteractive branches={branches} />
      </Container>
    </section>
  );
};

export default Branches;
