'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  Rocket,
  Globe,
  Mail,
  BarChart,
  Shield,
  TrendingUp,
} from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Launch Faster',
    description: 'Set up your e-commerce store in days, not weeks.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Sell Everywhere',
    description: 'Reach customers via web, mobile, and social media.',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '03',
    title: 'Automate Marketing',
    description: 'Send smart offers and cart reminders automatically.',
    icon: <Mail className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Track Performance',
    description: 'Analytics dashboard helps optimize conversions.',
    icon: <BarChart className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    step: '05',
    title: 'Secure Payments',
    description: 'Integrated gateways ensure smooth transactions.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    step: '06',
    title: 'Scale with Confidence',
    description: 'Add new products and handle more traffic easily.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
];

function TransformECommereceWebsite() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Transform" />
        <SecondaryHeading>Transform Your E-Commerece Website</SecondaryHeading>
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
export default TransformECommereceWebsite;
