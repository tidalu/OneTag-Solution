// "use client";
// import React, { useEffect, useRef } from "react";
// import { useTheme } from "../contexts/theme-context";
// import AOS from "aos";
// import "aos/dist/aos.css";


// export default function AnimationText({
//   children,
//   onRepeat = false,
// }: {
//   children: React.ReactNode;
//   onRepeat ?: boolean
// }) {
//   const { theme } = useTheme();
//   const ref = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 200,   // match your CSS animation duration
//       once: false,      // false = replay every time visible
//       offset: 50,        // trigger slightly after entering viewport
//       easing: "ease-in-out",

//     });

//     // console.log(ref , "this is ref from text animation")
//   // AOS.refresh();
//   }, []);



//   return (
//     <span
//       ref={ref}
//       key={theme}
//       data-aos="fade-up"
//       data-aos-once="false"            // ensure replay via attribute too
//       data-aos-offset="50"
//       className={`chroma-text chroma-text-animate ${onRepeat ? 'repeat' : ''} ${
//         theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
//       }`}
//     >
//       {children}
//     </span>
//   );
// }


"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/theme-context";

export default function AnimationText({
  children,
  onRepeat = false,
  modeReverse = false
}: {
  children: React.ReactNode;
  onRepeat?: boolean;
  modeReverse ?: boolean;
}) {
  const { theme } = useTheme();
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 🔥 Trigger animation
            setActive(false);
            setTimeout(() => setActive(true), 10); // restart trick
          } else {
            // remove animation when leaving viewport
            setActive(false);
          }
        });
      },
      {
        threshold: 0.4, // Adjust visibility %
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`
        chroma-text
        ${active ? "chroma-text-animate" : ""}
        ${onRepeat ? "repeat" : ""}
        ${modeReverse ? (theme === "dark" ? "bg-gradient-light" : "bg-gradient-dark" ): (theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light")}
        `}
        >
      {/* ${theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"} */}
      {children}
    </span>
  );
}
