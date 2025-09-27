'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseFadeUpOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  start?: string;
  delay?: number;
}

export function useFadeUp({
  y = 50,
  duration = 0.8,
  stagger = 0.15,
  once = true,
  delay = 0,
  start = 'top 75%',
}: UseFadeUpOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const elements = ref.current.querySelectorAll<HTMLElement>('*');

      gsap.set(elements, { opacity: 0, y });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out',
        stagger,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once
            ? 'play none none none'
            : 'play none none reverse',
        },
      });
    },
    {
      dependencies: [y, duration, stagger, once, start, delay],
    }
  );

  return ref;
}
