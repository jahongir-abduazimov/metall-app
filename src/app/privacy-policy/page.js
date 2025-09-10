import React from "react";
import Container from "@/components/Container";
import { fetchPrivacyContent, formatPrivacyContent } from "@/services/privacyApi";

export const metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности компании Металлы и Сплавы. Как мы собираем, используем и защищаем вашу персональную информацию.",
  keywords: ["политика конфиденциальности", "защита данных", "персональная информация", "GDPR"],
  openGraph: {
    title: "Политика конфиденциальности - Металлы и Сплавы",
    description: "Политика конфиденциальности компании Металлы и Сплавы. Как мы собираем, используем и защищаем вашу персональную информацию.",
    type: 'website',
  },
};

export default async function PrivacyPolicyPage() {
  let privacyContent = [];
  let error = null;

  try {
    const rawData = await fetchPrivacyContent();
    privacyContent = formatPrivacyContent(rawData);
  } catch (err) {
    console.error("Failed to fetch privacy content:", err);
    error = err.message;
  }

  return (
    <>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[35vh] md:h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Политика конфиденциальности
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                Как мы собираем, используем и защищаем вашу информацию.
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
                  Не удалось загрузить содержимое политики конфиденциальности.
                  Пожалуйста, попробуйте обновить страницу позже.
                </p>
                <p className="text-sm text-red-500 mt-2">Ошибка: {error}</p>
              </div>
            ) : privacyContent.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-800 font-semibold mb-2">Содержимое недоступно</h3>
                <p className="text-gray-600">
                  Содержимое политики конфиденциальности временно недоступно.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {privacyContent.map((item) => (
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
