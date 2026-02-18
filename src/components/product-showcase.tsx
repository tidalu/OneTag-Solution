// // "use client"

// // import { motion } from "framer-motion"
// // import Image from "next/image"

// // const products = [
// //   {
// //     name: "OneTag Mini",
// //     description: "Compact design for small items and shelves",
// //     image: "/compact-electronic-price-tag-small-white-modern.jpg",
// //     specs: ['2.9" E-Ink Display', "Bluetooth 5.0", "5-year battery"],
// //   },
// //   {
// //     name: "OneTag Standard",
// //     description: "Perfect for most retail applications",
// //     image: "/medium-electronic-price-tag-modern-retail-display.jpg",
// //     specs: ['4.2" E-Ink Display', "Wi-Fi + Bluetooth", "7-year battery"],
// //   },
// //   {
// //     name: "OneTag Pro",
// //     description: "Large display for premium products",
// //     image: "/large-premium-electronic-price-tag-display-screen.jpg",
// //     specs: ['7.5" E-Ink Display', "Wi-Fi + Bluetooth", "10-year battery"],
// //   },
// // ]

// // export function ProductShowcase() {
// //   return (
// //     <section className="py-16 relative">
// //       <div className="container mx-auto px-4 max-w-7xl">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-6xl text-muted-foreground max-w-2xl mx-auto text-pretty">
// //             Our <span className="text-blue-500">Product Line</span>
// //           </h2>
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
// //             Choose the perfect smart tag for your retail needs
// //           </p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {products.map((product, index) => (
// //             <motion.div
// //               key={product.name}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0, }}
// //               whileHover={{ y: -10, scale: 1.02 }}
// //               className="glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
// //             >
// //               <div className="relative h-64 bg-linear-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-blue-950 overflow-hidden">
// //                 <motion.div
// //                   whileHover={{ scale: 1.1 }}
// //                   transition={{ duration: 0.4 }}
// //                   className="relative w-full h-full"
// //                 >
// //                   <Image
// //                     src={product.image || "/placeholder.svg"}
// //                     alt={product.name}
// //                     fill
// //                     className="object-contain p-8"
// //                   />
// //                 </motion.div>
// //                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
// //               </div>

// //               <div className="p-8">
// //                 <h3 className="text-2xl font-light mb-2">{product.name}</h3>
// //                 <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

// //                 <div className="space-y-2">
// //                   {product.specs.map((spec, i) => (
// //                     <motion.div
// //                       key={spec}
// //                       initial={{ opacity: 0, x: -10 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ delay: index * 0.2 + i * 0.1 }}
// //                       className="flex items-center text-sm"
// //                     >
// //                       <motion.div whileHover={{ scale: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
// //                       <span className="text-muted-foreground">{spec}</span>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { useTheme } from "@/src/contexts/theme-context" // 👈 using your theme context

// const products = [
//   {
//     name: "OneTag Mini",
//     description: "Compact design for small items and shelves",
//     image: "/compact-electronic-price-tag-small-white-modern.jpg",
//     specs: ['2.9" E-Ink Display', "Bluetooth 5.0", "5-year battery"],
//   },
//   {
//     name: "OneTag Standard",
//     description: "Perfect for most retail applications",
//     image: "/medium-electronic-price-tag-modern-retail-display.jpg",
//     specs: ['4.2" E-Ink Display', "Wi-Fi + Bluetooth", "7-year battery"],
//   },
//   {
//     name: "OneTag Pro",
//     description: "Large display for premium products",
//     image: "/large-premium-electronic-price-tag-display-screen.jpg",
//     specs: ['7.5" E-Ink Display', "Wi-Fi + Bluetooth", "10-year battery"],
//   },
// ]

// export function ProductShowcase() {
//   const { theme } = useTheme() // ✅ Global theme from context

//   return (
//     <section
//       className={`py-16 relative transition-colors duration-500 ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className={`text-4xl md:text-6xl font-semibold max-w-2xl mx-auto ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Our <span className="text-blue-500">Product Line</span>
//           </h2>
//           <p
//             className={`text-xl mt-4 max-w-2xl mx-auto ${
//               theme === "dark" ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Choose the perfect smart tag for your retail needs
//           </p>
//         </motion.div>

//         {/* Product Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group backdrop-blur-lg border ${
//                 theme === "dark"
//                   ? "bg-gray-800/80 border-gray-700"
//                   : "bg-white border-gray-200"
//               }`}
//             >
//               {/* Product Image */}
//               <div
//                 className={`relative h-64 overflow-hidden ${
//                   theme === "dark"
//                     ? "bg-linear-to-br from-gray-800 to-blue-950"
//                     : "bg-linear-to-br from-slate-100 to-blue-50"
//                 }`}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.4 }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-8"
//                   />
//                 </motion.div>
//                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
//               </div>

