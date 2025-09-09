import React from "react";
import Container from "@/components/Container";
import BranchesInteractive from "./BranchesInteractive";

const mockBranches = [
  {
    id: 1,
    name: "Downtown Branch",
    address: "123 Main St",
    distanceKm: 1.2,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: 2,
    name: "Northside Branch",
    address: "456 Pine Ave",
    distanceKm: 3.8,
    lat: 40.7306,
    lng: -73.9352,
  },
  {
    id: 3,
    name: "West End Branch",
    address: "789 Oak Blvd",
    distanceKm: 5.1,
    lat: 40.758,
    lng: -73.9855,
  },
  {
    id: 4,
    name: "Lakeside Branch",
    address: "42 Lake Dr",
    distanceKm: 7.6,
    lat: 40.7003,
    lng: -73.9967,
  },
];

const Branches = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Branches / Map
          </h2>
          <p className="md:text-lg text-gray-600">
            Nearby locations and service points.
          </p>
        </div>
        <BranchesInteractive branches={mockBranches} />
      </Container>
    </section>
  );
};

export default Branches;
