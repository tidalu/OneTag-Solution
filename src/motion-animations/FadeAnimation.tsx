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


// 'use client';
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Initialize AOS only once globally
// let aosInitialized = false;

// export function FadeAnimation({
//   direction = 'up',
//   children,
//   className = '',
//   staggerChildren = 0.1,
//   repeatOnScroll = false,
// }: {
//   direction?: 'up' | 'down';
//   children: React.ReactNode;
//   className?: string;
//   staggerChildren?: number;
//   repeatOnScroll?: boolean;
// }) {
//   useEffect(() => {
//     if (!aosInitialized) {
//       AOS.init({
//         duration: 400,
//         easing: 'ease-out',
//         once: true, // Only animate once by default
//         offset: 15,
//         disable: false,
//       });
//       aosInitialized = true;
//     }
//   }, []);

//   // Map direction to AOS animation types
//   const directionMap: Record<string, string> = {
//     up: 'fade-up',
//     down: 'fade-down',
//   };

//   return (
//     <div className={className}>
//       {React.Children.map(children, (child, index) =>
//         React.isValidElement(child) ? (
//           <div
//             data-aos={directionMap[direction]}
//             data-aos-delay={index * staggerChildren * 100}
//             data-aos-once={!repeatOnScroll}
//           >
//             {child}
//           </div>
//         ) : (
//           child
//         )
//       )}
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState, useRef } from 'react';

// Updated hook to handle repeating animations
function useOnScreen(
  ref: React.RefObject<Element | null>, 
  rootMargin: string = '0px',
  triggerOnce: boolean = true // New parameter to control repetition
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // If we only want to trigger once, stop observing after match
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          // If repeat is ON (triggerOnce is false), reset state when it leaves view
          if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, rootMargin, triggerOnce]);

  return isIntersecting;
}

export function FadeAnimation({
  children,
  className = '',
  staggerChildren = 0.15,
  direction = 'up',
  repeatOnScroll = false, // Added back to fix build error
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  direction?: 'up' | 'down' | 'none';
  repeatOnScroll?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Pass !repeatOnScroll as the triggerOnce argument
  // If repeatOnScroll is true, triggerOnce becomes false
  const isVisible = useOnScreen(ref, '20px', !repeatOnScroll);

  const getTransform = (dir: string) => {
    if (dir === 'up') return 'translate-y-12';
    if (dir === 'down') return '-translate-y-12';
    return 'translate-y-0';
  };

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <div
            style={{
              transitionDelay: `${index * staggerChildren}s`,
              transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)', 
            }}
            className={`
              transition-all duration-500 
              will-change-[opacity,transform] 
              ${isVisible 
                ? 'opacity-100 translate-y-0 translate-x-0' 
                : `opacity-0 ${getTransform(direction)}`
              }
            `}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}