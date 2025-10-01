'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import './index.css';
import { IPlan } from '@/types';
import {
  Check,
  X,
  Star,
  Crown,
  Zap,
  Shield,
  Cloud,
  Server,
  Users,
  Lock,
  BarChart,
  Globe,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import Cta from '@/components/ui/core/Cta';

function PricingCard({
  price,
  title,
  period,
  features,
  popular,
}: IPlan & { popular?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  // Feature icons mapping
  const featureIcons = {
    Bandwidth: <Globe className="w-4 h-4" />,
    Speed: <Zap className="w-4 h-4" />,
    Storage: <Server className="w-4 h-4" />,
    Website: <Globe className="w-4 h-4" />,
    Users: <Users className="w-4 h-4" />,
    Support: <Shield className="w-4 h-4" />,
    Security: <Lock className="w-4 h-4" />,
    Analytics: <BarChart className="w-4 h-4" />,
    Data: <Cloud className="w-4 h-4" />,
  };

  const getFeatureIcon = (featureName: string) => {
    const key = Object.keys(featureIcons).find((iconKey) =>
      featureName.toLowerCase().includes(iconKey.toLowerCase())
    );
    return (
      featureIcons[key as keyof typeof featureIcons] || (
        <Star className="w-4 h-4" />
      )
    );
  };

  const getPlanIcon = () => {
    if (popular) return <Crown className="w-6 h-6 text-yellow-600" />;
    if (title.includes('Expert'))
      return <Zap className="w-6 h-6 text-blue-600" />;
    if (title.includes('Advanced'))
      return <Shield className="w-6 h-6 text-green-600" />;
    return <Star className="w-6 h-6 text-gray-600" />;
  };

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to('.gcard__inner', {
      duration: 0.6,
      ease: 'power2.inOut',
      rotateY: 180,
    })
      .to(
        '.feature-item',
        {
          x: 5,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: 'power2.out',
        },
        0.2
      )
      .to(
        '.plan-icon',
        {
          rotation: 360,
          scale: 1.1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        0
      );

    // Animate checkmarks and crosses
    gsap.to('.check-icon', {
      scale: 1.2,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      stagger: 0.1,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to('.gcard__inner', {
      duration: 0.6,
      ease: 'power2.inOut',
      rotateY: 0,
    })
      .to(
        '.feature-item',
        {
          x: 0,
          opacity: 0.8,
          stagger: 0.02,
          duration: 0.2,
          ease: 'power2.out',
        },
        0
      )
      .to(
        '.plan-icon',
        {
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
        0
      );
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      className="gperspective relative group"
    >
      {/* Popular Ribbon */}
      {popular && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="bg-yellow-500 text-white px-3 py-1 text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
            <Crown className="w-3 h-3" />
            POPULAR
          </div>
        </div>
      )}

      <div className="gcard__inner">
        {/* Front Side - Features */}
        <div className="gcard__front gcard__face relative overflow-hidden">
          <div className="absolute inset-0 bg-white rounded-lg px-6 flex flex-col justify-center items-center backface-hidden">
            {/* Plan Icon */}
            <div className="mb-4 p-3 bg-gray-100 rounded-2xl border border-gray-200">
              {getPlanIcon()}
            </div>

            <h4 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              {title}
            </h4>

            <ul className="space-y-3 text-sm w-full">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="feature-item flex items-center gap-3 justify-between opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {/* Feature Icon */}
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                      {getFeatureIcon(f.name)}
                    </div>

                    <span className="text-sm font-medium text-gray-700 flex-1">
                      {f.name}
                    </span>
                  </div>

                  {/* Status Icon */}
                  <div className="check-icon">
                    {f.included ? (
                      <div className="p-1 bg-green-100 rounded-full border border-green-200">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="p-1 bg-gray-100 rounded-full border border-gray-200">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <Cta
              className="mt-4 w-full"
              text={'View Pricing'}
              icon={<Zap className="w-4 h-4" />}
            />
          </div>
        </div>

        {/* Back Side - Pricing */}
        <div className="gcard__face gcard__back relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gray-50">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#000_25%,transparent_25%),linear-gradient(-45deg,#000_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#000_75%),linear-gradient(-45deg,transparent_75%,#000_75%)] bg-[size:20px_20px]" />
          </div>

          <div className="absolute inset-0 bg-white/95 rounded-xl p-6 flex flex-col justify-center items-center backface-hidden border border-gray-200">
            {/* Price Display */}
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-gray-100 rounded-2xl border border-gray-200 mb-4">
                {getPlanIcon()}
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-gray-900">{price}</h3>
                <p className="text-lg font-semibold text-gray-800">{title}</p>
                <span className="text-sm text-gray-500 font-medium block">
                  {period}
                </span>
              </div>
            </div>

            {/* Feature Summary */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6 w-full">
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-gray-900">
                      {features.filter((f) => f.included).length}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs">Included</span>
                </div>

                <div className="w-px h-6 bg-gray-300"></div>

                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <X className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-gray-900">
                      {features.filter((f) => !f.included).length}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs">Not Included</span>
                </div>
              </div>
            </div>

            <Cta
              className="mt-4 w-full"
              text="Get Started"
              icon={<Zap className="w-4 h-4" />}
            />

            {/* Trust Badges */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-3 h-3" />
              <span>Secure Payment</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
