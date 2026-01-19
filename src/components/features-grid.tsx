"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Cloud, TrendingUp } from "lucide-react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";
import AnimationText from "./Animation-text";

// const features = [
//   {
//     icon: Zap,
//     title: "Instant Updates",
//     description: "Change prices across all locations in seconds, not hours.",
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     icon: Shield,
//     title: "Enterprise Security",
//     description: "Bank-level encryption protects your pricing data.",
//     color: "from-green-400 to-emerald-500",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Management",
//     description: "Control everything from a single, intuitive dashboard.",
//     color: "from-blue-400 to-cyan-500",
//   },
//   {
//     icon: TrendingUp,
//     title: "Dynamic Pricing",
//     description: "Optimize prices based on demand and competition.",
//     color: "from-purple-400 to-pink-500",
//   },
// ];

const features = [
  {
    icon: Zap,
    translations: {
      en: {
        title: "Instant Updates",
        description: "Change prices across all locations in seconds, not hours.",
      },
      ru: {
        title: "Мгновенные обновления",
        description: "Меняйте цены во всех локациях за секунды, а не часы.",
      },
      uz: {
        title: "Tezkor yangilanishlar",
        description: "Narxlarni barcha joylarda soniyalarda o‘zgartiring, soatlarda emas.",
      },
    },
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    translations: {
      en: {
        title: "Enterprise Security",
        description: "Bank-level encryption protects your pricing data.",
      },
      ru: {
        title: "Корпоративная безопасность",
        description: "Шифрование уровня банка защищает ваши данные о ценах.",
      },
      uz: {
        title: "Korporativ xavfsizlik",
        description: "Bank darajasidagi shifrlash narx ma'lumotlaringizni himoya qiladi.",
      },
    },
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Cloud,
    translations: {
      en: {
        title: "Cloud Management",
        description: "Control everything from a single, intuitive dashboard.",
      },
      ru: {
        title: "Облачное управление",
        description: "Управляйте всем с одной удобной панели.",
      },
      uz: {
        title: "Bulutli boshqaruv",
        description: "Hammasini bitta qulay boshqaruv panelidan nazorat qiling.",
      },
    },
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    translations: {
      en: {
        title: "Dynamic Pricing",
        description: "Optimize prices based on demand and competition.",
      },
      ru: {
        title: "Динамическое ценообразование",
        description: "Оптимизируйте цены на основе спроса и конкуренции.",
      },
      uz: {
        title: "Dinamik narxlash",
        description: "Narxlarni talab va raqobatga asoslanib optimallashtiring.",
      },
    },
    color: "from-purple-400 to-pink-500",
  },
];


export function FeaturesGrid() {
  const { t, language } = useLanguage();
  // console.log(language , " this is language")
  return (
    <section className="py-16 2md:py-20 relative overflow-hidden">
      {/* Smooth background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <FadeAnimation
        className="container mx-auto px-4 max-w-7xl relative z-10"
        staggerChildren={0.2}
      >
        <FadeAnimation
          staggerChildren={0.5}
          className="text-center mb-10 2md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-3xl mx-auto mb-6">
            <AnimationText>
              {t("WhyUs").split(" ").slice(0, 2).join(" ")}{" "}
            </AnimationText>
            <span className="text-primary bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text">
              Onetag
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("WhyUsText")}
          </p>
        </FadeAnimation>

        <FadeAnimation
          staggerChildren={0.5}
          repeatOnScroll={true}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 xl:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2.5 hover:scale-105 max-sm:text-center"
            >
              {/* linear overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Smooth shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100" />

              {/* Animated icon */}
              <div
                className={`relative size-14 xl:size-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center max-sm:mx-auto mb-4 sm:mb-6 shadow-lg`}
                // transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div>
                  <feature.icon className="size-8 text-white" />
                </div>
              </div>

              <h3 className="text-[22px] xl:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.translations[language].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.translations[language].description}
              </p>

              {/* Subtle linear underline */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </FadeAnimation>
      </FadeAnimation>
    </section>
  );
}
