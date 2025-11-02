// components/UserDropdown.tsx
'use client';

import { logout } from '@/services/authService';
import { IUser } from '@/types';
import clsx from 'clsx';
import { LayoutDashboard, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import avatar from '@/assets/avatar.png';

interface INormalDropdown {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  user: IUser;
  isBottom?: boolean;
}

export default function NormalDropdown({
  user,
  setUser,
  setIsLoading,
  isBottom = false,
}: INormalDropdown) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
    setUser(null);
    setIsLoading(false);
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
          src={(user?.profileImg as string) || avatar}
          width={50}
          height={50}
          alt="User"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={clsx(
            'absolute  transform mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50',
            isBottom
              ? '-top-1/2 -translate-y-1/2 left-1/2 translate-x-1/4'
              : '-left-1/2 -translate-x-1/2 '
          )}
        >
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
