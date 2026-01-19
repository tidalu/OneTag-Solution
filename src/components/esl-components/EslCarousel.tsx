import React from "react";
import SliderCarousel from "../SliderCarousel";

type ImageData = {
  name: string;
  src: string;
  description? : string;
};

type CarouselData = {
  title: string;
  desc: string;
  imageData: ImageData[];
};

interface EslCarousel {
  carouselData: CarouselData;
}

function EslCarousel({ carouselData }: EslCarousel) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl relative">

        <SliderCarousel
          data={carouselData.imageData}
          renderCard={(item, i) => (
            <div className="h-80 bg-green-200 dark:bg-green-700 rounded-lg flex flex-col items-center justify-center p-4">
              <h3 className="font-bold">{item.name}</h3>
            </div>
          )}
          columns={3}
          infinite
        />
      </div>
    </section>
  );
}

export default EslCarousel;
