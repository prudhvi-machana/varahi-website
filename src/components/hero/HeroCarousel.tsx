"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/slide1.webp",
    title: "Quality in sales and services",
    subtitle: "Better quality and better services for our customers",
  },
  {
    image: "/slide2.webp",
    title: "Service - Focused",
    subtitle: "Customer satisfaction is our top priority",
  },
  {
    image: "/slide3.jpeg",
    title: "Experienced Engineering",
    subtitle:
      "15+ years of experience in calibration and instrumentation industry",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
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
    <section className="relative w-full overflow-hidden pt-[116px] sm:pt-[116px] lg:pt-[116px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative h-[60vh] sm:h-[70vh] lg:h-[60vh]"
            >
              <Image
                src={slide.image}
                alt="hero"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg max-w-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 transition px-3 py-2 md:px-4 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 transition px-3 py-2 md:px-4 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}