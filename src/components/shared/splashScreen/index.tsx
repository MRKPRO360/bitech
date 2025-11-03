'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import './style.css';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const splashRef = useRef(null);
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowSplash(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        localStorage.setItem('hasVisited', 'true');

        gsap.to(splashRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setShowSplash(false);
          },
        });
      },
    });

    tl.fromTo(
      backgroundRef.current,
      {
        background:
          'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
      },
      {
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        duration: 1.2,
      }
    )
      // Logo entrance with enhanced effects
      .fromTo(
        logoRef.current,
        {
          scale: 0,
          opacity: 0,
          rotationY: -180,
          filter: 'blur(10px)',
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      )
      // Subtle floating animation
      .to(logoRef.current, {
        y: -10,
        duration: 0.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
      })
      // Final emphasis
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1,
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Animated background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"
      />

      {/* Optional particles/background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
      </div>

      {/* Logo Container with enhanced styling */}
      <div className="relative z-10">
        <Image
          ref={logoRef}
          src={logo}
          alt="bi tech"
          width={80}
          height={80}
          className="drop-shadow-2xl filter brightness-110"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
          }}
        />

        {/* Optional loading indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-loading" />
          </div>
        </div>
      </div>
    </div>
  );
}
