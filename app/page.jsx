import HomeBanner from "@/components/home-banner/HomeBanner";
import ProductsSection from "@/components/products-section/ProductsSection";

export default function Home() {
  return (
    <div>
      {/* Home page banner area */}
      <HomeBanner></HomeBanner>

      {/* Product display section */}
      <ProductsSection></ProductsSection>
    </div>
  );
}
