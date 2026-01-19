"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResponsiveConfig {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface SliderCarouselProps<T> {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  columns?: number;
  responsive?: ResponsiveConfig;
  infinite?: boolean;
  containerClass?: string;
  sliderCardClass?: string;
  bottomButton?: boolean;
}

function InfiniteSliderCarousel<T>({
  data,
  renderCard,
  columns = 1,
  responsive,
  infinite = false,
  containerClass = "",
  sliderCardClass = "",
  bottomButton = false,
}: SliderCarouselProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const animRef = useRef<number | null>(null);

  const [currentCols, setCurrentCols] = useState(columns);
  const [cardWidth, setCardWidth] = useState(0);

  // -------------------------
  // RESPONSIVE COLUMNS
  // -------------------------
  const resolveColumns = () => {
    if (!responsive) return columns;
    const w = window.innerWidth;

    if (w >= 1280 && responsive.xl) return responsive.xl;
    if (w >= 1024 && responsive.lg) return responsive.lg;
    if (w >= 768 && responsive.md) return responsive.md;
    if (w >= 640 && responsive.sm) return responsive.sm;

    return responsive.base ?? columns;
  };

  useEffect(() => {
    const update = () => setCurrentCols(resolveColumns());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [responsive, columns]);

  // -------------------------
  // MEASURE CARD WIDTH
  // -------------------------
  useEffect(() => {
    if (!wrapperRef.current) return;

    const measure = () => {
      setCardWidth(wrapperRef.current!.clientWidth / currentCols);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [currentCols]);

  // -------------------------
  // DATA FOR INFINITE
  // -------------------------
  const items = infinite ? [...data, ...data, ...data] : data;
  const middleOffset = infinite ? data.length * cardWidth : 0;

  // -------------------------
  // APPLY TRANSFORM
  // -------------------------
  const applyTransform = (value: number, animate = true) => {
    if (!trackRef.current) return;

    trackRef.current.style.transition = animate
      ? "transform 450ms ease"
      : "none";

    trackRef.current.style.transform = `translateX(-${value}px)`;
  };

  // -------------------------
  // INIT POSITION
  // -------------------------
  useEffect(() => {
    offsetRef.current = middleOffset;
    applyTransform(offsetRef.current, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardWidth]);

  // -------------------------
  // MOVE LOGIC
  // -------------------------
  const move = (dir: "left" | "right") => {
  if (!cardWidth || !trackRef.current) return;

  const step = cardWidth;
  const max = data.length * cardWidth;

  // 1️⃣ Move normally with animation
  offsetRef.current += dir === "left" ? -step : step;
  applyTransform(offsetRef.current, true);

  // 2️⃣ AFTER animation ends → silently normalize position
  const handleTransitionEnd = () => {
    trackRef.current?.removeEventListener(
      "transitionend",
      handleTransitionEnd
    );

    if (!infinite) return;

    // too far left
    if (offsetRef.current < max * 0.5) {
      offsetRef.current += max;
      applyTransform(offsetRef.current, false);
    }

    // too far right
    if (offsetRef.current > max * 1.5) {
      offsetRef.current -= max;
      applyTransform(offsetRef.current, false);
    }
  };

  trackRef.current.addEventListener(
    "transitionend",
    handleTransitionEnd
  );
};


  // -------------------------
  // CLEANUP
  // -------------------------
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden ${containerClass}`}
    >
      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ width: items.length * cardWidth }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`shrink-0 px-2 ${sliderCardClass}`}
            style={{ width: cardWidth }}
          >
            {renderCard(item, i % data.length)}
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={() => move("left")}
        className={`absolute z-10 bg-blue-500 text-white p-2 rounded-full
          ${bottomButton ? "-bottom-14 left-[30%]" : "top-1/2 -translate-y-1/2 left-3"}
        `}
      >
        <ChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => move("right")}
        className={`absolute z-10 bg-blue-500 text-white p-2 rounded-full
          ${bottomButton ? "-bottom-14 right-[30%]" : "top-1/2 -translate-y-1/2 right-3"}
        `}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default InfiniteSliderCarousel;
