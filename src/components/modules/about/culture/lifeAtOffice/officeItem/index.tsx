'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leftItems = [
  {
    id: 1,
    icon: '🏢',
    gradient: 'from-blue-400 to-purple-500',
    x: -200,
    y: -200,
  },
  {
    id: 2,
    icon: '☕',
    gradient: 'from-green-400 to-blue-500',
    x: -200,
    y: 200,
  },
];

const rightItems = [
  {
    id: 3,
    icon: '🎯',
    gradient: 'from-orange-400 to-red-500',
    x: 200,
    y: -200,
  },
  {
    id: 4,
    icon: '🌱',
    gradient: 'from-purple-400 to-pink-500',
    x: 200,
    y: 200,
  },
];

export default function OfficeItem() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!targets.length || !containerRef.current) return;

      const fromValues = [...leftItems, ...rightItems].map((c) => ({
        x: c.x,
        y: c.y,
      }));

      gsap.fromTo(
        targets,
        {
          x: (i) => fromValues[i].x,
          y: (i) => fromValues[i].y,
          opacity: 0,
          scale: 0.85,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'back.out(1.4)',
          stagger: { each: 0.12, from: 'start' }, // nice ripple
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-4">
      {/* Left Column */}
      <div className="space-y-4">
        {leftItems.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className={`bg-gradient-to-br ${card.gradient} rounded-2xl h-48 flex items-center justify-center text-white text-4xl`}
          >
            {card.icon}
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-4 mt-8">
        {rightItems.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[i + leftItems.length] = el;
            }}
            className={`bg-gradient-to-br ${card.gradient} rounded-2xl h-48 flex items-center justify-center text-white text-4xl`}
          >
            {card.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
