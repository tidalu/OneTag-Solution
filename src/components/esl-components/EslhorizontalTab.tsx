"use client";

import React, { useState } from "react";
import Image from "next/image";

type ModelSpec = {
  k: string; // Key (e.g., "Size", "Screen")
  v: string; // Value (e.g., "44.5*35.9*13.7mm", "27*27mm")
};

type ModelIndicators = {
  nfc: boolean; // Near Field Communication
  remove: boolean; // Tamper/Removal Detection
  led: boolean; // LED Indicator Light
};

type RetailPriceTagModel = {
  id: string;
  name: string;
  title: string;
  desc: string;
  img: string;
  ind: ModelIndicators;
  specs: ModelSpec[];
};

type EslHorizontalTab = {
  sectionData: { models: RetailPriceTagModel[] };
};

function EslHorizontalTab({ sectionData }: EslHorizontalTab) {
  const [isModelsHovered, setIsModelsHovered] = useState(false);
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const onModelHover = (index: number) => {
    setActiveModelIndex(index);
    setIsModelsHovered(true);
  };

  const onModelLeave = () => setIsModelsHovered(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* pills list (wrap on small) */}
        <div className="flex flex-wrap gap-2">
          {sectionData.models.map((m, i) => (
            <button
              key={m.id}
              onMouseEnter={() => onModelHover(i)}
              onMouseLeave={onModelLeave}
              onClick={() => setActiveModelIndex(i)}
              className={`text-sm px-3 py-2 rounded-md transition-all ${
                activeModelIndex === i
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
              aria-pressed={activeModelIndex === i}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div className="">
          <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 h-40 md:h-56 relative">
              <Image
                src={sectionData.models[activeModelIndex].img}
                alt={sectionData.models[activeModelIndex].title}
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold">
                {sectionData.models[activeModelIndex].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {sectionData.models[activeModelIndex].desc}
              </p>
              <ul className="text-sm">
                {sectionData.models[activeModelIndex].specs.map((s, idx) => (
                  <li
                    key={idx}
                    className="flex gap-6 bg-gray-50 dark:bg-gray-700 py-0.5 rounded"
                  >
                    <span className="text-gray-600 dark:text-gray-300">
                      {s.k}
                    </span>
                    <span className="font-medium">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4"></div>
        </div>
      </section> */}
    </>
  );
}

export default EslHorizontalTab;
