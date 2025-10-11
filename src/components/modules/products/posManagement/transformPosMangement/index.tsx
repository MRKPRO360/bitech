'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  Zap,
  Package,
  Tag,
  UserCheck,
  BarChart,
  TrendingUp,
} from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Boost Sales Speed',
    description: 'Handle more customers in less time with quick billing.',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Prevent Stockouts',
    description: 'Smart alerts and auto-restock features save revenue.',
    icon: <Package className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    step: '03',
    title: 'Optimize Pricing',
    description: 'Dynamic price control for seasonal offers and discounts.',
    icon: <Tag className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '04',
    title: 'Understand Customers',
    description: 'Track purchase history and loyalty program data.',
    icon: <UserCheck className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '05',
    title: 'Make Data-Driven Decisions',
    description: 'Detailed analytics reveal business performance trends.',
    icon: <BarChart className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    step: '06',
    title: 'Grow Profitability',
    description: 'Increase revenue with automation and customer insights.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
];

function TransformPosManagement() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Transform" />
        <SecondaryHeading>
          Transform Your Pos Management Business
        </SecondaryHeading>
        <Para className="mt-5">
          Revolutionize your retail operations with our cutting-edge POS
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
export default TransformPosManagement;
