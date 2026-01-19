// "use client"

// import React, { useRef, useState, useEffect } from "react";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// interface ResponsiveConfig {
//   sm?: number;
//   md?: number;
//   lg?: number;
//   xl?: number;
// }

// interface SliderCarouselProps<T> {
//   data: T[];
//   renderCard: (item: T, index: number) => React.ReactNode;
//   columns?: number;
//   responsive?: ResponsiveConfig;
//   infinite?: boolean;
//   containerClass?: string;
//   sliderCardClass?: string;
// }

// function SliderCarousel<T>({
//   data,
//   renderCard,
//   containerClass = "",
//   sliderCardClass="",
//   columns = 4,
//   responsive,
//   infinite = false,
// }: SliderCarouselProps<T>) {
//   const holderRef = useRef<HTMLDivElement>(null);
//   const isJumpingRef = useRef(false); // guard while we do an instant jump
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(false);
//   const [currentCols, setCurrentCols] = useState(columns);

//   const finalData = infinite ? [...data, ...data, ...data] : data;
//   const middleIndex = infinite ? data.length : 0;

//   // ----------------------------
//   // RESPONSIVE COLUMNS
//   // ----------------------------

//   const updateColumns = () => {
//     if (typeof window === "undefined") return;
//     const w = window.innerWidth;
//     let newCols = columns;

//     if (responsive) {
//       if (w < 640 && responsive.sm) newCols = responsive.sm;
//       else if (w < 768 && responsive.md) newCols = responsive.md;
//       else if (w < 1000 && responsive.lg) newCols = responsive.lg;
//       else if (w < 1280 && responsive.xl) newCols = responsive.xl;
//       else newCols = columns;
//     }

//     setCurrentCols(newCols);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       updateColumns();
//       window.addEventListener("resize", updateColumns);
//       return () => window.removeEventListener("resize", updateColumns);
//     }
//     return undefined;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [columns, responsive]);

//   // ----------------------------
//   // HELPER: update arrow visibility (only for non-infinite)
//   // ----------------------------
//   const updateScrollButtons = () => {
//     if (!holderRef.current || infinite) return;

//     const { scrollLeft, scrollWidth, clientWidth } = holderRef.current;
//     const maxScrollLeft = scrollWidth - clientWidth;

//     setCanScrollLeft(scrollLeft > 0);
//     // subtract small epsilon to avoid floating point issues
//     setCanScrollRight(scrollLeft < maxScrollLeft - 1);
//   };

//   // ----------------------------
//   // INFINITE SCROLL HANDLER (SEAMLESS FIX)
//   // ----------------------------
//   const handleInfiniteScroll = () => {
//     if (!holderRef.current || !infinite) return;
//     if (isJumpingRef.current) return; // avoid recursion while jumping

//     const el = holderRef.current;
//     const cardWidth = cardWidthRef.current;
//     const chunkWidth = cardWidth * data.length;

//     // left boundary: if we've scrolled into the left duplicated chunk too far, jump forward
//     if (el.scrollLeft < chunkWidth * 0.5) {
//       isJumpingRef.current = true;

//       // do an instant jump (disable smooth temporarily)
//       const prevBehavior = el.style.scrollBehavior;
//       el.style.scrollBehavior = "auto";
//       el.scrollLeft = el.scrollLeft + chunkWidth;

//       // force reflow so the browser commits the change immediately
//       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//       el.offsetHeight;

//       // restore behavior (let CSS handle smooth again)
//       // small timeout ensures we don't immediately re-enter scroll handler while still in same frame
//       setTimeout(() => {
//         el.style.scrollBehavior = prevBehavior || "";
//         isJumpingRef.current = false;
//       }, 0);

//       return;
//     }

//     // right boundary: if we've scrolled into the right duplicated chunk too far, jump backward
//     if (el.scrollLeft > chunkWidth * 1.5 + (cardWidth / 2)) {
//       isJumpingRef.current = true;

//       const prevBehavior = el.style.scrollBehavior;
//       el.style.scrollBehavior = "auto";
//       el.scrollLeft = el.scrollLeft - chunkWidth;

//       // force reflow
//       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//       el.offsetHeight;

//       setTimeout(() => {
//         el.style.scrollBehavior = prevBehavior || "";
//         isJumpingRef.current = false;
//       }, 0);

//       return;
//     }
//   };

