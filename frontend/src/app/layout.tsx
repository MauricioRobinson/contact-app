import React from "react";
import "./globals.css";
import "animate.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Providers from "@/providers/providers";

export const metadata = {
  title: "Contact App",
  description: "Welcome to Contact App",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
