"use client";
import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";
import AnimationText from "./Animation-text";

const brands = [
  {
    imgSrc: "/brands/7-eleven.svg",
    name: "7 eleven",
  },
  {
    imgSrc: "/brands/carrefour.svg",
    name: "carrefour",
  },
  {
    imgSrc: "/brands/lenovo.svg",
    name: "7 lenovo",
  },
  {
    imgSrc: "/brands/samsung.svg",
    name: "samsung",
  },
  {
    imgSrc: "/brands/sony.svg",
    name: "sony",
  },
  {
    imgSrc: "/brands/xiaomi.svg",
    name: "xiaomi",
  },
  {
    imgSrc: "/brands/walmart.svg",
    name: "walmart",
  },
  {
    imgSrc: "/brands/Dr-Max.svg",
    name: "Dr Max",
  },
  {
    imgSrc: "/brands/hp.svg",
    name: "HP",
  },
  {
    imgSrc: "/brands/hyatt.svg",
    name: "Hyatt",
  },
  {
    imgSrc: "/brands/magnit.svg",
    name: "Magnit",
  },
  {
    imgSrc: "/brands/mercedes-benz.svg",
    name: "Mercedes Benz",
  },
  {
    imgSrc: "/brands/midea.svg",
    name: "Midea",
  },
  {
    imgSrc: "/brands/orange.svg",
    name: "Orange",
  },
];

function BrandMarquee() {
  const { theme } = useTheme();
  const {t} = useLanguage()

  return (
    <section className="py-12 2md:py-16 lg::py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeAnimation staggerChildren={0.3}>
          <FadeAnimation
            staggerChildren={0.3}
            className="text-center mb-10 2md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mx-auto mb-6">
              <AnimationText>
                {t("BrandsHeading").split(" ").slice(0,2).join(" ")}{" "}
              </AnimationText>
              <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                {t("BrandsHeading").split(" ").slice(2).join(" ")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("BrandsHeadingText")}
            </p>
          </FadeAnimation>

          <FadeAnimation staggerChildren={0.3} className="text-center">
            {/* <p className="text-xl bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent max-w-3xl mx-auto mb-6 font-bold">
              Trusted by leading brands worldwide
            </p> */}

            <div className="text-center mb-12 3md:mb-16">
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-blue-100 to-purple-100 border border-blue-200 dark:bg-linear-to-r dark:from-blue-600/20 dark:to-purple-600/20 dark:border dark:border-blue-500/30 
            `}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span
                  className={`text-sm font-semibold text-blue-700 dark:text-blue-300`}
                >
                  {t("BrandsSubHeading")}
                </span>
              </div>
            </div>

            {/* <div className="marquee max-w-[760px] mx-auto">
              <div className="marquee-content">
                <div className="flex items-center gap-12">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <Image
                        src="/brands/7-eleven.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/carrefour.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/lenovo.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/samsung.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/walmart.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/xiaomi.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="flex items-center justify-center flex-wrap gap-y-4 gap-4 2md:gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 bg-white p-3 2md:p-4"
                >
                  <Image
                    src={brand.imgSrc}
                    className="size-14 2md:size-16"
                    height={80}
                    width={100}
                    alt={brand.name}
                  />
                </div>
              ))}
            </div>
          </FadeAnimation>
        </FadeAnimation>
      </div>
    </section>
  );
}

export default BrandMarquee;
