import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ExpandableMenu from './ExpandableMenu';
import {
  aboutUsItems,
  productsItems,
  projectsItems,
  servicesItems,
} from '@/components/shared/Navbar/navbar.const';
import { IUser } from '@/types';
import NormalDropdown from './NormalDropdown';

interface IMoblieDrawer {
  user: IUser | null;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const MobileDrawer = ({ user, setIsLoading }: IMoblieDrawer) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const drawer = document.getElementById('mobile-drawer');
        const button = document.getElementById('mobile-menu-button');

        if (
          drawer &&
          button &&
          !drawer.contains(event.target as Node) &&
          !button.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden ">
      {/* Menu Button */}
      <button
        id="mobile-menu-button"
        onClick={() => setIsOpen(true)}
        className="p-2 cursor-pointer transition duration-300 hover:text-primary "
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed overflow-y-auto top-0 left-0 h-screen max-h-screen w-full bg-light-bg bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="transition duration-300  hover:text-primary cursor-pointer"
            aria-label="Close menu"
          >
            <X className="text-xl" />
          </button>
        </div>

        {/* Drawer Content */}
        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <ul className="space-y-4">
            <div className="flex flex-col lg:hidden gap-6 text-lg font-semibold text-gray-900">
              <div className="flex gap-5 items-center">
                <Link
                  href="/"
                  className="hover:text-primary duration-200 flex items-center gap-2"
                >
                  <span>
                    <Home />
                  </span>
                  Home
                </Link>

                {user?.email && (
                  <NormalDropdown setIsLoading={setIsLoading} user={user} />
                )}
              </div>

              {!user?.email && (
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/signin"
                  className="hover:text-primary w-full bg-white rounded-lg border border-gray-200 overflow-hidden px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                >
                  Sign In
                </Link>
              )}

              <ExpandableMenu
                setIsOpen={setIsOpen}
                title="About Us"
                isExpanded={expandedMenu === 'about'}
                onToggle={() =>
                  setExpandedMenu(expandedMenu === 'about' ? null : 'about')
                }
                mainLink="/about"
                items={aboutUsItems}
              />

              <ExpandableMenu
                setIsOpen={setIsOpen}
                title="Services"
                isExpanded={expandedMenu === 'services'}
                onToggle={() =>
                  setExpandedMenu(
                    expandedMenu === 'services' ? null : 'services'
                  )
                }
                mainLink="/services"
                items={servicesItems}
              />

              <ExpandableMenu
                setIsOpen={setIsOpen}
                mainLink="/products"
                isExpanded={expandedMenu === 'products'}
                onToggle={() =>
                  setExpandedMenu(
                    expandedMenu === 'products' ? null : 'products'
                  )
                }
                title="Products"
                items={productsItems}
              />

              <ExpandableMenu
                setIsOpen={setIsOpen} // This prop is not used in ExpandableMenu
                mainLink="/projects"
                isExpanded={expandedMenu === 'projects'}
                onToggle={() =>
                  setExpandedMenu(
                    expandedMenu === 'projects' ? null : 'projects'
                  )
                }
                title="Projects"
                items={projectsItems}
              />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;
