"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@/src/contexts/theme-context";
import { CheckCircle2, MapPin, Building2, TrendingUp } from "lucide-react";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import AnimationText from "@/src/components/Animation-text";
import { useLanguage } from "@/src/contexts/language-context";
import FloatingParticles from "@/src/components/FloatingParticles";

const bannerSection = {
  en: {
    title: "Success Stories From Our Clients",
    description: `See how Onetag is transforming retail across Uzbekistan.`,
  },
  ru: {
    title: "Истории успеха наших клиентов",
    description: ` Узнайте, как Onetag трансформирует розничную торговлю по всему Узбекистану.`,
  },
  uz: {
    title: "Mijozlarimizning muvaffaqiyat hikoyalari",
    description: `Onetag butun O‘zbekiston bo‘ylab chakana savdoni qanday o‘zgartirayotganini ko‘ring.`,
  },
};

const casesSection = {
  en: {
    cases: [
      {
        title: "Retail Chain Transformation",
        client: "Major Supermarket Chain",
        location: "Tashkent, Uzbekistan",
        results: [
          "40% faster price updates",
          "25% reduction in labor costs",
          "99.9% accuracy",
        ],
        image: "/modern-supermarket-with-digital-price-tags.jpg",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        title: "Electronics Store Modernization",
        client: "Electronics Retailer",
        location: "Samarkand, Uzbekistan",
        results: [
          "Real-time promotions",
          "Increased customer engagement",
          "Seamless integration",
        ],
        image: "/electronics-store-with-smart-displays.jpg",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        title: "Fashion Retail Innovation",
        client: "Fashion Boutique Chain",
        location: "Bukhara, Uzbekistan",
        results: [
          "Dynamic seasonal pricing",
          "Enhanced brand image",
          "Improved efficiency",
        ],
        image: "/modern-fashion-retail-store-interior.jpg",
        gradient: "from-indigo-400 to-violet-500",
      },
    ],
  },
  ru: {
    cases: [
      {
        title: "Трансформация розничной сети",
        client: " Крупная сеть супермаркетов",
        location: " Ташкент, Узбекистан",
        results: [
          "Обновление цен на 40% быстрее",
          "Снижение затрат на персонал на 25%",
          "Точность 99.9%",
        ],
        image: "/modern-supermarket-with-digital-price-tags.jpg",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        title: "Модернизация магазина электроники",
        client: "Ритейлер электроники",
        location: " Самарканд, Узбекистан",
        results: [
          "Акции и предложения в реальном времени",
          "Рост вовлеченности клиентов",
          "Бесшовная интеграция систем",
        ],
        image: "/electronics-store-with-smart-displays.jpg",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        title: "Инновации в fashion-ритейле",
        client: "Сеть fashion-бутиков",
        location: "Бухара, Узбекистан",
        results: [
          "Динамическое сезонное ценообразование",
          "Улучшение имиджа бренда",
          "Повышение эффективности работы",
        ],
        image: "/modern-fashion-retail-store-interior.jpg",
        gradient: "from-indigo-400 to-violet-500",
      },
    ],
  },
  uz: {
    cases: [
      {
        title: "Chakana savdo tarmog‘ini modernizatsiya qilish",
        client: "Yirik supermarketlar tarmog‘i",
        location: "Toshkent, O‘zbekiston",
        results: [
          "Narxlarni yangilash 40% tezlashdi",
          "Mehnat xarajatlari 25% ga kamaydi",
          "99.9% aniqlik",
        ],
        image: "/modern-supermarket-with-digital-price-tags.jpg",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        title: "Elektronika do‘konini modernizatsiya qilish",
        client: "Elektronika chakana savdosi",
        location: "Samarqand, O‘zbekiston",
        results: [
          "Real vaqt rejimidagi aksiyalar",
          "Mijozlar faolligining oshishi",
          "Silliq va muammosiz integratsiya",
        ],
        image: "/electronics-store-with-smart-displays.jpg",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        title: "Fashion chakana savdosida innovatsiyalar",
        client: "Fashion butiklar tarmog‘i",
        location: "Buxoro, O‘zbekiston",
        results: [
          "Mavsumiy dinamik narxlash",
          "Brend imidjining kuchayishi",
          "Samaradorlikning oshishi",
        ],
        image: "/modern-fashion-retail-store-interior.jpg",
        gradient: "from-indigo-400 to-violet-500",
      },
    ],
  },
};

