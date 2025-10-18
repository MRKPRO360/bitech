'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { IMenuItem } from './dashbaord.config';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import NormalDropdown from '@/components/ui/core/NormalDropdown';
import { useUser } from '@/context/UserContext';

export default function Sidebar({ menu }: { menu: IMenuItem[] }) {
  const [open, setOpen] = useState(false);
  const { user, setIsLoading } = useUser();

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
          ${
            open ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 flex flex-col`}
      >
        <div className="px-8 py-4    border-r border-b border-grey/20 h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="w-24 h-7"
              src={logo}
              alt="bi tech"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <nav className="p-4 space-y-2 border-r border-grey/20 h-full">
          {menu.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </nav>
        <div className="p-4 flex items-center gap-2 border-r border-grey/20">
          <NormalDropdown
            isBottom={true}
            setIsLoading={setIsLoading}
            user={user!}
          />
          <span>{user?.email}</span>
        </div>
      </aside>
    </>
  );
}
