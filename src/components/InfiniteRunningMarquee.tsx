// import { useEffect, useRef, useState } from "react";

// const images = Array.from({ length: 14 }).map(
//   (_, i) => `/ESL/marqueeImages/image${String(i + 1).padStart(2, "0")}.webp`
// );

// export default function InfiniteMarquee() {
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const rafRef = useRef<number | null>(null);
//   const offsetRef = useRef(0);
//   const [active, setActive] = useState(0);

//   const getItemWidth = () => {
//     if (typeof window === "undefined") return 280;
//     // if (window.innerWidth < 480) return 200;
//     if (window.innerWidth < 480) return 300;
//     if (window.innerWidth < 768) return 220;
//     if (window.innerWidth < 1024) return 260;
//     return 280;
//   };

//   const ITEM_WIDTH = getItemWidth();
//   const TOTAL = images.length;
//   const LOOP_WIDTH = ITEM_WIDTH * TOTAL;
//   const SPEED = 0.5;

//   // 🔁 Infinite seamless loop
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const animate = () => {
//       offsetRef.current += SPEED;

//       // seamless wrap (no backward jump)
//       if (offsetRef.current >= LOOP_WIDTH) {
//         offsetRef.current -= LOOP_WIDTH;
//       }

//       track.style.transform = `translateX(-${offsetRef.current}px)`;

//       // 🔵 sync dots with visible image
//       const index =
//         Math.floor((offsetRef.current + ITEM_WIDTH / 2) / ITEM_WIDTH) % TOTAL;

//       setActive(index);

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);
//     // return () => rafRef.current && cancelAnimationFrame(rafRef.current);
//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [ITEM_WIDTH, LOOP_WIDTH, TOTAL]);

//   // 🎯 Dot navigation (keeps infinite flow)
//   const jumpTo = (index: number) => {
//     const current = offsetRef.current % LOOP_WIDTH;
//     const target = index * ITEM_WIDTH;

//     let delta = target - current;
//     if (delta < 0) delta += LOOP_WIDTH;

//     const duration = 600;
//     const startTime = performance.now();

//     const ease = (t: number) =>
//       t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

//     const animateJump = (now: number) => {
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       offsetRef.current = current + delta * ease(progress);

//       if (progress < 1) {
//         requestAnimationFrame(animateJump);
//       }
//     };

//     requestAnimationFrame(animateJump);
//     setActive(index);
//   };

//   return (
//     <div className="w-full overflow-hidden pt-8 sm:pt-10">
//       {/* Marquee */}
//       <div className="relative">
//         <div
//           ref={trackRef}
//           className="flex gap-4 sm:gap-6 will-change-transform"
//           style={{ width: ITEM_WIDTH * TOTAL * 2 }}
//         >
//           {[...images, ...images].map((src, i) => (
//             <div
//               key={i}
//               className="shrink-0 rounded-xl overflow-hidden"
//               style={{ width: ITEM_WIDTH }}
//             >
//               <img
//                 src={src}
//                 alt=""
//                 className="h-[140px] sm:h-40 md:h-[180px] w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => jumpTo(i)}
//             className={`size-2 rounded-full transition-all duration-300 cursor-pointer
//               ${
//                 active === i
//                   ? "bg-slate-700 dark:bg-slate-400 scale-125"
//                   : "bg-slate-700/40 hover:bg-slate-700/70 dark:bg-slate-400/40 dark:hover:bg-slate-400/70"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";

type Breakpoints = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
};

type ImageHeights = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
};

interface InfiniteMarqueeProps {
  images?: string[];
  speed?: number;
  breakpoints?: Breakpoints;
  imageHeights?: ImageHeights;
}

const defaultImages = Array.from({ length: 12 }).map(
  (_, i) => `/ESL/marqueeImages/image${String(i + 1).padStart(2, "0")}.webp`
);

export default function InfiniteMarquee({
  images = defaultImages,
  speed = 0.5,
  breakpoints = {
    base: 300,
    sm: 220,
    md: 260,
    lg: 280,
  },
  imageHeights = {
    base: 140,
    sm: 160,
    md: 180,
    lg: 180,
  },
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const [active, setActive] = useState(0);

  const getResponsiveValue = (values: Breakpoints | ImageHeights) => {
    if (typeof window === "undefined") return values.base;
    const w = window.innerWidth;

    if (w < 640) return values.base;
    if (w < 768 && values.sm) return values.sm;
    if (w < 1024 && values.md) return values.md;
    if (values.lg) return values.lg;

    return values.base;
  };

  const ITEM_WIDTH = getResponsiveValue(breakpoints);
  const IMAGE_HEIGHT = getResponsiveValue(imageHeights);

  const TOTAL = images.length;
  const LOOP_WIDTH = ITEM_WIDTH * TOTAL;

  // 🔁 Infinite seamless loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offsetRef.current += speed;

      if (offsetRef.current >= LOOP_WIDTH) {
        offsetRef.current -= LOOP_WIDTH;
      }

      track.style.transform = `translateX(-${offsetRef.current}px)`;

      const index =
        Math.floor(
          (offsetRef.current + ITEM_WIDTH / 2) / ITEM_WIDTH
        ) % TOTAL;

      setActive(index);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ITEM_WIDTH, LOOP_WIDTH, TOTAL, speed]);

  // 🎯 Dot navigation
  const jumpTo = (index: number) => {
    const current = offsetRef.current % LOOP_WIDTH;
    const target = index * ITEM_WIDTH;

    let delta = target - current;
    if (delta < 0) delta += LOOP_WIDTH;

    const duration = 600;
    const startTime = performance.now();

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateJump = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      offsetRef.current = current + delta * ease(progress);

      if (progress < 1) requestAnimationFrame(animateJump);
    };

    requestAnimationFrame(animateJump);
    setActive(index);
  };

  return (
    <div className="w-full overflow-hidden pt-8 sm:pt-10 pb-2">
      {/* Marquee */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 will-change-transform"
          style={{ width: ITEM_WIDTH * TOTAL * 2 }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="shrink-0 rounded-xl overflow-hidden"
              style={{ width: ITEM_WIDTH }}
            >
              <img
                src={src}
                alt=""
                style={{ height: IMAGE_HEIGHT }}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            className={`size-2 rounded-full transition-all duration-300 cursor-pointer
              ${
                active === i
                  ? "bg-slate-700 dark:bg-slate-400 scale-125"
                  : "bg-slate-700/40 hover:bg-slate-700/70 dark:bg-slate-400/40 dark:hover:bg-slate-400/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
