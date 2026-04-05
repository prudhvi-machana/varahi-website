import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product: any, index: number) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}