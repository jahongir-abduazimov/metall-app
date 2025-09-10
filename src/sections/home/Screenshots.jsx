import Container from "@/components/Container";
import ScreenshotsCarousel from "./ScreenshotsCarousel";

async function getScreenshots() {
  try {
    const res = await fetch(
      "http://192.168.0.105:8001/api/screenshots/screenshots/"
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

const Screenshots = async () => {
  const images = await getScreenshots();
  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Скриншоты / Превью интерфейса
          </h2>
          <p className="md:text-lg text-slate-600 max-w-2xl mx-auto">
            Ознакомьтесь с экранами мобильного приложения.
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
