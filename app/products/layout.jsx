import PageHeader from "@/components/page-header/PageHeader";

export default function ProductLayout({ children }) {
  return (
    <div>
      <PageHeader
        title={"All Products"}
        subTitle={"Choose your desire product for secure your home."}
      />
      <div className="px-3 md:px-5 lg:px-10">{children}</div>
    </div>
  );
}
