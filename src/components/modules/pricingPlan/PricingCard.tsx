'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import './index.css';
import { IPlan } from '@/types';
import { Check, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';

function PricingCard({ price, title, period, features }: IPlan) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to('.gcard__inner', {
      duration: 0.3,
      ease: 'power2',
      rotateY: 180,
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to('.gcard__inner', {
      duration: 0.3,
      ease: 'power2',
      rotateY: 0,
    });
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      className="gperspective"
    >
      <div className="gcard__inner">
        <div className="gcard__front  gcard__face">
          <div className="absolute inset-0 bg-white rounded-lg  px-6   flex flex-col justify-center items-center backface-hidden">
            <h4 className="text-xl font-bold mb-3 pt-2">Features</h4>
            <ul className="space-y-2 text-sm text-center">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 justify-center">
                  {f.included ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                  <span className="text-[15px] tracking-wide font-semibold leading-6 text-grey">
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg font-semibold">
              See Price
            </button>
          </div>
        </div>
        <div className="gcard__face gcard__back ">
          <div className="absolute inset-0 bg-white rounded-xl p-6 flex flex-col justify-center items-center backface-hidden">
            <h3 className="text-3xl font-bold text-primary">{price}</h3>
            <p className="mt-2 text-lg font-semibold">{title}</p>
            <span className="text-sm text-gray-500">{period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
