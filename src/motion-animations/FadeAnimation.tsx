// 'use client';
// import { motion, Variants } from 'framer-motion';
// import * as React from 'react';

// export function FadeAnimation({
//   direction = 'up',
//   children,
//   className = '',
//   staggerChildren = 0.1,
//   repeatOnScroll = false, // new optional prop
// }: {
//   direction?: 'up' | 'down';
//   children: React.ReactNode;
//   className?: string;
//   staggerChildren?: number;
//   repeatOnScroll?: boolean;
// }) {
//   const FADE_DOWN: Variants = {
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: 'tween',
//         ease: 'easeOut',
//         duration: 0.4,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       y: direction === 'down' ? -18 : 18,
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: !repeatOnScroll, amount: 0.5 }}
//       variants={{
//         hidden: {},
//         show: {
//           transition: {
//             staggerChildren: staggerChildren,
//           },
//         },
//       }}
//       className={className}
//     >
//       {React.Children.map(children, (child) =>
//         React.isValidElement(child) ? (
//           <motion.div variants={FADE_DOWN}>{child}</motion.div>
//         ) : (
//           child
//         )
//       )}
//     </motion.div>
//   );
// }


'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function FadeAnimation({
  direction = 'up',
  children,
  className = '',
  staggerChildren = 0.1,
  repeatOnScroll = false,
}: {
  direction?: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  repeatOnScroll?: boolean;
}) {
  useEffect(() => {
    AOS.init({
      duration: 400, // total animation duration (ms)
      easing: 'ease-out', // smoother animation
      once: !repeatOnScroll, // animate only once or every scroll
      offset: 15, // trigger point
    });

    // refresh AOS when content changes
    AOS.refresh();
  }, [repeatOnScroll]);

  // Map direction to AOS animation types
  const directionMap: Record<string, string> = {
    up: 'fade-up',
    down: 'fade-down',
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <div
            data-aos={directionMap[direction]}
            data-aos-delay={index * staggerChildren * 100} // add delay for stagger
          >
            {child}
          </div>
        ) : (
          child
        )
      )}
    </div>
  );
}
