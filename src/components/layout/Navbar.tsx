"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { productsMenu } from "@/config/productsMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-1 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center sm:text-left">
            <span>+91 9701879791</span>
            <span>varahiautomations@gmail.com</span>
          </div>
          <span>Mon–Sat 8:00–20:00</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image src="/logo.jpg" alt="Varahi Logo" width={50} height={50} />
            <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#333]">
              VARAHI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {navigation.map((item) => (
              <div key={item.name} className="relative group">

                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-gray-700 font-medium hover:text-red-500"
                >
                  {item.name}

                  {item.megaMenu && (
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu */}
                {item.megaMenu && (
                  <div className="absolute left-0 top-full w-[600px] bg-white shadow-xl border border-t-2 border-t-blue-800 p-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition z-50">

                    <h3 className="font-black mb-6 text-lg text-[#333]">
                      VARAHI PRODUCTS
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                      {productsMenu.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-center gap-4 hover:text-red-500"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                          />
                          <span>{product.name}</span>
                        </Link>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4">

            {navigation.map((item) => (
              <div key={item.name}>

                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-gray-800 font-medium"
                  >
                    {item.name}
                  </Link>

                  {item.megaMenu && (
                    <button
                      onClick={() =>
                        setOpenMega(openMega === item.name ? null : item.name)
                      }
                    >
                      <svg
                        className={`w-5 h-5 transition ${
                          openMega === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.megaMenu && openMega === item.name && (
                  <div className="mt-3 grid grid-cols-2 gap-3 pl-2">
                    {productsMenu.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center gap-2 text-sm hover:text-red-500"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={30}
                          height={30}
                        />
                        <span>{product.name}</span>
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </header>
  );
}