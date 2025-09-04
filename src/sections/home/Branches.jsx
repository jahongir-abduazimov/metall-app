"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/Container";

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
  const [selectedBranchId, setSelectedBranchId] = useState(
    mockBranches[0]?.id ?? null
  );
  const selectedBranch = useMemo(
    () => mockBranches.find((b) => b.id === selectedBranchId),
    [selectedBranchId]
  );

  const src = useMemo(() => {
    const lat = selectedBranch?.lat;
    const lng = selectedBranch?.lng;
    if (lat == null || lng == null) {
      return `https://www.google.com/maps?q=${encodeURIComponent(
        mockBranches[0]?.address || "City Center"
      )}&output=embed`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(
      `${lat},${lng}`
    )}&z=15&output=embed`;
  }, [selectedBranch]);
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-md bg-white">
              <iframe
                title="Branches Map"
                src={src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>

          <div className="space-y-4">
            {mockBranches.map((b) => (
              <div
                key={b.id}
                className="p-5 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedBranchId(b.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedBranchId(b.id);
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {b.name}
                    </h4>
                    <p className="text-gray-600">{b.address}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {b.lat}, {b.lng}
                    </p>
                  </div>
                  {/* <span className="text-sm text-gray-500">
                    {b.distanceKm} km
                  </span> */}
                </div>
                {/* <div className="mt-4 flex items-center gap-3">
                  <button className="px-4 py-2 text-sm rounded-lg bg-black text-white">
                    Get Directions
                  </button>
                  <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-800">
                    Call
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Branches;
