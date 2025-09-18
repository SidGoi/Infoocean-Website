import "./globals.css";
import { Montserrat, Quicksand, DM_Sans, Poppins, Outfit  } from "next/font/google";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"], // Quicksand available weights
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"], // Available DM Sans weights
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"], // Available DM Sans weights
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "700"], // Available DM Sans weights
  subsets: ["latin"],
});

export const metadata = {
  title: "Infoocean",
  description: "Waves of Smart Solution.",
  icons: {
    src: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="px-5 py-2.5 md:px-10 md:py-5 flex flex-col gap-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