//   // ----------------------------
//   // SETUP EVENT LISTENERS
//   // ----------------------------
//   useEffect(() => {
//     const el = holderRef.current;
//     if (!el) return;

//     updateScrollButtons();

//     el.addEventListener("scroll", handleInfiniteScroll);
//     el.addEventListener("scroll", updateScrollButtons);
//     window.addEventListener("resize", updateScrollButtons);

//     return () => {
//       el.removeEventListener("scroll", handleInfiniteScroll);
//       el.removeEventListener("scroll", updateScrollButtons);
//       window.removeEventListener("resize", updateScrollButtons);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data, infinite, currentCols]);

//   // ----------------------------
//   // INITIALIZE INFINITE START POSITION (no animation)
//   // ----------------------------
//   useEffect(() => {
//     if (!infinite || !holderRef.current) return;

//     const el = holderRef.current;

//     // do a non-animated set to the middle chunk
//     // temporarily force 'auto' to avoid any smooth behavior from CSS
//     const prevBehavior = el.style.scrollBehavior;
//     el.style.scrollBehavior = "auto";

//     // use requestAnimationFrame so we set after layout
//     requestAnimationFrame(() => {
//       const cardWidth = cardWidthRef.current;
//       el.scrollLeft = middleIndex * cardWidth;

//       // force reflow
//       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//       el.offsetHeight;

//       // restore behavior in next tick
//       setTimeout(() => {
//         el.style.scrollBehavior = prevBehavior || "";
//       }, 0);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [infinite, currentCols, data.length]);

//   // ----------------------------
//   // SCROLL BY CARD - works for both modes
//   // ----------------------------
// const scrollByCard = (dir: "left" | "right") => {
//   const el = holderRef.current;
//   if (!el) return;

//   const cardWidth = cardWidthRef.current;
//   const chunkWidth = cardWidth * data.length;

//   if (infinite) {
//     const atLeftBoundary = el.scrollLeft < chunkWidth * 0.5 + 5;
//     const atRightBoundary = el.scrollLeft > chunkWidth * 1.5 - 5;

//     if (atLeftBoundary || atRightBoundary) {
//       // INSTANT JUMP (NO ANIMATION)
//       const prev = el.style.scrollBehavior;
//       el.style.scrollBehavior = "auto";

//       if (atLeftBoundary) el.scrollLeft += chunkWidth;
//       if (atRightBoundary) el.scrollLeft -= chunkWidth;

//       // force sync
//       el.offsetHeight;

//       el.style.scrollBehavior = prev || "";
//     }
//   }

//   // Normal scroll-by-card after auto-fixing boundary
//   el.scrollBy({
//     left: dir === "left" ? -cardWidth : cardWidth,
//     behavior: "smooth",
//   });
// };

//   const showLeftArrow = infinite ? true : canScrollLeft;
//   const showRightArrow = infinite ? true : canScrollRight;

//   return (
//     <div className={`relative flex items-center w-full p-4 ${containerClass}`}>
//       {/* LEFT ARROW */}
//       {showLeftArrow && (
//         <button
//           onClick={() => scrollByCard("left")}
//           className="absolute left-0 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full ml-8 cursor-pointer"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft />
//         </button>
//       )}

//       {/* SLIDER */}
//       <div
//         ref={holderRef}
//         className="flex overflow-x-auto scroll-smooth no-scrollbar w-full snap-x snap-mandatory"
//       >
//         {finalData.map((item, i) => (
//           <div
//             key={i}
//             className={`shrink-0 px-2 snap-start ${sliderCardClass}`}
//             style={{ width: `${100 / currentCols}%` }}
//           >
//             {renderCard(item, i % data.length)}
//           </div>
//         ))}
//       </div>

//       {/* RIGHT ARROW */}
//       {showRightArrow && (
//         <button
//           onClick={() => scrollByCard("right")}
//           className="absolute right-0 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full mr-8 cursor-pointer"
//           aria-label="Scroll right"
//         >
//           <ChevronRight />
//         </button>
//       )}
//     </div>
//   );
// }

// export default SliderCarousel;


"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ResponsiveConfig {
  base?: number; // mobile
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
}

