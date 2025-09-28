'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { IMenuItem } from './dashbaord.config';

export default function SidebarItem({ item }: { item: IMenuItem }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div>
      {item.children ? (
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
        >
          <span className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
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
          <Icon className="h-5 w-5" />
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
