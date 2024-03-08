import HomeBanner from "@/components/home-banner/HomeBanner";
import ProductsSection from "@/components/products-section/ProductsSection";

export default function Home() {
  return (
    <div>
      {/* Product display section */}
      <HomeBanner />
      <div className="main_container">
        <ProductsSection />
      </div>
    </div>
  );
}
