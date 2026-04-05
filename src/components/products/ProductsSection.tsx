import Image from "next/image";

const products = [
  { name: "Pressure Gauge", image: "/products/sample_product.jpg" },
  { name: "Calibration Equipment", image: "/products/sample_product.jpg" },
  { name: "Diaphragm Seal", image: "/products/sample_product.jpg" },
  { name: "Accessories", image: "/products/sample_product.jpg" },
  { name: "Temperature Gauge", image: "/products/sample_product.jpg" },
  { name: "RTD", image: "/products/sample_product.jpg" },
  { name: "Thermocouple", image: "/products/sample_product.jpg" },
  { name: "Thermowell", image: "/products/sample_product.jpg" },
  { name: "Electronic Pressure", image: "/products/sample_product.jpg" },
];

export default function ProductsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-[#021734] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Our <span className="text-red-500">Products</span>
        </h2>

        <p className="text-gray-700 max-w-3xl mb-10 sm:mb-12 text-sm sm:text-base">
          Our comprehensive product line includes pressure gauges,
          differential pressure gauges, diaphragm seals, pressure
          transmitters, temperature gauges, temperature elements and
          related accessories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="text-center group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-32 sm:h-36 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 bg-slate-800 text-white py-2 px-3 flex justify-between items-center rounded-lg group-hover:bg-slate-900 transition">
                <span className="text-sm">{product.name}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}