//               {/* Product Content */}
//               <div className="p-8">
//                 <h3
//                   className={`text-2xl font-light mb-2 ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {product.name}
//                 </h3>
//                 <p
//                   className={`mb-6 leading-relaxed ${
//                     theme === "dark" ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   {product.description}
//                 </p>

//                 <div className="space-y-2">
//                   {product.specs.map((spec, i) => (
//                     <motion.div
//                       key={spec}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: i * 0.1 }}
//                       className="flex items-center text-sm"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.5 }}
//                         className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"
//                       />
//                       <span
//                         className={`${
//                           theme === "dark" ? "text-gray-400" : "text-gray-700"
//                         }`}
//                       >
//                         {spec}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";
import AnimationText from "./Animation-text";
import SubHeading from "./SubHeading";

const productsText = {
  en: {
    title: `Our Product Line`,
    description: `Choose the perfect smart tag for your retail needs`,
  },
  uz: {
    title: `Mahsulotlarimiz liniyasi`,
    description: `Chakana savdo ehtiyojlaringiz uchun mukammal aqlli narx belgisini tanlang`,
  },
  ru: {
    title: `Наша линейка продуктов`,
    description: `Выберите идеальный умный ценник для нужд вашего магазина.`,
  },
};

const products = [
  {
    name: "Essential",
    description: "Compact design for small items and shelves",
    image: "/compact-electronic-price-tag-small-white-modern.jpg",
    specs: ['2.9" E-Ink Display', "Bluetooth 5.0", "5-year battery"],
    linear: "from-blue-400 to-cyan-500",
  },
  {
    name: "Shield",
    description: "Perfect for most retail applications",
    image: "/medium-electronic-price-tag-modern-retail-display.jpg",
    specs: ['4.2" E-Ink Display', "Wi-Fi + Bluetooth", "7-year battery"],
    linear: "from-purple-400 to-pink-500",
  },
  {
    name: "Perfomance",
    description: "Large display for premium products",
    image: "/large-premium-electronic-price-tag-display-screen.jpg",
    specs: ['7.5" E-Ink Display', "Wi-Fi + Bluetooth", "10-year battery"],
    linear: "from-orange-400 to-red-500",
  },
];

const productsSection = {
  en: {
    products: [
      {
        name: "Essential series",
        description: "Compact & Efficien",
        image: "/Essential.png",
        specs: ['Compact electronic shelf labels for everyday tasks.', "Ideal for small products and shelves. Display size up to 2.9 inches, energy-efficient, and equipped with essential features for standard retail."],
        linear: "from-blue-400 to-cyan-500",
      },
      {
        name: "Shield series",
        description: "Rugged & Cold-Ready",
        image: "/Shield.png",
        specs: ["Rugged ESLs for challenging operating conditions.", "They operate reliably at low temperatures and under heavy load. Reinforced housing, protection against moisture and dust, and stable performance in refrigerated and freezer environments."],
        linear: "from-purple-400 to-pink-500",
      },
      {
        name: "Perfomance series",
        description: "Large Display & Maximum Impact",
        image: "/Perfomance.png",
        specs: ["Large-format electronic shelf labels for maximum visibility.", "Designed for premium products and promotional areas. Display sizes range from 3.5 to 7.5 inches, offering excellent readability with a strong focus on marketing and dynamic pricing."],
        linear: "from-orange-400 to-red-500",
      },
    ],
  },
  ru: {
    products: [
      {
        name: "Essential серия",
        description: "Компактный и эффективный",
        image: "/Essential.png",
        specs: ['Компактные электронные ценники для повседневных задач.', "Идеальны для небольших товаров и полок. Диагональ до 2.9 inch энергоэффективность и базовый функционал для стандартного ритейла."],
        linear: "from-blue-400 to-cyan-500",
      },
      {
        name: "Shield серия",
        description: "Прочный и готовый к работе в холоде",
        image: "/Shield.png",
        specs: ["Защищённые ESL для сложных условий эксплуатации.", "Работают при низких температурах и высокой нагрузке. Усиленный корпус, защита от влаги и пыли, стабильная работа в холодильных и морозильных зонах."],
        linear: "from-purple-400 to-pink-500",
      },
      {
        name: "Perfomance серия",
        description: "Большой дисплей и максимальный эффект",
        image: "/Perfomance.png",
        specs: ["Крупноформатные электронные ценники для максимальной видимости.", "Созданы для премиальных товаров и промо-зон. Диагональ от 3.5 до 7.5, высокая читаемость, акцент на маркетинг и динамичные цены."],
        linear: "from-orange-400 to-red-500",
      },
    ],
  },
  uz: {
    products: [
      {
        name: "Essential seriya",
        description: " Kompakt va samarali",
        image: "/Essential.png",
        specs: ['Kundalik vazifalar uchun kompakt elektron narx belgilar.', "Kichik mahsulotlar va javonlar uchun juda mos. 2.9 dyuymgacha bo‘lgan diagonal, energiya tejamkor va oddiy retail uchun zarur asosiy funksiyalarga ega."],
        linear: "from-blue-400 to-cyan-500",
      },
      {
        name: "Shield seriya",
        description: "Mustahkam va sovuqqa tayyor",
        image: "/Shield.png",
        specs: ["Murakkab sharoitlarda ishlash uchun himoyalangan ESL lar.", "Past haroratlarda va yuqori yuklama ostida ham ishlaydi. Mustahkamlangan korpus, namlik va changdan himoya, sovitkich va muzlatkich zonalarida barqaror ishlash."],
        linear: "from-purple-400 to-pink-500",
      },
      {
        name: "Perfomance seriya",
        description: "Katta displey va maksimal ta’sir",
        image: "/Perfomance.png",
        specs: ["Maksimal ko‘rinish uchun yirik formatli elektron narx belgilar.", "Premium mahsulotlar va promo zonalar uchun yaratilgan. Diagonal 3.5 dan 7.5 dyuymgacha, yuqori o‘qilish darajasi, marketing va dinamik narxlarga yo‘naltirilgan."],
        linear: "from-orange-400 to-red-500",
      },
    ],
  },
};

