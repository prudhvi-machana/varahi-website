export const dynamic = "force-dynamic";

import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface ProductsSectionProps {
  showHeader?: boolean;
}

export default async function ProductsSection({
  showHeader = true,
}: ProductsSectionProps) {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {showHeader && (
          <>
            <h2 className="text-[#021734] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-red-500">Products</span>
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Our comprehensive product line includes pressure gauges,
              differential pressure gauges, diaphragm seals, pressure
              transmitters, temperature gauges, temperature elements and
              related accessories.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {products?.map((product) => (
            <div
              key={product.id}
              className="text-center group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-32 sm:h-36 w-full">

                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain"
                />

              </div>

              <div className="mt-4 bg-slate-800 text-white py-2 px-3 rounded-lg">
                <span className="text-sm">{product.name}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}