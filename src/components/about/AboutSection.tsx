export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[#001C3D] text-3xl font-bold mb-6">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Varahi Engineering is committed to delivering high-precision
          manufacturing solutions with a focus on quality, reliability,
          and innovation. With modern machinery and experienced
          engineers, we provide machining services that meet the
          highest industry standards.
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
          Our mission is to support industries with accurate and
          efficient production capabilities. From prototype
          development to large-scale manufacturing, we strive to
          maintain excellence in every component we produce.
        </p>

      </div>

    </section>
  );
}