'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  BookOpen,
  Briefcase,
  CreditCard,
  FileText,
  Layers,
  Phone,
  Pill,
  Quote,
  Scissors,
  ShoppingCart,
  Truck,
  UserRound,
} from 'lucide-react';
import Cta from '../ui/core/Cta';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/core/Container';
import Dropdown from '../ui/core/Dropdown';

import {
  Laptop, // Software & Apps
  Globe, // Web Application
  Smartphone, // Mobile Application
  Layout, // Websites
  Palette, // UX Design
  Server, // NOC Support
  Headphones, // IT Services (support vibe)
  CheckCircle, // QA, QC & Testing
} from 'lucide-react';

import logo from '@/assets/logo.png';
import Image from 'next/image';
import MobileDrawer from '../ui/core/MobileDrawer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

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

const aboutUsItems = [
  {
    label: 'About',
    href: '/about',
    icon: <BookOpen className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Career',
    href: '/about/career',
    icon: <Briefcase className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Culture',
    href: '/about/culture',
    icon: <Globe className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Team',
    href: '/about/team',
    icon: <UserRound className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Testimonial',
    href: '/about/testimonial',
    icon: <Quote className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Contact Us',
    href: '/about/contact-us',
    icon: <Phone className="w-4 h-4 mr-2" />,
  },
];

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isLoggedIn = true;

  useGSAP(
    () => {
      const inner = navbarRef.current?.querySelector('.navbar-inner');
      if (!navbarRef.current || !inner) return;

      ScrollTrigger.create({
        start: 'top top-=-20', // Start after scrolling 20px
        end: 99999,
        onToggle: (self) => {
          if (self.isActive) {
            // Scrolled down
            gsap.to(navbarRef.current, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              color: '#171717',
              duration: 0.3,
            });
            gsap.to(inner, {
              paddingTop: 2,
              paddingBottom: 2,
              duration: 0.3,
              ease: 'power2.out',
            });
          } else {
            // Scrolled back to top
            gsap.to(navbarRef.current, {
              backgroundColor: 'rgba(255,255,255,0)',
              boxShadow: 'none',
              color: 'inherit',
              duration: 0.3,
            });
            gsap.to(inner, { paddingTop: 0, paddingBottom: 0, duration: 0.3 });
          }
        },
      });
    },
    {
      scope: navbarRef,
    }
  );

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 z-[100] w-full ">
      <div className="navbar-inner">
        <Container>
          <div className="flex items-center justify-between py-4 font-semibold">
            {/* Logo */}
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
            {/* Navlink */}
            <div className="hidden lg:flex items-center gap-6 text-lg font-bold">
              <Link
                href="/"
                className={clsx(
                  'hover:text-primary duration-200',
                  pathname === '/' && 'text-primary'
                )}
              >
                Home
              </Link>

              <Dropdown
                mainLink="/about"
                title="About Us"
                items={aboutUsItems}
              />

              <Dropdown
                mainLink="/services"
                title="Services"
                items={servicesItems}
              />

              <Dropdown
                mainLink="/products"
                title="Products"
                items={productsItems}
              />
              <Link
                className={clsx(
                  'hover:text-primary duration-200',
                  pathname === '/projects' && 'text-primary'
                )}
                href="/projects"
              >
                Projects
              </Link>

              {!isLoggedIn ? (
                <Link
                  href="/admin"
                  className={clsx(
                    'hover:text-primary duration-200',
                    pathname === '/admin' && 'text-primary'
                  )}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/signin"
                  className="hover:text-primary duration-200"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* 3rd item */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:block">
                <Cta
                  hasLink={true}
                  path="/about/contact-us"
                  renderIcon={false}
                  text="Get Started"
                />
              </div>
              {/* <Menu className="lg:hidden" /> */}
              <MobileDrawer />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
export default Navbar;
