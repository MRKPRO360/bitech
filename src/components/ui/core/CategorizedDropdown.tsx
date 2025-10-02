'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { IDropdownProps } from '@/types';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';

export default function CategorizedDropdown({
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

  const categorizedItems = items.reduce((acc, item) => {
    const category = item.tag || 'Other';

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

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
              y: 35,
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
        className="flex items-center justify-between w-full cursor-pointer rounded-lg transition-all duration-200"
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
        className="fixed z-50 left-1/2 -translate-x-1/2 w-full container origin-top  opacity-0"
        role="menu"
      >
        <div
          className={clsx(
            `bg-white rounded-md shadow-md grid grid-cols-1 gap-6 p-5 `,
            Object.keys(categorizedItems).length > 2
              ? 'sm:grid-cols-3  justify-between'
              : 'sm:grid-cols-2 '
          )}
        >
          {Object.entries(categorizedItems)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([category, categoryItems], idx) => (
              <div
                key={idx}
                className={clsx(
                  'pr-4',

                  (idx + 1) %
                    (Object.keys(categorizedItems).length > 2 ? 3 : 2) !==
                    0 && 'sm:border-r-2 sm:border-gray-100'
                )}
              >
                <h4 className="font-bold text-grey mb-2 px-2 ">{category}</h4>
                <div className="flex flex-col gap-2">
                  {categoryItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-2 py-2 text-[16px] transition-colors duration-150 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && (
                        <span className="mr-2 w-5 h-5">{item.icon}</span>
                      )}
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
