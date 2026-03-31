import Image from "next/image";
import { FaLinkedinIn, FaPaperPlane, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#021734] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} />
            <h2 className="text-2xl font-semibold">VARAHI AUTOMATIONS</h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Varahi Automations is a leading provider for better quality sales and services in calibration and instrumentation equipment.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b-2 border-white inline-block">
            Contact
          </h3>

          <div className="text-gray-300 text-sm space-y-3">
            <p>VARAHI AUTOMATIONS</p>

            <p>
              120-6-264/1, Main Road, Thorredu, Rajahmundry Rural, East Godavari District, Andhra Pradesh, 533293.
            </p>

            <p>Phone : +91 9701879791, +91 7997847759</p>

            <p>Email : varahiautomations@gmail.com</p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-4 px-6 flex justify-between items-center">

        <p className="text-sm text-gray-300">
          © 2026 varahiautomations. All rights reserved.
        </p>

        <button className="bg-[#ff4b2b] p-3">
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
}