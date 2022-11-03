import "./globals.css";
import { Poppins } from "@next/font/google";
import { ReactNode } from "react";
import Navigation from "./components/navigation";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: "normal",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
