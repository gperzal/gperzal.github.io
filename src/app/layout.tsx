import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import ScrollToTop from "../components/helper/ScrollToTop";
import { GoogleTagManager } from "@next/third-parties/google"; 
import "react-toastify/dist/ReactToastify.css";
import "../styles/card.scss";
import "../styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Guido Perez - FullStack Developer",
  description:
    "Este es el portafolio de Guido Perez, un desarrollador full stack con experiencia en bases de datos y soluciones cloud.",
};

// Añadimos tipado para los props
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
