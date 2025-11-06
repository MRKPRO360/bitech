'use client';

import Container from '@/components/ui/core/Container';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Para from '../ui/core/Para';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import footerImage from '@/assets/footer-map.png';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Cta from '../ui/core/Cta';

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        x: 50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.out',
      });
    },
    {
      scope: footerRef,
    }
  );

  return (
    <footer ref={footerRef} className="bg-grey-light">
      <Container className="py-14 md:py-16 lg:py-20 relative">
        <div className="hidden md:block absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.90]">
          <Image
            className="opacity-80"
            ref={imageRef}
            src={footerImage}
            alt="world map"
            width={800}
            height={800}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-14 lg:pb-16 xl:pb-18 relative z-50">
          {/* 1st col */}
          <div className="">
            <div className="flex items-center gap-2">
              {/* <Image src={logo} alt="bi tech" width={30} height={30} /> */}
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
                {/* <span className="text-lg font-bold">BiTech</span> */}
              </Link>
            </div>
            <Para className="my-2">
              BiTech is a leading IT company specializing in software, web, and
              mobile app development.
            </Para>

            <div className="flex items-center gap-2">
              <div className="bg-grey/80 p-2 rounded-md hover:bg-primary group transition duration-800">
                <FaFacebookF
                  strokeWidth={0}
                  fill="0"
                  className="w-4 h-4  fill-white  group-hover:text-white"
                />
              </div>

              <div className="bg-grey/80 p-2 rounded-md hover:bg-primary group transition duration-800">
                <FaTwitter
                  strokeWidth={0}
                  fill="0"
                  className="w-4 h-4  fill-white  group-hover:text-white"
                />
              </div>

              <div className="bg-grey/80 p-2 rounded-md hover:bg-primary group transition duration-800">
                <FaInstagram
                  strokeWidth={0}
                  fill="0"
                  className="w-4 h-4  fill-white  group-hover:text-white "
                />
              </div>

              <div className="bg-grey/80 p-2 rounded-md hover:bg-primary group transition duration-800">
                <FaLinkedinIn
                  strokeWidth={0}
                  fill="0"
                  className="w-4 h-4  fill-white   group-hover:text-white "
                />
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className="">
            <h4 className="text-2xl font-extrabold mb-3">Explore</h4>

            <div className="flex flex-col text-grey space-y-3 font-semibold">
              <Link
                href="/"
                className="li hover:text-primary duration-300 transition"
              >
                Home
              </Link>
              <Link
                className="li hover:text-primary duration-300 transition"
                href="/about"
              >
                About
              </Link>
              <Link
                className="li hover:text-primary duration-300 transition"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="li hover:text-primary duration-300 transition"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* 3rd col */}
          <div className="">
            <h4 className="text-2xl font-extrabold mb-3">Resources</h4>

            <div className="flex flex-col text-grey space-y-2 font-semibold">
              <Link
                href="/services"
                className="li hover:text-primary duration-300 transition"
              >
                Services
              </Link>
              <Link
                className="li hover:text-primary duration-300 transition"
                href="/testimonials"
              >
                Testimonials
              </Link>
              <Link
                className="li hover:text-primary duration-300 transition"
                href="/products"
              >
                Products
              </Link>
            </div>
          </div>

          {/* 4th col */}
          <div className="">
            <h4 className="text-2xl font-extrabold mb-3">Address</h4>

            <div className="flex flex-col text-grey space-y-3 font-semibold">
              <div className="flex items-center gap-2 flex-wrap">
                <MapPin className="w-5 h-5 text-primary" />
                <span>H#83,R#08,Mirpur11,Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+8801870707018</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@bitech.com.bd</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-100 mb-5" />

        {/* <div className="text-center">
          <Cta text="Back to Top" />
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between ">
          <Para>
            Copyright ©{new Date().getFullYear()}{' '}
            <b className="text-black/80 ">BiTech</b> All rights reserved
          </Para>
          <div className="text-grey">
            <span>Privacy Policy</span> | <span>Terms & Conditions</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
