'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseStaggerChildrenOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  once?: boolean;
  start?: string;
  delay?: number;
}

export function useStaggerChildren<T extends HTMLElement>({
  y = 40,
  opacity = 0,
  duration = 1.2,
  stagger = 0.25,
  ease = 'power3.out',
  once = true,
  start = 'top 75%',
  delay = 0,
}: UseStaggerChildrenOptions = {}) {
  const containerRef = useRef<T | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const children = Array.from(containerRef.current.children);

      if (!children.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: once
            ? 'play none none none'
            : 'play none none reverse',
        },
      });

      tl.fromTo(
        children,
        {
          y,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          stagger: {
            amount: stagger * (children.length - 1),
            from: 'start',
          },
          delay,
          onComplete: function () {
            // Force opacity to 1 for all children when animation completes
            gsap.set(children, { opacity: 1 });
          },
        }
      );

      // cleanup to avoid double animations in strict mode
      return () => {
        gsap.set(children, { opacity: 1 });
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: containerRef,
      dependencies: [
        containerRef.current?.children,
        y,
        opacity,
        duration,
        stagger,
        ease,
        once,
        start,
        delay,
      ],
    }
  );

  return containerRef;
}
