'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import SubHeading from '@/components/ui/core/SubHeading';
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
      {/* <div
        ref={featuresRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {standsItem.map((feature, index) => (
          <div key={index} className="group">
            <div
              className={`bg-gradient-to-br ${feature.gradient}  rounded-md p-8  border border-white/10 hover:border-white/30 transition-all duration-500 h-full hover:transform hover:scale-105`}
            >
              <div className="text-white mb-6">{feature.icon}</div>
              <SubHeading className=" text-white mb-4">
                {feature.title}
              </SubHeading>
              <Para className="text-white">{feature.desc}</Para>
            </div>
          </div>
        ))}
      </div> */}
      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {mobileDevelopmentItems.map((feature, index) => (
          <div
            key={index}
            className="group relative rounded-md shadow-lg hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 h-full"
          >
            <div
              className={`h-full w-full absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-md`}
            />

            <div className="relative p-6 flex flex-col h-full">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <SubHeading className="transition-colors duration-300 mb-2 text-gray-900">
                {feature.title}
              </SubHeading>

              <Para className="text-gray-600">{feature.desc}</Para>
            </div>

            <div
              className={`absolute inset-0 rounded-md border-2 border-transparent group-hover:border-primary/50 transition-all duration-300`}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
export default WhyChooseMobileDevelopment;
