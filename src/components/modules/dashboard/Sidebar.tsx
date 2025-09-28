'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { IMenuItem } from './dashbaord.config';
import logo from '@/assets/file.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({ menu }: { menu: IMenuItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-2 fixed top-3 left-3 z-50 bg-white rounded-md shadow"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white  transform transition-transform duration-200 z-40 
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="py-3 px-4  font-bold text-xl border border-grey/20 h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="w-10 h-10"
              src={logo}
              alt="bi tech"
              width={30}
              height={30}
            />
            <span className="text-lg lg:text-xl font-bold">BiTech</span>
          </Link>
        </div>
        <nav className="p-4 space-y-2 border-r border-grey/20 h-full">
          {menu.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
