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
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[#021734] text-3xl font-bold mb-4">
          Our <span className="text-red-500">Products</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mb-12">
          Our comprehensive product line includes pressure gauges,
          differential pressure gauges, diaphragm seals, pressure
          transmitters, temperature gauges, temperature elements and
          related accessories supplied to a variety of process
          industries.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {products.map((product, index) => (
            <div key={index} className="text-center group">

              <div className="relative h-40 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 bg-slate-800 text-white py-3 px-4 flex justify-between items-center group-hover:bg-slate-900 transition">

                <span className="text-sm">{product.name}</span>

                <span className="text-lg">→</span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}