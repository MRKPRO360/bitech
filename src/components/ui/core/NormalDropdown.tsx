// components/UserDropdown.tsx
'use client';

import { logout } from '@/services/authService';
import { IUser } from '@/types';
import { LayoutDashboard, LogOut, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';

interface INormalDropdown {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  user: IUser;
}

export default function NormalDropdown({
  user,
  setIsLoading,
}: INormalDropdown) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  // outside click handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200  hover:ring-2 hover:ring-primary cursor-pointer transition duration-300"
      >
        <Image
          src={user?.profileImg || 'https://i.pravatar.cc/100?img=5'}
          width={50}
          height={50}
          alt="User"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute -left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
          <Link
            href={'/dashboard/profile'}
            className="flex items-center gap-x-3 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4 text-gray-800" />
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-x-3 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard className="w-4 h-4 text-gray-800" />
            Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-x-3 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-inherit" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
