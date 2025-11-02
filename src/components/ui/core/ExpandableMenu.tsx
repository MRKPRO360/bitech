'use client';
import { useRef, Dispatch, SetStateAction } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

interface ExpandableItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface ExpandableMenuProps {
  title: string;
  items: ExpandableItem[];
  mainLink?: string;
  className?: string;
  isExpanded: boolean;
  onToggle: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ExpandableMenu = ({
  title,
  items,
  mainLink,
  className = '',
  isExpanded,
  onToggle,
  setIsOpen,
}: ExpandableMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (isExpanded && contentRef.current) {
        const tl = gsap.timeline();
        tl.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
        tl.fromTo(
          contentRef.current.querySelectorAll('.menu-item'),
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '<'
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isExpanded]);

  return (
    <div
      ref={containerRef}
      className={`w-full bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        {mainLink ? (
          <a
            href={mainLink}
            className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            {title}
          </a>
        ) : (
          <span className="text-lg font-semibold text-gray-900">{title}</span>
        )}

        <button
          onClick={onToggle}
          className="p-2 text-gray-600 hover:text-primary hover:bg-primary/20 rounded-full transition-all duration-200 cursor-pointer"
          aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <div ref={contentRef} className="overflow-hidden">
        <div className="bg-white">
          {items.map((item, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={index}
              href={item.href}
              className="menu-item will-change-transform  flex items-center justify-center px-6 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 group gap-3"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-primary rounded-lg ">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {item.label}
              </span>

              {/* Animated arrow for hover */}
              <ChevronRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;
