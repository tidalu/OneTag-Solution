import React from "react";
import AnimationText from "./Animation-text";

type SubHeading = {
  headingText: string;
  firstIndex?: number;
  lastIndex: number;
  customHeadingClass?: string;
  textSize?: "sm" | "md" | "lg";
};

function SubHeading({
  headingText,
  firstIndex = 0,
  lastIndex,
  customHeadingClass = "",
  textSize='lg',
}: SubHeading) {
  return (
    <>
      <h2
        className={`font-bold mx-auto mb-6 ${
          textSize === "lg"
            ? "text-3xl md:text-4xl 2lg:text-[40px] xxl:text-[42px] 2xl:text-[46px] 3xl:text-[50px]"
            : textSize === "md"
            ? "leading-[1.3] text-[26px] 3md:text-[28px] xxl:text-3xl"
            : ""
        } ${customHeadingClass}`}
      >
        <AnimationText>
          {headingText.split(" ").slice(firstIndex, lastIndex).join(" ")}{" "}
        </AnimationText>
        <span className="text-primary bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text">
          {headingText.split(" ").slice(lastIndex).join(" ")}
        </span>
      </h2>
    </>
  );
}

export default SubHeading;
