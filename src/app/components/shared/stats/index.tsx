'use client';

import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  id: number;
  value: number;
  label: string;
  labelColor: string; // color for the <p> label
  accentColor: string; // color for the number + ball
};

const stats: Stat[] = [
  {
    id: 1,
    value: 250,
    label: 'Projects Completed',
    labelColor: '#374151',
    accentColor: '#ff5d22',
  },
  {
    id: 2,
    value: 120,
    label: 'Happy Clients',
    labelColor: '#334155',
    accentColor: '#06b6d4',
  },
  {
    id: 3,
    value: 50,
    label: 'Team Members',
    labelColor: '#1f2937',
    accentColor: '#8b5cf6',
  },
  {
    id: 4,
    value: 10,
    label: 'Years of Experience',
    labelColor: '#111827',
    accentColor: '#10b981',
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const statRefs = useRef<HTMLDivElement[]>([]);
  const ballRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // scope animations to this component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: 'top 80%',
          // toggleActions: 'play none none reverse' // default is fine
        },
      });

      // reveal cards with slight stagger
      tl.from(statRefs.current, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // floating balls: start as soon as the reveal runs; make them loop
      tl.to(
        ballRefs.current,
        {
          y: -14,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 1.2,
          stagger: { each: 0.25 },
        },
        '<' // start at same time as last animation step
      );
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-grey-blue">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.id}
            ref={(el) => {
              if (el) statRefs.current[idx] = el;
            }}
            className="relative flex flex-col items-center p-4"
          >
            {/* animated little ball (absolute) */}
            <div
              ref={(el) => {
                if (el) ballRefs.current[idx] = el;
              }}
              style={{ backgroundColor: stat.accentColor }}
              className="absolute -top-3 right-8 w-3 h-3 rounded-full shadow-md"
              aria-hidden
            />

            {/* Number */}
            <h3
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
              style={{ color: stat.accentColor }}
            >
              <CountUp end={stat.value} duration={2} enableScrollSpy />
              {/* CountUp will start when visible */}
              <span
                className="ml-1 text-xl align-super"
                style={{ color: stat.accentColor }}
              >
                +
              </span>
            </h3>

            {/* Label with its own color */}
            <p className="mt-2 font-medium" style={{ color: stat.labelColor }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
