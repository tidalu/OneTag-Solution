// import React from "react";
// import { motion } from "framer-motion";

// function FloatingParticles() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-blue-400/30 blur-[2px]"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: 0,
//             scale: 0,
//           }}
//           animate={{
//             x: [null, Math.random() * window.innerWidth],
//             y: [null, Math.random() * window.innerHeight],
//             opacity: [0, 0.6, 0],
//             scale: [0, 1.5, 0],
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 4,
//             repeat: Infinity,
//             delay: Math.random() * 3,
//             ease: "easeInOut",
//           }}
//           style={{
//             filter: "drop-shadow(0 0 6px rgba(59,130,246,0.5))",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default FloatingParticles;

import React from "react";

function FloatingParticles() {
  return (
     <div className="floating-particles fixed inset-0 -z-1 pointer-events-none">
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} className="particle" />
      ))}
    </div>
  );
}

export default FloatingParticles;