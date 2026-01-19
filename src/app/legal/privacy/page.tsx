"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import {
  Shield,
  Database,
  Eye,
  Mail,
  Share2,
  ShieldCheck,
  Cookie,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/src/contexts/language-context";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import SubHeading from "@/src/components/SubHeading";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import FloatingParticles from "@/src/components/FloatingParticles";

export default function PrivacyPolicyPage() {
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

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      {/* <motion.div
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
      /> */}
      <GradientBackground />

      {/* Floating particles */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full blur-sm"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
            }}
            animate={{
              x: [null, Math.random() * dimensions.width],
              y: [null, Math.random() * dimensions.height],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}
      <FloatingParticles />

      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
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
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
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

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Enhanced Header */}
        <FadeAnimation direction="up" className="text-center mb-10 2md:mb-16">
          <SubHeading
            headingText={privacyPolicySection[language].mainHeading}
            lastIndex={1}
            customHeadingClass="leading-normal!"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {privacyPolicySection[language].description}
          </p>
        </FadeAnimation>

        {/* Enhanced Sections */}
        <div className="space-y-4 sm:space-y-6 xxl:space-y-8">
          {sections[language].map((section, index) => (
            <FadeAnimation
              key={section.title}
              direction="up"
              // initial={{ opacity: 0, y: 50, rotateX: -10 }}
              // whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              // transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-6 2lg:p-8 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex items-start gap-6"
                    // initial={{ opacity: 0, x: -20 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className={`hidden sm:flex items-center justify-center shrink-0 size-12 2md:size-14 rounded-lg 2md:rounded-xl bg-linear-to-br ${section.gradient} opacity-80 group-hover/item:opacity-50 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40 shadow-xl shadow-primary/20`}
                      // whileHover={{ scale: 1.15, rotate: 360 }}
                      // transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <section.icon className="size-6 xxl:size-7 text-white drop-shadow-xl stroke-[2.5]" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h2
                        className={`text-[22px] sm:text-2xl 2md:text-[26px] xxl:text-3xl leading-normal! font-bold mb-2.5 2md:mb-4 bg-linear-to-r ${section.gradient} bg-clip-text text-transparent`}
                        // initial={{ opacity: 0, y: -10 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        // transition={{ delay: 0.3 }}
                      >
                        {section.title}
                      </motion.h2>
                      <motion.p
                        className="text-base 2md:text-lg text-muted-foreground leading-relaxed"
                        // initial={{ opacity: 0 }}
                        // whileInView={{ opacity: 1 }}
                        // viewport={{ once: true }}
                        // transition={{ delay: 0.4 }}
                      >
                        {section.description}
                      </motion.p>
                      <div className="mt-2">
                        <ul>
                          {section.infoData.map((info, index) => (
                            <li
                              key={index}
                              className="flex items-baseline text-base 2md:text-lg text-muted-foreground leading-relaxed"
                            >
                              <div
                                className={`w-2 h-2 min-w-2 rounded-full bg-linear-to-r ${section.gradient} mr-4 shadow-md`}
                              />
                              {info}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </FadeAnimation>
          ))}

          {/* Contact Section */}
          <FadeAnimation
            direction="up"
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.8, delay: 0.5 }}
            className="glass rounded-3xl p-6 2lg:p-8 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />

            <motion.p
              className="text-base 2md:text-lg text-muted-foreground leading-relaxed relative z-10 text-pretty"
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // viewport={{ once: true }}
            >
              {contactSection[language].description}
              {/* <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag&body=Hi%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors group/link"
              >
                <Mail className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                info@onetag.uz
              </a> */}
              .
            </motion.p>
          </FadeAnimation>
        </div>
      </div>
    </div>
  );
}

const privacyPolicySection = {
  en: {
    mainHeading: "Privacy Policy",
    description: `Onetag (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data.`,
  },
  ru: {
    mainHeading: "Политика конфиденциальности",
    description: `Onetag («мы», «наш», «нас») уважает вашу конфиденциальность и обязуется защищать
ваши персональные данные.`,
  },
  uz: {
    mainHeading: "Maxfiylik siyosati",
    description: `Onetag (“biz”, “bizning”) sizning maxfiyligingizni hurmat qiladi va shaxsiy ma’lumotlaringizni
himoya qilishga sodiqdir.`,
  },
};