export function ProductShowcase() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16 2md:py-20 relative overflow-hidden">
      {/* Background ambient motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 size-96 bg-primary/10 rounded-full blur-3xl"
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
      </div>

      <FadeAnimation
        direction="up"
        className="container mx-auto px-4 max-w-7xl relative z-10"
      >
        {/* Header Section */}
        <FadeAnimation
          direction="up"
          staggerChildren={0.3}
          className="text-center mb-10 2md:mb-16"
        >
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-3xl mx-auto mb-6">
            <AnimationText>
              {t("ourProduct").split(" ").slice(0,1)}
            </AnimationText>
            {" "}
            <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t("ourProduct").split(" ").slice(1).join(" ")}
            </span>
          </h2> */}
          <SubHeading
            headingText={productsText[language].title}
            lastIndex={1}
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {productsText[language].description}
          </p>
        </FadeAnimation>

        {/* Product Grid */}
        <FadeAnimation
          direction="up"
          staggerChildren={0.5}
          className="grid sm:grid-cols-2 3md:grid-cols-3! gap-6 xl:gap-10"
        >
          {productsSection[language].products.map((product, index) => (
            <div
              key={product.name}
              className={`flex flex-col group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full ${
                index === products.length - 1
                  ? "sm:col-span-2 3md:col-span-1"
                  : ""
              }`}
            >
              {/* Hover overlay */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${product.linear} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
              />

              {/* Shimmer Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-linear(120deg, transparent, rgba(255,255,255,0.1), transparent)",
                  ],
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Product Image with Parallax hover */}
              <div
                className={`relative h-65 bg-linear-to-br ${product.linear} overflow-hidden`}
              >
                <motion.div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ZKONG electronic shelf label for retail stores`}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-700"
                    priority={true}
                  />
                </motion.div>

                {/* Floating Badge */}
                {/* <motion.div
                  className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-linear-to-r ${product.linear} text-white text-xs font-semibold shadow-md`}
                >
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Premium
                </motion.div> */}

                {/* linear overlay fade on hover */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-t ${product.linear} opacity-0 group-hover:opacity-25 transition-opacity duration-700`}
                />
              </div>

              {/* Product Details */}
              <div className="p-6 xl:p-8 relative z-10 grow">
                <motion.h3 className="text-[23px] sm:text-[26px] xl:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">
                  {product.name}
                </motion.h3>
                <motion.p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-lg">
                  {product.description}
                </motion.p>

                {/* Specs with staggered reveal */}
                <div className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      className="flex items-baseline text-base group/item"
                    >
                      <motion.div
                        className={`w-2 h-2 min-w-2 rounded-full bg-linear-to-r ${product.linear} mr-4 shadow-md`}
                      />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {spec}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* linear underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${product.linear} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
              </div>
            </div>
          ))}
        </FadeAnimation>
      </FadeAnimation>
    </section>
  );
}
