
// hero, videoData, eslFunctionSection, modalsSection, advantagesSection , whyChooseSection, gallerysection, carouselData

import { Factory, Headphones, Users, Wrench } from "lucide-react";

export const hero = {
  en: {
    title: "Advanced Electronic Shelf Labels",
    // subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    // cta: "Contact Us",
  },
  ru: {
    title: "Продвинутые электронные ценники",
    // subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    // cta: "Связаться с нами",
  },
  uz: {
    title: "Rivojlangan elektron narx yorliqlari",
    // subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    // cta: "Biz bilan bog'laning",
  },
};

export const videoData = {
  en: {
    title: "Electronic Shelf Label Technology",
    description:
      " The new generation of electronic shelf label system, applying the technology of ZKONG ESL Communication, Wi-Fi and IoT system, enable stores to achieve all digital functions without installing servers.",
    // cta: "Get More Info",
  },
  ru: {
    title: "Технология электронных ценников",
    description:
      "Новое поколение системы электронных ценников, использующее технологию ZKONG ESL, Wi-Fi и IoT, позволяет магазинам реализовать все цифровые функции без установки локальных серверов.",
    // cta: "Get More Info",
  },
  uz: {
    title: "Elektron narx yorlig‘i texnologiyasi",
    description:
      "ZKONG ESL, Wi-Fi va IoT texnologiyalariga asoslangan yangi avlod elektron narx yorlig‘i tizimi do‘konlarga mahalliy serverlarni o‘rnatmasdan barcha raqamli funksiyalarni amalga oshirish imkonini beradi.",
    // cta: "Get More Info",
  },
};

