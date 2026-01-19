"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "uz" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "main.title": "Onetag Smart Solutions – ESL & Retail Automation",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.electronicShelfLabels": "Electronic Shelf Labels",
    "nav.ESLCloudPlatform": "Cloud Platform",
    "nav.eslAccessories": "ESL Accessories",
    "nav.cases": "Cases",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "hero.badge": "Introducing Smart Retail Technology",
    "hero.title.line1":
      "Smart Electronic Shelf Labels for Your Business and Retail Automation.",
    "hero.title.line2": "for Your Business and Retail Automation.",
    "hero.moreInfo": "More info",
    "hero.description":
      "Transform your retail operations with Bluetooth and Wi-Fi powered smart price tags. Real-time updates, zero errors, maximum efficiency.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Explore Solutions",
    ElectronicShelfLabel: `An electronic shelf label (ESL) is an electronic display device placed on the shelf edge to replace
traditional paper price tags.
Each electronic shelf label is connected to the merchant’s computer database through a wireless
network and displays the latest price information of the items accurately in real time.`,
    CuttingEdge: `Cutting-edge technlogy for retail`,
    PoweredCloud: `Powered by Cloud & IoT`,
    WhyUs: `Why Choose Onetag`,
    WhyUsText: `Everything you need to modernize your retail pricing.`,
    BrandsHeading: `Brands We Collaborate With`,
    BrandsHeadingText: `Drive store operation development by cutting-edge technology, superior products and perfect services have brought us numerous commendations.`,
    BrandsSubHeading: `Trusted by leading brands worldwide`,
    "1": ``,
  },
  uz: {
    "main.title": "Onetag – Aqlli narx belgilar va savdo avtomatizatsiyasi",
    "nav.home": "Bosh sahifa",
    "nav.solutions": "Yechimlar",
    "nav.electronicShelfLabels": "Elektron narx yorliqlari (ESL)",
    "nav.ESLCloudPlatform": "Bulutli platforma",
    "nav.eslAccessories": "ESL aksessuarlari",
    "nav.cases": "Misollar",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "hero.badge": "Aqlli savdo texnologiyasini taqdim etamiz",
    "hero.title.line1":
      "Aqlli elektron narx belgilar va avtomatlashtirilgan savdo.",
    "hero.title.line2": "Sizning biznesingiz uchun.",
    "hero.moreInfo": "Batafsil ma’lumot",
    "hero.description":
      "Bluetooth va Wi-Fi bilan ishlaydigan aqlli narx teglari bilan savdo operatsiyalaringizni o'zgartiring. Real vaqtda yangilanishlar, xatolar yo'q, maksimal samaradorlik.",
    "hero.cta.primary": "Boshlash",
    "hero.cta.secondary": "Yechimlarni ko'rish",
    ElectronicShelfLabel: `Elektron narx belgisi — bu peshtaxta chetiga o‘rnatiladigan va an’anaviy qog‘oz narx belgilarini
almashtiradigan elektron displey qurilmasidir.
Har bir elektron narx belgisi sotuvchining kompyuter bazasiga simli bo‘lmagan tarmoq orqali ulanadi
va tovarlarning eng so‘nggi narxlarini real vaqt rejimida ko‘rsatadi.`,
    CuttingEdge: `Chakana savdo uchun ilg‘or texnologiyalar`,
    PoweredCloud: `Cloud va IoT asosida ishlaydi`,
    WhyUs: `Nega aynan Onetag`,
    WhyUsText: `Chakana savdo narxlarini zamonaviylashtirish uchun kerak bo‘lgan hamma narsa.`,
    ourProduct: `Mahsulotlarimiz liniyasi`,
    BrandsHeading: `Hamkorlik qiladigan brendlarimiz`,
    BrandsHeadingText: `Do‘kon faoliyatini ilg‘or texnologiyalar, yuqori sifatli mahsulotlar va mukammal xizmatlar
orqali rivojlantirish bizga ko‘plab tavsiyalarni olib keldi.
`,
    BrandsSubHeading: `Dunyoning yetakchi brendlari tomonidan ishonch bildirgan`,
    "1": ``,
  },
  ru: {
    "main.title": "Onetag – Умные ценники и автоматизация торговли",
    "nav.home": "Главная",
    "nav.solutions": "Решения",
    "nav.electronicShelfLabels": "Электронные ценники",
    "nav.ESLCloudPlatform": "Облачная платформа",
    "nav.eslAccessories": "Аксессуары для ESL",
    "nav.cases": "Кейсы",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "hero.badge": "Представляем технологию умной розничной торговли",
    "hero.title.line1":
      "Умные электронные ценники для вашего бизнеса и автоматизации розницы.",
    "hero.title.line2": "для вашего бизнеса и автоматизации розницы.",
    "hero.moreInfo": "Подробнее",
    "hero.description":
      "Трансформируйте свои розничные операции с помощью умных ценников на базе Bluetooth и Wi-Fi. Обновления в реальном времени, нулевые ошибки, максимальная эффективность.",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "Изучить решения",
    ElectronicShelfLabel: `Электронный ценник — это электронное дисплейное устройство, которое устанавливается на
кромку полки и заменяет традиционные бумажные ценники.
Каждая электронная ценник-табличка подключена к компьютерной базе данных продавца
через беспроводную сеть и отображает актуальную информацию о ценах на товары в режиме
реального времени.`,
    CuttingEdge: `Передовые технологии для розницы
`,
    PoweredCloud: `Работает на базе облачных и IoT-решений
`,
    WhyUs: `Почему выбирают Onetag`,
    WhyUsText: `Всё, что нужно для модернизации цен в вашем розничном бизнесе.`,
    ourProduct: `Наша линейка продуктов`,
    ourProductText: `Выберите идеальный умный ценник для нужд вашего магазина.`,
    BrandsHeading: `Бренды, с которыми мы сотрудничаем`,
    BrandsHeadingText: `Развитие работы магазинов с помощью передовых технологий, высококачественных
продуктов и безупречного сервиса принесло нам многочисленные рекомендации.
`,
    BrandsSubHeading: `Доверено ведущими брендами по всему миру`,
    "1": ``,
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "uz", "ru"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
