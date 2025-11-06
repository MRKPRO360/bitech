'use client';
import {
  //  useEffect, useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { IMenuItem } from './dashbaord.config';

export default function SidebarItem({ item }: { item: IMenuItem }) {
  const [open, setOpen] = useState(false);
  const Icon = item?.icon;
  // const sidebarLinkRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       sidebarLinkRef.current &&
  //       !sidebarLinkRef.current.contains(e.target as Node)
  //     ) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

  return (
    <div
    //  ref={sidebarLinkRef}
    >
      {item.children ? (
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <span className="flex items-center gap-2">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
            {item.title}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : (
        <Link
          href={item.href!}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
        >
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          {item.title}
        </Link>
      )}

      {open && item.children && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.title}
              href={child.href!}
              className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
