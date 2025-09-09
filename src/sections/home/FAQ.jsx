import React from "react";
import Container from "@/components/Container";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What metals do you accept?",
    answer:
      "We accept a wide range of metals including copper, aluminum, brass, steel, and more.",
  },
  {
    question: "How do you determine pricing?",
    answer:
      "Prices are updated daily based on market rates. You can view transparent pricing in the app.",
  },
  {
    question: "How do pickups work?",
    answer:
      "Schedule a pickup in the app or drop off at the nearest branch. You'll receive status updates in real time.",
  },
  {
    question: "When will I get paid?",
    answer:
      "Payments are processed immediately after verification. Choose from multiple secure payment options.",
  },
];

const FAQ = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            FAQ
          </h2>
          <p className="md:text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to the most common questions. Can’t find what you’re looking
            for? Contact support in the app.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          {faqs.map((item, index) => (
            <FAQItem key={item.question} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
