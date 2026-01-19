import { useEffect, useRef, useState } from "react";

const images = Array.from({ length: 14 }).map(
  (_, i) => `/ESL/marqueeImages/image${String(i + 1).padStart(2, "0")}.webp`
);

/**
 * Behavior
 * - Mobile (<640px): 1 card, 100% width
 * - Tablet (640px–1024px): 3-card window
 *   - center: 50% width
 *   - sides: 25% + 25%
 * - Infinite loop
 */
export default function MobileTabletInfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);

  const [containerWidth, setContainerWidth] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  const TOTAL = images.length;
  const SPEED = 0.6;

  // 📐 Measure container & breakpoint
  useEffect(() => {
    if (!containerRef.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const w = window.innerWidth;
      setContainerWidth(entry.contentRect.width);
      setIsTablet(w >= 640 && w < 1024);
    });

    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // widths
  const centerWidth = isTablet ? containerWidth * 0.5 : containerWidth;
  const sideWidth = isTablet ? containerWidth * 0.25 : 0;
  const STEP = isTablet ? centerWidth : containerWidth;
  const LOOP_WIDTH = STEP * TOTAL;

  // 🔁 Infinite loop
  useEffect(() => {
    if (!containerRef.current || !containerWidth) return;

    const animate = () => {
      offsetRef.current += SPEED;

      if (offsetRef.current >= LOOP_WIDTH) {
        offsetRef.current -= LOOP_WIDTH;
      }

      containerRef.current!.style.transform =
        `translateX(-${offsetRef.current}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [containerWidth, isTablet, LOOP_WIDTH]);

  return (
    <div className="w-full overflow-hidden pt-8">
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="flex will-change-transform"
          style={{ width: STEP * TOTAL * 2 }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="shrink-0 px-1"
              style={{
                width: STEP,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isTablet ? (
                <div className="flex w-full">
                  <div
                    className="overflow-hidden rounded-xl"
                    style={{ width: sideWidth }}
                  />
                  <div
                    className="overflow-hidden rounded-xl"
                    style={{ width: centerWidth }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-[220px] w-full object-cover"
                    />
                  </div>
                  <div
                    className="overflow-hidden rounded-xl"
                    style={{ width: sideWidth }}
                  />
                </div>
              ) : (
                <div
                  className="overflow-hidden rounded-xl w-full"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
