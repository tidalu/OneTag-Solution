"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/language-context";
import EslBanner from "@/src/components/esl-components/EslBanner";
import EslVideoComponent from "@/src/components/esl-components/EslVideoComponent";
import EslHorizontalTab from "@/src/components/esl-components/EslhorizontalTab";
import EslVerticalTab from "@/src/components/esl-components/EslVerticalTab";
import InfiniteMarquee from "@/src/components/InfiniteRunningMarquee";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import FloatingParticles from "@/src/components/FloatingParticles";
import SubHeading from "@/src/components/SubHeading";
import { useTheme } from "@/src/contexts/theme-context";
import InfiniteSliderCarousel from "@/src/components/InfiniteSliderCarousel";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import {hero, videoData, eslFunctionSection, modalsSection, advantagesSection , whyChooseSection, gallerysection, carouselData} from './eslData'

export default function ZkongShieldRebuilt() {
  const { language } = useLanguage(); // en, ru, uz
  const { theme } = useTheme();

  const [activeTab, setActiveTab] = useState(
    modalsSection[language].allModels[0].name
  );

  const cards = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(1); // default expanded
  const [hover, setHover] = useState<number | null>(null);

  const getWidth = (id: number) => {
    const current = hover ?? active;
    return id === current ? "flex-[2]" : "flex-[1]";
  };

  // Carousel ref
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full text-gray-900 dark:text-white">
      <GradientBackground />
      <FloatingParticles />

      <EslBanner hero={hero[language]} theme={theme} />
      <EslVideoComponent videoData={videoData[language]} />

      <section className="secondary-background py-20">
        <FadeAnimation
          staggerChildren={0.3}
          className="container mx-auto px-4 max-w-7xl relative"
        >
          <SubHeading
            headingText={eslFunctionSection[language].title}
            lastIndex={3}
            customHeadingClass="text-center mb-12"
          />
          {/* <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
            {eslFunctionSection[language].title}
          </h2> */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow sm:p-4 mb-8">
            <EslVerticalTab featureData={eslFunctionSection[language].data1} />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow sm:p-4">
            <EslVerticalTab
              featureData={eslFunctionSection[language].data2}
              position="right"
            />
          </div>
        </FadeAnimation>
      </section>

      <section className="py-20">
        <FadeAnimation
          staggerChildren={0.3}
          className="container mx-auto px-4 max-w-7xl relative"
        >
          <SubHeading
            headingText={modalsSection[language].title}
            lastIndex={3}
            customHeadingClass="text-center mb-12 text-pretty"
          />
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <div className="flex border-b border-gray-200 mb-5 sm:mb-8">
              {modalsSection[language].allModels.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-sm font-medium focus:outline-none cursor-pointer
              ${
                activeTab === tab.name
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            {modalsSection[language].allModels.map(
              (tab, index) =>
                activeTab === tab.name && (
                  <EslHorizontalTab key={index} sectionData={tab} />
                )
            )}
          </div>
        </FadeAnimation>
      </section>

      <section className="secondary-background py-20">
        <FadeAnimation staggerChildren={0.3}>
          <div className="container mx-auto px-4 max-w-7xl relative w-full flex items-center justify-center bg-cover bg-center">
            <div className="grid sm:grid-cols-2 3md:flex gap-4 3md:gap-0 max-sm:py-10 p-4 3md:p-0 relative w-full 3md:aspect-5/2 overflow-hidden rounded">
              <Image
                src={"/ESL/zkong-electronic-shelf-labels-advantage.webp"}
                alt="ZKONG electronic shelf labels advantages: real-time pricing updates, extended battery life, cloud management, and seamless POS integration"
                fill
                className="max-sm:object-cover"
              />

              {advantagesSection[language].cards.map((item, index) => {
                const current = hover ?? active; // single source of truth for visuals
                const isCurrent = index === current;

                return (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)} // clear hover, DON'T set active here
                      onClick={() => setActive(index)} // set active only on click
                      className={`hidden 3md:flex relative items-center justify-center
          transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] cursor-pointer
          ${getWidth(index)} ${isCurrent ? "bg-white" : "bg-transparent"}`}
                    >
                      <span
                        className={`size-6 bg-white rounded-full text-base font-bold transition-colors duration-300 text-black text-center
                    ${isCurrent ? "hidden" : "block"}`}
                      >
                        {index + 1}
                      </span>

                      {/* Extra text appears when current (hover or active) */}
                      <div
                        className={`absolute bottom-4 flex flex-col items-center justify-center w-full text-base 2lg:text-lg font-medium transition-opacity duration-300 p-4 text-center h-full overflow-hidden
                    ${isCurrent ? "opacity-100 text-gray-500" : "opacity-0"}`}
                      >
                        <h6 className="font-semibold">{item.title}</h6>
                        <p className="font-normal">{item.description}</p>
                      </div>
                    </div>
                    <div
                      key={(index + 10) * 100}
                      className={`flex 3md:hidden relative items-center justify-center transition-all cursor-pointer bg-white rounded-lg`}
                    >
                      {/* Extra text appears when current (hover or active) */}
                      <div
                        className={`w-full text-base font-medium transition-opacity duration-300 p-4 pb-6 h-full overflow-hidden text-gray-500
                    `}
                      >
                        <h6 className="font-semibold mb-2">{item.title}</h6>
                        <p className="font-normal">{item.description}</p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </FadeAnimation>
      </section>

      <section className="py-20 overflow-hidden">
        <FadeAnimation staggerChildren={0.3} className="relative max-w-7xl mx-auto px-6 text-center">
          <SubHeading
            headingText={whyChooseSection[language].heading}
            lastIndex={2}
          />
          <p className="text-base 2lg:text-lg xxl:text-xl leading-relaxed text-slate-600 dark:text-blue-200 mb-2">
            {whyChooseSection[language].subheading}
          </p>
          <p className="text-base 2lg:text-lg xxl:text-xl leading-relaxed text-slate-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            {whyChooseSection[language].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2lg:gap-6">
            {whyChooseSection[language].cards.map((card, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-white/5 backdrop-blur border border-slate-200 dark:border-white/10 rounded-xl px-4 2lg:px-6 py-6 text-left hover:bg-slate-50 dark:hover:bg-white/10 transition"
              >
                <card.icon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base 2lg:text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {card.text}
                </p>
                <div className="absolute bottom-4 right-6 text-xl text-slate-400 dark:text-white/40">
                  {card.index}
                </div>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </section>

      <section className="secondary-background relative w-full py-20">
        <FadeAnimation staggerChildren={0.3} className="container mx-auto px-4 max-w-7xl relative w-full">
          <div className="text-center">
            <h2 className="text-3xl 2lg:text-4xl font-semibold text-slate-600 dark:text-blue-200">
              {gallerysection[language].title}
            </h2>
          </div>

          <InfiniteMarquee />
        </FadeAnimation>
      </section>

      <section className="relative w-full py-18 sm:py-24">
        <FadeAnimation staggerChildren={0.3} className="container mx-auto px-4 max-w-7xl relative w-full">
          <div className="mb-6 text-center">
            <SubHeading
              headingText={carouselData[language].title}
              lastIndex={3}
            />
            {/* <h2 className="text-2xl font-semibold text-center mb-4">
              {carouselData[language].title}
            </h2> */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-blue-200 md:text-base">
              {carouselData[language].description1}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-blue-200 md:text-base">
              {carouselData[language].description2}
            </p>
          </div>
          <InfiniteSliderCarousel
            data={carouselData[language].imageData}
            renderCard={(item, i) => (
              <div
                key={i}
                className="group relative h-[500px] rounded-lg flex flex-col items-center justify-center overflow-hidden shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={`${item.name} - Electronic shelf label application showcase for retail industry`}
                  fill
                  className="opacity-75"
                />
                <div className="z-1 flex flex-col justify-between h-full w-full">
                  <div className="bg-white dark:bg-slate-700 min-h-1/2 w-full p-2 md:opacity-0 group-hover:opacity-100">
                    <p className="text-slate-600 dark:text-slate-300 select-none">
                      {item.description}
                    </p>
                  </div>
                  <h3
                    className="font-bold p-4 text-right text-white
                  "
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            )}
            columns={3}
            responsive={{
              base: 1,
              md: 3,
            }}
            //  bottomButton={true}
            infinite
          />
        </FadeAnimation>
      </section>
    </div>
  );
}