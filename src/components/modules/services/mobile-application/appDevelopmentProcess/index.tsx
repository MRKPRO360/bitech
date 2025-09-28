'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import SubHeading from '@/components/ui/core/SubHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Code,
  Shield,
  Touchpad,
  Users,
} from 'lucide-react';

function AppDevelopmentProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Discovery',
      description:
        'Define app objectives, target audience, and platform strategy',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Create intuitive mobile-first designs and user flows',
      icon: <Touchpad className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'Agile development with native or cross-platform technologies',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing on real devices and emulators',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
    },
    {
      step: '05',
      title: 'App Store Deployment',
      description: 'Seamless submission to Apple App Store and Google Play',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      step: '06',
      title: 'Maintenance & Updates',
      description: 'Ongoing support, updates, and feature enhancements',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Process" />
        <SecondaryHeading>Our App Development Process</SecondaryHeading>
        <Para className="mt-5">
          Our transparent process delivers your app on time, on budget, and
          beyond expectations—from strategy to updates.
        </Para>
      </div>

      <div
        ref={processRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {processSteps.map((step, index) => (
          <div key={index} className="group">
            <div
              className={`bg-gradient-to-br ${step.color} rounded-md p-8  transition-all duration-500 h-full hover:transform hover:scale-105 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="text-white/80">{step.icon}</div>
              </div>

              <SubHeading className="text-white mb-4">{step.title}</SubHeading>
              <Para className="text-white mb-6">{step.description}</Para>

              <div
                className={`mt-auto self-start rounded-md flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 group-hover:bg-gradient-to-bl  p-2 ${step.color} shadow-xs hover:shadow-sm cursor-pointer`}
              >
                Learn more <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default AppDevelopmentProcess;
