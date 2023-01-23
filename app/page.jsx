"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Hero, Feature, Pricing, Testimonials, Blog } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Pricing />
      <Testimonials />
      <Blog />
    </>
  );
}
