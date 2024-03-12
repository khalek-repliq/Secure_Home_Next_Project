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
        <SectionHeader
          direction={"/services"}
          btnText={"See all Services"}
          title={"Our Services"}
        />
        {/* Service Card here */}
        <ServiceCards />

        <SectionHeader
          direction={"/products"}
          btnText={"See all products"}
          title={"Latest products"}
        />
        <ProductsSection />
      </div>
    </div>
  );
}
