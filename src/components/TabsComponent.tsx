import React, { useState } from "react";
import { cn } from "../lib/utils";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  direction?: "horizontal" | "vertical";
  className?: string;
};

export default function Tabs({
  tabs = [],
  direction = "horizontal",
  className,
}: TabsProps) {
  const [active, setActive] = useState<number>(0);

  const isVertical = direction === "vertical";

  return (
    <div
      className={cn(
        "w-full flex gap-6",
        isVertical ? "flex-row" : "flex-col",
        className
      )}
    >
      {/* TAB HEADERS */}
      <div
        className={cn(
          "flex",
          isVertical ? "flex-col w-44" : "flex-row w-full",
          "bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl"
        )}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "px-4 py-2 rounded-xl font-medium transition-all",
              "text-gray-700 dark:text-gray-300",
              active === i
                ? "bg-white dark:bg-gray-700 shadow-md"
                : "opacity-70 hover:opacity-100"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div
        className={cn(
          "flex-1 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700 transition-all",
          "min-h-[200px]"
        )}
      >
        {tabs[active]?.content}
      </div>
    </div>
  );
}