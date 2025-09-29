'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Zap, Shield, Cloud, Touchpad, Battery, Wifi } from 'lucide-react';

const mobileDevelopmentItems = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Native Performance',
    desc: 'Buttery smooth 60fps animations and instant response times',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'App Store Compliance',
    desc: 'Guaranteed approval with strict adherence to store guidelines',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Touchpad className="w-10 h-10" />,
    title: 'Intuitive UX',
    desc: 'Gesture-based interfaces that feel natural and delightful',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Battery className="w-10 h-10" />,
    title: 'Battery Optimized',
    desc: 'Efficient code that maximizes battery life and performance',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Wifi className="w-10 h-10" />,
    title: 'Offline First',
    desc: 'Apps that work seamlessly with or without internet connection',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Cloud Sync',
    desc: 'Real-time data synchronization across all user devices',
    gradient: 'from-red-500 to-pink-500',
  },
];
function WhyChooseMobileDevelopment() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const featuresRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Crown In Hand" />
        <SecondaryHeading>Why Choose Our Mobile Development?</SecondaryHeading>
        <Para className="mt-5">
          We craft software that not only works beautifully but drives real
          business growth.
        </Para>
      </div>

      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {mobileDevelopmentItems.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default WhyChooseMobileDevelopment;