const cases = [
  {
    title: "Retail Chain Transformation",
    client: "Major Supermarket Chain",
    location: "Tashkent, Uzbekistan",
    results: [
      "40% faster price updates",
      "25% reduction in labor costs",
      "99.9% accuracy",
    ],
    image: "/modern-supermarket-with-digital-price-tags.jpg",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Electronics Store Modernization",
    client: "Electronics Retailer",
    location: "Samarkand, Uzbekistan",
    results: [
      "Real-time promotions",
      "Increased customer engagement",
      "Seamless integration",
    ],
    image: "/electronics-store-with-smart-displays.jpg",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Fashion Retail Innovation",
    client: "Fashion Boutique Chain",
    location: "Bukhara, Uzbekistan",
    results: [
      "Dynamic seasonal pricing",
      "Enhanced brand image",
      "Improved efficiency",
    ],
    image: "/modern-fashion-retail-store-interior.jpg",
    gradient: "from-indigo-400 to-violet-500",
  },
];

export default function CasesPage() {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!mounted) return null;
  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-red-400">
  //     <p>Loading...</p>
  //   </div>
  // );

  return (
    <main className="relative min-h-screen pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 25% 35%, rgba(76, 158, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76, 158, 255, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                ]
              : [
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                  "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 -z-10"
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 size-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 size-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeAnimation staggerChildren={0.3}>
          {/* Enhanced Header */}
          <FadeAnimation className="text-center mb-16 3md:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-6 text-black dark:text-white text-balance max-w-[1400px] mx-auto">
              <AnimationText>
                {bannerSection[language].title.split(" ").slice(0, 2).join(" ")}
              </AnimationText>{" "}
              <span className="block">
                {bannerSection[language].title.split(" ").slice(2).join(" ")}
              </span>
            </h1>
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 3md:mb-6 text-balance">
              <span className="block">
                Success{" "}
                <span
                  className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      theme === "dark"
                        ? "linear-gradient(90deg, #4c9eff, #7bb3ff, #4c9eff)"
                        : "linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                >
                  Stories
                </span>
              </span>
              <span className="block text-primary mt-2">From Our Clients</span>
            </h1> */}
            <p className="text-xl 2md:text-[22px] text-muted-foreground max-w-2xl mx-auto text-pretty">
              {bannerSection[language].description}
            </p>
          </FadeAnimation>

          {/* Cases Grid */}
          <FadeAnimation
            staggerChildren={0.2}
            className="space-y-8 sm:space-y-12 3md:space-y-16"
          >
            {casesSection[language].cases.map((caseStudy, index) => (
              <div
                key={caseStudy.title}
                className="relative group transition-all! duration-500 hover:-translate-y-1.5"
              >
                {/* Card container with glass effect */}
                <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-primary/10 relative group-hover:shadow-[0_25px_50px_-12px_rgba(76,158,255,0.25)] transition-all duration-300 group-hover:border-primary/20">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.15), transparent)`,
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear",
                    }}
                  />

                  {/* Top gradient border on hover */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${caseStudy.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30`}
                    // initial={{ scaleX: 0 }}
                    // whileHover={{ scaleX: 1 }}
                    // style={{ transformOrigin: "left" }}
                  />

                  <div className="grid md:grid-cols-2 gap-0 relative z-10">
                    {/* Enhanced Image Container */}
                    <div className="relative min-h-80 2lg:min-h-[500px] overflow-hidden group/image">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${caseStudy.gradient} opacity-20 z-10 transition-opacity duration-500 group-hover/image:opacity-30`}
                      />
                      <motion.div className="absolute inset-0">
                        <Image
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                          style={{ willChange: "transform" }}
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />

                      {/* Overlay gradient */}
                      <motion.div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-transparent z-10 pointer-events-none" />

                      {/* Corner decoration */}
                      <div
                        className={`absolute top-4 right-4 w-20 h-20 bg-linear-to-br ${caseStudy.gradient} opacity-10 rounded-full blur-2xl z-10 transition-opacity duration-500 group-hover/image:opacity-20`}
                      />
                    </div>

                    {/* Enhanced Content */}
                    <div
                      className={`p-6 sm:p-8 3md:p-12 flex flex-col justify-center relative overflow-hidden ${
                        theme === "dark"
                          ? "bg-gray-900/90 backdrop-blur-md"
                          : "bg-white/95 backdrop-blur-md"
                      } group-hover:bg-opacity-100 transition-all duration-300`}
                    >
                      {/* Content gradient overlay */}
                      <motion.div
                        className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${caseStudy.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Left side accent line */}
                      <motion.div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${caseStudy.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />

                      <motion.div className="relative z-10">
                        {/* Location */}
                        <motion.div className="flex items-center gap-2 text-primary font-semibold mb-4 group/location">
                          <motion.div>
                            <MapPin className="w-4 h-4 drop-shadow-lg" />
                          </motion.div>
                          <span className="text-sm bg-primary/10 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20 group-hover/location:bg-primary/20 transition-colors duration-300">
                            {caseStudy.location}
                          </span>
                        </motion.div>

                        {/* Title */}
                        <h2
                          className={`text-2xl 2md:text-3xl 2lg:text-4xl font-bold mb-4 bg-linear-to-r ${caseStudy.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform! duration-300`}
                        >
                          {caseStudy.title}
                        </h2>

                        {/* Client */}
                        <motion.div
                          className="flex items-center gap-2 text-muted-foreground mb-5 2md:mb-8"
                          // initial={{ opacity: 0, y: -10 }}
                          // whileInView={{ opacity: 1, y: 0 }}
                          // viewport={{ once: true }}
                          // transition={{ delay: 0.5 }}
                        >
                          <Building2 className="w-5 h-5" />
                          <p className="text-lg font-medium">
                            {caseStudy.client}
                          </p>
                        </motion.div>

                        {/* Key Results */}
                        <div className="space-y-3 3md:space-y-4">
                          <motion.h3
                            className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4"
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // viewport={{ once: true }}
                            // transition={{ delay: 0.6 }}
                          >
                            <TrendingUp className="w-4 h-4" />
                            Key Results
                          </motion.h3>
                          {caseStudy.results.map((result, resultIndex) => (
                            <motion.div
                              key={result}
                              className="flex items-start gap-3 group/item"
                              // initial={{ opacity: 0, x: -20 }}
                              // whileInView={{ opacity: 1, x: 0 }}
                              // viewport={{ once: true }}
                              // transition={{ delay: 0.7 + resultIndex * 0.1 }}
                            >
                              <motion.div
                                className={`size-6 2lg:size-8 rounded-full bg-linear-to-br ${caseStudy.gradient} opacity-30 flex items-center justify-center mt-0.5 shrink-0 group-hover/item:opacity-50 transition-all duration-300 ring-2 ring-primary/20 group-hover/item:ring-primary/40 shadow-lg`}
                                // whileHover={{ scale: 1.25, rotate: 360 }}
                                // transition={{ duration: 0.4, ease: "easeOut" }}
                              >
                                <CheckCircle2
                                  className={`w-5 h-5 text-white drop-shadow-xl stroke-[2.5]`}
                                />
                              </motion.div>
                              <motion.span
                                className="text-foreground font-medium text-base flex-1 pt-0.5"
                                // whileHover={{ x: 5 }}
                                // transition={{ duration: 0.2 }}
                              >
                                {result}
                              </motion.span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${caseStudy.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    // initial={{ scaleX: 0 }}
                    // whileHover={{ scaleX: 1 }}
                    // style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            ))}
          </FadeAnimation>
        </FadeAnimation>
      </div>
    </main>
  );
}
