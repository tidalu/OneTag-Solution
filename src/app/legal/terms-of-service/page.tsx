"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import {
  FileText,
  CheckCircle,
  Shield,
  AlertTriangle,
  RefreshCw,
  Mail,
  Edit3,
} from "lucide-react";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import FloatingParticles from "@/src/components/FloatingParticles";
import { useLanguage } from "@/src/contexts/language-context";
import SubHeading from "@/src/components/SubHeading";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";

export default function TermsOfServicePage() {
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
    <div className="relative min-h-screen pt-26 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <GradientBackground />

      {/* Floating particles */}
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
        <FadeAnimation
        direction="up"
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-10 2md:mb-16"
        >
          <SubHeading
            headingText={termsOfServiceSection[language].title}
            lastIndex={1}
            customHeadingClass="leading-normal!"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg 2md:text-xl text-muted-foreground mx-auto leading-relaxed"
          >
            {termsOfServiceSection[language].description}
          </motion.p>
        </FadeAnimation>

        {/* Enhanced Sections */}
        <div className="space-y-4 sm:space-y-6 xxl:space-y-8">
          {sections[language].map((section, index) => (
            <FadeAnimation
              direction="up"
              key={section.title}
              className="relative group"
            >
              <div className="glass rounded-3xl p-5 sm:p-8 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
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
                        className={`text-[22px] sm:text-2xl 2md:text-[26px] xxl:text-3xl leading-normal! font-bold mb-2 2md:mb-3 bg-linear-to-r ${section.gradient} bg-clip-text text-transparent`}
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
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
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
              className="text-lg text-muted-foreground leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              For any questions regarding these Terms, please contact us at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag&body=Hi%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors group/link"
              >
                <Mail className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                info@onetag.uz
              </a>
              .
            </motion.p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

const termsOfServiceSection = {
  en: {
    title: "Terms of Service",
    description: `By accessing and using the Onetag website, you agree to the following terms.`,
  },
  ru: {
    title: "Условия использования",
    description: `Посещая и используя сайт Onetag, вы соглашаетесь со следующими условиями.`,
  },
  uz: {
    title: "Foydalanish shartlari",
    description: `Onetag veb-saytiga kirish va undan foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz.`,
  },
};

const sections = {
  en: [
    {
      icon: CheckCircle,
      title: "1. Website Use",
      description: `The content of this website is provided for informational and business purposes only. Unauthorized use or copying of materials is prohibited.`,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "2. Intellectual Property",
      description: `All content, logos, designs, texts, and images belong to Onetag or its partners and are protected by applicable laws.`,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FileText,
      title: "3. Product Information",
      description: `Product descriptions and specifications are provided for general information and may be updated without prior notice.`,
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: AlertTriangle,
      title: "4. Limitation of Liability",
      description: `We are not liable for any direct or indirect damages arising from the use of this website or reliance on its content.`,
      gradient: "from-red-400 to-orange-500",
    },
    {
      icon: RefreshCw,
      title: "5. External Links",
      description: `Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.`,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Edit3,
      title: "6. Changes to Terms",
      description: `We reserve the right to update these Terms of Service at any time. Continued use of the website constitutes acceptance of the updated terms.`,
      gradient: "from-emerald-400 to-teal-500",
    },
  ],
  ru: [
    {
      icon: CheckCircle,
      title: "1. Использование сайта",
      description: `Содержимое данного сайта предоставляется исключительно в информационных и деловых целях. Несанкционированное использование или копирование материалов запрещено.`,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "2. Интеллектуальная собственность",
      description: `Все материалы, логотипы, дизайн, тексты и изображения принадлежат Onetag или его партнёрам и защищены действующим законодательством.`,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FileText,
      title: "3. Информация о продуктах",
      description: `Описание и характеристики продуктов предоставляются в ознакомительных целях и могут быть изменены без предварительного уведомления.`,
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: AlertTriangle,
      title: "4. Ограничение ответственности",
      description: `Мы не несем ответственности за любые прямые или косвенные убытки, возникшие в результате использования данного сайта или доверия к его содержимому.`,
      gradient: "from-red-400 to-orange-500",
    },
    {
      icon: RefreshCw,
      title: "5. Внешние ссылки",
      description: `Наш сайт может содержать ссылки на сторонние веб-ресурсы. Мы не несем ответственности за их содержание или политику конфиденциальности.`,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Edit3,
      title: "6. Изменения условий",
      description: `Мы оставляем за собой право в любое время изменять настоящие Условия использования. Продолжение использования сайта означает согласие с обновлёнными условиями.`,
      gradient: "from-emerald-400 to-teal-500",
    },
  ],
  uz: [
    {
      icon: CheckCircle,
      title: "1. Veb-saytdan foydalanish",
      description: `Ushbu veb-saytdagi kontent faqat axborot va biznes maqsadlari uchun taqdim etiladi. Materiallardan ruxsatsiz foydalanish yoki ularni nusxalash taqiqlanadi.`,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "2. Intellektual mulk",
      description: `Barcha kontent, logotiplar, dizaynlar, matnlar va tasvirlar Onetag yoki uning hamkorlariga tegishli bo‘lib, amaldagi qonunlar bilan himoyalangan.`,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FileText,
      title: "3. Mahsulot haqida ma’lumot",
      description: `Mahsulot tavsiflari va texnik xususiyatlari umumiy ma’lumot sifatida beriladi va oldindan ogohlantirilmasdan o‘zgartirilishi mumkin.`,
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: AlertTriangle,
      title: "4. Javobgarlikni cheklash",
      description: `Biz ushbu veb-saytdan foydalanish yoki undagi ma’lumotlarga tayanish natijasida yuzaga kelgan har qanday bevosita yoki bilvosita zararlar uchun javobgar emasmiz.`,
      gradient: "from-red-400 to-orange-500",
    },
    {
      icon: RefreshCw,
      title: "5. Tashqi havolalar",
      description: `Veb-saytimizda uchinchi tomon saytlariga havolalar bo‘lishi mumkin. Biz ularning mazmuni yoki maxfiylik siyosati uchun javobgar emasmiz.`,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Edit3,
      title: "6. Shartlarga o‘zgartirishlar",
      description: `Biz ushbu Foydalanish shartlarini istalgan vaqtda yangilash huquqini o‘zimizda saqlab qolamiz. Saytdan foydalanishni davom ettirish yangilangan shartlarga rozilik bildirganingizni anglatadi.`,
      gradient: "from-emerald-400 to-teal-500",
    },
  ],
};
