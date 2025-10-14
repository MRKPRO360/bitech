'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Cta from '../../ui/core/Cta';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../../ui/core/Container';

import logo from '@/assets/logo.png';
import Image from 'next/image';
import MobileDrawer from '../../ui/core/MobileDrawer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import CategorizedDropdown from '../../ui/core/CategorizedDropdown';
import { useUser } from '@/context/UserContext';
import NormalDropdown from '../../ui/core/NormalDropdown';
import Dropdown from '../../ui/core/Dropdown';
import {
  aboutUsItems,
  productsItems,
  projectsItems,
  servicesItems,
} from './navbar.const';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/redux/hooks';
import { totalCartItemsSelector } from '@/redux/features/cartSlice';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const totalItems = useAppSelector(totalCartItemsSelector);

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
                style={{
                  color: 'black',
                }}
                className="w-24 h-7"
                src={logo}
                alt="bi tech"
                width={30}
                height={30}
              />
              {/* <span className="text-lg lg:text-xl font-bold">BiTech</span> */}
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
            <div>
              <div className="lg:flex text-lg items-center gap-6 hidden font-bold">
                {user?.email && user.role !== 'admin' && (
                  <Link href="/cart" className="flex items-center relative">
                    <ShoppingCart className="w-6 h-6 text-gray-800 transition-colors duration-300 hover:text-primary" />

                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                )}
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

                {user?.role !== 'admin' && (
                  <Cta
                    hasLink={true}
                    path="/about/contact-us"
                    renderIcon={false}
                    text="Get Started"
                  />
                )}
              </div>

              <MobileDrawer
                totalItems={totalItems}
                user={user}
                setIsLoading={setIsLoading}
              />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
export default Navbar;
