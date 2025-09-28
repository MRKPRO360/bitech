'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { FaChevronRight } from 'react-icons/fa';

// Utility to make slugs readable
const formatSegment = (segment: string) => {
  return segment
    .replace(/-/g, ' ') // turn dashes into spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-base font-bold">
      <ol className="flex gap-2">
        <li>
          <Link href="/" className="hover:text-primary duration-200">
            Home
          </Link>
        </li>

        {segments.map((segment, i) => {
          const href = '/' + segments.slice(0, i + 1).join('/');
          const isLast = i === segments.length - 1;

          return (
            <Fragment key={href}>
              <div className="flex items-center gap-2">
                <FaChevronRight className="text-primary" />
                <li>
                  {isLast ? (
                    <span className="hover:text-primary transition duration-200">
                      {formatSegment(segment)}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="hover:text-primary duration-200 transition "
                    >
                      {formatSegment(segment)}
                    </Link>
                  )}
                </li>
              </div>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
