export const metadata = {
  title: "Главная",
  description: "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок, консультации экспертов.",
  keywords: ["поставка металлов", "продажа металлов", "покупка металлов", "металлопрокат", "сплавы", "сталь", "алюминий", "медь", "титан", "закупка металлов", "главная"],
  openGraph: {
    title: "Поставка, продажа и покупка металлов и сплавов - Главная страница",
    description: "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок.",
    type: 'website',
  },
};

async function getIntroData() {
  try {
    const res = await fetch(
      "http://192.168.0.105:8001/api/intro/intro-sections/"
    );
    const data = await res.json();
    return data[0] || {};
  } catch (e) {
    return {};
  }
}

async function getPlatformsData() {
  try {
    const res = await fetch(
      "http://192.168.0.105:8001/api/downloads/platforms/"
    );
    const data = await res.json();
    return data || [];
  } catch (e) {
    return [];
  }
}

export default async function Home() {
  const introData = await getIntroData();
  const platformsData = await getPlatformsData();
  const howItWorksSteps = await fetch(
    "http://192.168.0.105:8001/api/howitworks/steps/"
  )
    .then((res) => res.json())
    .catch(() => []);
  const Intro = (await import("@/sections/home/Intro")).default;
  const Features = (await import("@/sections/home/Features")).default;
  const HowItWorks = (await import("@/sections/home/HowItWorks")).default;
  const Branches = (await import("@/sections/home/Branches")).default;
  const Screenshots = (await import("@/sections/home/Screenshots")).default;
  const Partners = (await import("@/sections/home/Partners")).default;
  const FAQ = (await import("@/sections/home/FAQ")).default;
  const CTA = (await import("@/sections/home/CTA")).default;
  return (
    <>
      <Intro data={introData} platforms={platformsData} />
      <Features />
      <HowItWorks steps={howItWorksSteps} />
      <Branches />
      <Screenshots />
      <Partners />
      <FAQ />
      <CTA platforms={platformsData} />
    </>
  );
}
