import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactActionButton from "../components/ContactActionButton";
import { ToastContainer } from "react-toastify";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Repair Junction - Professional Appliance Repair Services",
  description: "Professional AC, refrigerator, and washing machine repair services. Expert technicians, genuine parts, 24/7 support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
         <ToastContainer />
        {children}
          <ContactActionButton />
        <Footer />
      </body>
    </html>
  );
}
