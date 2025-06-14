"use client";

import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProfileDropdown() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-gray-900 hover:text-blue-600 cursor-pointer">
        <CircleUserRound className="h-6 w-6" />
        <span className="text-xs font-semibold mt-1">Profile</span>
      </div>

      {/* DROPDOWN */}
      <div
        className={`
          absolute top-10 right-0 w-60 p-4 bg-white shadow-lg rounded-md z-50
          transition-all duration-300 ease-in-out
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="mb-4">
          <p className="font-semibold">Welcome</p>
          <p className="text-sm text-gray-600">To access account and manage orders</p>
          <button className="mt-2 text-sm font-bold text-pink-600 border border-pink-600 px-3 py-1 rounded hover:bg-pink-50 transition">
            LOGIN / SIGNUP
          </button>
        </div>

        <ul className="text-sm space-y-2">
          <li><Link href="#" className="dropdown-link">Orders</Link></li>
          <li><Link href="#" className="dropdown-link">Wishlist</Link></li>
          <li><Link href="#" className="dropdown-link">Gift Cards</Link></li>
          <li><Link href="#" className="dropdown-link">Contact Us</Link></li>
          <li className="dropdown-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="#">Myntra Insider</Link>
            <span className="text-white text-xs bg-red-500 px-1 py-0.5 rounded">New</span>
          </li>
          <hr />
          <li><Link href="#" className="dropdown-link">Myntra Credit</Link></li>
          <li><Link href="#" className="dropdown-link">Coupons</Link></li>
          <li><Link href="#" className="dropdown-link">Saved Cards</Link></li>
          <li><Link href="#" className="dropdown-link">Saved VPA</Link></li>
          <li><Link href="#" className="dropdown-link">Saved Addresses</Link></li>
        </ul>
      </div>
    </div>
  );
}
