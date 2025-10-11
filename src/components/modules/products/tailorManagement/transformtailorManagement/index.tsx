'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  FileText,
  User,
  Clock,
  CreditCard,
  TrendingUp,
  Star,
} from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Digitize Orders',
    description: 'No more paper slips — manage every order online.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Personalize Service',
    description: 'Store customer measurements and preferences securely.',
    icon: <User className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '03',
    title: 'Improve Turnaround',
    description: 'Track deadlines and reduce delivery delays.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Streamline Billing',
    description: 'Generate professional invoices and receipts automatically.',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    step: '05',
    title: 'Boost Productivity',
    description: 'Coordinate tasks and tailor workloads efficiently.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    step: '06',
    title: 'Enhance Reputation',
    description: 'Deliver faster, impress clients, and get more referrals.',
    icon: <Star className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
];

function TransformTailorManagement() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Transform" />
        <SecondaryHeading>Transform Tailor Management</SecondaryHeading>
        <Para className="mt-5">
          Our tailor management system streamlines operations, enhances customer
          satisfaction, and provides valuable insights to grow your business.
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
export default TransformTailorManagement;
