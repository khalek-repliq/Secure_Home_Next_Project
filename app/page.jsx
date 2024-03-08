import HomeBanner from "@/components/home-banner/HomeBanner";
import ProductsSection from "@/components/products-section/ProductsSection";
import SectionHeader from "@/components/section-header/SectionHeader";
import ServiceCards from "@/components/service-cards/ServiceCards";

export default function Home() {
  return (
    <div>
      {/* Product display section */}
      <HomeBanner />
      <div className="main_container">
        <ProductsSection />
        <SectionHeader>Our Services</SectionHeader>
        <ServiceCards />
      </div>
    </div>
  );
}
