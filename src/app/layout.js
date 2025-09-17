import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  icons: {
    src: "/favicon.png",
  },
});

export const metadata = {
  title: "Infoocean",
  description: "Waves of Smart Solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="px-5 py-2.5 md:px-10 md:py-5 flex flex-col gap-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
