"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/language-context";
import EslBanner from "@/src/components/esl-components/EslBanner";
import EslVideoComponent from "@/src/components/esl-components/EslVideoComponent";
import EslVerticalTab from "@/src/components/esl-components/EslVerticalTab";
import EslCarousel from "@/src/components/esl-components/EslCarousel";
import EslHorizontalTab from "@/src/components/esl-components/EslhorizontalTab";

export default function ZkongShieldPage() {
  const { language } = useLanguage?.() ?? { language: "en" };

  /* ---------------- Dummy Data ---------------- */
  // const hero = {
  //     title: "Valley Series ESL",
  //     subtitle1:
  //       "ZKONG Valley lightweight grocery store shelf labels revolutionize retail with sleek, wireless design, offering real-time pricing updates and seamless integration for enhanced shopping efficiency and experience.",
  //     subtitle2:
  //       "Upgrade to ZKONG Valley ESLs and experience the future of grocery retail today!",
  //     cta: "Contact Us",
  // };

const hero = {
  en: {
    title: "Valley Series ESL",
    subtitle1:
      "ZKONG Valley lightweight grocery store shelf labels revolutionize retail with sleek, wireless design, offering real-time pricing updates and seamless integration for enhanced shopping efficiency and experience.",
    subtitle2:
      "Upgrade to ZKONG Valley ESLs and experience the future of grocery retail today!",
    cta: "Contact Us",
  },
  ru: {
    title: "Серия Valley ESL",
    subtitle1:
      "Легкие электронные ценники ZKONG Valley для продуктовых магазинов совершают революцию в розничной торговле благодаря элегантному беспроводному дизайну, предлагая обновления цен в режиме реального времени и бесшовную интеграцию для повышения эффективности и удобства покупок.",
    subtitle2:
      "Перейдите на ZKONG Valley ESL и ощутите будущее розничной торговли продуктами питания уже сегодня!",
    cta: "Связаться с нами",
  },
  uz: {
    title: "Valley Series ESL",
    subtitle1:
      "ZKONG Valley yengil oziq-ovqat do'koni tokcha yorliqlari nafis, simsiz dizayni bilan chakana savdoni inqilob qiladi, real vaqt rejimida narxlarni yangilashni va xarid qilish samaradorligi va tajribasini oshirish uchun uzluksiz integratsiyani taklif etadi.",
    subtitle2:
      "ZKONG Valley ESLlarga o'ting va oziq-ovqat chakana savdosining kelajagini bugunoq his qiling!",
    cta: "Biz bilan bog'laning",
  },
};

  // video
  // const video = {
  //   videoId: "XaCATK6Cr9o?si=4LUhFvz9wzzTcnRn",
  //     title: "ZKONG Shield Series",
  //     description: "Robust & Digital Retail Labels",
  // };
const video = {
  videoId: "VnaUfFhQWZY?si=G5kl8mQejs4VkiAR",
  en: {
    title: "ZKONG Valley Series",
    description: "Ideal Tag Series for Grocery Stores",
  },
  ru: {
    title: "Серия ZKONG Valley",
    description: "Идеальная серия ценников для продуктовых магазинов",
  },
  uz: {
    title: "ZKONG Valley seriyasi",
    description: "Oziq-ovqat do'konlari uchun ideal yorliq seriyasi",
  },
};

  // Section 3: horizontal tabs (models) - hover & click

  const modalSection = {
  en: {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title: "ZKC15S-E4 | 1.54 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "44.5*35.9*13.7mm" },
          { k: "Screen", v: "27*27mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title: "ZKC21S-E4 | 2.13 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "70*36*14.3mm" },
          { k: "Screen", v: "48.6*23.7mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title: "ZK21SF | 2.13 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "70*36*14.3mm" },
          { k: "Screen", v: "48.6*23.7mm" },
          { k: "Operate temperature", v: "-25°~25℃" },
          { k: "Battery", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title: "ZKC26S-E4 | 2.66 ″ Screen Retail Store Shelf Labels",
        desc: "",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "83*41*14.3mm" },
          { k: "Screen", v: "60.1*30.7mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title: "ZK26SF | 2.66 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "83*41*14.3mm" },
          { k: "Screen", v: "60.1*30.7mm" },
          { k: "Operate temperature", v: "-25~25℃" },
          { k: "Battery", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title: "ZKC29S-E4 | 2.9 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "90.41*41*14.3mm" },
          { k: "Screen", v: "66.9*29.1mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title: "ZKC37S-E4 | 3.7 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "104*56.4*11.2mm" },
          { k: "Screen", v: "81.54*47.04mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
    ],
  },
  ru: {
    title: "Модели цифровых розничных ценников ZKONG Shield",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title: "ZKC15S-E4 | 1.54 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "44.5*35.9*13.7mm" },
          { k: "Экран", v: "27*27mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title: "ZKC21S-E4 | 2.13 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "70*36*14.3mm" },
          { k: "Экран", v: "48.6*23.7mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title: "ZK21SF | 2.13 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "70*36*14.3mm" },
          { k: "Экран", v: "48.6*23.7mm" },
          { k: "Рабочая температура", v: "-25°~25℃" },
          { k: "Батарея", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title: "ZKC26S-E4 | 2.66 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "83*41*14.3mm" },
          { k: "Экран", v: "60.1*30.7mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title: "ZK26SF | 2.66 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "83*41*14.3mm" },
          { k: "Экран", v: "60.1*30.7mm" },
          { k: "Рабочая температура", v: "-25~25℃" },
          { k: "Батарея", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title: "ZKC29S-E4 | 2.9 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "90.41*41*14.3mm" },
          { k: "Экран", v: "66.9*29.1mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title: "ZKC37S-E4 | 3.7 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "104*56.4*11.2mm" },
          { k: "Экран", v: "81.54*47.04mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
    ],
  },
  uz: {
    title: "ZKONG Shield Raqamli Chakana Narx Yorliqlarining Modellar",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title: "ZKC15S-E4 | 1.54 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "44.5*35.9*13.7mm" },
          { k: "Ekran", v: "27*27mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title: "ZKC21S-E4 | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "70*36*14.3mm" },
          { k: "Ekran", v: "48.6*23.7mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title: "ZK21SF | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "70*36*14.3mm" },
          { k: "Ekran", v: "48.6*23.7mm" },
          { k: "Ishlash harorati", v: "-25°~25℃" },
          { k: "Batareya", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title: "ZKC26S-E4 | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "83*41*14.3mm" },
          { k: "Ekran", v: "60.1*30.7mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title: "ZK26SF | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "83*41*14.3mm" },
          { k: "Ekran", v: "60.1*30.7mm" },
          { k: "Ishlash harorati", v: "-25~25℃" },
          { k: "Batareya", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title: "ZKC29S-E4 | 2.9 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "90.41*41*14.3mm" },
          { k: "Ekran", v: "66.9*29.1mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title: "ZKC37S-E4 | 3.7 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "104*56.4*11.2mm" },
          { k: "Ekran", v: "81.54*47.04mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
    ],
  },
};

  // {
  //   id: "m",
  //   name: '',
  //   title: ``,
  //   desc: ``,
  //   img: "/ESL/Shield/.gif",
  //   ind: {
  //     nfc: true,
  //     remove: true,
  //     led: true
  //   },
  //   specs: [
  //     { k: "Size", v: "70*36*14.3mm" },
  //     { k: "Screen", v: "48.6*23.7mm" },
  //     { k: "Operate temperature", v: "0~40℃" },
  //     { k: "Battery", v: "1200mAh" },
  //   ],
  // },


  // Section 4: vertical tabs (features)

  const featuresSection = {
  en: {
    title: "Features of ZKONG Shield Retail Electronic Shelf Labels",
    features: [
      {
        id: "f1",
        title: "Robust Durability",
        body: "ZKONG Shield Retail Electronic Shelf Labels are designed with a focus on durability to withstand the demanding conditions of a retail environment. These electronic shelf labels are encased in a protective shield that guards against dust, moisture, and the wear and tear that comes from frequent handling by customers and staff. This robust construction ensures that the labels remain functional and legible for a longer period, reducing the need for frequent replacements and maintenance.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Advanced Connectivity",
        body: "A standout feature of the ZKONG Shield Electronic Retail Price Tags is their advanced connectivity capabilities. Utilizing the latest in wireless communication technology, these e-ink retail shelf tags can quickly and reliably receive updates from the store’s central management system. This ensures that pricing and product information displayed is always current, enhancing the shopping experience for customers and streamlining operations for the retailer.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Energy-Efficient Operation",
        body: "Energy efficiency is a key consideration in the design of the ZKONG Shield Electronic Retail Price Tags. By employing e-ink display technology, these retail shelf tags consume power only when updating information, significantly extending the battery life.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
  ru: {
    title: "Особенности электронных ценников ZKONG Shield для розничной торговли",
    features: [
      {
        id: "f1",
        title: "Повышенная долговечность",
        body: "Электронные ценники ZKONG Shield разработаны с акцентом на долговечность, чтобы выдерживать сложные условия розничной среды. Эти электронные ценники заключены в защитный экран, который защищает от пыли, влаги и износа, возникающего при частом обращении со стороны покупателей и персонала. Эта прочная конструкция гарантирует, что ценники остаются функциональными и разборчивыми в течение более длительного периода, уменьшая потребность в частой замене и обслуживании.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Расширенные возможности подключения",
        body: "Отличительной особенностью электронных розничных ценников ZKONG Shield являются их расширенные возможности подключения. Используя новейшие технологии беспроводной связи, эти розничные ценники на электронных чернилах могут быстро и надежно получать обновления из центральной системы управления магазина. Это гарантирует, что отображаемая информация о ценах и продуктах всегда актуальна, что улучшает качество покупок для клиентов и оптимизирует операции для розничного продавца.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Энергоэффективная работа",
        body: "Энергоэффективность является ключевым фактором при разработке электронных розничных ценников ZKONG Shield. Благодаря использованию технологии e-ink дисплея, эти розничные ценники потребляют электроэнергию только при обновлении информации, что значительно продлевает срок службы батареи.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
  uz: {
    title: "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarining Xususiyatlari",
    features: [
      {
        id: "f1",
        title: "Mustahkam Chidamlilik",
        body: "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlari chakana savdo muhitining og'ir sharoitlariga bardosh berish uchun chidamlilikka e'tibor qaratilgan holda ishlab chiqilgan. Ushbu elektron tokcha yorliqlari chang, namlik va mijozlar hamda xodimlar tomonidan tez-tez ishlatilishidan kelib chiqadigan eskirishdan himoya qiluvchi himoya qalqoni bilan qoplangan. Bu mustahkam konstruktsiya yorliqlarning uzoqroq vaqt davomida funktsional va o'qilishi mumkinligini ta'minlaydi, bu esa tez-tez almashtirish va texnik xizmat ko'rsatish zaruratini kamaytiradi.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Kengaytirilgan Ulanish",
        body: "ZKONG Shield Elektron Chakana Narx Yorliqlarining ajralib turadigan xususiyati ularning ilg'or ulanish imkoniyatlaridir. Simsiz aloqa texnologiyasidagi eng so'nggi yutuqlardan foydalangan holda, bu e-ink chakana tokcha yorliqlari do'konning markaziy boshqaruv tizimidan yangilanishlarni tez va ishonchli tarzda qabul qila oladi. Bu aks ettirilgan narxlar va mahsulot ma'lumotlari har doim dolzarb bo'lishini ta'minlaydi, mijozlar uchun xarid qilish tajribasini oshiradi va chakana sotuvchi uchun operatsiyalarni tartibga soladi.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Energiya-Tejamkor Ishlash",
        body: "Energiya samaradorligi ZKONG Shield Elektron Chakana Narx Yorliqlari dizaynida asosiy e'tibor hisoblanadi. E-ink displey texnologiyasini qo'llash orqali bu chakana tokcha yorliqlari faqat ma'lumotlarni yangilashda quvvat sarflaydi, bu esa batareyaning ishlash muddatini sezilarli darajada uzaytiradi.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
};


// Section 5 

const textImageSection = {
  en: {
    title:
      "What Makes ZKONG Shield Retail Electronic Shelf Labels Different from Other Retail ESLs?",
    subData: [
      {
        title: "Robust Durability",
        desc: "One of the primary features that differentiate ZKONG Shield Retail Electronic Shelf Labels is their exceptional durability. Designed to endure the challenging conditions of retail settings, these digital retail price tags are equipped with a protective casing that shields them from dust, moisture, and physical damage. This level of protection ensures that the labels remain operational and maintain their visual clarity even after being handled by numerous customers and staff, or exposed to less-than-ideal environmental conditions. The durability of ZKONG Shield Retail Electronic Shelf Labels translates into lower maintenance costs and a longer lifespan, offering a more reliable and cost-effective solution for retailers.",
      },
      {
        title: "Advanced Connectivity",
        desc: "Another standout feature of ZKONG Shield Retail Electronic Shelf Labels is their advanced connectivity. Utilizing state-of-the-art wireless communication technology, these labels can seamlessly connect to a store’s central management system, enabling real-time updates of product information, pricing, and promotions. This capability ensures that the information displayed is always accurate and up-to-date, which is crucial for maintaining customer trust and satisfaction. The ease of integration with existing retail management systems further enhances the appeal of ZKONG Shield Retail Electronic Shelf Labels, making them a versatile choice for a wide range of retail applications.",
      },
      {
        title: "Energy-Efficient Operation",
        desc: "Energy efficiency is a critical consideration in today’s retail environment, and ZKONG Shield Retail Electronic Shelf Labels excel in this area as well. By employing e-ink display technology, these labels consume power only when updating information, significantly reducing energy usage compared to traditional electronic displays. The extended battery life not only lowers operational costs by minimizing the need for frequent battery replacements but also aligns with sustainability goals by reducing the environmental impact associated with energy consumption and electronic waste.",
      },
    ],
  },
  ru: {
    title:
      "Чем электронные ценники ZKONG Shield для розничной торговли отличаются от других розничных ESL?",
    subData: [
      {
        title: "Повышенная долговечность",
        desc: "Одной из основных особенностей, отличающих электронные ценники ZKONG Shield, является их исключительная долговечность. Разработанные для работы в сложных условиях розничной торговли, эти цифровые розничные ценники оснащены защитным корпусом, который защищает их от пыли, влаги и физических повреждений. Этот уровень защиты гарантирует, что ценники остаются работоспособными и сохраняют свою визуальную четкость даже после обращения с ними многочисленными покупателями и персоналом, или воздействия не самых идеальных условий окружающей среды. Долговечность электронных ценников ZKONG Shield означает более низкие расходы на обслуживание и более длительный срок службы, предлагая более надежное и экономичное решение для розничных продавцов.",
      },
      {
        title: "Расширенные возможности подключения",
        desc: "Еще одной отличительной особенностью электронных ценников ZKONG Shield является их расширенные возможности подключения. Используя самые современные технологии беспроводной связи, эти ценники могут беспрепятственно подключаться к центральной системе управления магазина, обеспечивая обновление информации о продуктах, ценах и рекламных акциях в режиме реального времени. Эта возможность гарантирует, что отображаемая информация всегда точна и актуальна, что имеет решающее значение для поддержания доверия и удовлетворенности клиентов. Простота интеграции с существующими системами управления розничной торговлей еще больше повышает привлекательность электронных ценников ZKONG Shield, делая их универсальным выбором для широкого спектра розничных применений.",
      },
      {
        title: "Энергоэффективная работа",
        desc: "Энергоэффективность является критически важным фактором в сегодняшней розничной среде, и электронные ценники ZKONG Shield превосходно справляются с этой задачей. Благодаря использованию технологии e-ink дисплея, эти ценники потребляют электроэнергию только при обновлении информации, значительно снижая энергопотребление по сравнению с традиционными электронными дисплеями. Увеличенный срок службы батареи не только снижает эксплуатационные расходы за счет минимизации необходимости частой замены батарей, но и соответствует целям устойчивого развития за счет снижения воздействия на окружающую среду, связанного с потреблением энергии и электронными отходами.",
      },
    ],
  },
  uz: {
    title:
      "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarini Boshqa Chakana ESLlardan Nima Ajratib Turadi?",
    subData: [
      {
        title: "Mustahkam Chidamlilik",
        desc: "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarini ajratib turuvchi asosiy xususiyatlardan biri ularning favqulodda chidamliligidir. Chakana savdo sharoitlarining qiyin sharoitlariga bardosh berish uchun mo'ljallangan ushbu raqamli chakana narx yorliqlari ularni chang, namlik va jismoniy shikastlanishdan himoya qiluvchi himoya korpusi bilan jihozlangan. Ushbu himoya darajasi yorliqlarning ko'plab mijozlar va xodimlar tomonidan ishlatilishidan keyin ham, yoki ideal bo'lmagan atrof-muhit sharoitlariga duchor bo'lganidan keyin ham ishlashda davom etishini va vizual ravshanligini saqlab qolishini ta'minlaydi. ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarining chidamliligi chakana sotuvchilar uchun ishonchliroq va tejamkor yechimni taklif qilib, texnik xizmat ko'rsatish xarajatlarini kamaytiradi va xizmat muddatini uzaytiradi.",
      },
      {
        title: "Kengaytirilgan Ulanish",
        desc: "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarining yana bir ajralib turadigan xususiyati ularning ilg'or ulanishidir. Eng zamonaviy simsiz aloqa texnologiyasidan foydalangan holda, bu yorliqlar do'konning markaziy boshqaruv tizimiga muammosiz ulanishi mumkin, bu esa mahsulot ma'lumotlari, narxlari va aktsiyalarning real vaqtda yangilanishini ta'minlaydi. Ushbu imkoniyat aks ettirilgan ma'lumotlarning har doim aniq va dolzarb bo'lishini ta'minlaydi, bu esa mijozlarning ishonchi va qoniqishini saqlash uchun juda muhimdir. Mavjud chakana savdo boshqaruv tizimlari bilan integratsiyalashuv qulayligi ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlarining jozibadorligini yanada oshiradi, bu ularni chakana savdo dasturlarining keng doirasi uchun universal tanlovga aylantiradi.",
      },
      {
        title: "Energiya-Tejamkor Ishlash",
        desc: "Energiya samaradorligi bugungi chakana savdo muhitida muhim ahamiyatga ega va ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlari ham bu sohada ustundir. E-ink displey texnologiyasini qo'llash orqali, bu yorliqlar faqat ma'lumotlarni yangilashda quvvat sarflaydi, an'anaviy elektron displeylarga nisbatan energiya sarfini sezilarli darajada kamaytiradi. Batareyaning uzaytirilgan ishlash muddati nafaqat tez-tez batareyani almashtirish zaruratini minimallashtirish orqali operatsion xarajatlarni kamaytiradi, balki energiya iste'moli va elektron chiqindilar bilan bog'liq atrof-muhitga ta'sirni kamaytirish orqali barqarorlik maqsadlariga ham mos keladi.",
      },
    ],
  },
};

  // Section Carousel

const carouselData = {
  en: {
    title: "Usage Scenario of ZKONG Valley Lightweight Store Shelf Labels",
    desc: "For boutique stores or pop-up shops with limited space and a need for flexible, easy-to-update pricing solutions, ZKONG Valley Lightweight Store Shelf Labels provide an ideal solution. Their lightweight design and wireless update capability make them perfect for dynamic retail environments where product placements and promotions change frequently, ensuring that customers always have access to the most current information.",
    imageData: [
      {
        name: "buffet",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "fresh food",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "pharmacy",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "supermarket",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "smart office",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "cosmetics",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "electronic",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
    ],
  },
  ru: {
    title: "Сценарий использования легких магазинных ценников ZKONG Valley",
    desc: "Для бутиков или временных магазинов с ограниченным пространством и потребностью в гибких, легко обновляемых ценовых решениях легкие магазинные ценники ZKONG Valley являются идеальным решением. Их легкий дизайн и возможность беспроводного обновления делают их идеальными для динамичных розничных сред, где размещение продуктов и рекламные акции часто меняются, гарантируя, что клиенты всегда имеют доступ к самой актуальной информации.",
    imageData: [
      {
        name: "буфет",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "свежие продукты",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "аптека",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "супермаркет",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "умный офис",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "косметика",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "электроника",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
    ],
  },
  uz: {
    title: "ZKONG Valley Yengil Do'kon Tokcha Yorliqlaridan Foydalanish Senariysi",
    desc: "Cheklangan joyga ega bo'lgan va moslashuvchan, osongina yangilanadigan narxlash yechimlariga ehtiyoj sezadigan butik do'konlar yoki pop-up do'konlar uchun ZKONG Valley Yengil Do'kon Tokcha Yorliqlari ideal yechim hisoblanadi. Ularning yengil dizayni va simsiz yangilash imkoniyati mahsulot joylashuvlari va aksiyalari tez-tez o'zgarib turadigan dinamik chakana savdo muhiti uchun mukammaldir, bu esa mijozlarning har doim eng dolzarb ma'lumotlarga ega bo'lishini ta'minlaydi.",
    imageData: [
      {
        name: "bufet",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "yangi oziq-ovqat",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "dorixona",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "supermarket",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "aqlli ofis",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "kosmetika",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
      {
        name: "elektronika",
        src: "/medium-electronic-price-tag-modern-retail-display.jpg",
      },
    ],
  },
};


  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <EslBanner hero={hero[language]} />
      <EslVideoComponent videoData={video[language]} videoId="XaCATK6Cr9o?si=4LUhFvz9wzzTcnRn" />
      <EslHorizontalTab sectionData={modalSection[language]} />
      <EslVerticalTab featureData={featuresSection[language]} /> */}

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                {textImageSection[language].title}
              </h2>

              {textImageSection[language].subData.map((data, index)=>(
                <div key={index} className="mt-5">
                  <h3 className="text-gray-600 dark:text-gray-300 font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{data.desc}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-64 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src="/placeholders/left-right.jpg"
                alt="shelf"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* <EslCarousel carouselData={carouselData[language]} /> */}
    </div>
  );
}

{/* <section className="max-w-7xl mx-auto px-6 py-12">
  <div className="container mx-auto px-4 max-w-7xl relative">
    <h2 className="text-2xl font-semibold text-center mb-6">
      {cardsSection.title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {threeCards.map((c) => (
        <div
          key={c.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
        >
          <div className="text-3xl">{c.icon}</div>
          <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section> */}