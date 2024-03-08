import HomeBanner from "@/components/home-banner/HomeBanner";
import ProductsSection from "@/components/products-section/ProductsSection";

export default function Home() {
  return (
    <div>
      {/* Product display section */}
      <HomeBanner />
      <div className="px-3 md:px-5 lg:px-10">
        <ProductsSection />
      </div>
    </div>
  );
}
