import React from "react";
import Link from "next/link";

const menuColumns = [
  [
    {
      heading: "Topwear",
      items: [
        "T-Shirts",
        "Casual Shirts",
        "Formal Shirts",
        "Sweatshirts",
        "Sweaters",
        "Jackets",
        "Blazers & Coats",
        "Suits",
        "Rain Jackets"
      ],
     
    },
    {
      heading: "Indian & Festive Wear",
      items: [
        "Kurtas & Kurta Sets",
        "Sherwanis",
        "Nehru Jackets",
        "Dhotis"
      ],
    
    }
  ],
  [
    {
      heading: "Bottomwear",
      items: [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers"
      ],
     
    },
    {
      heading: "Innerwear & Sleepwear",
      items: [
        "Briefs & Trunks",
        "Boxers",
        "Vests",
        "Sleepwear & Loungewear",
        "Thermals"
      ],
      
    },
    {
      heading: "Plus Size",
      items: [],
      
    }
  ],
  [
    {
      heading: "Footwear",
      items: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals & Floaters",
        "Flip Flops",
        "Socks"
      ],
      
    },
    {
      heading: "Personal Care & Grooming",
      items: [],
      
    },
    {
      heading: "Sunglasses & Frames",
      items: [],
      
    },
    {
      heading: "Watches",
      items: [],
     
    }
  ]
];

const womenMenuColumns = [
  [
    {
      heading: "Indian & Fusion Wear",
      items: [
        "Kurtas & Suits",
        "Kurtis, Tunics & Tops",
        "Sarees",
        "Ethnic Wear",
        "Leggings, Salwars & Churidars",
        "Skirts & Palazzos",
        "Dress Materials",
        "Lehenga Cholis",
        "Dupattas & Shawls",
        "Jackets"
      ]
    },
    {
      heading: "Belts, Scarves & More",
      items: []
    },
    {
      heading: "Watches & Wearables",
      items: []
    }
  ],
  [
    {
      heading: "Western Wear",
      items: [
        "Dresses",
        "Tops",
        "Tshirts",
        "Jeans",
        "Trousers & Capris",
        "Shorts & Skirts",
        "Co-ords",
        "Playsuits",
        "Jumpsuits",
        "Shrugs",
        "Sweaters & Sweatshirts",
        "Jackets & Coats",
        "Blazers & Waistcoats"
      ]
    },
    {
      heading: "Plus Size",
      items: []
    }
  ],
  [
    {
      heading: "Maternity",
      items: []
    },
    {
      heading: "Sunglasses & Frames",
      items: []
    },
    {
      heading: "Footwear",
      items: [
        "Flats",
        "Casual Shoes",
        "Heels",
        "Boots",
        "Sports Shoes & Floaters"
      ]
    },
    {
      heading: "Sports & Active Wear",
      items: [
        "Clothing",
        "Footwear",
        "Sports Accessories",
        "Sports Equipment"
      ]
    }
  ],
  [
    {
      heading: "Lingerie & Sleepwear",
      items: [
        "Bra",
        "Briefs",
        "Shapewear",
        "Sleepwear & Loungewear",
        "Swimwear",
        "Camisoles & Thermals"
      ]
    },
    {
      heading: "Beauty & Personal Care",
      items: [
        "Makeup",
        "Skincare",
        "Premium Beauty",
        "Lipsticks",
        "Fragrances"
      ]
    }
  ]
];

const homeMenuColumns = [
  [
    {
      heading: "Bed Linen & Furnishing",
      items: [
        "Bed Runners",
        "Mattress Protectors",
        "Bedsheets",
        "Bedding Sets",
        "Blankets, Quilts & Dohars",
        "Pillows & Pillow Covers",
        "Bed Covers",
        "Diwan Sets",
        "Chair Pads & Covers",
        "Sofa Covers"
      ]
    },
    {
      heading: "Flooring",
      items: [
        "Floor Runners",
        "Carpets",
        "Floor Mats & Dhurries",
        "Door Mats"
      ]
    }
  ],
  [
    {
      heading: "Bath",
      items: [
        "Bath Towels",
        "Hand & Face Towels",
        "Beach Towels",
        "Towels Set",
        "Bath Rugs",
        "Bath Robes",
        "Bathroom Accessories",
        "Shower Curtains"
      ]
    },
    {
      heading: "Lamps & Lighting",
      items: [
        "Floor Lamps",
        "Ceiling Lamps",
        "Table Lamps",
        "Wall Lamps",
        "Outdoor Lamps",
        "String Lights"
      ]
    }
  ],
  [
    {
      heading: "Home Décor",
      items: [
        "Plants & Planters",
        "Aromas & Candles",
        "Clocks",
        "Mirrors",
        "Wall Décor",
        "Festive Decor",
        "Pooja Essentials",
        "Wall Shelves",
        "Fountains",
        "Showpieces & Vases",
        "Ottoman"
      ]
    },
    {
      heading: "Cushions & Cushion Covers",
      items: []
    },
    {
      heading: "Curtains",
      items: []
    }
  ]
];

