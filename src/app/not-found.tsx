'use client';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Cta from '@/components/ui/core/Cta';
import { useRouter } from 'next/navigation';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';

const Custom404: NextPage = () => {
  const birdRef = useRef<SVGSVGElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (birdRef.current && shapesRef.current && textRef.current) {
      const tl = gsap.timeline();

      // Bird animation
      tl.fromTo(
        birdRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
      )
        .to(
          birdRef.current.querySelector('#bird-wing'),
          {
            rotation: 10,
            transformOrigin: 'center center',
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: 'sine.inOut',
          },
          '-=0.5'
        )
        .to(
          birdRef.current,
          {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'sine.inOut',
          },
          '-=0.5'
        );

      // Shapes animation
      const shapes = shapesRef.current.children;
      gsap.fromTo(
        shapes,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'elastic.out(1, 0.5)',
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | BT Tech</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-indigo-100 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-text/40 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-text/20 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/30 rounded-lg opacity-30 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/50 rounded-full opacity-50"></div>
        </div>

        <div className="text-center max-w-md z-10">
          {/* Animated Bird SVG */}
          <div className="mb-8 flex justify-center">
            <svg
              ref={birdRef}
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="drop-shadow-lg"
            >
              {/* Bird Body */}
              <ellipse
                cx="50"
                cy="50"
                rx="25"
                ry="15"
                fill="#ff5d22"
                stroke="#ddd"
                strokeWidth="2"
              />

              {/* Bird Head */}
              <circle
                cx="70"
                cy="45"
                r="12"
                fill="#ff5d22"
                stroke="#ddd"
                strokeWidth="2"
              />

              {/* Bird Eye */}
              <circle cx="73" cy="43" r="3" fill="#1E293B" />

              {/* Bird Beak */}
              <polygon points="80,45 85,43 80,41" fill="#F59E0B" />

              {/* Bird Wing */}
              <path
                id="bird-wing"
                d="M40,45 Q30,35 35,25 Q45,30 40,45"
                fill="#ff5d22"
                stroke="#ddd"
                strokeWidth="1.5"
              />

              {/* Bird Tail */}
              <path
                d="M25,50 Q15,55 20,60 Q30,55 25,50"
                fill="#ff5d22"
                stroke="#ddd"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Animated Text Content */}
          <div ref={textRef}>
            <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
            <SecondaryHeading>Oops! Page Not Found</SecondaryHeading>
            <Para className="mt-5 mb-10">
              The page you&apos;re looking for seems to have flown away.
              Don&apos;t worry, our little bird will help you find your way
              back.
            </Para>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Cta
                renderIcon={false}
                hasLink={true}
                text="Return To Home"
                path="/"
              />
              <Cta
                outline={true}
                hasLink={true}
                text="Go Back"
                onClick={() => router.back()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
