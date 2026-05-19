export const dynamic = "force-dynamic";

import HeroCarousel from "@/components/hero/HeroCarousel";
import AboutSection from "@/components/about/AboutSection";
import ProductsSection from "@/components/products/ProductsSection";
import ClientsSection from "@/components/clients/ClientsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <ClientsSection />
      <Footer /> 
    </main>
  );
}