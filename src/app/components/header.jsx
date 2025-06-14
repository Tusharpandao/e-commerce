"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "@/components/header.css";

import { CircleUserRound, ShoppingBag , Heart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20 && lastScrollY <= 20) {
        // Scrolling down from top → trigger animation
        setTriggerAnimation(true);
      }

      if (currentScrollY <= 20 && lastScrollY > 20) {
        // Scrolling back to top → reset animation
        setTriggerAnimation(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed w-full top-0 z-50 bg-white shadow-md
        transition-transform duration-500 ease-in-out
        ${triggerAnimation ? "animate-slideDown" : ""}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          Urbane Cart
        </Link>
        <span className="flex space-x-4 font-medium">
          <Link href="Men" className="text-gray-900 hover:text-blue-600">
            Men
          </Link>
          <Link href="Women" className="text-gray-900 hover:text-blue-600">
            Women
          </Link>
          <Link href="/" className="text-gray-900 hover:text-blue-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-900 hover:text-blue-600">
            Shop
          </Link>

          <Link href="/contact" className="text-gray-900 hover:text-blue-600">
            Contact
          </Link>
        </span>

      <span className="flex items-center space-x-6">
  {/* Profile */}
  <ProfileDropdown />
  {/* Wishlist */}
  <Link href="/wishlist" className="flex flex-col items-center text-gray-900 hover:text-blue-600">
    <Heart className="h-6 w-6" />
    <span className="text-xs font-semibold mt-1">Wishlist</span>
  </Link>

  {/* Bag */}
  <Link href="/cart" className="flex flex-col items-center text-gray-900 hover:text-blue-600">
    <ShoppingBag className="h-6 w-6" />
    <span className="text-xs font-semibold mt-1">Bag</span>
  </Link>
</span>

      </nav>
    </header>
  );
}
