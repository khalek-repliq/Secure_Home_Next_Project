import Link from "next/link";

const SecondaryBtn = ({ direction, title, variant = "primary", onClick }) => {
  const style = {
    primary:
      "inline-block primary_btn_bg px-5 py-2 rounded-md text-sm hover:bg-[#2a8a82] duration-150 transition-all",
    secondary: "bg-red-600",
  };

  return (
    <Link href={direction || "#"}>
      <span className={style[variant]} onClick={onClick}>
        {title}
      </span>
    </Link>
  );
};

export default SecondaryBtn;
