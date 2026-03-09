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
  metadataBase: new URL("https://repairjunction.com"),

  title: {
    default: "Repair Junction",
    template: "%s | Repair Junction",
  },

  description:
    "Repair Junction provides professional AC, refrigerator, and washing machine repair services with certified technicians.",

  keywords: [
    "AC repair",
    "refrigerator repair",
    "washing machine repair",
    "home appliance repair",
    "repair junction"
  ],

  authors: [{ name: "Repair Junction" }],

  openGraph: {
    title: "Repair Junction",
    description:
      "Professional repair services for AC, refrigerator and washing machines.",
    url: "https://repairjunction.com",
    siteName: "Repair Junction",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <meta name="google-site-verification" content="y9XQekd4G0SbN_v3HZ3h9ztjsc6uI7WsWUbjFsPDOy4" />
      </head>
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
