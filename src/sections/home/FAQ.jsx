import Container from "@/components/Container";
import FAQItem from "./FAQItem";

async function getFaqs() {
  try {
    const res = await fetch("http://192.168.0.105:8001/api/faq/items", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch FAQs");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

const FAQ = async () => {
  const data = await getFaqs();
  const faqs = Array.isArray(data) ? data : [];
  const error = data && data.error ? data.error : null;

  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Часто задаваемые вопросы о поставке, продаже и покупке металлов
          </h2>
          <p className="md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о поставке, продаже и покупке металлов
            и сплавов, ценах и условиях работы. Не нашли нужную информацию?
            Свяжитесь с нашими экспертами.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          {error && (
            <div className="text-center py-6 text-red-500">
              Ошибка загрузки вопросов: {error}
            </div>
          )}
          {!error && faqs.length === 0 && (
            <div className="text-center py-6">Вопросы не найдены.</div>
          )}
          {!error &&
            faqs.map((item, index) => (
              <FAQItem
                key={item.id || item.question}
                item={item}
                index={index}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
