// "use client"

// import { Hero } from "@/src/components/hero"
// import { FeaturesGrid } from "@/src/components/features-grid"
// import { ProductShowcase } from "@/src/components/product-showcase"
// import { CTASection } from "@/src/components/cta-section"
// import { motion } from "framer-motion"

// export default function Home() {
//   return (
//     <div className="relative">
//       <motion.div
//         animate={{
//           background: [
//             "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
//             "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
//             "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
//           ],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "linear",
//         }}
//         className="fixed inset-0 -z-10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950"
//       />

//       <Hero />
//       <FeaturesGrid />
//       <ProductShowcase />
//       <CTASection />
//     </div>
//   )
// }

"use client";

import { Hero } from "@/src/components/hero";
import { FeaturesGrid } from "@/src/components/features-grid";
import { ProductShowcase } from "@/src/components/product-showcase";
import { CTASection } from "@/src/components/cta-section";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import SaasSection from "../components/saas-section";
import VideoSection from "../components/video-section";
import BrandMarquee from "../components/brand-marquee";
import dynamic from "next/dynamic";
import GradientBackground from "../motion-animations/GradientBackground";
// import FloatingParticles from "../components/FloatingParticles";

const FloatingParticles = dynamic(() => import("../components/FloatingParticles"), {
  ssr: false,
});


export default function Home() {
  const { theme } = useTheme();
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      {/* <motion.div
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 20% 30%, rgba(76,158,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76,158,255,0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 25% 35%, rgba(76,158,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76,158,255,0.12) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                ]
              : [
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                  "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
                ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 -z-10 bg-size-[200%_200%] bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
      /> */}

      <GradientBackground />

      {/* Floating 3D Particles (only after client render) */}
      <FloatingParticles /> 

      {/* Content Sections */}
      <Hero />
      <SaasSection />
      <VideoSection />
      <FeaturesGrid />
      <ProductShowcase />
      <BrandMarquee />
      <CTASection />
    </div>
  );
}
