"use client";

import { motion } from "framer-motion";
import { Wifi, Bluetooth, Zap, Shield, Cloud, BarChart3 } from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";
import { useEffect, useState } from "react";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";

const solutions = [
  {
    icon: Wifi,
    title: "Wi-Fi Connectivity",
    description:
      "Real-time price updates across all store locations with reliable Wi-Fi technology.",
    features: ["Instant updates", "Multi-store sync", "Cloud management"],
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth Integration",
    description:
      "Low-energy Bluetooth for efficient communication and extended battery life.",
    features: ["Energy efficient", "Long battery life", "Easy pairing"],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Zap,
    title: "Dynamic Pricing",
    description:
      "Adjust prices instantly based on demand, time, or promotional campaigns.",
    features: ["Real-time changes", "Automated rules", "Flash sales"],
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure System",
    description:
      "Enterprise-grade security to protect your pricing data and operations.",
    features: ["Encrypted data", "Access control", "Audit logs"],
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description:
      "Manage all your stores from a single, intuitive cloud dashboard.",
    features: ["Centralized control", "Analytics", "Remote access"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track pricing performance and customer behavior with detailed analytics.",
    features: ["Sales tracking", "Price optimization", "Reports"],
    gradient: "from-indigo-400 to-purple-500",
  },
];

export default function SolutionsPage() {
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

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Enhanced background */}
      <motion.div
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
      />

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeAnimation staggerChildren={0.3}>
          <FadeAnimation staggerChildren={0.3} className="text-center mb-16 2lg:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 2md:mb-8">
              Complete Smart Retail
              <span className="block mt-2 bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl 2md:text-[22px] text-muted-foreground max-w-3xl mx-auto">
              Everything you need to modernize your retail pricing and
              operations
            </p>
          </FadeAnimation>

          <FadeAnimation staggerChildren={0.3} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group relative glass rounded-3xl p-6 2md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-full"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    ],
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className={`size-14 2md:size-16 rounded-2xl bg-linear-to-br ${solution.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-primary/20 relative z-10`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <solution.icon className="size-8 text-white" />
                  </motion.div>
                </motion.div>

                <h3 className="text-[22px] xl:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg relative z-10">
                  {solution.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {solution.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-base group/item"
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-linear-to-r ${solution.gradient} mr-4 shadow-lg`}
                      />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            ))}
          </FadeAnimation>
        </FadeAnimation>
      </div>
    </div>
  );
}
