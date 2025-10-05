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
  FolderKanban,
  Layers,
  Palette,
  Phone,
  Pill,
  Quote,
  Rocket,
  Scissors,
  ShoppingCart,
  Truck,
  UserRound,
} from 'lucide-react';
import Cta from '../ui/core/Cta';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/core/Container';

import {
  Laptop,
  Globe,
  Smartphone,
  Layout,
  Server,
  Headphones,
  CheckCircle,
} from 'lucide-react';

import logo from '@/assets/logo.png';
import Image from 'next/image';
import MobileDrawer from '../ui/core/MobileDrawer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import CategorizedDropdown from '../ui/core/CategorizedDropdown';
import { useUser } from '@/context/UserContext';
import NormalDropdown from '../ui/core/NormalDropdown';
import Dropdown from '../ui/core/Dropdown';

gsap.registerPlugin(ScrollTrigger);

const servicesItems = [
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: <Laptop className="w-4 h-4 mr-2" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Web Application',
    href: '/services/web-application',
    icon: <Globe className="w-4 h-4 mr-2" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Mobile Application',
    href: '/services/mobile-application',
    icon: <Smartphone className="w-4 h-4 mr-2" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Websites',
    href: '/services/websites',
    icon: <Layout className="w-4 h-4 mr-2" />,
    tag: 'Software & Apps',
  },

  {
    label: 'UX Design',
    href: '/services/ux-design',
    icon: <Palette className="w-4 h-4 mr-2" />,
    tag: 'Outsourcing',
  },
  {
    label: 'NOC Support',
    href: '/services/noc-support',
    icon: <Server className="w-4 h-4 mr-2" />,
    tag: 'Outsourcing',
  },
  {
    label: 'IT Services',
    href: '/services/it-services',
    icon: <Headphones className="w-4 h-4 mr-2" />,
    tag: 'Outsourcing',
  },
  {
    label: 'QA, QC & Testing',
    href: '/services/qa-qc-testing',
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
    tag: 'Outsourcing',
  },
];

const productsItems = [
  {
    label: 'School Management System',
    href: '/products/school-management-system',
    icon: <BookOpen className="w-4 h-4 mr-2" />,
    tag: 'Education',
  },
  {
    label: 'Pharmacy Software',
    href: '/products/pharmacy-software',
    icon: <Pill className="w-4 h-4 mr-2" />,
    tag: 'Healthcare',
  },
  {
    label: 'POS Management',
    href: '/products/pos-management',
    icon: <CreditCard className="w-4 h-4 mr-2" />,
    tag: 'Business',
  },
  {
    label: 'ERP Software',
    href: '/products/erp-software',
    icon: <Layers className="w-4 h-4 mr-2" />,
    tag: 'Business',
  },
  {
    label: 'Tailor Management',
    href: '/products/tailor-management',
    icon: <Scissors className="w-4 h-4 mr-2" />,
    tag: 'Business',
  },
  {
    label: 'Courier Management',
    href: '/products/courier-management',
    icon: <Truck className="w-4 h-4 mr-2" />,
    tag: 'Logistics',
  },
  {
    label: 'E-Commerce Website',
    href: '/products/e-commerce-website',
    icon: <ShoppingCart className="w-4 h-4 mr-2" />,
    tag: 'Websites',
  },
  {
    label: 'Publication Website',
    href: '/products/publication-website',
    icon: <FileText className="w-4 h-4 mr-2" />,
    tag: 'Websites',
  },
];

const aboutUsItems = [
  {
    label: 'About',
    href: '/about',
    icon: <BookOpen className="w-4 h-4 mr-2" />,
    tag: 'Company',
  },
  {
    label: 'Career',
    href: '/about/career',
    icon: <Briefcase className="w-4 h-4 mr-2" />,
    tag: 'Company',
  },
  {
    label: 'Culture',
    href: '/about/culture',
    icon: <Globe className="w-4 h-4 mr-2" />,
    tag: 'Company',
  },
  {
    label: 'Team',
    href: '/about/team',
    icon: <UserRound className="w-4 h-4 mr-2" />,
    tag: 'People',
  },
  {
    label: 'Testimonial',
    href: '/about/testimonial',
    icon: <Quote className="w-4 h-4 mr-2" />,
    tag: 'People',
  },
  {
    label: 'Contact Us',
    href: '/about/contact-us',
    icon: <Phone className="w-4 h-4 mr-2" />,
    tag: 'Support',
  },
];

const projectsItems = [
  {
    label: 'Our Projects',
    href: '/projects',
    icon: <FolderKanban className="w-4 h-4 mr-2" />,
  },
  {
    label: 'Our Prebuilt Projects',
    href: '/prebuiltProjects',
    icon: <Rocket className="w-4 h-4 mr-2" />,
  },
];

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { user, setIsLoading } = useUser();

  useGSAP(
    () => {
      const inner = navbarRef.current?.querySelector('.navbar-inner');
      if (!navbarRef.current || !inner) return;

      ScrollTrigger.create({
        start: 'top top+=-40', // Start after scrolling 20px
        end: 99999,
        onToggle: (self) => {
          if (self.isActive) {
            // Scrolled down
            gsap.to(navbarRef.current, {
              backgroundColor: 'rgba(255, 255, 255, .5)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              color: '#171717',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
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

              <CategorizedDropdown
                mainLink="/about"
                title="About Us"
                items={aboutUsItems}
              />

              <CategorizedDropdown
                mainLink="/services"
                title="Services"
                items={servicesItems}
              />

              <CategorizedDropdown
                mainLink="/products"
                title="Products"
                items={productsItems}
              />

              <Dropdown
                title="Projects"
                items={projectsItems}
                mainLink="/projects"
              />
            </div>

            {/* 3rd item */}
            <div className="">
              <div className="lg:flex text-lg items-center gap-6 hidden font-bold">
                {user?.email ? (
                  <NormalDropdown setIsLoading={setIsLoading} user={user} />
                ) : (
                  <Link
                    href="/signin"
                    className="hover:text-primary duration-200"
                  >
                    Sign In
                  </Link>
                )}
                {user?.role === 'customer' && (
                  <Cta
                    hasLink={true}
                    path="/about/contact-us"
                    renderIcon={false}
                    text="Get Started"
                  />
                )}
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
