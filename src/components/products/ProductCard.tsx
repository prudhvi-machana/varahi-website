import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
}

export default function ProductCard({
  title,
  subtitle,
  image,
  specs,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md border">

      {/* Content */}
      <div className="p-6 flex gap-6">

        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="object-contain"
        />

        <div>

          <h3 className="font-semibold text-lg mb-1">
            {title}
          </h3>

          <p className="text-red-500 text-sm mb-3">
            {subtitle}
          </p>

          <ul className="text-sm text-gray-700 space-y-1">
            {specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

        </div>

      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white flex justify-between items-center px-6 py-3 text-sm">

        <button>⬇ Data sheet</button>

        <button className="text-red-400">
          Read More →
        </button>

      </div>

    </div>
  );
}