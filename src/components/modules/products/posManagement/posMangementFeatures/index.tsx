'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Package,
  CreditCard,
  BarChart3,
  Users,
  Monitor,
  Shield,
} from 'lucide-react';

const posFeatures = [
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Sales Management',
    desc: 'Handle daily transactions quickly and securely across multiple devices.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: 'Inventory Tracking',
    desc: 'Automatically update stock levels after each sale and prevent shortages.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Customer Loyalty',
    desc: 'Reward repeat buyers and track loyalty points seamlessly.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Sales Reports',
    desc: 'Generate real-time reports and identify your best-selling items.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: 'Multi-Store Support',
    desc: 'Manage multiple branches under one centralized system.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Secure Transactions',
    desc: 'End-to-end encryption ensures safe and reliable payments.',
    gradient: 'from-red-500 to-pink-500',
  },
];

function PosManagementFeatures() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const featuresRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Pharmacy Features" />
        <SecondaryHeading>Powerful Features for Your Pharmacy</SecondaryHeading>
        <Para className="mt-5">
          Everything you need to manage your pharmacy efficiently in one
          integrated platform
        </Para>
      </div>

      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {posFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default PosManagementFeatures;
