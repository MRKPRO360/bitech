'use client';

import Image, { StaticImageData } from 'next/image';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProductHeroProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  reverse?: boolean; // optional — to flip layout
  path?: string;
}

export default function ProductHero({
  title,
  description,
  image,
  alt,
  reverse = false,
  path = '/',
}: ProductHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!heroRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current.querySelector('.img-wrapper'),
            start: 'top 55%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });

        const left = heroRef.current.querySelector('.left-col');
        const right = heroRef.current.querySelector('.right-col');
        const imgWrapper = heroRef.current.querySelector('.img-wrapper');

        if (!left || !right || !imgWrapper) return;

        tl.from(left, {
          y: 50,
          opacity: 0,
          ease: 'power3.out',
          duration: 1.1,
        });

        tl.from(right, {
          y: 50,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
        });
      });

      return () => ctx.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r to-primary from-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="left-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <Para className="mb-8 text-white">{description}</Para>

            <div className="flex flex-col sm:flex-row gap-4">
              <Cta
                text="Request For Price"
                hasLink={true}
                renderIcon={false}
                path="/about/contact-us"
              />
              <Cta
                text="View Demo"
                path={path}
                hasLink={true}
                renderIcon={false}
              />
            </div>
          </div>

          <div className="right-col relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition duration-500 img-wrapper">
              <Image src={image} alt={alt} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
