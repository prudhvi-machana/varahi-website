import ProductCard from "./ProductCard";

interface Product {
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
          specs={product.specs}
        />
      ))}

    </div>
  );
}