"use client";

import Link from "next/link";

export default function ProfileDropdown() {
  return (
    <div className="relative w-60 p-4 bg-white shadow-lg rounded-md z-50">
      <div className="mb-4">
        <p className="font-semibold">Welcome</p>
        <p className="text-sm text-gray-600">
          To access account and manage orders
        </p>
        <button className="mt-2 text-sm font-bold text-pink-600 border border-pink-600 px-3 py-1 rounded hover:bg-pink-50 transition">
          LOGIN / SIGNUP
        </button>
      </div>

      <ul className="text-sm space-y-2">
        <li><Link href="#" className="dropdown-link">Orders</Link></li>
        <li><Link href="#" className="dropdown-link">Wishlist</Link></li>
        <li><Link href="#" className="dropdown-link">Gift Cards</Link></li>
        <li><Link href="#" className="dropdown-link">Contact Us</Link></li>
        <li className="dropdown-link flex justify-between items-center">
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
  );
}
