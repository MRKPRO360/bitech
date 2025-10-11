'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import { Rocket, Bug, Clock, BarChart, Shield, Users } from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Increase Efficiency',
    description: 'Automate daily operations and reduce manual work by 70%',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '02',
    title: 'Reduce Errors',
    description: 'Minimize human errors in billing and inventory management',
    icon: <Bug className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Save Time',
    description: 'Quick billing and instant report generation',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '04',
    title: 'Grow Business',
    description: 'Data-driven insights to help expand your pharmacy business',
    icon: <BarChart className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '05',
    title: 'Enhance Security',
    description:
      'Protect sensitive customer and business data with robust security measures',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500',
  },
  {
    step: '06',
    title: 'Boost Collaboration',
    description:
      'Improve teamwork with multi-user access and role-based permissions',
    icon: <Users className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
];

function TransformPharmacy() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Transform" />
        <SecondaryHeading>Transform Your Pharmacy Business</SecondaryHeading>
        <Para className="mt-5">
          Discover how our software can revolutionize your daily operations{' '}
        </Para>
      </div>

      <div
        ref={processRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {transformItems.map((step, index) => (
          <GlassCard key={index} feature={step} />
        ))}
      </div>
    </Container>
  );
}
export default TransformPharmacy;
