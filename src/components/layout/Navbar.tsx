import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { productsMenu } from "@/config/productsMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-10">
          <div className="flex gap-6">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉ info@varahi.com</span>
          </div>
          <div>
            <span>Mon–Fri 9:00–18:00</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Varahi Logo" width={70} height={70} />
            <span className="text-3xl text-[#333] font-black">VARAHI AUTOMATIONS</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-10">

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

                  <div className="absolute left-0 top-full w-[600px] bg-white shadow-xl border border-t-2 border-t-blue-800 p-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">

                    <h3 className="text-[#333] font-black mb-6 text-lg">
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

        </div>
      </div>

    </header>
  );
}