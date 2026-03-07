import HeroCarousel from "@/components/hero/HeroCarousel";
import AboutSection from "@/components/about/AboutSection";
import ProductsSection from "@/components/products/ProductsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <Footer /> 
    </main>
  );
}