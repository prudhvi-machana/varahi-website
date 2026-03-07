"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/slide1.jpg",
    title: "Precision Manufacturing",
    subtitle: "High quality machining solutions",
  },
  {
    image: "/slide2.jpg",
    title: "Advanced Engineering",
    subtitle: "State of the art technology",
  },
  {
    image: "/slide3.jpg",
    title: "Reliable Production",
    subtitle: "Built with accuracy",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-[550px] relative">

              {/* Optimized Next.js image */}
              <Image
                src={slide.image}
                alt="hero"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h1 className="text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg">
                    {slide.subtitle}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2"
      >
        ‹
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2"
      >
        ›
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}