"use client";

import React, { useState } from "react";
import Image from "next/image";

type Feature = {
  id: string;
  title: string;
  body: string;
  img: string;
};

interface EslVerticalTabProps {
  position?: "left" | "right";
  featureData: Feature[];
}

function EslVerticalTab({
  position = "left",
  featureData,
}: EslVerticalTabProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);

  const onFeatureLeave = () => setIsFeaturesHovered(false);

  const onFeatureHover = (index: number) => {
    setActiveFeatureIndex(index);
    setIsFeaturesHovered(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
      {/* Tabs */}
      <div className={`max-3md:p-6 max-sm:p-4 max-3md:rounded-xl max-sm:rounded-none max-sm:rounded-t-xl max-3md:bg-gray-50 dark:max-3md:bg-gray-700 max-3md:grid 3md:col-span-4 gap-4 sm:gap-6 ${position === "left" ? "grid-cols-[1fr_min-content]" : "3md:order-1 grid-cols-[min-content_1fr]"}`}>
        <div className={`block 3md:hidden ${position === "left" ? "" : "order-1"}`} >
          <div className="h-full">
            <div className="grid gap-6 items-center">
              <div className={`${position === "left" ? "" : "order-1"}`}>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {featureData[activeFeatureIndex].title}
                </h3>
                <p className="text-sm sm:text-base mt-1.5 sm:mt-3 text-gray-600 dark:text-gray-300">
                  {featureData[activeFeatureIndex].body}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-3">
          {featureData.map((f, i) => (
            <button
              key={f.id}
              onMouseEnter={() => onFeatureHover(i)}
              onMouseLeave={onFeatureLeave}
              onClick={() => setActiveFeatureIndex(i)}
              className={`w-full text-left p-3 rounded-md transition ${
                activeFeatureIndex === i
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
              aria-pressed={activeFeatureIndex === i}
            >
              <div className="font-medium sm:text-nowrap text-sm sm:text-base">{f.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="hidden 3md:block 3md:col-span-8">
        <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 h-full">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className={`${position === "left" ? "" : "order-1"}`}>
              <h3 className="text-xl font-semibold">
                {featureData[activeFeatureIndex].title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {featureData[activeFeatureIndex].body}
              </p>
            </div>

            <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
              <Image
                src={featureData[activeFeatureIndex].img}
                alt={featureData[activeFeatureIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block 3md:hidden p-4 pt-0 sm:p-0">
      <div className="w-full min-h-48 aspect-4/2 relative rounded-[10px] sm:rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
        <Image
          src={featureData[activeFeatureIndex].img}
          alt={featureData[activeFeatureIndex].title}
          fill
          className="object-cover"
        />
      </div>
      </div>
    </div>
  );
}

export default EslVerticalTab;
