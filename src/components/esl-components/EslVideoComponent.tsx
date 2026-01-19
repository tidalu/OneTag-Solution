import React from "react";
import SubHeading from "../SubHeading";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";

type EslVideoComponent = {
  videoData: { title: string; description: string; cta?: string };
  videoId?: string;
};

function EslVideoComponent({ videoData, videoId }: EslVideoComponent) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 3md:grid-cols-2 gap-8 items-center">
          <FadeAnimation staggerChildren={0.3} className="text-center 3md:text-left">
            <SubHeading headingText={videoData.title} lastIndex={3} customHeadingClass="!hidden 3md:!block !mb-2.5 2lg:!mb-4 2xl:!mb-6 text-pretty" />
            <SubHeading headingText={videoData.title} lastIndex={3} customHeadingClass="!block 3md:!hidden !mb-2.5 2lg:!mb-4 2xl:!mb-6 text-pretty" textSize="md" />
            {/* !hidden md:!block */}
            <p className="text-base 2lg:text-lg xxl:text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-5 2xl:mb-6 text-pretty">
              {videoData.description}
            </p>

            {videoData.cta && (
              <a
                href="/"
                className="inline-block px-6 py-3 border-2 hover:bg-blue-700 border-blue-600 dark:border-white dark:hover:bg-white text-blue-600 dark:text-white hover:text-white dark:hover:text-black rounded-lg transition-all duration-300 text-center 2lg:min-w-[170px] cursor-pointer"
              >
                {videoData.cta}
              </a>
            )}
          </FadeAnimation>

          <FadeAnimation className="mb-0">
          <div className="w-full px-0">
            <figure className="flex h-full w-full rounded-xl overflow-hidden">
              <video autoPlay muted loop className="max-sm:aspect-608/260">
                <source src="/tag-video.mp4" type="video/mp4"></source>
              </video>
            </figure>
          </div>
          </FadeAnimation>

            {/* YouTube embed */}
          {/* <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              title={videoData.title}
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default EslVideoComponent;
