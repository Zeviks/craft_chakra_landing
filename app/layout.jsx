"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "../components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
