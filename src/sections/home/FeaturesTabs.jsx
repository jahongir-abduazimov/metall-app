"use client";

import React, { useState } from "react";

const FeaturesTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-5 mb-8 md:mb-12 w-full">
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
            {tabs[activeTab]?.contents[0].title}
          </h3>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            {tabs[activeTab]?.contents[0].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tabs[activeTab]?.contents[0].items.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesTabs;
