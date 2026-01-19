// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// export function CTASection() {
//   return (
//     <section className="py-12 relative">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="glass rounded-3xl p-16 text-center shadow-2xl glow-blue relative overflow-hidden"
//         >
//           {/* Background decoration */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
//             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
//           </div>

//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-6xl font-light mb-6 text-balance">
//               Ready to Transform Your
//               <span className="block text-blue-500">Retail Operations?</span>
//             </h2>
//             <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
//               Join leading retailers across Uzbekistan who trust OneTag for their smart pricing needs.
//             </p>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors text-lg glow-blue"
//               >
//                 Schedule a Demo
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";
import AnimationText from "./Animation-text";
import SubHeading from "./SubHeading";

// const ctaContent = [{ heading: { en: ``, ru: ``, uz: `` },
//  text: { en: ``, ru: ``, uz: `` },
// btnText: { en: ``, ru: ``, uz: `` },
// }];

const ctaContent = {
  heading: {
    en: `Ready to Transform Your Retail Operations?`,
    ru: `Готовы преобразовать свои розничные операции?`,
    uz: `Chakana savdo jarayonlaringizni o‘zgartirishga tayyormisiz?`,
  },
  text: {
    en: `Join leading retailers across Uzbekistan who trust Onetag for their smart pricing needs.`,
    ru: `Присоединяйтесь к ведущим ритейлерам Узбекистана, которые доверяют Onetag для
управления своими умными ценниками`,
    uz: `Aqlli narxlash yechimlari uchun Onetag’ga ishongan O‘zbekistonning yetakchi chakana
tarmoqlariga qo‘shiling.
`,
  },
  btnText: {
    en: `Schedule a Demo`,
    ru: `Заказать демо`,
    uz: `Demo uchun ro‘yxatdan o‘ting`,
  },
};

export function CTASection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 2md:py-20 relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeAnimation
          direction="up"
          className="
            relative overflow-hidden rounded-3xl p-6 sm:p-14 2md:p-20 text-center
            border transition-all duration-500
            bg-white/70 dark:bg-[#0b1120]/80
            border-slate-200/50 dark:border-white/10
            shadow-xl backdrop-blur-2xl
          "
        >
          {/* 🔵 Subtle Background Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 right-10 size-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 left-10 size-72 bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-3xl" />
          </div>

          {/* ✨ Content */}
          <FadeAnimation
            direction="up"
            staggerChildren={0.3}
            className="relative z-10"
          >
            {/* <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight
              text-gray-900 dark:text-white">
              <AnimationText>
                {ctaContent.heading[language].split(" ").slice(0, -2).join(" ")}
              </AnimationText>{" "}
              <span className="block text-blue-600 dark:text-blue-400 font-semibold">
                {ctaContent.heading[language].split(" ").slice(-2).join(" ")}
              </span>
            </h2> */}
            <SubHeading headingText={ctaContent.heading[language]} lastIndex={4} customHeadingClass="max-w-[600px] mx-auto text-pretty" />

            <p
              className="
                text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed
                text-gray-600 dark:text-gray-300
              "
            >
              {ctaContent.text[language].split("Onetag").slice(0).join(" ")}{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Onetag
              </span>{" "}
              {ctaContent.text[language].split("Onetag").slice(1).join(" ")}
              {/* Join leading retailers across Uzbekistan who trust{" "}
              for their smart pricing needs. */}
            </p>

            <div>
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-xl
                  text-base 2md:text-lg font-medium transition-all duration-300
                  bg-blue-600 hover:bg-blue-700 text-white shadow-lg
                  dark:shadow-blue-500/20
                  hover:shadow-blue-500/40
                "
              >
                {ctaContent.btnText[language]}
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </FadeAnimation>

          {/* Decorative Bottom Glow */}
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" /> */}
        </FadeAnimation>
      </div>
    </section>
  );
}
