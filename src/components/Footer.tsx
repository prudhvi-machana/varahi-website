import Image from "next/image";
import { FaLinkedinIn, FaPaperPlane, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#021734] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} />
            <h2 className="text-2xl font-semibold">VARAHI</h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Precision Mass Products Pvt. Ltd. is one of the most recognized
            manufacturers of Pressure & Temperature measurement instruments in
            India.
          </p>

          {/* <div className="flex gap-4">
            <Image src="/ce.jpg" alt="ce" width={40} height={30}/>
            <Image src="/atex.jpg" alt="atex" width={40} height={30}/>
            <Image src="/ibr.jpg" alt="ibr" width={40} height={30}/>
            <Image src="/iso.jpg" alt="iso" width={40} height={30}/>
          </div> */}
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b-2 border-white inline-block">
            Contact
          </h3>

          <div className="text-gray-300 text-sm space-y-3">
            <p>Precision Mass Products Pvt. Ltd.</p>

            <p>
              Plot No. 2306, G.I.D.C. Chhatral, Ta. Kalol,
              Dist. Gandhinagar, Chhatral 382729,
              Gujarat, India.
            </p>

            <p>Tel : +91 937-740-7922</p>

            <p>Email : info@precisionmass.com</p>

            <p className="cursor-pointer hover:text-white">Career</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b-2 border-white inline-block">
            Subscribe Us
          </h3>

          <p className="text-gray-300 text-sm mb-6">
            Enter your Email Address to get latest news updates
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border border-gray-500 px-4 py-2 text-sm outline-none"
            />

            <button className="bg-[#ff4b2b] px-4 flex items-center justify-center">
              <FaPaperPlane />
            </button>
          </div>

          <div className="mt-6">
            <FaLinkedinIn className="cursor-pointer text-gray-300 hover:text-white" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-4 px-6 flex justify-between items-center">

        <p className="text-sm text-gray-300">
          © 2026 precisionmass.com. All rights reserved.
        </p>

        <button className="bg-[#ff4b2b] p-3">
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
}