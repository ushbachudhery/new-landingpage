"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../public/images/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-primary text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={80} height={80} className="h-16 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["About", "Amenities", "Price List", "Gallery", "Brochure", "Book a Site"].map((menu) => (
            <Link href={`/${menu.toLowerCase().replace(/ /g, "-")}`} key={menu}>
              <span className="relative group text-white hover:text-gray-300 transition">
                {menu}
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Contact Info & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-white">+1 234 567 890</span>
          <button className="relative overflow-hidden text-primary bg-white px-4 py-2 rounded hover:shadow-lg group">
            <span className="absolute inset-0 w-full h-full bg-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative">Enquiry Now</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            {["About", "Amenities", "Price List", "Gallery", "Brochure", "Book a Site"].map((menu) => (
              <Link href={`/${menu.toLowerCase().replace(/ /g, "-")}`} key={menu}>
                <span className="text-primary hover:text-gray-600 transition">{menu}</span>
              </Link>
            ))}
            <span className="text-primary mt-4">+1 234 567 890</span>
            <button className="relative overflow-hidden text-white bg-primary px-4 py-2 rounded hover:shadow-lg group">
              <span className="absolute inset-0 w-full h-full bg-gray-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative">Enquiry Now</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
