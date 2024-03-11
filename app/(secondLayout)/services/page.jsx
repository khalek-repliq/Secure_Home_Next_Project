import PageHeader from "@/components/page-header/PageHeader";
import ServiceCards from "@/components/service-cards/ServiceCards";

const Services = () => {
  return (
    <div>
      <PageHeader
        title={"Services"}
        subTitle={"Brows our all services here."}
      />
      <ServiceCards />
    </div>
  );
};

export default Services;
