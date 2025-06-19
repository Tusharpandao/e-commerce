"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "@/components/header.css";
import { CircleUserRound, ShoppingBag, Heart, Menu } from "lucide-react";
import dynamic from "next/dynamic";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const ProfileDropdown = dynamic(() => import("./ProfileDropdown"), {
  ssr: false,
});

const navLinks = [
  {
    label: "MEN",
    href: "/Men",
    color: "bg-blue-500",
    hoverColor: "hover:text-blue-500",
  },
  {
    label: "WOMEN",
    href: "/Women",
    color: "bg-pink-500",
    hoverColor: "hover:text-pink-500",
  },
  {
    label: "HOME",
    href: "/",
    color: "bg-green-500",
    hoverColor: "hover:text-green-500",
  },
  {
    label: "SHOP",
    href: "/shop",
    color: "bg-yellow-500",
    hoverColor: "hover:text-yellow-500",
  },
  {
    label: "CONTACT",
    href: "/contact",
    color: "bg-purple-500",
    hoverColor: "hover:text-purple-500",
  },
];

export default function Header() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const profileTimeout = useRef();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20 && lastScrollY <= 20) setTriggerAnimation(true);
      if (currentScrollY <= 20 && lastScrollY > 20) setTriggerAnimation(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasMounted]);

  const handleProfileEnter = () => {
    if (profileTimeout.current) clearTimeout(profileTimeout.current);
    setProfileOpen(true);
    setHovered("PROFILE");
  };
  const handleProfileLeave = () => {
    profileTimeout.current = setTimeout(() => {
      setProfileOpen(false);
      setHovered(null);
    }, 120);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white shadow-md transition-none`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Mobile/Tablet: Hamburger + Logo + Icons */}
        <div className="flex items-center w-full justify-between lg:hidden">
          <button className="p-2" onClick={() => setDrawerOpen(true)}>
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
          <Link href="/" className="font-bold text-xl tracking-tight">
            Urbane Cart
          </Link>
          <span className="flex items-center space-x-6">
            <Heart className="h-6 w-6 text-gray-900" />
            <ShoppingBag className="h-6 w-6 text-gray-900" />
          </span>
        </div>
        {/* Desktop: Full Navbar (only visible on large screens) */}
        <>
          <Link
            href="/"
            className="font-bold text-xl tracking-tight hidden lg:block"
          >
            Urbane Cart
          </Link>
          <span className="hidden lg:flex space-x-8 font-bold tracking-wide text-xs uppercase h-full items-stretch">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative flex flex-col items-center justify-end h-full cursor-pointer"
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center h-full px-2 text-gray-900 transition-colors duration-150 ${link.hoverColor}`}
                >
                  {link.label}
                </Link>
                {hovered === link.label && (
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 w-full rounded-full ${link.color}`}
                  ></span>
                )}
              </div>
            ))}
          </span>
          <span className="hidden lg:flex items-center space-x-8 h-full">
            {/* Profile */}
            <div
              className="relative flex flex-col items-center justify-center h-full cursor-pointer group"
              onMouseEnter={handleProfileEnter}
              onMouseLeave={handleProfileLeave}
            >
              <CircleUserRound className="h-6 w-6 text-gray-900 group-hover:text-pink-600" />
              <span className="text-xs font-bold mt-1 tracking-wide uppercase">
                Profile
              </span>
              {hovered === "PROFILE" && (
                <span className="absolute left-0 right-0 bottom-0 h-1 w-full bg-pink-500 rounded-full"></span>
              )}
              {profileOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 z-50">
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
          </span>
        </>
      </nav>
      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