const kidsMenuColumns = [
  [
    {
      heading: "Boys Clothing",
      items: [
        "T-Shirts",
        "Shirts",
        "Shorts",
        "Jeans",
        "Trousers",
        "Clothing Sets",
        "Ethnic Wear",
        "Track Pants & Pyjamas",
        "Jacket, Sweater & Sweatshirts",
        "Party Wear",
        "Innerwear & Thermals",
        "Nightwear & Loungewear",
        "Value Packs"
      ]
    }
  ],
  [
    {
      heading: "Girls Clothing",
      items: [
        "Dresses",
        "Tops",
        "Tshirts",
        "Clothing Sets",
        "Lehenga choli",
        "Kurta Sets",
        "Party wear",
        "Dungarees & Jumpsuits",
        "Skirts & shorts",
        "Tights & Leggings",
        "Jeans, Trousers & Capris",
        "Jacket, Sweater & Sweatshirts",
        "Innerwear & Thermals",
        "Nightwear & Loungewear",
        "Value Packs"
      ]
    }
  ],
  [
    {
      heading: "Footwear",
      items: [
        "Casual Shoes",
        "Flipflops",
        "Sports Shoes",
        "Flats",
        "Sandals",
        "Heels",
        "School Shoes",
        "Socks"
      ]
    },
    {
      heading: "Toys & Games",
      items: [
        "Learning & Development",
        "Activity Toys",
        "Soft Toys",
        "Action Figure / Play set"
      ]
    }
  ],
  [
    {
      heading: "Infants",
      items: [
        "Bodysuits",
        "Rompers & Sleepsuits",
        "Clothing Sets",
        "Tshirts & Tops",
        "Dresses",
        "Bottom wear",
        "Winter Wear",
        "Innerwear & Sleepwear",
        "Infant Care"
      ]
    },
    {
      heading: "Home & Bath",
      items: []
    },
    {
      heading: "Personal Care",
      items: []
    }
  ],
  [
    {
      heading: "Kids Accessories",
      items: [
        "Bags & Backpacks",
        "Watches",
        "Jewellery & Hair accessory",
        "Sunglasses",
        "Masks & Protective Gears",
        "Caps & Hats"
      ]
    },
    {
      heading: "Brands",
      items: [
        "H&M",
        "Max Kids",
        "Pantaloons",
        "United Colors Of Benetton Kids",
        "YK",
        "U.S. Polo Assn. Kids",
        "Mothercare",
        "HRX"
      ]
    }
  ]
];

const beautyMenuColumns = [
  [
    {
      heading: "Makeup",
      items: [
        "Lipstick",
        "Lip Gloss",
        "Lip Liner",
        "Mascara",
        "Eyeliner",
        "Kajal",
        "Eyeshadow",
        "Foundation",
        "Primer",
        "Concealer",
        "Compact",
        "Nail Polish"
      ]
    }
  ],
  [
    {
      heading: "Skincare, Bath & Body",
      items: [
        "Face Moisturiser",
        "Cleanser",
        "Masks & Peel",
        "Sunscreen",
        "Serum",
        "Face Wash",
        "Eye Cream",
        "Lip Balm",
        "Body Lotion",
        "Body Wash",
        "Body Scrub",
        "Hand Cream"
      ]
    },
    {
      heading: "Baby Care",
      items: []
    },
    {
      heading: "Masks",
      items: []
    }
  ],
  [
    {
      heading: "Haircare",
      items: [
        "Shampoo",
        "Conditioner",
        "Hair Cream",
        "Hair Oil",
        "Hair Gel",
        "Hair Color",
        "Hair Serum",
        "Hair Accessory"
      ]
    },
    {
      heading: "Fragrances",
      items: [
        "Perfume",
        "Deodorant",
        "Body Mist"
      ]
    }
  ],
  [
    {
      heading: "Appliances",
      items: [
        "Hair Straightener",
        "Hair Dryer",
        "Epilator"
      ]
    },
    {
      heading: "Men's Grooming",
      items: [
        "Trimmers",
        "Beard Oil",
        "Hair Wax"
      ]
    },
    {
      heading: "Beauty Gift & Makeup Set",
      items: [
        "Beauty Gift",
        "Makeup Kit"
      ]
    },
    {
      heading: "Premium Beauty",
      items: []
    },
    {
      heading: "Wellness & Hygiene",
      items: []
    }
  ]
];