const sections = {
  en: [
    {
      icon: Database,
      title: "1.Information We Collect",
      description: `We may collect the following information:`,
      infoData: [
        "Name, company name",
        "Email address, phone number",
        "Information submitted via contact or demo request forms",
        "Technical data (IP address, browser type, device type)",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      description: "We use your information to:",
      infoData: [
        "Respond to inquiries and requests",
        "Provide product information and demonstrations",
        "Improve our website and services",
        "Communicate business-related updates",
      ],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Share2,
      title: "3. Data Sharing",
      description: "We do not sell or rent your personal data.",
      infoData: [
        "Information may be shared only with trusted service providers or when required by law.",
      ],
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: ShieldCheck,
      title: "4. Data Security",
      description:
        "We implement appropriate technical and organizational measures to protect your data from:",
      infoData: ["Unauthorized access", "Loss", "Misuse"],
      gradient: "from-rose-400 to-red-500",
    },
    {
      icon: Cookie,
      title: "5. Cookies",
      description: "Our website may use cookies for the following:",
      infoData: ["Enhance user experience", "Analyze website traffic"],
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: UserCheck,
      title: "6. Your Rights",
      description:
        "You have the right to request the following by contacting us:",
      infoData: [
        "Access to your personal data",
        "Correction of your data",
        "Deletion of your personal data",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
  ],
  ru: [
    {
      icon: Database,
      title: "1. Какую информацию мы собираем",
      description: `Мы можем собирать следующую информацию:`,
      infoData: [
        "Имя, название компании",
        "Адрес электронной почты, номер телефона",
        "Информация, предоставленная через формы обратной связи или запроса демонстрации",
        "Технические данные (IP-адрес, тип браузера, тип устройства)",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Eye,
      title: "2. Как мы используем вашу информацию",
      description: "Мы используем вашу информацию для того, чтобы:",
      infoData: [
        "Отвечать на запросы и обращения",
        "Предоставлять информацию о продуктах и демонстрации",
        "Улучшать наш сайт и услуги",
        "Отправлять деловые и информационные уведомления",
      ],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Share2,
      title: "3. Передача данных",
      description:
        "Мы не продаём и не передаём в аренду ваши персональные данные.",
      infoData: [
        "Информация может быть передана только надёжным поставщикам услуг или в случаях, предусмотренных законом.",
      ],
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: ShieldCheck,
      title: "4. Безопасность данных",
      description:
        "Мы применяем соответствующие технические и организационные меры для защиты ваших данных от:",
      infoData: [
        "Несанкционированного доступа",
        "Утраты",
        "Неправомерного использования",
      ],
      gradient: "from-rose-400 to-red-500",
    },
    {
      icon: Cookie,
      title: "5. Cookies",
      description: "Наш сайт может использовать файлы cookie для следующего:",
      infoData: [
        "Улучшение пользовательского опыта",
        "Анализ посещаемости сайта",
      ],
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: UserCheck,
      title: "6. Ваши права",
      description: "Вы имеете право запросить следующее, связавшись с нами:",
      infoData: [
        "Доступ к своим персональным данным",
        "Исправление данных",
        "Удаление персональных данных",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
  ],
  uz: [
    {
      icon: Database,
      title: "1. Biz to‘playdigan ma’lumotlar",
      description: `Biz quyidagi ma’lumotlarni to‘plashimiz mumkin:`,
      infoData: [
        "Ism, kompaniya nomi",
        "Elektron pochta manzili, telefon raqami",
        "Aloqa yoki demo so‘rov shakllari orqali yuborilgan ma’lumotlar",
        "Texnik ma’lumotlar (IP-manzil, brauzer turi, qurilma turi)",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Eye,
      title: "2. Ma’lumotlardan foydalanish",
      description:
        "Biz sizning ma’lumotlaringizdan quyidagi maqsadlarda foydalanamiz:",
      infoData: [
        "So‘rov va murojaatlarga javob berish",
        "Mahsulotlar haqida ma’lumot va demo taqdim etish",
        "Veb-saytimiz va xizmatlarimizni yaxshilash",
        "Biznesga oid xabarnomalarni yuborish",
      ],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Share2,
      title: "3. Ma’lumotlarni uzatish",
      description:
        "Biz sizning shaxsiy ma’lumotlaringizni sotmaymiz va ijaraga bermaymiz.",
      infoData: [
        "Ma’lumotlar faqat ishonchli xizmat ko‘rsatuvchi hamkorlarga yoki qonun talab qilgan hollarda uzatilishi mumkin.",
      ],
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: ShieldCheck,
      title: "4. Ma’lumotlar xavfsizligi",
      description:
        "Biz ma’lumotlaringizni quyidagilardan himoya qilish uchun tegishli texnik va tashkiliy choralarni ko‘ramiz:",
      infoData: ["Ruxsatsiz kirish", "Yo‘qotish", "Noto‘g‘ri foydalanish"],
      gradient: "from-rose-400 to-red-500",
    },
    {
      icon: Cookie,
      title: "5. Cookie-fayllar",
      description:
        "Veb-saytimiz quyidagilar uchun cookie-fayllardan foydalanishi mumkin:",
      infoData: [
        "Foydalanuvchi tajribasini yaxshilash",
        "Sayt trafigini tahlil qilish",
      ],
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: UserCheck,
      title: "6. Sizning huquqlaringiz",
      description:
        "Biz bilan bog‘lanib, quyidagilarni so‘rash huquqiga egasiz:",
      infoData: [
        "Shaxsiy ma’lumotlarga kirish",
        "Ma’lumotlarni tuzatish",
        "Shaxsiy ma’lumotlarni o‘chirish",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
  ],
};

const contactSection = {
  en: {
    description:
      "If you have any questions regarding this Privacy Policy, please contact us via : The website contact form",
  },
  ru: {
    description:
      "Если у вас есть вопросы, связанные с данной Политикой конфиденциальности, пожалуйста, свяжитесь с нами через : Форму обратной связи на сайте",
  },
  uz: {
    description:
      "Agar ushbu Maxfiylik siyosati bo‘yicha savollaringiz bo‘lsa, iltimos, biz bilan bog‘laning : Veb-saytdagi aloqa shakli",
  },
};

// const informationWeCollectSection = {
//   en: {
//     title: "1.Information We Collect",
//     description: `We may collect the following information:`,
//     infoData: [
//       "Name, company name",
//       "Email address, phone number",
//       "Information submitted via contact or demo request forms",
//       "Technical data (IP address, browser type, device type)",
//     ],
//   },
//   ru: {
//     title: "1. Какую информацию мы собираем",
//     description: `Мы можем собирать следующую информацию:`,
//     infoData: [
//       "Имя, название компании",
//       "Адрес электронной почты, номер телефона",
//       "Информация, предоставленная через формы обратной связи или запроса демонстрации",
//       "Технические данные (IP-адрес, тип браузера, тип устройства)",
//     ],
//   },
//   uz: {
//     title: "1. Biz to‘playdigan ma’lumotlar",
//     description: `Biz quyidagi ma’lumotlarni to‘plashimiz mumkin:`,
//     infoData: [
//       "Ism, kompaniya nomi",
//       "Elektron pochta manzili, telefon raqami",
//       "Aloqa yoki demo so‘rov shakllari orqali yuborilgan ma’lumotlar",
//       "Texnik ma’lumotlar (IP-manzil, brauzer turi, qurilma turi)",
//     ],
//   },
// };

// const howWeUseInfoSection = {
//   en: {
//     title: "2. How We Use Your Information",
//     description: "We use your information to:",
//     infoData: [
//       "Respond to inquiries and requests",
//       "Provide product information and demonstrations",
//       "Improve our website and services",
//       "Communicate business-related updates",
//     ],
//   },
//   ru: {
//     title: "2. Как мы используем вашу информацию",
//     description: "Мы используем вашу информацию для того, чтобы:",
//     infoData: [
//       "Отвечать на запросы и обращения",
//       "Предоставлять информацию о продуктах и демонстрации",
//       "Улучшать наш сайт и услуги",
//       "Отправлять деловые и информационные уведомления",
//     ],
//   },
//   uz: {
//     title: "2. Ma’lumotlardan foydalanish",
//     description:
//       "Biz sizning ma’lumotlaringizdan quyidagi maqsadlarda foydalanamiz:",
//     infoData: [
//       "So‘rov va murojaatlarga javob berish",
//       "Mahsulotlar haqida ma’lumot va demo taqdim etish",
//       "Veb-saytimiz va xizmatlarimizni yaxshilash",
//       "Biznesga oid xabarnomalarni yuborish",
//     ],
//   },
// };

// const dataSharingSection = {
//   en: {
//     title: "3. Data Sharing",
//     description: "We do not sell or rent your personal data.",
//     infoData: [
//       "Information may be shared only with trusted service providers or when required by law.",
//     ],
//   },
//   ru: {
//     title: "3. Передача данных",
//     description:
//       "Мы не продаём и не передаём в аренду ваши персональные данные.",
//     infoData: [
//       "Информация может быть передана только надёжным поставщикам услуг или в случаях, предусмотренных законом.",
//     ],
//   },
//   uz: {
//     title: "3. Ma’lumotlarni uzatish",
//     description:
//       "Biz sizning shaxsiy ma’lumotlaringizni sotmaymiz va ijaraga bermaymiz.",
//     infoData: [
//       "Ma’lumotlar faqat ishonchli xizmat ko‘rsatuvchi hamkorlarga yoki qonun talab qilgan hollarda uzatilishi mumkin.",
//     ],
//   },
// };

// const dataSecuritySection = {
//   en: {
//     title: "4. Data Security",
//     description:
//       "We implement appropriate technical and organizational measures to protect your data from:",
//     infoData: ["Unauthorized access", "Loss", "Misuse"],
//   },
//   ru: {
//     title: "4. Безопасность данных",
//     description:
//       "Мы применяем соответствующие технические и организационные меры для защиты ваших данных от:",
//     infoData: [
//       "Несанкционированного доступа",
//       "Утраты",
//       "Неправомерного использования",
//     ],
//   },
//   uz: {
//     title: "4. Ma’lumotlar xavfsizligi",
//     description:
//       "Biz ma’lumotlaringizni quyidagilardan himoya qilish uchun tegishli texnik va tashkiliy choralarni ko‘ramiz:",
//     infoData: ["Ruxsatsiz kirish", "Yo‘qotish", "Noto‘g‘ri foydalanish"],
//   },
// };

// const cookiesSection = {
//   en: {
//     title: "5. Cookies",
//     description: "Our website may use cookies for the following:",
//     infoData: ["Enhance user experience", "Analyze website traffic"],
//   },
//   ru: {
//     title: "5. Cookies",
//     description: "Наш сайт может использовать файлы cookie для следующего:",
//     infoData: [
//       "Улучшение пользовательского опыта",
//       "Анализ посещаемости сайта",
//     ],
//   },
//   uz: {
//     title: "5. Cookie-fayllar",
//     description:
//       "Veb-saytimiz quyidagilar uchun cookie-fayllardan foydalanishi mumkin:",
//     infoData: [
//       "Foydalanuvchi tajribasini yaxshilash",
//       "Sayt trafigini tahlil qilish",
//     ],
//   },
// };

// const yourRightsSection = {
//   en: {
//     title: "6. Your Rights",
//     description:
//       "You have the right to request the following by contacting us:",
//     infoData: [
//       "Access to your personal data",
//       "Correction of your data",
//       "Deletion of your personal data",
//     ],
//   },
//   ru: {
//     title: "6. Ваши права",
//     description: "Вы имеете право запросить следующее, связавшись с нами:",
//     infoData: [
//       "Доступ к своим персональным данным",
//       "Исправление данных",
//       "Удаление персональных данных",
//     ],
//   },
//   uz: {
//     title: "6. Sizning huquqlaringiz",
//     description: "Biz bilan bog‘lanib, quyidagilarni so‘rash huquqiga egasiz:",
//     infoData: [
//       "Shaxsiy ma’lumotlarga kirish",
//       "Ma’lumotlarni tuzatish",
//       "Shaxsiy ma’lumotlarni o‘chirish",
//     ],
//   },
// };
