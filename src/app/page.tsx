"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div
      className="text-center py-10 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-yellow-500">
        Welcome to My Website
      </h1>
      <p className="mt-4 text-lg text-black">
        This is the homepage. Navigate to other pages using the links above.
      </p>
    </div>
  );
}
