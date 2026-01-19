"use client";

import React from "react";
import AnimationText from "@/src/components/Animation-text";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/language-context";
import SubHeading from "@/src/components/SubHeading";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import FloatingParticles from "@/src/components/FloatingParticles";
import { useTheme } from "@/src/contexts/theme-context";
import {
  bannerSection,
  revolutionarySection,
  advantagesSection,
} from "./cloudPlatformData";

export default function ZKONGPlatform() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 dark:text-white">
      {/* Hero Section */}
      <GradientBackground />
      <FloatingParticles />

      <section>
        <div className="min-h-[500px] sm:min-h-[70vh] flex items-center relative overflow-hidden px-6 rounded-b-4xl pt-12 pb-6 sm:py-16 2md:py-20">
          <div className={`absolute inset-0 w-full h-full`}>
            <video
              preload="auto"
              autoPlay
              muted
              loop
              className="inset-0 w-full h-full object-cover object-top"
            >
              <source
                src={"/esl-cloud-platform/Cloud platform BG.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-linear-to-br from-slate-950/90 via-slate-900/85 to-slate-800/90"
                : "bg-linear-to-br from-gray-600/60 via-gray-500/70 to-gray-700/60 blur-2px"
            }`}
          />
          {/* subtle light/dark background shapes */}
          <FadeAnimation className="max-w-6xl mx-auto text-center relative z-10 p-0 sm:p-8 2md:p-12 rounded-2xl gla ss">
            <h1 className="text-white dark:text-black text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-pretty mb-6 dark:hidden">
              <AnimationText modeReverse>
                {bannerSection[language].title.split(" ").slice(0, 1).join(" ")}
              </AnimationText>{" "}
              {bannerSection[language].title.split(" ").slice(1).join(" ")}
            </h1>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-pretty mb-6 hidden dark:block">
              <AnimationText>
                {bannerSection[language].title.split(" ").slice(0, 1).join(" ")}
              </AnimationText>{" "}
              {bannerSection[language].title.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-base sm:text-lg 2md:text-xl text-white 2md:mb-8 max-w-4xl mx-auto">
              {bannerSection[language].description}
            </p>
            {/* <button
            aria-label="get started with us"
            className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-2xl transition-all duration-300 min-w-[170px]"
          >
            {bannerSection[language].cta}
          </button> */}
          </FadeAnimation>
        </div>
      </section>

      <section className="py-12 sm:py-16 2m:py-20">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <FadeAnimation
            staggerChildren={0.3}
            className="text-center relative z-10 mb-10"
          >
            <SubHeading
              headingText={revolutionarySection[language].title}
              lastIndex={2}
              customHeadingClass="text-center mb-6"
            />
            <p className="text-base sm:text-lg 2md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-8 max-w-4xl mx-auto text-pretty">
              {revolutionarySection[language].description}
            </p>
          </FadeAnimation>
          <FadeAnimation className="dark:bg-white p-4">
            <Image
              src={`/esl-cloud-platform/retail-cloud-platform-${language}.webp`}
              alt="cloud platform"
              width={1200}
              height={800}
              className="mx-auto"
            />
          </FadeAnimation>
        </div>
      </section>

      {/* Platform Advantages */}
      <section className="py-12 sm:py-16 2m:py-20">
        <div className="max-w-7xl px-6 mx-auto">
          <FadeAnimation>
            <SubHeading
              headingText={advantagesSection[language].title}
              lastIndex={4}
              customHeadingClass="text-center mb-10 sm:mb-16"
            />
          </FadeAnimation>

          <FadeAnimation>
            <div className="space-y-12">
              {advantagesSection[language].advantages.map(
                (advantage, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center"
                  >
                    {/* Image Section */}
                    <div
                      className={`rounded-2xl border dark:border-gray-700 bg-linear-to-br 
                from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 
                  overflow-hidden 
                  ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                    >
                      <div className="relative flex items-center justify-center aspect-828/265">
                        {/* sm:h-48 */}
                        <Image
                          src={advantage.imgSrc}
                          alt={advantage.heading}
                          fill
                        />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div
                      className={`${
                        index % 2 === 1 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <SubHeading
                        headingText={advantage.heading}
                        lastIndex={Math.ceil(
                          advantage.heading.split(" ").length / 2
                        )}
                        textSize="md"
                        customHeadingClass="text-lg! sm:text-xl! 2md:text-2xl! mb-2.5! sm:mb-4!"
                      />
                      <ul className="cloud-platform-ul">
                        {advantage.data.map((item, i) => (
                          <li key={i}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </FadeAnimation>
        </div>
      </section>
    </div>
  );
}

{
  /* Platform Architecture Diagram */
}
{
  /* <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 border bg-gray-50/60 border-gray-200 dark:bg-gray-800/60 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            ESL Integration Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700">
                <Database className="w-12 h-12 text-blue-600 dark:text-blue-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                POS/Backend Systems
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Integrated data sources
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700">
                <Cloud className="w-12 h-12 text-purple-600 dark:text-purple-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                ZKONG Cloud ESL
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Central management platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700">
                <MonitorPlay className="w-12 h-12 text-cyan-600 dark:text-cyan-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                CloudGW - SAP
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Gateway communication
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Server className="w-8 h-8 mb-2 text-blue-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                ESL Base Station
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Layers className="w-8 h-8 mb-2 text-purple-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                ZKONG AP Database
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Zap className="w-8 h-8 mb-2 text-yellow-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Real-time Updates
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Shield className="w-8 h-8 mb-2 text-green-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Secure Protocol
              </p>
            </div>
          </div>
        </div>
      </section> */
}

{
  /* ESL Platform Superior System */
}
{
  /* <section className="px-6 py-12 sm:py-16 2m:py-20 max-w-7xl mx-auto">
        <FadeAnimation>
          <SubHeading
            headingText={superiorSystemSection[language].title}
            lastIndex={4}
            customHeadingClass="text-center mb-10 sm:mb-16"
          />
        </FadeAnimation>

        <FadeAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {superiorSystemSection[language].cardData.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border dark:border-gray-700 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:border-blue-500 transition-all overflow-hidden"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-6">
                  <div className="relative w-full h-40 rounded-full flex items-center justify-center">
                    <Image src={card.imgSrc} alt={card.heading} fill />
                  </div>
                </div>
                <div className="p-4 sm:p-8">
                  <h3 className="text-xl 2lg:text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    {card.heading}
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {card.data.map((item, index) => (
                      <li className="flex items-start">
                        <span key={index}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </section> */
}

{
  /* CTA Section */
}
{
  /* <section className="px-6 py-12 sm:py-16 2m:py-20 max-w-6xl mx-auto text-center">
        <div className="p-12 rounded-3xl border dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Retail Operations?
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading retailers worldwide who trust ZKONG ESL platform to
            deliver seamless pricing updates and enhanced customer experiences.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </section> */
}

{
  /* Latest Innovations Section */
}
{
  /* <section className="px-6 py-16 max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Latest Innovations and Trends in the{" "}
          <span className="text-blue-600 dark:text-blue-400">Retail IoT</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-blue-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
              <Cloud className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Cloud Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamless cloud connectivity enabling real-time updates across
              global retail networks.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-purple-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800">
              <Zap className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              IoT Sensors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced sensor technology for inventory tracking and
              environmental monitoring.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-cyan-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-cyan-800">
              <MonitorPlay className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Digital Signage
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interactive displays transforming customer engagement and shopping
              experiences.
            </p>
          </div>
        </div>
      </section> */
}
