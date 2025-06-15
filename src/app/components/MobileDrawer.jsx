import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, ChevronDown, CircleUserRound } from "lucide-react";

// Example nav structure (customize as needed)
const navData = [
	{
		label: "Men",
		sub: [
			"Topwear",
			"Indian & Festive Wear",
			"Bottomwear",
			"Innerwear & Sleepwear",
			"Plus Size",
			"Footwear",
			"Personal Care & Grooming",
			"Sunglasses & Frames",
			"Watches",
		],
	},
	{
		label: "Women",
		sub: [
			"Indian & Fusion Wear",
			"Belts, Scarves & More",
			"Watches & Wearables",
			"Western Wear",
			"Plus Size",
			"Maternity",
			"Sunglasses & Frames",
			"Footwear",
		],
	},
	{
		label: "Home",
		sub: ["Decor", "Kitchen", "Bedding", "Bath"],
	},
	{
		label: "Shop",
		sub: ["Offers", "New Arrivals"],
	},
	{
		label: "Contact",
		sub: [],
	},
];

export default function MobileDrawer({ open, onClose }) {
	const [expanded, setExpanded] = useState("");

	const handleExpand = (label) => {
		setExpanded(expanded === label ? "" : label);
	};

    return (
        <div
            className={`fixed inset-0 z-50 transition-all duration-300 ${
                open ? "bg-black/40" : "pointer-events-none"
            }`}
            style={{ display: open ? "block" : "none" }}
            onClick={onClose}
        >
            <aside
                className={`fixed left-0 top-0 h-full w-72 bg-white shadow-lg z-50 transition-transform duration-300 border-r border-gray-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top login/signup section with close icon */}
                <div className="bg-blue-50 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                    <button className="text-pink-600 font-bold text-sm">
                        SIGN UP. LOGIN
                    </button>
                    <button onClick={onClose} aria-label="Close menu">
                        <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </button>
                </div>
                {/* Scrollable content - make the whole aside scrollable except sticky top */}
                <div className="overflow-y-auto h-[calc(100vh-56px)] pb-6">
                    <nav>
                        <ul className="mb-2">
                            {navData.map((item) => (
                                <li key={item.label}>
                                    <button
                                        className="w-full flex items-center justify-between px-4 py-3 font-semibold text-left hover:bg-gray-100"
                                        onClick={() => handleExpand(item.label)}
                                    >
                                        {item.label}
                                        {item.sub.length > 0 ? (
                                            expanded === item.label ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )
                                        ) : null}
                                    </button>
                                    {expanded === item.label && item.sub.length > 0 && (
                                        <ul className="bg-gray-50">
                                            {item.sub.map((sub) => (
                                                <li
                                                    key={sub}
                                                    className="px-8 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                                >
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white px-4">
                            <ul className="text-sm space-y-1">
                                <li className="font-medium">Orders</li>
                                <li>Wishlist</li>
                                <li>Gift Cards</li>
                                <li>Contact Us</li>
                                <li className="flex items-center gap-1">
                                    Urbane Cart Insider{" "}
                                    <span className="border border-red-500 text-red-500 text-[10px] px-1 rounded ml-1 bg-transparent">
                                        New
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    Urbane Studio{" "}
                                    <span className="border border-red-500 text-red-500 text-[10px] px-1 rounded ml-1 bg-transparent">
                                        New
                                    </span>
                                </li>
                               
                            </ul>
                            <hr className="my-2 border-gray-200" />
                            <ul className="text-sm space-y-1">
                                <li>Urbane Credit</li>
                                <li>Coupons</li>
                                <li>Saved Cards</li>
                                <li>Saved VPA</li>
                                <li>Saved Addresses</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        </div>
    );
}
