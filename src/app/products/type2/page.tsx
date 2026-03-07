import ProductGrid from "@/components/products/ProductGrid";

const products = [
  {
    title: "WPS Open Front Process Pressure Gauge",
    subtitle: "WPS Process Pressure Gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm, 115mm",
      "Accuracy: 1%, optional 0.5%",
      "Range: Vac to 36000 psi",
      "Material: SS316",
    ],
  },

  {
    title: "GFS Industrial Pressure Gauge",
    subtitle: "Heavy duty industrial pressure gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm",
      "Accuracy: 1.6%",
      "Range: Vac to 23000 psi",
      "Material: SS316",
    ],
  },
  {
    title: "WPS Open Front Process Pressure Gauge",
    subtitle: "WPS Process Pressure Gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm, 115mm",
      "Accuracy: 1%, optional 0.5%",
      "Range: Vac to 36000 psi",
      "Material: SS316",
    ],
  },

  {
    title: "GFS Industrial Pressure Gauge",
    subtitle: "Heavy duty industrial pressure gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm",
      "Accuracy: 1.6%",
      "Range: Vac to 23000 psi",
      "Material: SS316",
    ],
  },
  {
    title: "WPS Open Front Process Pressure Gauge",
    subtitle: "WPS Process Pressure Gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm, 115mm",
      "Accuracy: 1%, optional 0.5%",
      "Range: Vac to 36000 psi",
      "Material: SS316",
    ],
  },

  {
    title: "GFS Industrial Pressure Gauge",
    subtitle: "Heavy duty industrial pressure gauge",
    image: "/products/sample_product.png",
    specs: [
      "Size: 63mm, 100mm",
      "Accuracy: 1.6%",
      "Range: Vac to 23000 psi",
      "Material: SS316",
    ],
  },
];

export default function Type2Page() {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10">
          Pressure Gauges
        </h1>

        <ProductGrid products={products} />

      </div>

    </section>
  );
}