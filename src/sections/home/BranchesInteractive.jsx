"use client";

import React, { useMemo, useState } from "react";

const BranchesInteractive = ({ branches }) => {
  const [selectedBranchId, setSelectedBranchId] = useState(
    branches[0]?.id ?? null
  );
  const selectedBranch = useMemo(
    () => branches.find((b) => b.id === selectedBranchId),
    [selectedBranchId, branches]
  );

  const src = useMemo(() => {
    const lat = selectedBranch?.lat;
    const lng = selectedBranch?.lng;
    if (lat == null || lng == null) {
      return `https://www.google.com/maps?q=${encodeURIComponent(
        branches[0]?.address || "City Center"
      )}&output=embed`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(
      `${lat},${lng}`
    )}&z=15&output=embed`;
  }, [selectedBranch, branches]);

  return (
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
        {branches.map((b) => (
          <div
            key={b.id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedBranchId(b.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelectedBranchId(b.id);
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
              {/* <span className="text-sm text-gray-500">{b.distanceKm} km</span> */}
            </div>
            {/* <div className="mt-4 flex items-center gap-3">
              <button className="px-4 py-2 text-sm rounded-lg bg-black text-white">Get Directions</button>
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-800">Call</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchesInteractive;