function slugify(label, text, skipLabel = false) {
  let slug = text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  if (skipLabel) return "/" + slug;
  return "/" + label.toLowerCase() + "-" + slug;
}

export default function MegaMenu({ label, color }) {
  if (label === "MEN") {
    return (
      <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[800px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 ">
        {menuColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[180px] px-4 border-r last:border-r-0 border-gray-200">
            {column.map((section, secIdx) => (
              <div key={section.heading} className={secIdx > 0 ? "pt-4" : ""}>
                <Link href={slugify(label, section.heading)} className={`${color} font-bold text-base mb-2 block`}>
                  {section.heading}
                </Link>
                {section.items.length > 0 && (
                  <ul className="space-y-1  mb-2">
                    {section.items.map(item => (
                      <li key={item}>
                        <Link
                          href={slugify(label, item)}
                          className="hover:font-extrabold font-semibold cursor-pointer text-gray-900"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (label === "WOMEN") {
    return (
      <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[900px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 ">
        {womenMenuColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[180px] px-4 border-r last:border-r-0 border-gray-200">
            {column.map((section, secIdx) => (
              <div key={section.heading} className={secIdx > 0 ? "pt-4" : ""}>
                <Link href={slugify(label, section.heading)} className={`${color} font-bold text-base mb-2 block`}>
                  {section.heading}
                </Link>
                {section.items.length > 0 && (
                  <ul className="space-y-1  mb-2">
                    {section.items.map(item => (
                      <li key={item}>
                        <Link
                          href={slugify(label, item)}
                          className="hover:font-extrabold font-semibold cursor-pointer text-gray-900"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (label === "HOME") {
    return (
      <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[900px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 ">
        {homeMenuColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[180px] px-4 border-r last:border-r-0 border-gray-200">
            {column.map((section, secIdx) => (
              <div key={section.heading} className={secIdx > 0 ? "pt-4" : ""}>
                <Link href={slugify(label, section.heading)} className={`${color} font-bold text-base mb-2 block`}>
                  {section.heading}
                </Link>
                {section.items.length > 0 && (
                  <ul className="space-y-1  mb-2">
                    {section.items.map(item => (
                      <li key={item}>
                        <Link
                          href={slugify(label, item)}
                          className="hover:font-extrabold font-semibold cursor-pointer text-gray-900"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (label === "KIDS") {
    return (
      <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[1100px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 ">
        {kidsMenuColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[180px] px-4 border-r last:border-r-0 border-gray-200">
            {column.map((section, secIdx) => (
              <div key={section.heading} className={secIdx > 0 ? "pt-4" : ""}>
                <Link href={slugify(label, section.heading)} className={`${color} font-bold text-base mb-2 block`}>
                  {section.heading}
                </Link>
                {section.items.length > 0 && (
                  <ul className="space-y-1  mb-2">
                    {section.items.map(item => (
                      <li key={item}>
                        <Link
                          href={slugify(label, item)}
                          className="hover:font-extrabold font-semibold cursor-pointer text-gray-900"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (label === "BEAUTY") {
    return (
      <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[900px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 ">
        {beautyMenuColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[180px] px-4 border-r last:border-r-0 border-gray-200">
            {column.map((section, secIdx) => (
              <div key={section.heading} className={secIdx > 0 ? "pt-4" : ""}>
                <Link href={slugify(label, section.heading, true)} className={`${color} font-bold text-base mb-2 block`}>
                  {section.heading}
                </Link>
                {section.items.length > 0 && (
                  <ul className="space-y-1  mb-2">
                    {section.items.map(item => (
                      <li key={item}>
                        <Link
                          href={slugify(label, item, true)}
                          className="hover:font-extrabold font-semibold cursor-pointer text-gray-900"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  // Placeholder for other labels
  return (
    <div className="absolute left-1/2 mt-1 top-full z-50 -translate-x-1/2 w-[400px] bg-white shadow-2xl border border-gray-200 rounded-lg flex p-6 items-center justify-center text-lg text-gray-500">
      {label} menu coming soon!
    </div>
  );
}



