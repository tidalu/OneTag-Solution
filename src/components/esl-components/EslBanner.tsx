import React from "react";
import AnimationText from "../Animation-text";
import Image from "next/image";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";

type EslHero = {
  hero: { title: string; subtitle1?: string; subtitle2?: string; cta?: string };
  language?: string; theme ?: string;
};

function EslBanner({ hero, language, theme}: EslHero) {
  return (
    // <section
    //   className={`relative pt-30 pb-16 sm:py-24 bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700`}
    // >
    <section>
      <div className="min-h-[500px] sm:min-h-[70vh] relative w-full flex items-center justify-center px-6 pt-12 pb-6 sm:py-16 2md:py-20 rounded-b-4xl overflow-hidden">
        <Image
          src="/ESL-bg.png"
          alt="ESL background image"
          fill
          objectFit="cover"
        />

        {/* <div className="absolute z-1 inset-0 pointer-events-none h-full w-full black-white-fade"> */}
          {/* <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
          <div className="absolute h-full w-full blur-2px black-white-fade bg -[#3a3a3a75]"></div> */}
        {/* </div> */}
        <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-linear-to-br from-slate-950/90 via-slate-900/85 to-slate-800/90' 
          : 'bg-linear-to-br from-gray-600/60 via-gray-500/70 to-gray-700/60 blur-2px'
      }`} />
        <FadeAnimation className="max-w-5xl flex items-center justify-center flex-col mx-auto px-4 sm:px-6 text-center z-1 p-0 sm:p-8 2md:p-12 rounded-2xl gl ass">
          <h1 className="dark:text-white text-black text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-pretty hidden dark:block">
            <AnimationText>
              {hero.title.split(" ").slice(0, 2).join(" ")}
            </AnimationText>{" "}
            {hero.title.split(" ").slice(2).join(" ")}
          </h1>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-pretty block dark:hidden">
            <AnimationText modeReverse>
              {hero.title.split(" ").slice(0, 2).join(" ")}
            </AnimationText>{" "}
            {hero.title.split(" ").slice(2).join(" ")}
          </h1>
          {hero.subtitle1 && (
            <p className="text-base md:text-lg lg:text-xl 2lg:text-2xl font-medium 3md:mt-3 mb-4 3md:mb-6">
              {hero.subtitle1}
            </p>
          )}
          {hero.subtitle2 && (
            <p className="text-base md:text-lg lg:text-xl 2lg:text-2xl font-medium 3md:mt-3 mb-4 3md:mb-6">
              {hero.subtitle2}
            </p>
          )}
          {hero.cta && (
            <div className="mt-3 sm:mt-6 flex justify-center">
              <a
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md"
              >
                {hero.cta}
              </a>
            </div>
          )}
        </FadeAnimation>
      </div>
    </section>
  );
}

export default EslBanner;