export const eslFunctionSection = {
  en: {
    title: "Electronic Shelf Label Features",
    data1: [
      {
        id: "f1",
        title: "Change Page Automatically",
        body: "The ESL automatically and regularly switches pages and displays promotional content to support daily marketing activities, especially in cases of frequent price changes.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Advertising	",
        body: " Install large-size electronic shelf labels in shelves, central areas and entrances to ensure the coverage and exposure of brand advertising in shops.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Update Stock Automatically",
        body: "The inventory data on the electronic shelf label screen will be updated simultaneously with the inventory system when the user's management system is connected to the cloud system.",
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Out of Stock Alert",
        body: " When the number of products on the shelf is lower than the set quantity, the LED lights on the electronic shelf label will flash to inform the staff.",
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Product Positioning",
        body: "The LED on the ESL will flash to provide the product position and a product picking route for staff.",
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Shopping Navigation",
        body: "When consumers click the product in the app, the app will provide the best route from the consumer’s current location to the selected product.",
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Consumer Interaction",
        body: "Customers can easily enter the online store and leave comments in the app by scanning the QR code on the electronic shelf label or by bringing their smartphone close to the ESL.",
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Display Management",
        body: "Combine the cloud with the shelf system to help staff manage product displays in a quick, efficient, and standardized way.",
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: "Brand Upgrading",
        body: " The electronic shelf label improves the overall visual impact of the store, which also enhances the brand image.",
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
  uz: {
    title: "Elektron narx yorliqlarining imkoniyatlari",
    data1: [
      {
        id: "f1",
        title: "Sahifani avtomatik almashtirish",
        body: "Elektron narx yorliqlari sahifalarni avtomatik va muntazam ravishda almashtirib, reklama kontentini namoyish etadi. Bu kundalik marketing faoliyatini qo‘llab-quvvatlaydi, ayniqsa narxlar tez-tez o‘zgaradigan holatlarda.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Reklama",
        body: "Do‘konlarda brend reklamalarining keng qamrovini va yuqori ko‘rinishini ta’minlash uchun katta o‘lchamdagi elektron narx yorliqlarini javonlarga, markaziy hududlarga va kirish joylariga o‘rnating.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Zaxirani avtomatik yangilash",
        body: "Foydalanuvchi boshqaruv tizimi bulut tizimiga ulanganida, elektron narx yorlig‘i ekranidagi zaxira ma’lumotlari inventar tizimi bilan bir vaqtda avtomatik yangilanadi.",
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Tovar tugashi haqida ogohlantirish",
        body: "Agar polkadagi mahsulotlar soni belgilangan miqdordan kamaysa, elektron narx yorlig‘idagi LED chiroqlar xodimlarni ogohlantirish uchun yonib-o‘chadi.",
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Mahsulot joylashuvini aniqlash",
        body: `Elektron narx yorlig‘idagi LED chiroq mahsulot joylashuvini va xodimlar uchun
mahsulotni topish yo‘nalishini ko‘rsatish uchun yonib-o‘chadi.
`,
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Xaridlar bo‘yicha navigatsiya",
        body: `Mijoz ilovada mahsulotni tanlaganda, ilova mijozning joriy joylashuvdan kerakli
mahsulotgacha eng qulay yo‘lni ko‘rsatib beradi.`,
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Mijozlar bilan o‘zaro aloqalar",
        body: `Xaridorlar elektron narx yorlig‘idagi QR-kodni skanerlab yoki smartfonni ESL
qurilmasiga yaqin tutib, onlayn do‘konga kirishlari va ilovada fikr-mulohaza qoldirishlari
mumkin.`,
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Tovarlarni joylashtirishni boshqarish",
        body: `Bulut tizimini savdo stendlari bilan birlashtirish orqali xodimlar mahsulotlarni tez,
samarali va standart usulda joylashtirishni boshqarishi mumkin.
`,
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: "Brendni yangilash",
        body: `Elektron narx yorliqlari do‘konning umumiy vizual ko‘rinishini yaxshilaydi va brend
imidjini mustahkamlaydi.`,
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
  ru: {
    title: "Возможности электронных ценников",
    data1: [
      {
        id: "f1",
        title: " Автоматическая смена страниц",
        body: "Электронные ценники автоматически и регулярно переключают страницы и отображают рекламный контент, поддерживая ежедневные маркетинговые активности, особенно при частых изменениях цен.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Реклама",
        body: " Устанавливайте крупные электронные ценники на полках, в центральных зонах и у входов, чтобы обеспечить широкое покрытие и высокую видимость брендовой рекламы в магазинах.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Автоматическое обновление остатков",
        body: ` Данные об остатках на экранах электронных ценников будут автоматически
обновляться одновременно с системой инвентаризации при подключении системы
управления пользователя к облачной системе.
`,
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Оповещение об отсутствии товара",
        body: `Когда количество товаров на полке становится ниже установленного уровня,
светодиоды на электронных ценниках начинают мигать, уведомляя сотрудников.`,
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Определение расположения товара",
        body: ` Светодиод на электронном ценнике будет мигать, указывая точное
расположение товара и маршрут его подбора для сотрудников.
`,
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Навигация по покупка",
        body: ` Когда покупатель выбирает товар в приложении, система прокладывает
оптимальный маршрут от текущего местоположения покупателя до выбранного
товара.`,
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Взаимодействие с покупателями",
        body: `Покупатели могут легко зайти в онлайн-магазин и оставлять комментарии в
приложении, отсканировав QR-код на электронном ценнике или поднеся смартфон к
ESL-устройству.
`,
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Управление выкладкой товара",
        body: `Интеграция облачной системы с торговыми стеллажами помогает персоналу
быстро, эффективно и стандартизированно управлять выкладкой товаров.`,
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: " Улучшение бренда",
        body: `Электронные ценники улучшают общий визуальный облик магазина, что также
усиливает имидж бренда.`,
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
};

export const modalsSection = {
  en: {
    title: "Electronic Shelf Labels Lineup",
    allModels: [
      {
        name: "Shield",
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
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "27*27mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "36.06*27.05mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Screen",
                v: "48.55*23.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "83*41*12.1mm",
              },
              {
                k: "Screen",
                v: "60.09*30.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "90*41*12.1mm",
              },
              {
                k: "Screen",
                v: "66.9*29.1mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Screen",
                v: "81.54*47.04mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Screen",
                v: "84.8*63.6mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "135.4*110*9mm",
              },
              {
                k: "Screen",
                v: "118.8*88.2mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5″ Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Screen",
                v: "163.2*97.9mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
  uz: {
    title: "Elektron narx yorliqlari liniyasi",
    allModels: [
      {
        name: "Shield",
        models: [
          {
            id: "m1",
            name: "ZKC15S-E4",
            title: "ZKC15S-E4 | 1.54″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Shield/ZKC15S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "44.5*35.9*13.7mm" },
              { k: "Ekran", v: "27*27mm" },
              { k: "Ishlash harorati", v: "0~40℃" },
              { k: "Batareya", v: "600mAh" },
            ],
          },
          {
            id: "m2",
            name: "ZKC21S-E4",
            title: "ZKC21S-E4 | 2.13″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Shield/ZKC21S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "70*36*14.3mm" },
              { k: "Ekran", v: "48.6*23.7mm" },
              { k: "Ishlash harorati", v: "0~40℃" },
              { k: "Batareya", v: "1200mAh" },
            ],
          },
          {
            id: "m3",
            name: "ZK21SF",
            title: "ZK21SF | 2.13″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq",
            img: "/ESL/Shield/ZK21SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "70*36*14.3mm" },
              { k: "Ekran", v: "48.6*23.7mm" },
              { k: "Ishlash harorati", v: "-25°~25℃" },
              { k: "Batareya", v: "1000mAh" },
            ],
          },
          {
            id: "m4",
            name: "ZKC26S-E4",
            title: "ZKC26S-E4 | 2.66″ ekranli chakana savdo narx yorliqlari",
            desc: "",
            img: "/ESL/Shield/ZKC26S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "83*41*14.3mm" },
              { k: "Ekran", v: "60.1*30.7mm" },
              { k: "Ishlash harorati", v: "0~40℃" },
              { k: "Batareya", v: "1200mAh" },
            ],
          },
          {
            id: "m5",
            name: "ZK26SF",
            title: "ZK26SF | 2.66″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq",
            img: "/ESL/Shield/ZK26SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "83*41*14.3mm" },
              { k: "Ekran", v: "60.1*30.7mm" },
              { k: "Ishlash harorati", v: "-25~25℃" },
              { k: "Batareya", v: "1000mAh" },
            ],
          },
          {
            id: "m6",
            name: "ZKC29S-E4",
            title: "ZKC29S-E4 | 2.9″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Shield/ZKC29S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "90.41*41*14.3mm" },
              { k: "Ekran", v: "66.9*29.1mm" },
              { k: "Ishlash harorati", v: "0~40℃" },
              { k: "Batareya", v: "1200mAh" },
            ],
          },
          {
            id: "m7",
            name: "ZKC37S-E4",
            title: "ZKC37S-E4 | 3.7″ ekranli chakana savdo narx yorliqlari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Shield/ZKC37S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "O‘lchami", v: "104*56.4*11.2mm" },
              { k: "Ekran", v: "81.54*47.04mm" },
              { k: "Ishlash harorati", v: "0~40℃" },
              { k: "Batareya", v: "1200mAh" },
            ],
          },
        ],
      },
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Ekran",
                v: "27*27mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Ekran",
                v: "36.06*27.05mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Ekran",
                v: "48.55*23.7mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "83*41*12.1mm",
              },
              {
                k: "Ekran",
                v: "60.09*30.7mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "90*41*12.1mm",
              },
              {
                k: "Ekran",
                v: "66.9*29.1mm",
              },
              {
                k: "Ishlash harorati",
                v: "0~40℃",
              },
              {
                k: "Batareya",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Ekran",
                v: "81.54*47.04mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Ekran",
                v: "84.8*63.6mm",
              },
              {
                k: "Ishlash harorati",
                v: "0~40℃",
              },
              {
                k: "Batareya",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "135.4*110*9mm",
              },
              {
                k: "Ekran",
                v: "118.8*88.2mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5″ Yengil elektron narx belgilari",
            desc: "Dot Matrix EPD Qora / Oq / Qizil (Sariq)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "O‘lchami",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Ekran",
                v: "163.2*97.9mm",
              },
              {
                k: "Ishlash harorati",
                v: "0°~40℃",
              },
              {
                k: "Batareya",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
  ru: {
    title: "Линейка электронных ценников",
    allModels: [
      {
        name: "Shield",
        models: [
          {
            id: "m1",
            name: "ZKC15S-E4",
            title: "ZKC15S-E4 | 1.54″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
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
            title: "ZKC21S-E4 | 2.13″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
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
            title: "ZK21SF | 2.13″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый",
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
            title: "ZKC26S-E4 | 2.66″ электронные ценники для магазинов",
            desc: "",
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
            title: "ZK26SF | 2.66″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый",
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
            title: "ZKC29S-E4 | 2.9″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
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
            title: "ZKC37S-E4 | 3.7″ электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
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
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Экран",
                v: "27*27mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Экран",
                v: "36.06*27.05mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Экран",
                v: "48.55*23.7mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "83*41*12.1mm",
              },
              {
                k: "Экран",
                v: "60.09*30.7mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "90*41*12.1mm",
              },
              {
                k: "Экран",
                v: "66.9*29.1mm",
              },
              {
                k: "Рабочая температура",
                v: "0~40℃",
              },
              {
                k: "Батарея",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Экран",
                v: "81.54*47.04mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Экран",
                v: "84.8*63.6mm",
              },
              {
                k: "Рабочая температура",
                v: "0~40℃",
              },
              {
                k: "Батарея",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8″ Лёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "135.4*110*9mm",
              },
              {
                k: "Экран",
                v: "118.8*88.2mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5″ SЛёгкие электронные ценники для магазинов",
            desc: "Dot Matrix EPD Черный / Белый / Красный (Жёлтый)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Размер",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Экран",
                v: "163.2*97.9mm",
              },
              {
                k: "Рабочая температура",
                v: "0°~40℃",
              },
              {
                k: "Батарея",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const advantagesSection = {
  en: {
    cards: [
      {
        id: 1,
        title: "Integration of Multiple Systems",
        description: `Electronic shelf labels can simply connect retailer's ERP or POS system for smarter store management.`,
      },
      {
        id: 2,
        title: "Smart Pricing, One-Click Updates",
        description: `One-click price changes — electronic shelf labels update in seconds, support bulk price changes, reduce human errors, and allow scheduled updates for promotional events.`,
      },
      {
        id: 3,
        title: "Superior Information Display Quality",
        description: `Multi-color E-Ink price tags and full-color LCD price tags provide a better, clearer, and more attractive way of displaying information in stores.`,
      },
      {
        id: 4,
        title: "Uniform Pricing for All Outlets",
        description: `Headquarters can centrally control pricing, assign permissions to different outlets, and manage product display and promotions across all stores`,
      },
      {
        id: 5,
        title: "Traffic Analytics for Collaborative Decision-Making",
        description: `Use millimeter-wave radars to accurately track daily visitor numbers. Generate regular reports to support effective marketing strategy planning.`,
      },
    ],
  },
  uz: {
    cards: [
      {
        id: 1,
        title: "Bir nechta tizimlarni integratsiya qilish",
        description: `Elektron narx yorliqlari do‘konning ERP yoki POS tizimiga oson ulanib, do‘kon boshqaruvini yanada aqlli qiladi`,
      },
      {
        id: 2,
        title: "Aqlli narxlash, bir bosishda yangilanish",
        description: `Bir bosishda narxlarni o‘zgartirish — elektron narx yorliqlari soniyalar ichida yangilanadi, ommaviy narx o‘zgarishlarini qo‘llab-quvvatlaydi va inson xatolarini kamaytiradi. Shuningdek, aksiyalar uchun rejalashtirilgan yangilash imkoniyati mavjud.
`,
      },
      {
        id: 3,
        title: "Axborotni ko‘rsatishning yuqori sifati",
        description: `Ko‘p rangli E-Ink narx yorliqlari va to‘liq rangli LCD narx yorliqlari do‘konlarda ma’lumotlarni yanada aniq, ravshan va jozibali tarzda ko‘rsatishni ta’minlaydi.`,
      },
      {
        id: 4,
        title: "Barcha filiallar uchun yagona narx siyosati",
        description: `Bosh ofis narxlarni markazlashgan holda boshqarishi, turli filiallarga ruxsatlarni taqsimlashi hamda barcha do‘konlarda mahsulot joylashuvi va aksiyalarni nazorat qilishi mumkin.`,
      },
      {
        id: 5,
        title: "Hamkorlikda qaror qabul qilish uchun trafik tahlili",
        description: `Millimetr-to‘lqinli radarlar yordamida har kuni do‘konga kiruvchi mijozlar sonini aniq kuzatish mumkin. Doimiy hisobotlar marketing strategiyalarini samarali rejalashtirishga yordam beradi.`,
      },
    ],
  },
  ru: {
    cards: [
      {
        id: 1,
        title: "Интеграция нескольких систем",
        description: `Электронные ценники легко подключаются к ERP- или POS-системе ритейлера для более умного управления магазином.`,
      },
      {
        id: 2,
        title: "Умное ценообразование, обновление в один клик",
        description: `секунды, поддерживается массовое изменение цен, что снижает риск человеческих ошибок. Также доступны запланированные обновления для промо-акций.`,
      },
      {
        id: 3,
        title: "Высокое качество отображения информации",
        description: `Многоцветные E-Ink ценники и полноцветные LCD ценники обеспечивают более чёткий, наглядный и привлекательный способ отображения информации в магазине.
`,
      },
      {
        id: 4,
        title: "Единые цены для всех магазинов",
        description: `Головной офис может централизованно управлять ценами, назначать права доступа для разных магазинов, а также контролировать выкладку товаров и промо-акции во всех точках.`,
      },
      {
        id: 5,
        title: "Аналитика трафика для совместного принятия решений",
        description: `Использование миллиметровых радаров позволяет точно отслеживать количество ежедневных посетителей. Регулярные отчеты помогают разрабатывать эффективные маркетинговые стратегии.`,
      },
    ],
  },
};

export const whyChooseSection = {
  en: {
    heading: "Why Choose Electronic Price Labels?",
    subheading: "Electronic price labels – boost efficiency & accuracy",
    description:
      "Experience the future of retail with electronic price labels. Real-time updates and easy integration.",
    cards: [
      {
        title: "Industry Leader",
        text: "With 18 years of experience in IoT wireless communication, ZKONG specializes in ESL and LCD smart retail hardware. With over 220 domestic and international patents, ZKONG continues expanding globally, establishing professional teams in North America, Hong Kong, Japan, and Europe to deliver industry-leading electronic shelf label solutions.",
        index: "01",
        icon: Wrench,
      },
      {
        title: "Product Advantages",
        text: "ZKONG offers over 50 models of electronic price labels for flexible use across multiple industries. Our labels feature high-definition displays, instant price updates, long battery life (5–10 years), e-ink technology, fast QR code and content updates (within 3 seconds), ensuring reliable long-term performance.",
        index: "02",
        icon: Users,
      },
      {
        title: "Advanced Manufacturing",
        text: "ZKONG owns a 40,000㎡ manufacturing base with annual production exceeding 50 million units, meeting global market demand. Our in-house production supports customized solutions. MES + ERP management ensures strict quality control for every product.",
        index: "03",
        icon: Factory,
      },
      {
        title: "Custom Service",
        text: "ZKONG delivers tailored hardware and software solutions. Our cloud platform offers open ERP & API integration, custom development, flexible visual templates, personalized product shells, frames, colors, and corporate branding — delivering exclusive electronic price labels aligned with your brand.",
        index: "04",
        icon: Headphones,
      },
    ],
  },
  uz: {
    heading: "Nega elektron narx yorliqlarini tanlash kerak?",
    subheading:
      "Elektron narx yorliqlari – samaradorlik va aniqlikni oshiradi.",
    description:
      "Elektron narx yorliqlari bilan savdoning kelajagini his eting: real vaqt rejimida yangilanish va oson integratsiya.",
    cards: [
      {
        title: "Sanoat yetakchisi",
        text: "ZKONG 18 yillik IoT simsiz texnologiya tajribasiga ega bo‘lib, ESL va LCD aqlli chakana savdo uskunalariga ixtisoslashgan. 220+ patent va global jamoalar bilan kompaniya AQSh, Yevropa, Yaponiya va Gonkongda muvaffaqiyatli faoliyat yuritmoqda.",
        index: "01",
        icon: Wrench,
      },
      {
        title: "Mahsulot afzalliklari",
        text: `ZKONG 50 dan ortiq turdagi elektron narx yorliqlarini taklif etadi.
Ular yuqori aniqlikdagi displey, tezkor narx yangilanishi, 5–10 yilgacha batareya ishlash
muddati, e-ink texnologiyasi va 3 soniya ichida ma’lumot yangilash imkoniyatiga ega.`,
        index: "02",
        icon: Users,
      },
      {
        title: "Rivojlangan ishlab chiqarish",
        text: `ZKONG 40 000㎡ maydonga ega ishlab chiqarish bazasiga ega bo‘lib, yiliga 50 milliondan
ortiq mahsulot ishlab chiqaradi.
Ichki ishlab chiqarish jarayoni va MES + ERP tizimlari yuqori sifat nazoratini ta’minlaydi.`,
        index: "03",
        icon: Factory,
      },
      {
        title: "Maxsus xizmatlar",
        text: `ZKONG mijozlarga moslashtirilgan dasturiy va apparat yechimlarini taqdim etadi.
Bulut platformasi ERP, API integratsiyasi, moslashtiriladigan dizayn shablonlari, korporativ
rang va logotiplarni qo‘llab-quvvatlaydi.`,
        index: "04",
        icon: Headphones,
      },
    ],
  },
  ru: {
    heading: "Почему стоит выбрать электронные ценники?",
    subheading: "Электронные ценники — повышение эффективности и точности.",
    description:
      "Ощутите будущее ритейла с электронными ценниками: обновления в реальном времени и простая интеграция.",
    cards: [
      {
        title: "Лидер отрасли",
        text: `ZKONG обладает 18-летним опытом в области IoT-коммуникаций и специализируется
на электронных ценниках и умном LCD-оборудовании для ритейла.
Компания имеет более 220 патентов и продолжает расширять присутствие по всему
миру, создавая профессиональные команды в Северной Америке, Гонконге, Японии и
Европе.`,
        index: "01",
        icon: Wrench,
      },
      {
        title: "Преимущества продукта",
        text: `ZKONG предлагает более 50 моделей электронных ценников для различных отраслей.
Наши решения отличаются высоким качеством изображения, мгновенным
обновлением цен, длительным сроком службы батареи (5–10 лет), поддержкой e-ink
экранов и быстрым обновлением контента в течение 3 секунд.`,
        index: "02",
        icon: Users,
      },
      {
        title: "Передовое производство",
        text: `ZKONG владеет собственной производственной базой площадью 40 000㎡, с годовой
мощностью более 50 миллионов единиц.
Внутреннее производство позволяет реализовывать гибкую кастомизацию и
контролировать качество каждого продукта благодаря системам MES + ERP.
`,
        index: "03",
        icon: Factory,
      },
      {
        title: "Индивидуальные решения",
        text: `ZKONG предоставляет программно-аппаратные решения под ключ.
Облачная платформа поддерживает интеграцию ERP, API, кастомизацию интерфейсов,
дизайн шаблонов, персонализацию корпусов, рамок и корпоративной символики.`,
        index: "04",
        icon: Headphones,
      },
    ],
  },
};

export const eslSystemSection = {
  en: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
  uz: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
  ru: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
};

export const gallerysection = {
  en: {
    title: "Gallery of Electronic Shelf Labels",
  },
  uz: {
    title: "Elektron narx yorliqlari galereyasi",
  },
  ru: {
    title: "Галерея электронных ценников",
  },
};

export const carouselData = {
  en: {
    title: "Electronic Shelf Labels Application Scenarios",
    description1: `1. Suitable for environments that require a clear and detailed product display.`,
    description2: `2. Large-size versions are perfect for poster displays, promotion notifications, and other scenarios.`,
    imageData: [
      {
        name: "Fresh Food",
        description: `Keep your fresh food section up-to-date with electronic shelf tags. These digital shelf edge labels allow for quick price adjustments and real-time updates, ensuring compliance with market changes. The electronic price tag display helps maintain freshness and transparency, improving customer confidence in your products.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Pharmacy",
        description: `Streamline your pharmacy operations with electronic pricing labels. These digital shelf edge
labels offer accurate and timely price updates, reducing manual errors. LCD price tags
ensure that customers receive the most current information on medications and health
products, enhancing their shopping experience.`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Smart Office",
        description: `Transform your smart office with Digital Name Plates.
The E-ink Nameplate saves time, money, and manual labor by replacing paper nameplates
with modern E-Ink technology, ensuring optimal readability and minimal eye strain.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Supermarket",
        description: `Enhance your supermarket’s efficiency with electronic shelf labels. These digital shelf labels
provide real-time pricing updates, ensuring accuracy and reducing labor costs. With
electronic price tag displays, you can easily manage promotions and stock levels, offering a
seamless shopping experience for your customers.`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Warehouse",
        description: `Improve your warehouse management with electronic shelf labels and digital signage. These
digital shelf labels offer real-time inventory tracking and dynamic pricing updates,
streamlining operations and reducing errors. Electronic labels ensure accurate stock
information, increasing efficiency and productivity in your warehouse.
`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Cosmetics",
        description: `Upgrade your cosmetics section with electronic shelf edge labels. These digital price labels
offer dynamic pricing and instant updates, perfect for fast-paced retail environments. The
sleek digital display complements the aesthetic of your products while ensuring accurate
and up-to-date information for shoppers.
`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Electronics",
        description: `Optimize your electronics store with electronic shelf price tags. These digital shelf labelling
solutions provide precise and real-time pricing, increasing customer trust and satisfaction.
The electronic price tag display is perfect for showcasing detailed product information,
helping customers make informed purchasing decisions.
`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
  uz: {
    title: "Elektron narx yorliqlarining qo‘llanilish sohalari",
    description1: `1. Mahsulot tafsilotlarini aniq va to‘liq ko‘rsatish talab etiladigan muhitlar uchun mos.`,
    description2: `2. Katta o‘lchamdagi modellari poster ko‘rsatish, aksiyalar haqida xabarnoma va boshqa holatlar uchun juda qulay.`,
    imageData: [
      {
        name: "Yangi mahsulotlar",
        description: `Yangi oziq-ovqat bo‘limingizni elektron narx yorliqlari yordamida doimo yangilang. Ushbu raqamli yorliqlar tezkor narx o‘zgarishlari va real vaqt yangilanishlarini ta’minlab, bozordagi o‘zgarishlarga moslashishni osonlashtiradi. Elektron narx displeylari mahsulotlarning yangiligi va shaffofligini saqlashga yordam beradi, mijozlar ishonchini oshiradi.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Dorixona",
        description: `Dorixonangiz ish jarayonlarini elektron narx yorliqlari bilan optimallashtiring. Ushbu raqamli
yorliqlar aniq va o‘z vaqtida narx yangilanishini ta’minlab, qo‘lda xatolarni kamaytiradi. LCD
narx displeylari dorilar va sog‘liq mahsulotlari haqida eng so‘nggi ma’lumotlarni taqdim
etadi, xarid tajribasini yaxshilaydi.`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Aqlli ofis",
        description: `Raqamli ism lavhalari bilan ofisingizni yanada aqlli qiling.
E-Ink texnologiyasiga ega ism lavhalari qog‘oz yorliqlarni almashtirib, vaqt, mablag‘ va qo‘l
mehnatini tejaydi, yuqori o‘qilishi va ko‘zning charchamasligini ta’minlaydi.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Supermarket",
        description: `Elektron narx yorliqlari yordamida supermarket samaradorligini oshiring. Raqamli yorliqlar
narxlarni real vaqt rejimida yangilaydi, aniqlikni ta’minlaydi va mehnat xarajatlarini
kamaytiradi. Elektron narx ekranlari orqali aksiyalar va zaxiralarni oson boshqarib, mijozlar
uchun qulay xarid tajribasini ta’minlaysiz.`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Ombor",
        description: `Elektron narx yorliqlari va raqamli belgilash yordamida ombor boshqaruvini yaxshilang.
Bunday raqamli yorliqlar zaxiralarni real vaqt rejimida kuzatish va narxlarni dinamik
yangilash imkonini beradi, jarayonlarni soddalashtiradi va xatoliklarni kamaytiradi. Elektron
yorliqlar aniq zaxira ma’lumotlarini ta’minlab, ombor samaradorligi va unumdorligini
oshiradi.`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Kosmetika",
        description: `Kosmetika bo‘limingizni elektron narx yorliqlari bilan yangilang. Ushbu raqamli yorliqlar
tezkor narx o‘zgarishlari va darhol yangilanishlarni ta’minlaydi, tezkor savdo muhiti uchun
juda qulay. Zamonaviy displey mahsulotlaringiz ko‘rinishini to‘ldirib, xaridorlar uchun aniq va
yangilangan ma’lumot beradi.`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Elektronika",
        description: `Elektron narx yorliqlari yordamida elektronika do‘koningizni optimallashtiring. Ushbu
raqamli yorliqlar aniq va real vaqt narx yangilanishlarini ta’minlab, mijozlar ishonchini va
qoniqishini oshiradi. Elektron narx displeylari mahsulot haqida batafsil ma’lumot ko‘rsatish
uchun juda qulay bo‘lib, xaridorlarga ongli xarid qilishda yordam beradi.`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
  ru: {
    title: "Сферы применения электронных ценников",
    description1: `1. Подходят для помещений, где необходим четкий и детальный показ информации о товарах.`,
    description2: `2. Крупноформатные модели идеально подходят для постеров, рекламных уведомлений и других задач.`,
    imageData: [
      {
        name: "Свежие продукты",
        description: `Поддерживайте отдел свежих продуктов в актуальном состоянии с помощью
электронных ценников. Эти цифровые ценники позволяют быстро менять цены и
обновлять информацию в реальном времени, обеспечивая соответствие рыночным
изменениям. Электронные ценники помогают сохранять свежесть, прозрачность и
повышают доверие покупателей к вашим продуктам.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Аптека",
        description: `Оптимизируйте работу аптеки с помощью электронных ценников. Цифровые ценники
обеспечивают точные и своевременные обновления цен, снижая количество ручных
ошибок. LCD-ценники предоставляют покупателям актуальную информацию о
лекарствах и товарах для здоровья, улучшая их покупательский опыт.
`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Умный офис",
        description: `Преобразуйте свой умный офис с помощью цифровых табличек с именами.
E-Ink таблички экономят время, деньги и ручной труд, заменяя бумажные таблички
современной E-Ink технологией, обеспечивая отличную читаемость и минимальную
нагрузку на глаза.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Супермаркет",
        description: `Повышайте эффективность вашего супермаркета с помощью электронных ценников.
Цифровые ценники обеспечивают обновление цен в режиме реального времени,
повышают точность и сокращают затраты на труд. С электронными ценниками удобно
управлять акциями и остатками товаров, обеспечивая покупателям комфортный и
современный опыт покупок.
`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Склад",
        description: `Улучшите управление складом с помощью электронных ценников и цифровой
навигации. Такие цифровые ценники обеспечивают отслеживание запасов в реальном
времени и динамическое обновление цен, оптимизируя процессы и снижая
количество ошибок. Электронные этикетки гарантируют точность складской
информации, повышая эффективность и производительность склада.`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Косметика",
        description: `Обновите косметический отдел с помощью электронных ценников. Эти цифровые
ярлыки обеспечивают динамическое изменение цен и мгновенные обновления, что
идеально подходит для быстрого ритейла. Стильные электронные дисплеи
гармонично дополняют внешний вид продукции и обеспечивают точную и актуальную
информацию для покупателей.`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Электроника",
        description: `Оптимизируйте ваш магазин электроники с помощью электронных ценников. Эти
цифровые решения обеспечивают точное и актуальное отображение цен в реальном
времени, повышая доверие и удовлетворённость покупателей. Электронные ценники
идеально подходят для демонстрации подробной информации о товарах и помогают
клиентам принимать взвешенные решения о покупке.`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
};

export const modalSection = {
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
        title:
          "ZKC15S-E4 | 1.54 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZKC21S-E4 | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZK21SF | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZKC26S-E4 | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZK26SF | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZKC29S-E4 | 2.9 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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
        title:
          "ZKC37S-E4 | 3.7 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
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

export const models = {
  en: [
    {
      id: "m1",
      tab: '3.0"',
      title: 'ZKONG Shield 3.0"',
      desc: "Compact shelf label for general retail.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Resolution", v: "296×128" },
        { k: "Radio", v: "2.4GHz BLE" },
      ],
    },
    {
      id: "m2",
      tab: '4.2"',
      title: 'ZKONG Shield 4.2"',
      desc: "Bigger display for detailed pricing.",
      img: "/placeholders/label-2.png",
      specs: [
        { k: "Resolution", v: "480×272" },
        { k: "Battery", v: "CR2477" },
      ],
    },
    {
      id: "m3",
      tab: '7.5"',
      title: 'ZKONG Shield 7.5"',
      desc: "Large display for promotions.",
      img: "/placeholders/label-3.png",
      specs: [
        { k: "Resolution", v: "640×384" },
        { k: "Battery", v: "Li-ion" },
      ],
    },
  ],
  ru: [
    // same structure with RU strings (dummy)
    {
      id: "m1",
      tab: '3.0"',
      title: 'ZKONG Shield 3.0"',
      desc: "Компактный ценник для розницы.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Разрешение", v: "296×128" },
        { k: "Радио", v: "2.4GHz BLE" },
      ],
    },
    // ... other models
  ],
  uz: [
    // uz translations
    {
      id: "m1",
      tab: '3.0"',
      title: 'ZKONG Shield 3.0"',
      desc: "Umumiy chakana sotuv uchun ixcham yorliq.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Oʻlchov", v: "296×128" },
        { k: "Radio", v: "2.4GHz BLE" },
      ],
    },
  ],
};

export const features = {
  en: [
    {
      catId: "core",
      catTitle: "Core Features",
      subs: [
        {
          id: "core-1",
          title: "Robust Durability",
          body: "Industrial-grade materials for long lifecycle.",
          img: "/placeholders/feature-1.jpg",
        },
        {
          id: "core-2",
          title: "IP65 Option",
          body: "Rugged variant for harsh environments.",
          img: "/placeholders/feature-4.jpg",
        },
      ],
    },
    {
      catId: "connect",
      catTitle: "Connectivity",
      subs: [
        {
          id: "conn-1",
          title: "Cloud Management",
          body: "Centralized control and OTA updates.",
          img: "/placeholders/feature-2.jpg",
        },
        {
          id: "conn-2",
          title: "BLE + WiFi",
          body: "Stable wireless backbone for many devices.",
          img: "/placeholders/feature-2.jpg",
        },
      ],
    },
    {
      catId: "power",
      catTitle: "Power & Efficiency",
      subs: [
        {
          id: "p-1",
          title: "Long Battery Life",
          body: "Optimized refresh strategy to extend battery.",
          img: "/placeholders/feature-3.jpg",
        },
      ],
    },
  ],
  ru: [
    // RU mirror structure (dummy text)
  ],
  uz: [
    // UZ mirror structure (dummy text)
  ],
};

export const featuresSection = {
  en: {
    features: [
      {
        id: "f1",
        title: "Robust Durability",
        body: "ZKONG Shield Retail Electronic Shelf Labels are designed with a focus on durability to withstand the demanding conditions of a retail environment. These electronic shelf labels are encased in a protective shield that guards against dust, moisture, and the wear and tear that comes from frequent handling by customers and staff. This robust export construction ensures that the labels remain functional and legible for a longer period, reducing the need for frequent replacements and maintenance.",
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