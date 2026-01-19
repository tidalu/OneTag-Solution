import React from "react";
// import { motion } from "framer-motion";
import { useTheme } from "../contexts/theme-context";

function GradientBackground() {
  const { theme } = useTheme();
  return (
    // <motion.div
    //   animate={{
    //     background:
    //       theme === "dark"
    //         ? [
    //             "radial-gradient(ellipse at 20% 30%, rgba(76,158,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76,158,255,0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    //             "radial-gradient(ellipse at 25% 35%, rgba(76,158,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76,158,255,0.12) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    //           ]
    //         : [
    //             "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
    //             "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
    //           ],
    //   }}
    //   transition={{
    //     duration: 15,
    //     repeat: Infinity,
    //     ease: "easeInOut",
    //   }}
    //   className="animated-bg fixed inset-0 -z-10 bg-size-[200%_200%] bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    // />
    <div
      className={`animated-bg fixed inset-0 -z-10 ${
        theme === "dark" ? "bg-dark" : "bg-light"
      }`}
    />  
  );
}

export default GradientBackground;
