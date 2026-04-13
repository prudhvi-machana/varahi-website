"use client";

import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const clients = [
    "/clients/3f_industries.png",
    "/clients/alluri.png",
    "/clients/andhra_paper.png",
    "/clients/godrej.png",
    "/clients/itc.png",
    "/clients/jayalakshmi.png",
    "/clients/KPR.png",
    "/clients/nsl_sugars.png",
    "/clients/patanjali.png",
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const lastPointerX = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  const SPEED = 0.6;

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  };

  const getSetWidth = () => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 3;
  };

  const normalizePosition = () => {
    const setWidth = getSetWidth();
    if (setWidth === 0) return;
    while (posRef.current < -setWidth * 2) posRef.current += setWidth;
    while (posRef.current > -setWidth) posRef.current -= setWidth;
  };

  useEffect(() => {
    const setWidth = getSetWidth();
    posRef.current = -setWidth;
    applyTransform();

    const loop = (timestamp: number) => {
      const dt = lastTimeRef.current ? timestamp - lastTimeRef.current : 16;
      lastTimeRef.current = timestamp;

      if (!isDragging.current) {
        if (Math.abs(velocityRef.current) > SPEED) {
          velocityRef.current *= 0.92;
          posRef.current += velocityRef.current;
        } else {
          velocityRef.current = -SPEED;
          posRef.current -= SPEED * (dt / 16);
        }

        normalizePosition();
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastPointerX.current = e.clientX;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = (e.clientX - lastPointerX.current) * 2.5;
    lastPointerX.current = e.clientX;
    velocityRef.current = delta;
    posRef.current += delta;
    normalizePosition();
    applyTransform();
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8">
          <h2 className="text-[#001C3D] text-3xl font-bold mb-2">
            Our Clients
          </h2>
          <p className="text-gray-600">
            Trusted by leading industrial and engineering companies.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl select-none">
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="flex gap-3 sm:gap-4 md:gap-6 w-max cursor-grab active:cursor-grabbing"
            style={{ willChange: "transform" }}
          >
            {duplicatedClients.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="
                  bg-gray-50 border border-gray-200
                  rounded-2xl flex items-center
                  justify-center px-3 py-2 sm:px-4 sm:py-3
                  shadow-sm pointer-events-none
                "
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  draggable={false}
                  className="
                    h-[80px] sm:h-[100px] md:h-[130px] lg:h-[160px]
                    w-auto object-contain
                    transition duration-300
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}