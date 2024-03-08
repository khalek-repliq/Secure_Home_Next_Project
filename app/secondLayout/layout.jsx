"use client";
import PageHeader from "@/components/page-header/PageHeader";
import { usePathname } from "next/navigation";

export default function SecondLayout({ children }) {
  const pathName = usePathname();

  

  const pageHeaderContent = () => {
    if (pathName === "/secondLayout/contactUs") {
      return {
        title: "Contact Us",
        desc: "Contact us for any services or queries.",
      };
    } else if (pathName === "/secondLayout/aboutUs") {
      return {
        title: "About Us",
        desc: "Know more about our products and services.",
      };
    } else if (pathName === "/secondLayout/categories") {
      return {
        title: "Categories",
        desc: "Here are all our products category for more easy choose your product.",
      };
    } else if (pathName === "/secondLayout/services") {
      return {
        title: "Services",
        desc: "Here you can find all our services.",
      };
    } else {
      return null;
    }
  };

  return (
    <>
      {pageHeaderContent() == null || (
        <PageHeader
          title={pageHeaderContent().title}
          subTitle={pageHeaderContent().desc}
        />
      )}
      <div className="main_container">{children}</div>
    </>
  );
}
