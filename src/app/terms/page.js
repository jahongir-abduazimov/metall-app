import React from "react";
import Container from "@/components/Container";
import { fetchTermsContent, formatTermsContent } from "@/services/termsApi";

export const metadata = {
  title: "Условия обслуживания",
  description: "Условия обслуживания компании Металлы и Сплавы. Пожалуйста, внимательно прочитайте эти условия перед использованием наших услуг.",
  keywords: ["условия обслуживания", "пользовательское соглашение", "условия использования", "правовая информация"],
  openGraph: {
    title: "Условия обслуживания - Металлы и Сплавы",
    description: "Условия обслуживания компании Металлы и Сплавы. Пожалуйста, внимательно прочитайте эти условия перед использованием наших услуг.",
    type: 'website',
  },
};

export default async function TermsPage() {
  let termsContent = [];
  let error = null;

  try {
    const rawData = await fetchTermsContent();
    termsContent = formatTermsContent(rawData);
  } catch (err) {
    console.error("Failed to fetch terms content:", err);
    error = err.message;
  }

  return (
    <>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[35vh] md:h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Условия обслуживания
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                Пожалуйста, внимательно прочитайте эти условия перед использованием наших услуг.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 text-black">
        <Container>
          <div className="prose prose-invert max-w-3xl">
            {error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-800 font-semibold mb-2">Ошибка загрузки</h3>
                <p className="text-red-600">
                  Не удалось загрузить содержимое условий обслуживания.
                  Пожалуйста, попробуйте обновить страницу позже.
                </p>
                <p className="text-sm text-red-500 mt-2">Ошибка: {error}</p>
              </div>
            ) : termsContent.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-800 font-semibold mb-2">Содержимое недоступно</h3>
                <p className="text-gray-600">
                  Содержимое условий обслуживания временно недоступно.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {termsContent.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    {item.message && (
                      <div className="text-gray-700 mb-6 leading-relaxed">
                        <p className="whitespace-pre-line">{item.message}</p>
                      </div>
                    )}
                    {item.sections && item.sections.length > 0 && (
                      <div className="space-y-6">
                        {item.sections.map((section) => (
                          <div key={section.id} className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {section.title}
                            </h3>
                            <div className="text-gray-700 leading-relaxed">
                              <p className="whitespace-pre-line">{section.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
