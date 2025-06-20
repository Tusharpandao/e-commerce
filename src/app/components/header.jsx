"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { CircleUserRound, ShoppingBag, Heart, Menu } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import MobileDrawer from "./MobileDrawer";
import MegaMenu from "./megaMenu";

const navLinks = [
  { label: "MEN", href: "/shop/men", color: "text-blue-600" },
  { label: "WOMEN", href: "/shop/women", color: "text-pink-600" },
  { label: "KIDS", href: "/shop/kids", color: "text-yellow-600" },
  { label: "HOME", href: "/shop/home-living", color: "text-green-600" },
  { label: "BEAUTY", href: "/shop/beauty", color: "text-purple-600" },
];

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileTimeout = useRef();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleProfileEnter = () => {
    if (profileTimeout.current) clearTimeout(profileTimeout.current);
    setProfileOpen(true);
  };
  const handleProfileLeave = () => {
    profileTimeout.current = setTimeout(() => {
      setProfileOpen(false);
    }, 120);
  };

  return (
    <header className="fixed w-full top-0 z-40 bg-white shadow-md h-16">
      <nav className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Mobile/Tablet: Hamburger + Logo + Icons */}
        <div className="flex items-center w-full justify-between lg:hidden">
          <button className="p-2" onClick={() => setDrawerOpen(true)}>
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
          <Link href="/" className="font-bold text-xl tracking-tight">
            Urbane Cart
          </Link>
          <span className="flex items-center space-x-6">
            <Link href="/wishlist">
              <Heart className="h-6 w-6 text-gray-900" />
            </Link>
            <Link href="/cart">
              <ShoppingBag className="h-6 w-6 text-gray-900" />
            </Link>
          </span>
        </div>
        {/* Desktop: Myntra-style Navbar */}
        <div className="hidden lg:flex w-full items-center justify-between h-full">
          {/* Left: Logo */}
          <Link href="/" className="font-bold h-full flex items-center text-xl tracking-tight">
            Urbane Cart
          </Link>
          {/* Center: Nav Links */}
          <div className="flex-1 flex justify-center h-full">
            <div className="flex space-x-8 font-bold tracking-wide text-xs  h-full items-stretch">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className={`relative flex flex-col items-stretch justify-end h-full cursor-pointer ${
                    activeMenu === link.label
                      ? "border-b-4 " + link.color
                      : "border-b-4 border-transparent"
                  }`}
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center h-full px-2 transition-colors duration-150 font-bold `}
                  >
                    {link.label}
                  </Link>
                  {activeMenu === link.label && <MegaMenu label={link.label} color={link.color} />}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Profile, Wishlist, Bag */}
          <div className="flex items-center space-x-8 h-full">
            {/* Profile */}
            <div
              className={`relative flex flex-col items-center justify-center h-full cursor-pointer group ${
                activeMenu === "PROFILE" ? "border-b-4 border-pink-400" : ""
              }`}
              onMouseEnter={() => setActiveMenu("PROFILE")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <CircleUserRound className="h-6 w-6 text-gray-900 group-hover:text-pink-600" />
              <span className="text-xs font-bold mt-1 tracking-wide group-hover:text-pink-600 ">
                Profile
              </span>
              {activeMenu === "PROFILE" && (
                <div className="absolute left-1/2 top-full mt-1 z-50 -translate-x-1/2">
                  <ProfileDropdown />
                </div>
              )}
            </div>
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="flex flex-col items-center justify-center h-full text-gray-900 hover:text-pink-600"
            >
              <Heart className="h-6 w-6" />
              <span className="text-xs font-semibold mt-1">Wishlist</span>
            </Link>
            {/* Bag */}
            <Link
              href="/cart"
              className="flex flex-col items-center justify-center h-full text-gray-900 hover:text-pink-600"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xs font-semibold mt-1">Bag</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