function SliderCarousel<T>({
  data,
  renderCard,
  columns = 4,
  responsive,
  infinite = false,
  containerClass = "",
  sliderCardClass = "",
}: SliderCarouselProps<T>) {
  const holderRef = useRef<HTMLDivElement>(null);
  const isJumpingRef = useRef(false);

  const [currentCols, setCurrentCols] = useState(columns);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const finalData = infinite ? [...data, ...data, ...data] : data;
  const middleIndex = infinite ? data.length : 0;

  // ---------------------------------------
  // RESPONSIVE COLUMN RESOLVER (FIXED)
  // ---------------------------------------
  const resolveColumns = () => {
    if (typeof window === "undefined") return columns;

    const w = window.innerWidth;

    if (!responsive) return columns;

    if (w >= 1280 && responsive.xl) return responsive.xl;
    if (w >= 1024 && responsive.lg) return responsive.lg;
    if (w >= 768 && responsive.md) return responsive.md;
    if (w >= 640 && responsive.sm) return responsive.sm;

    return responsive.base ?? columns;
  };

  useEffect(() => {
    const update = () => {
      setCurrentCols(resolveColumns());
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsive, columns]);

  // ---------------------------------------
  // SCROLL BUTTON VISIBILITY (NON-INFINITE)
  // ---------------------------------------
  const updateScrollButtons = () => {
    if (!holderRef.current || infinite) return;

    const el = holderRef.current;
    const max = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < max - 1);
  };

  // ---------------------------------------
  // INFINITE SCROLL HANDLER (SEAMLESS)
  // ---------------------------------------
  const handleInfiniteScroll = () => {
    if (!holderRef.current || !infinite || isJumpingRef.current) return;

    const el = holderRef.current;
    const cardWidth = el.clientWidth / currentCols;
    const chunkWidth = cardWidth * data.length;

    if (el.scrollLeft < chunkWidth * 0.5) {
      jumpScroll(el.scrollLeft + chunkWidth);
    }

    if (el.scrollLeft > chunkWidth * 1.5) {
      jumpScroll(el.scrollLeft - chunkWidth);
    }
  };

  const jumpScroll = (value: number) => {
    const el = holderRef.current;
    if (!el) return;

    isJumpingRef.current = true;
    const prev = el.style.scrollBehavior;

    el.style.scrollBehavior = "auto";
    el.scrollLeft = value;
    el.offsetHeight;

    requestAnimationFrame(() => {
      el.style.scrollBehavior = prev || "";
      isJumpingRef.current = false;
    });
  };

  // ---------------------------------------
  // INIT INFINITE POSITION
  // ---------------------------------------
  useEffect(() => {
    if (!infinite || !holderRef.current) return;

    const el = holderRef.current;
    const prev = el.style.scrollBehavior;

    el.style.scrollBehavior = "auto";

    requestAnimationFrame(() => {
      const cardWidth = el.clientWidth / currentCols;
      el.scrollLeft = middleIndex * cardWidth;
      el.offsetHeight;

      el.style.scrollBehavior = prev || "";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infinite, currentCols, data.length]);

  // ---------------------------------------
  // LISTENERS
  // ---------------------------------------
  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", handleInfiniteScroll);
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", handleInfiniteScroll);
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCols, infinite]);

  // ---------------------------------------
  // SCROLL CONTROLS
  // ---------------------------------------
  const scrollByCard = (dir: "left" | "right") => {
    const el = holderRef.current;
    if (!el) return;

    const cardWidth = el.clientWidth / currentCols;
    el.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const showLeft = infinite || canScrollLeft;
  const showRight = infinite || canScrollRight;

  return (
    <div className={`relative w-full flex items-center ${containerClass}`}>
      {showLeft && (
        <button
          onClick={() => scrollByCard("left")}
          className="absolute left-2 z-10 bg-blue-500 text-white p-1.5 sm:p-2 rounded-full max-sm:bottom-4"
        >
          <ChevronLeft className="max-sm:size-4" />
        </button>
      )}

      <div
        ref={holderRef}
        className="flex w-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {finalData.map((item, i) => (
          <div
            key={i}
            className={`shrink-0 snap-start px-2 ${sliderCardClass}`}
            style={{ width: `${100 / currentCols}%` }}
          >
            {renderCard(item, i % data.length)}
          </div>
        ))}
      </div>

      {showRight && (
        <button
          onClick={() => scrollByCard("right")}
          className="absolute right-2 z-10 bg-blue-500 text-white p-1.5 sm:p-2 rounded-full max-sm:bottom-4"
        >
          <ChevronRight className="max-sm:size-4" />
        </button>
      )}
    </div>
  );
}

export default SliderCarousel;