// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function CookiePolicyPage() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out-cubic",
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <div
//       className="
//         min-h-screen
//         mt-20
//         bg-gradient-to-br 
//         from-gray-50 via-white to-gray-100 
//         dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
//         flex items-center justify-center 
//         px-6 py-20
//         transition-all duration-700
//       "
//     >
//       <div
//         className="
//           max-w-4xl w-full 
//           bg-white/90 dark:bg-gray-900/90 
//           backdrop-blur-md rounded-2xl 
//           shadow-2xl p-8 sm:p-12 
//           border border-gray-200 dark:border-gray-800
//           transition-all duration-500
//         "
//       >
//         {/* Heading */}
//         <h1
//           data-aos="fade-down"
//           className="
//             text-4xl font-bold mb-8 
//             text-blue-600 dark:text-blue-400 
//             text-center tracking-tight
//           "
//         >
//           Cookie Policy
//         </h1>

//         {/* Intro */}
//         <p
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="
//             text-lg leading-relaxed mb-8 
//             text-gray-700 dark:text-gray-300
//             text-center
//           "
//         >
//           This Cookie Policy explains how{" "}
//           <strong>OneTag Smart Solutions</strong> uses cookies and similar
//           technologies to recognize you when you visit our website. It explains
//           what these technologies are, why we use them, and your rights to
//           control their use.
//         </p>

//         {/* Sections */}
//         {[
//           {
//             title: "1. What Are Cookies?",
//             text: "Cookies are small data files stored on your device when you visit a website. They help websites operate efficiently, enhance performance, and provide analytical insights to site owners.",
//           },
//           {
//             title: "2. How We Use Cookies",
//             text: "We use cookies to enhance your browsing experience, remember preferences, and analyze performance. They also help us understand user behavior so we can continually improve site functionality and content relevance.",
//           },
//         ].map((section, i) => (
//           <div key={i} className="mb-8">
//             <h2
//               data-aos="fade-right"
//               data-aos-delay={200 + i * 200}
//               className="
//                 text-2xl font-semibold mb-3
//                 text-gray-800 dark:text-gray-100
//               "
//             >
//               {section.title}
//             </h2>
//             <p
//               data-aos="fade-left"
//               data-aos-delay={300 + i * 200}
//               className="
//                 text-lg leading-relaxed 
//                 text-gray-700 dark:text-gray-300
//               "
//             >
//               {section.text}
//             </p>
//           </div>
//         ))}

//         {/* List */}
//         <div data-aos="zoom-in" data-aos-delay="600" className="mb-8">
//           <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
//             <li>Essential cookies for site functionality</li>
//             <li>Analytics cookies for traffic and performance tracking</li>
//             <li>Preference cookies to remember your settings</li>
//             <li>Marketing cookies to personalize content and ads</li>
//           </ul>
//         </div>

//         {/* Managing Cookies */}
//         <div className="mb-8">
//           <h2
//             data-aos="fade-right"
//             data-aos-delay="800"
//             className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100"
//           >
//             3. Managing Cookies
//           </h2>
//           <p
//             data-aos="fade-left"
//             data-aos-delay="900"
//             className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
//           >
//             You can manage cookies directly through your browser settings. Most
//             browsers allow blocking or deleting cookies; however, disabling them
//             may affect certain features or your overall site experience.
//           </p>
//         </div>

//         {/* Updates */}
//         <div className="mb-8">
//           <h2
//             data-aos="fade-right"
//             data-aos-delay="1000"
//             className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100"
//           >
//             4. Updates to This Policy
//           </h2>
//           <p
//             data-aos="fade-left"
//             data-aos-delay="1100"
//             className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
//           >
//             We may update this Cookie Policy periodically to reflect changes in
//             our practices or for operational, legal, or regulatory reasons.
//             Please revisit this page regularly to stay informed.
//           </p>
//         </div>

//         {/* Contact */}
//         <div className="text-center">
//           <h2
//             data-aos="fade-right"
//             data-aos-delay="1200"
//             className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100"
//           >
//             5. Contact Us
//           </h2>
//           <p
//             data-aos="zoom-in"
//             data-aos-delay="1300"
//             className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
//           >
//             If you have any questions about our Cookie Policy, please contact us
//             at{" "}
//             <a
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Cookie%20Policy%20Query&body=Hello%20Team,"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               info@onetag.uz
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import { Cookie, Settings, Lock, RefreshCw, Mail } from "lucide-react";

export default function CookiePolicyPage() {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

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

  const sections = [
    {
      icon: Cookie,
      title: "1. What Are Cookies?",
      content: "Cookies are small data files placed on your device when you visit a website. Cookies are widely used to make websites work efficiently and provide information to website owners.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Settings,
      title: "2. How We Use Cookies",
      content: "We use cookies to improve your experience, analyze website performance, and remember your preferences. Cookies also help us understand how users interact with our content so we can enhance site functionality and user experience.",
      gradient: "from-purple-400 to-pink-500",
      list: [
        "Essential cookies for site functionality",
        "Analytics cookies for tracking site usage",
        "Preference cookies to remember your settings",
        "Marketing cookies to personalize content",
      ],
    },
    {
      icon: Lock,
      title: "3. Managing Cookies",
      content: "You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies; however, doing so may affect your ability to use some features of our website.",
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: RefreshCw,
      title: "4. Updates to This Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed.",
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          background: theme === "dark"
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
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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
      </div>

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 2md:mb-16"
        >
        
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-balance"
          >
            <span className="block">
              Cookie{" "}
              <span
                className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? "linear-gradient(90deg, #4c9eff, #7bb3ff, #4c9eff)"
                      : "linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Policy
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            This Cookie Policy explains how <strong>OneTag Smart Solutions</strong> uses cookies and similar
            technologies to recognize you when you visit our website. It explains
            what these technologies are, why we use them, and your rights to control
            their use.
          </motion.p>
        </motion.div>

        {/* Enhanced Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} opacity-30 flex items-center justify-center flex-shrink-0 group-hover/item:opacity-50 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40 shadow-xl shadow-primary/20`}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <section.icon className="w-7 h-7 text-white drop-shadow-xl stroke-[2.5]" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h2
                        className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {section.title}
                      </motion.h2>
                      <motion.p
                        className="text-lg text-muted-foreground leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {section.content}
                      </motion.p>
                      {section.list && (
                        <motion.ul
                          className="list-disc list-inside space-y-2 text-lg text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          {section.list.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.1 }}
                              className="flex items-center gap-2 group/item"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary opacity-50 group-hover/item:opacity-100 transition-opacity" />
                              {item}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
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
              className="text-lg text-muted-foreground leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              If you have any questions about our Cookie Policy, please contact us at{" "}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}