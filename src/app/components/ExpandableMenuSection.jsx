import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

/**
 * ExpandableMenuSection
 * Props:
 * - title: string
 * - children: ReactNode (submenu items)
 * - defaultOpen: boolean (optional)
 * - onClick: function (optional)
 */
export default function ExpandableMenuSection({ title, children, defaultOpen = false, onClick }) {
  const [open, setOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    if (onClick) onClick(!open);
  };

  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-3 px-4 font-semibold text-gray-800 focus:outline-none hover:bg-gray-50"
        onClick={handleToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        {open ? (
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        {open && <div className="pl-6 pb-2">{children}</div>}
      </div>
    </div>
  );
}
