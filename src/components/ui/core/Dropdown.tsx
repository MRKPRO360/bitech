'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { IDropdownProps } from '@/types';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Dropdown({
  title,
  items,
  mainLink,
  className = '',
}: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useGSAP(
    () => {
      if (menuRef.current) {
        if (isOpen) {
          gsap.fromTo(
            menuRef.current,
            { opacity: 0, y: 90 }, // start slightly above & hidden
            {
              opacity: 1,
              y: 25,
              duration: 0.3,
              ease: 'power2.out',
            }
          );
        } else {
          gsap.to(menuRef.current, {
            opacity: 0,
            y: 90,
            duration: 0.2,
            ease: 'power2.in',
          });
        }
      }
    },
    {
      dependencies: [isOpen],
    }
  );

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
      onMouseEnter={() => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        openTimeout.current = setTimeout(() => setIsOpen(true), 150);
      }}
      onMouseLeave={() => {
        if (openTimeout.current) clearTimeout(openTimeout.current);
        closeTimeout.current = setTimeout(() => setIsOpen(false), 200);
      }}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full cursor-pointer  transition-all duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {mainLink ? (
          <Link
            href={mainLink}
            className="flex items-center gap-2 transition-colors duration-150 hover:text-primary"
          >
            {title}
          </Link>
        ) : (
          <span className="flex items-center gap-2 cursor-default">
            {title}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        ref={menuRef}
        className={`fixed z-50 right-0 -translate-x-[90%] max-w-lg w-md mx-auto  mt-2   origin-top rounded-md bg-white shadow-lg opacity-0`}
        // className={`absolute left-1/2 -translate-x-1/2 z-10 mt-2 min-w-[60vw] origin-top rounded-md bg-white shadow-lg opacity-0`}
        role="menu"
      >
        <div className="py-1">
          <div className="grid grid-cols-1 gap-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-2 text-[16px] transition-colors duration-150 ${
                  index !== items.length - 1 ? 'border-b border-gray-100' : ''
                } hover:text-primary `}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <span className="mr-2 w-5 h-5">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
