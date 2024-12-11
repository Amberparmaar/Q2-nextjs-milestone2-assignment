// components/Header.tsx
import Link from "next/link";
import Image from "next/image"; // Importing Next.js Image component
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

export default function Footer() { // Changed Footer to Header
  return (
    <footer className="bg-lime-500 p-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Using Image component for better optimization */}
        <Image
          className="w-10 h-10 rounded-full"
          src="/AP logo.jpg" // Correct path for Next.js public folder
          alt="logo"
          width={40}
          height={40}
        />
        <span className="text-xl text-white font-serif align-text-bottom ml-3">
          Amber Parmaar
        </span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright @ All Rights Reserved.
        </p>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3">
          <a href="#"><FaFacebook className="text-blue-600 items-center text-2xl" /></a>
          <a href="#"><FaLinkedinIn className="text-blue-600 text-2xl" /></a>
          <a href="#"><IoLogoYoutube className="text-red-600 text-2xl" /></a>
          <a href="#"><FaTwitter className="text-blue-400 text-2xl" /></a>
        </div>
      </div>
    </footer>
  );
}
