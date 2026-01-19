"use client";

import Link from "next/link";
import { useTheme } from "@/src/contexts/theme-context";
import { useLanguage } from "../contexts/language-context";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

// interface FooterLinks {
//   product: { label: string; href: string }[];
//   company: { label: string; href: string }[];
//   legal: { label: string; href: string }[];
//   [key: string]: { label: string; href: string }[];
// }

// const footerLinks: any = {
//   product: [
//     {
//       label: { en: "Solutions", ru: "Решения", uz: "Yechimlar" },
//       href: "/solutions",
//     },
//     {
//       label: { en: "Case Studies", ru: "Кейсы", uz: "Muvaffaqiyat hikoyalari" },
//       href: "/cases",
//     },
//     { label: { en: "Pricing", ru: "Цены", uz: "Narxlar" }, href: "/contact" },
//   ],
//   company: [
//     {
//       label: {
//         en: "About Us",
//         ru: "О компании",
//         uz: "Biz haqimizda",
//       },
//       href: "/about",
//     },
//     {
//       label: {
//         en: "Contact",
//         ru: "Контакты",
//         uz: "Aloqa",
//       },
//       href: "/contact",
//     },
//     {
//       label: {
//         en: "Careers",
//         ru: "Вакансии",
//         uz: "Ish o‘rinlari",
//       },
//       href: "/about",
//     },
//   ],
//   legal: [
//     {
//       label: {
//         en: "Privacy Policy",
//         ru: "Политика конфиденциальности",
//         uz: "Maxfiylik siyosati",
//       },
//       href: "/legal/privacy",
//     },
//     {
//       label: {
//         en: "Terms of Service",
//         ru: "Условия обслуживания",
//         uz: "Xizmat ko‘rsatish shartlari",
//       },
//       href: "/legal/terms-of-service",
//     },
//   ],
// };

// Supported languages in your dataset
type LanguageCode = "en" | "ru" | "uz";

// Each translation entry
interface Translation {
  title: string;
}

// Translations object keyed by language
type Translations = {
  [lang in LanguageCode]: Translation;
};

// Child link inside a section
interface FooterChild {
  key: string;
  translations: Translations;
}

// Top-level section (Product, Company, Legal)
interface FooterSection {
  key: string;
  translations: Translations;
  children: FooterChild[];
}

// The entire footerLinks array
type FooterLinks = FooterSection[];

const footerLinks: FooterLinks = [
  {
    key: "product",
    translations: {
      en: { title: "Product" },
      ru: { title: "Продукт" },
      uz: { title: "Mahsulot" },
    },
    children: [
      // {
      //   key: "solutions",
      //   translations: {
      //     en: { title: "Solutions" },
      //     ru: { title: "Решения" },
      //     uz: { title: "Yechimlar" },
      //   },
      // },
      {
        key: "electronic-shelf-labels",
        translations: {
          en: { title: "Electronic Shelf Labels" },
          ru: { title: "Электронные ценники (ESL)" },
          uz: { title: "Elektron narx yorliqlari (ESL)" },
        },
      },
      {
        key: "esl-cloud-platform",
        translations: {
          en: { title: "Cloud Platform" },
          ru: { title: "Облачная платформа" },
          uz: { title: "Bulutli platforma" },
        },
      },
      {
        key: "esl-accessories",
        translations: {
          en: { title: "ESL Accessories" },
          ru: { title: "Аксессуары для ESL" },
          uz: { title: "ESL aksessuarlari" },
        },
      },
      {
        key: "cases",
        translations: {
          en: { title: "Cases" },
          ru: { title: "Кейсы" },
          uz: { title: "Misollar" },
        },
      },
      // {
      //   key: "pricing",
      //   translations: {
      //     en: { title: "Pricing" },
      //     ru: { title: "Цены" },
      //     uz: { title: "Narxlar" },
      //   },
      // },
    ],
  },
  {
    key: "company",
    translations: {
      en: { title: "Company" },
      ru: { title: "Компания" },
      uz: { title: "Kompaniya" },
    },
    children: [
      {
        key: "about",
        translations: {
          en: { title: "About Us" },
          ru: { title: "О компании" },
          uz: { title: "Biz haqimizda" },
        },
      },
      {
        key: "contact",
        translations: {
          en: { title: "Contact" },
          ru: { title: "Контакты" },
          uz: { title: "Aloqa" },
        },
      },
      // {
      //   key: "careers",
      //   translations: {
      //     en: { title: "Careers" },
      //     ru: { title: "Вакансии" },
      //     uz: { title: "Ish o‘rinlari" },
      //   },
      // },
    ],
  },
  {
    key: "legal",
    translations: {
      en: { title: "Legal" },
      ru: { title: "Юридическое" },
      uz: { title: "Huquqiy" },
    },
    children: [
      {
        key: "legal/privacy",
        translations: {
          en: { title: "Privacy Policy" },
          ru: { title: "Политика конфиденциальности" },
          uz: { title: "Maxfiylik siyosati" },
        },
      },
      {
        key: "legal/terms-of-service",
        translations: {
          en: { title: "Terms of Service" },
          ru: { title: "Условия обслуживания" },
          uz: { title: "Xizmat ko‘rsatish shartlari" },
        },
      },
    ],
  },
];

const LinkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const TelegramIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 32 32"
    className=""
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"></path>
  </svg>
);

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/onetag-uz",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/onetag.uz",
    label: "Instagram",
  },
  { icon: TelegramIcon, href: "https://t.me/onetag_uz", label: "Telegram" },
];

const footerLabel = {
  product: {
    en: "Product",
    ru: "Продукт",
    uz: "Mahsulot",
  },
  company: {
    en: "Company",
    ru: "Компания",
    uz: "Kompaniya",
  },
  legal: {
    en: "Legal",
    ru: "Юридическое",
    uz: "Huquqiy",
  },
};

const footerText = {
  text: {
    en: `Pioneering smart retail technology in Uzbekistan. Transform your store with intelligent price tags.`,
    ru: `Мы — пионеры смарт-ретейл технологий в Узбекистане. Преобразуйте свой магазин с помощью интеллектуальных электронных ценников.`,
    uz: `Biz — Oʻzbekistonda smart retail tehnologiyalarida yetakchimiz. Doʻkoningizni aqlli elektron narx belgilari bilan zamonaviylashtiring.`,
  },
};

const copyrightText = {
  en: {
    text: "Copyright © 2025 Onetag LLC. All rights reserved.",
  },
  uz: {
    text: "Mualliflik huquqi © 2025 Onetag MCHJ. Barcha huquqlar himoyalangan.",
  },
  ru: {
    text: "Авторские права © 2025 Onetag ООО. Все права защищены. (Ru)",
  },
};

export function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <footer
      className={`relative overflow-hidden mt-6 2md:mt-16 border-t-2 transition-all duration-500 backdrop-blur-3xl
  md:rounded-t-3xl
  ${
    theme === "dark"
      ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-gray-300 border-white/10 shadow-[0_-10px_30px_rgba(255,255,255,0.05)]"
      : "bg-linear-to-b from-[#f8f9fa] via-[#f1f3f5] to-[#e9ecef] text-gray-800 border-gray-300 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
  }`}
    >
      {/* Decorative Top Glow */}
      <div className="absolute -top-16 left-0 w-full h-32 bg-linear-to-b from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 max-w-7xl py-10">
        {/* Top Grid */}
        <div className="grid gap-6 sm:gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-6">
          {/* Brand + Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="w-40 transition-all duration-300 hover:scale-105">
                {theme === "dark" ? (
                  <img
                    src="/logo2.svg"
                    alt="OneTag"
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src="/logo1.svg"
                    alt="OneTag"
                    className="w-full h-auto"
                  />
                )}
              </div>
            </Link>

            <p
              className={`leading-relaxed mb-4 max-w-sm font-light transition-colors duration-300 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {footerText.text[language]}
            </p>

            <div className="flex items-center gap-3 my-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
                className={`flex items-center gap-2 text-md font-light transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail size-5 text-inherit drop-shadow-xl stroke-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@onetag.uz</span>
              </a>
              <a
                href="tel:+998999178111"
                className={`flex items-center gap-2 text-md font-light transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone size-5 text-inherit drop-shadow-xl stroke-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+998999178111</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`relative group size-8 p-1.5 flex items-center justify-center rounded-[5px] transition-all duration-500 shadow-[inset_0_0_3px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.2)]
                    ${
                      theme === "dark"
                        ? "bg-[#1a1a1a] border border-white/10 hover:shadow-blue-500/50"
                        : "bg-white border border-gray-200 hover:shadow-blue-400/40"
                    }`}
                >
                  {/* <social.icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-blue-400"
                        : "text-gray-700 group-hover:text-blue-600"
                    }`}
                  /> */}
                  <span
                    className={`w-6 h-6 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-blue-400"
                        : "text-gray-700 group-hover:text-blue-600"
                    }`}
                  >
                    {social.icon}
                  </span>
                  <span
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 bg-linear-to-br
                      ${
                        theme === "dark"
                          ? "from-blue-500/20 to-purple-500/20"
                          : "from-blue-400/15 to-purple-400/15"
                      }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {/* {["product", "company", "legal"].map((section) => (
            <div key={section}>
              <motion.h3
                className={`font-medium mb-3 sm:mb-4 text-xl capitalize transition-colors ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {section}
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks[section].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 text-md font-light hover:border-b-2 hover:border-blue-500 ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}

          {["product", "company", "legal"].map((sectionKey) => {
            const section = footerLinks.find((s) => s.key === sectionKey);

            return (
              <div key={sectionKey}>
                <h3
                  className={`font-medium mb-3 sm:mb-4 text-xl capitalize transition-colors ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FadeAnimation>
                    {section?.translations[language].title}
                  </FadeAnimation>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section?.children.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={`/${link.key}`} // adjust href logic as needed
                        className={`transition-colors duration-300 text-md font-light hover:border-b-2 hover:border-blue-500 ${
                          theme === "dark"
                            ? "text-white/70 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {link.translations[language].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t pt-6 sm:pt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3 transition-colors ${
            theme === "dark" ? "border-white/10" : "border-blue-100"
          }`}
        >
          <p
            className={`text-sm sm:text-base font-light ${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {language === "en"
              ? `Copyright © ${new Date().getFullYear()} Onetag LLC. All rights
            reserved.`
              : language === "ru"
              ? `Авторские права © ${new Date().getFullYear()} Onetag ООО. Все права защищены.`
              : `Mualliflik huquqi © ${new Date().getFullYear()} Onetag MCHJ. Barcha huquqlar himoyalangan.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
