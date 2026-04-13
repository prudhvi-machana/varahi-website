"use client";

import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#021734] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                VARAHI AUTOMATIONS
              </h2>

              <p className="text-xs sm:text-base text-gray-200 mt-1">
                GSTIN: 37RWNPS6311E1ZV
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Varahi Automations provides high-quality calibration and
            instrumentation solutions.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6 border-b-2 inline-block">
            Contact
          </h3>

          <div className="text-gray-300 text-sm space-y-3">
            <p>VARAHI AUTOMATIONS</p>
            <p>
              120-6-264/1, Main Road, Thorredu, Rajahmundry, Rural.
              E.G Dist., A.P., 533293.
            </p>
            <p>Phone: +91 9701879791, +91 7997847759</p>
            <p>Email: varahiautomations@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-sm text-gray-300">
          © 2026 varahiautomations. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="bg-[#ff4b2b] p-3 rounded-full hover:scale-110 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}