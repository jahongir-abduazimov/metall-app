"use client";

import React, { useState } from "react";
import Container from "@/components/Container";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Metal Acceptance",
      icon: "🔶",
      content: {
        title: "Wide Range of Metal Acceptance",
        description:
          "We accept various types of metals including copper, aluminum, brass, steel, and more. Our advanced sorting technology ensures accurate classification and fair pricing for each metal type.",
        features: [
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
        ],
      },
    },
    {
      title: "Prices",
      icon: "💰",
      content: {
        title: "Competitive & Transparent Pricing",
        description:
          "Get the best market rates for your metals with our real-time pricing system. Our prices are updated daily based on current market conditions.",
        features: [
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
        ],
      },
    },
    {
      title: "Order Status",
      icon: "📊",
      content: {
        title: "Track Your Order in Real-Time",
        description:
          "Monitor the status of your metal recycling order from pickup to payment. Get instant notifications at every step of the process.",
        features: [
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
        ],
      },
    },
    {
      title: "Geolocation/Branch",
      icon: "📍",
      content: {
        title: "Find Your Nearest Location",
        description:
          "Locate our recycling centers and mobile pickup services near you. We have multiple branches across the region for your convenience.",
        features: [
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
        ],
      },
    },
    {
      title: "Payment/Receipt",
      icon: "💳",
      content: {
        title: "Multiple Payment Options & Digital Receipts",
        description:
          "Choose from various payment methods and receive instant digital receipts. All transactions are securely processed and documented.",
        features: [
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
          "Lorem ipsum, dolor sit amet",
        ],
      },
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Features
          </h2>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            neque possimus optio nostrum odio aliquam eos perspiciatis
            aspernatur eius vitae!
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-5 justify-between mb-8 md:mb-12 w-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center cursor-pointer gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-black text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`}
            >
              <span className="md:text-xl">{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {tabs[activeTab].content.title}
            </h3>
            <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
              {tabs[activeTab].content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabs[activeTab].content.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
