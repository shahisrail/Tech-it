import Footer from "@/components/Fotter";

import { NavBar } from "@/components/nav";
import Whatsapp from "@/components/WhatsApp/whatsapp";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech It | Home",
  description:
    "Tech It web development app development software development wordpress ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <NavBar></NavBar>
        <main className="  bg-[#F4FAF3]">
          <div className="min-w-screen-xl mx-auto">{children}</div>
        </main>
        <Whatsapp />
        <Footer></Footer> 
      </body>
    </html>
  );
}
