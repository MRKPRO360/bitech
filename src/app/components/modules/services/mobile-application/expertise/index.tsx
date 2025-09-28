'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const platforms = [
  {
    name: 'iOS Native',
    icon: '📱',
    level: 95,
    color: 'from-gray-800 to-gray-900',
    features: ['Swift', 'UIKit', 'SwiftUI', 'Xcode'],
    description: "Native performance with Apple's latest technologies",
  },
  {
    name: 'Android Native',
    icon: '🤖',
    level: 92,
    color: 'from-green-600 to-emerald-600',
    features: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
    description: "Material Design excellence on Google's platform",
  },
  {
    name: 'React Native',
    icon: '⚛️',
    level: 90,
    color: 'from-blue-500 to-cyan-500',
    features: ['JavaScript', 'Cross-platform', 'Hot Reload'],
    description: 'Code once, deploy everywhere with native performance',
  },
  {
    name: 'Flutter',
    icon: '💙',
    level: 88,
    color: 'from-blue-400 to-indigo-500',
    features: ['Dart', 'Widget-based', 'Fast Development'],
    description: "Beautiful apps with Google's UI toolkit",
  },
];

function Expertise() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const platformRef = useStaggerChildren<HTMLDivElement>({
    stagger: 0.3,
    y: 20,
  });
  const barsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      barsRef.current.forEach((el, index) => {
        gsap.to(el, {
          width: el.dataset.level + '%',
          duration: 2,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { dependencies: [] }
  );
  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Expertise" />
        <SecondaryHeading>Mobile Application Development</SecondaryHeading>
        <Para className="mt-5">
          Empowering your mobile vision with deep expertise in leading
          cross-platform frameworks.
        </Para>
      </div>

      <div ref={platformRef} className="grid md:grid-cols-2 gap-8">
        {platforms.map((platform, index) => (
          <div key={index} className="group">
            <div className=" rounded-md p-8  shadow-sm hover:border-white/30 transition-all duration-500 h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{platform.icon}</span>
                  <h3 className="text-2xl font-semibold">{platform.name}</h3>
                </div>
                <span className="text-blue-400 font-bold text-lg">
                  {platform.level}%
                </span>
              </div>

              {/* Description */}
              <p className=" mb-6 leading-relaxed">{platform.description}</p>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
                <div
                  ref={addToRefs}
                  data-level={platform.level}
                  className={`bg-gradient-to-r ${platform.color} h-3 rounded-full`}
                  style={{ width: '0%' }}
                />
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 ">
                {platform.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className={`bg-gradient-to-l ${platform.color}  text-white  px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Expertise;
