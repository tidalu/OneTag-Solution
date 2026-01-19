"use client";

import { useLanguage } from "@/src/contexts/language-context";
import { useTheme } from "../contexts/theme-context";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import AnimationText from "./Animation-text";
import { useEffect, useState } from "react";

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !theme) return <div className="min-h-screen"></div>;

  // if (!theme) return null;

  return (
    <section className="">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-4xl">
      <div
        className={`absolute inset-0 w-full h-full opacity-0 dark:opacity-100`}
      >
        <video
          key={theme}
          preload="auto"
          autoPlay
          muted
          loop
          className="inset-0 w-full h-full object-fill"
        >
          <source src={"/banner-video-dark.mp4"} type="video/mp4" />
        </video>
      </div>

      <div
        className={`absolute inset-0 w-full h-full opacity-100 dark:opacity-0`}
      >
        <video
          key={theme}
          preload="auto"
          autoPlay
          muted
          loop
          className="inset-0 w-full h-full object-fill"
        >
          <source src={"/banner-video.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 backdrop-blu r-sm">
        <FadeAnimation direction="up">
          <FadeAnimation
            direction="up"
            staggerChildren={0.1}
            className="flex flex-col"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-6 text-black dark:text-white text-balance max-w-[1400px] mx-auto">
              <AnimationText>
                {t("hero.title.line1").split(" ").slice(0, 2).join(" ")}
              </AnimationText>{" "}
              {t("hero.title.line1").split(" ").slice(2).join(" ")}
            </h1>
          </FadeAnimation>

          <a
            href="/contact"
            aria-label="more info about one tag"
            className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-2xl transition-all duration-300 min-w-[170px]"
          >
            {/* More Info */}
            {t("hero.moreInfo")} <span className="sr-only"> about one tag </span>
          </a>
        </FadeAnimation>
      </div>
      </div>
    </section>
  );
}
