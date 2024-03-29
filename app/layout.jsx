import { Figtree, PT_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import TenStackQueryWrapper from "@/components/container/TenStackQueryWrapper";

// Figtree
// const inter = Inter({ subsets: ["latin"] });
const font = Figtree({ subsets: ["latin"] });
// const font = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const font = PT_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-100 mt-16 `}>
        <TenStackQueryWrapper>
          {/* Main Navbar Component */}
          <Navbar />
          <div>{children}</div>
          {/* footer */}
          <Footer />
          <Toaster />
        </TenStackQueryWrapper>
      </body>
    </html>
  );
}
