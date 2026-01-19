"use client";

import React from "react";
import Image from "next/image";
import SliderCarousel from "@/src/components/SliderCarousel";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import AnimationText from "@/src/components/Animation-text";
import FloatingParticles from "@/src/components/FloatingParticles";
import { useLanguage } from "@/src/contexts/language-context";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import SubHeading from "@/src/components/SubHeading";
import { useTheme } from "@/src/contexts/theme-context";
import {
  bannerSection,
  accessoriesSection,
  wirelessSection,
} from "./accessoriesData";

export default function ESLAccessoriesPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="w-full min-h-screen text-gray-900 dark:text-white">
      <GradientBackground />
      <FloatingParticles />
      {/* HERO SECTION */}
      <section className="relative">
        <div className="relative min-h-[500px] sm:min-h-[70vh] w-full h-full flex items-center justify-center overflow-hidden px-6 pt-12 pb-6 sm:py-16 2md:py-20 rounded-b-4xl">
          <Image
            src="/esl-accessories/ESL-accessories-bg.png"
            alt="ESL background image"
            fill
            objectFit="cover"
          />

          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-linear-to-br from-slate-950/90 via-slate-900/85 to-slate-800/90"
                : "bg-linear-to-br from-gray-600/60 via-gray-500/70 to-gray-700/60 blur-2px"
            }`}
          />

          <div className="max-w-6xl mx-auto text-center relative z-10 p-0 sm:p-8 2md:p-12 rounded-2xl">
            <FadeAnimation staggerChildren={0.3}>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4 font-bold dark:hidden">
                <AnimationText modeReverse>
                  {bannerSection[language].title
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}
                </AnimationText>{" "}
                {bannerSection[language].title.split(" ").slice(2).join(" ")}
              </h1>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4 font-bold hidden dark:block">
                <AnimationText>
                  {bannerSection[language].title
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}
                </AnimationText>{" "}
                {bannerSection[language].title.split(" ").slice(2).join(" ")}
              </h1>
              <p className="text-white text-base md:text-lg xl:text-xl">
                {bannerSection[language].subtext}
              </p>
            </FadeAnimation>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      {/* <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 text-sm px-6 bg-white dark:bg-gray-800">
        Home / Solution / ESL Accessory
      </div> */}

      <section className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        <FadeAnimation className="text-center mb-10 2md:mb-16">
          <SubHeading
            headingText={accessoriesSection[language].title}
            lastIndex={1}
          />
        </FadeAnimation>

        <FadeAnimation>
          <div className="flex flex-col gap-6">
            {accessoriesSection[language].accessoriesData.map(
              (accessorie, index) => (
                <div
                  key={index}
                  className="esl-accessories-slider flex even:flex-row-reverse bg-white dark:bg-gray-800 p-0 rounded-xl shadow overflow-hidden"
                >
                  <div className="col-span-3 bg-blue-600 text-white max-sm:px-2.5 p-4 sm:p-6 font-semibold min-h-[140px] flex flex-col items-center justify-center text-center max-sm:max-w-[100px] w-56 2lg:w-64">
                    <p className="text-center text-xs sm:text-base">
                      {accessorie.title}
                    </p>
                    {accessorie.decs && (
                      <p className="text-[10px] sm:text-xs">
                        {accessorie.decs}
                      </p>
                    )}
                  </div>

                  <SliderCarousel
                    data={accessorie.products}
                    sliderCardClass="!px-0"
                    containerClass="!p-0 esl-accessories-slider-container"
                    columns={4}
                    responsive={{
                      base: 1,
                      md: 3,
                    }}
                    // responsive={{lg: 3 , md: 2, sm: 1}}
                    renderCard={(item: any, i) => (
                      <div className="group h-52 2lg:h-60 flex flex-col items-center justify-center p-4 gap-6 transition-all duration-300 hover:bg-neutral-800">
                        {/* <h3 className="text-sm font-bold text-center text-white">
                        {item.name}
                      </h3> */}
                        <div className="group-hover:scale-110 relative max-h-34 2lg:max-h-40 h-full w-full transition-all duration-300">
                          <Image
                            src={item.src}
                            alt={item.name}
                            // height={60}
                            // width={40}
                            quality={100}
                            fill
                            className="object-contain"
                            // className="max-h-34 2lg:max-h-40 w-24 2lg:w-30 h-full"
                          />
                        </div>
                      </div>
                    )}
                  />
                </div>
              )
            )}
          </div>
        </FadeAnimation>
      </section>

      {/* WIRELESS BASE STATION */}
      <section className="max-w-7xl mx-auto py-10 2lg:py-16 px-6 space-y-20">
        <FadeAnimation className="text-center mb-10 2lg:mb-16">
          <SubHeading
            headingText={wirelessSection[language].title}
            lastIndex={1}
          />
          <p className="text-base 2md:text-lg 2lg:text-xl leading-relaxed">
            {wirelessSection[language].description}
          </p>
        </FadeAnimation>

        <FadeAnimation className="space-y-18 2lg:space-y-24">
          {wirelessSection[language].equipmentData.map((data, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 2lg:gap-10 items-center"
            >
              <div className="relative w-68 2lg:w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
                <Image
                  src={data.imgSrc}
                  alt={data.heading}
                  fill
                  className="aspect-square"
                />
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-xl 2md:text-2xl font-semibold">
                  {data.heading}
                </h3>
                <p className="text-base 2md:text-lg font-medium">
                  {data.subHeading}
                </p>
                {data.features.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </div>
            </div>
          ))}
        </FadeAnimation>

        {/* <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
          <div className="relative w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
            <Image
              src="/esl-accessories/ZAP-C.webp"
              alt="ZAP - C"
              fill
              className="aspect-square"
            />
          </div>
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-semibold">ZAP - C (Ceiling)</h3>
            <p>Electronic shelf label transmission system equipment</p>
            <p>Size: 180*180*33mm</p>
            <p>Operate temperature: -10°~60℃</p>
            <p>Power: 48V POE</p>
            <p>Weight: 500g</p>
            <p>Frequency: 2.4GHz+5GHz</p>
            <p>Wi-Fi Speed: 1167Mbps</p>
            <p>Coverage: Indoor 30m radius</p>
          </div>
        </div>

        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
            <Image
              src="/esl-accessories/ZAP-DX.webp"
              alt="ZAP - C"
              fill
              className="aspect-square"
            />
          </div>
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-semibold">ZAP - DX (Ceiling)</h3>
            <p>BLE / Wi-Fi dual module wireless base station</p>
            <p>Size: 215*215*39mm</p>
            <p>Operate temperature: -10°~60℃</p>
            <p>Power: 48V POE</p>
            <p>Weight: 500g</p>
            <p>Frequency: 2.4GHz+5GHz</p>
            <p>Wi-Fi Speed: 1167Mbps</p>
            <p>Coverage: Indoor 30m radius</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
