import React from "react";
import Container from "@/components/Container";
import FeaturesTabs from "./FeaturesTabs";

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

const Features = () => {
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
        <FeaturesTabs tabs={tabs} />
      </Container>
    </section>
  );
};

export default Features;
