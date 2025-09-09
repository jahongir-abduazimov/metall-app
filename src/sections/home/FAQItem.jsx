"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="border-b border-gray-200">
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        onClick={handleToggle}
        className="w-full text-left py-4 flex items-center justify-between focus:outline-none"
      >
        <span className="text-xl font-medium text-gray-900">
          {item.question}
        </span>
        <span
          className={`ml-4 inline-block transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <Plus />
        </span>
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-lg text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
