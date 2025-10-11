'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  Bell,
  DollarSign,
  FileText,
  Search,
  Shield,
  Users,
} from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Streamline Publishing',
    description: 'Manage all articles, authors, and categories seamlessly.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Boost Readership',
    description: 'Optimize for SEO and mobile for maximum reach.',
    icon: <Search className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '03',
    title: 'Increase Engagement',
    description: 'Send newsletters and notifications automatically.',
    icon: <Bell className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Collaborate Easily',
    description: 'Authors and editors work together in real time.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    step: '05',
    title: 'Monetize Content',
    description: 'Ad placement and subscription models made simple.',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    step: '06',
    title: 'Ensure Reliability',
    description: 'High uptime and strong security for global readers.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
];

function TransformPublication() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Transform" />
        <SecondaryHeading>Transform Your Publication Website</SecondaryHeading>
        <Para className="mt-5">
          Empower your online store with features designed to enhance user.
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
export default TransformPublication;
