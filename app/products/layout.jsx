"use client";
import PageHeader from "@/components/page-header/PageHeader";
import { usePathname } from "next/navigation";

export default function ProductLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);

  const showPageHeader = pathName === "/products";

  return (
    <div>
      {showPageHeader && (
        <PageHeader
          title={"All Products"}
          subTitle={"Choose your desire product for secure your home."}
        />
      )}
      <div className="px-3 md:px-5 lg:px-10">{children}</div>
    </div>
  );
}
