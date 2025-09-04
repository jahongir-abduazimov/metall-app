"use client";

import React from "react";
import Container from "@/components/Container";
import { ArrowDown, ArrowRight, ArrowRightIcon } from "lucide-react";

const steps = [
  {
    title: "Register",
    description: "Create your account in seconds to get started.",
  },
  {
    title: "Add Metals",
    description: "Select the metals and quantities you want to recycle.",
  },
  {
    title: "Checkout",
    description: "Confirm details, choose payment and pickup options.",
  },
  {
    title: "Pick Up",
    description: "We collect your metals or you drop them off at a branch.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            How it Works
          </h2>
          <p className="md:text-lg text-gray-600">
            Just four simple steps to recycle and get paid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3">
                  <ArrowRight className="text-black" />
                </div>
              )}
              {index < steps.length - 1 && (
                <div className="block lg:hidden absolute top-[100%] left-8">
                  <ArrowDown className="text-black" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
