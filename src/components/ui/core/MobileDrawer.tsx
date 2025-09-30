import { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  Laptop,
  Layers,
  Layout,
  Palette,
  Pill,
  Scissors,
  Server,
  ShoppingCart,
  Smartphone,
  Truck,
} from 'lucide-react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Dropdown from './Dropdown';

const servicesItems = [
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: <Laptop className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Web Application',
    href: '/services/web-application',
    icon: <Globe className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Mobile Application',
    href: '/services/mobile-application',
    icon: <Smartphone className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Websites',
    href: '/services/websites',
    icon: <Layout className="w-4 h-4 mr-2" />,
  },

  {
    label: 'UX Design',
    href: '/services/ux-design',
    icon: <Palette className="w-4 h-4 mr-2" />,
  },
  {
    label: 'NOC Support',
    href: '/services/noc-support',
    icon: <Server className="w-4 h-4 mr-2" />,
  },
  {
    label: 'IT Services',
    href: '/services/it-services',
    icon: <Headphones className="w-4 h-4 mr-2" />,
  },
  {
    label: 'QA, QC & Testing',
    href: '/services/qa-qc-testing',
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },
];

const productsItems = [
  {
    label: 'School Management System',
    href: '/products/school-management-system',
    icon: <BookOpen className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Pharmacy Software',
    href: '/products/pharmacy-software',
    icon: <Pill className="w-4 h-4 mr-2" />,
  },
  {
    label: 'POS Management',
    href: '/products/pos-management',
    icon: <CreditCard className="w-4 h-4 mr-2" />,
  },
  {
    label: 'ERP Software',
    href: '/products/erp-software',
    icon: <Layers className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Tailor Management',
    href: '/products/tailor-management',
    icon: <Scissors className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Courier Management',
    href: '/products/courier-management',
    icon: <Truck className="w-4 h-4 mr-2" />,
  },
  {
    label: 'E-Commerce Website',
    href: '/products/e-commerce-website',
    icon: <ShoppingCart className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Publication Website',
    href: '/products/publication-website',
    icon: <FileText className="w-4 h-4 mr-2" />,
  },
];

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer when clicking outside
  useEffect(() => {
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

    // Close on escape key press
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
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
      {isOpen && <div className="fixed inset-0 bg-transparent z-40" />}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 left-0 min-h-screen w-full bg-light-bg bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
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
        <nav className="p-4 ext-base sm:text-lg">
          <ul className="space-y-4">
            <div className="flex flex-col lg:hidden  gap-6 t font-bold">
              <Link href="/" className="hover:text-primary duration-200">
                Home
              </Link>
              <Link className="hover:text-primary duration-200" href="/about">
                About Us
              </Link>

              <Dropdown
                mainLink="/services"
                title="Services"
                items={servicesItems}
              />
              <Link className="" href="/projects">
                Projects
              </Link>
              <Dropdown
                mainLink="/products"
                title="Products"
                items={productsItems}
              />
              <Link className="" href="/company">
                Company
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;
