export const dynamic = "force-dynamic";

import ProductsSection from "@/components/products/ProductsSection";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main className="pt-28 sm:pt-25">
      <ProductsSection showHeader={false} />
      <Footer />
    </main>
  );
}