import Link from "next/link";

import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="bg-lime-500 p-1">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="./AP logo.jpg"
            alt="logo"
          />
          <span className="text-xl text-white font-serif align-text-bottom ml-3">
            Amber Parmaar
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/about" className="text-white">
              About
            </Link>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
            <Link href="/services" className="text-white">
              Services
            </Link>

            <Link href="/contact" className="text-white">
              Contact
            </Link>
            <Link href="/privacypolicy" className="text-white">
              Privacy
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
