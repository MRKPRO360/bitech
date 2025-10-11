'use client';

import GlassCard from '@/components/shared/glassCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import { Rocket, Truck, MapPin, Eye, Scan, CreditCard } from 'lucide-react';

const transformItems = [
  {
    step: '01',
    title: 'Automate Deliveries',
    description: 'Assign and track parcels with live route updates.',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Cut Delivery Time',
    description: 'Smart route optimization improves driver efficiency.',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '03',
    title: 'Enhance Transparency',
    description: 'Give customers real-time tracking and updates.',
    icon: <Eye className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Eliminate Errors',
    description: 'Barcode scanning reduces parcel mix-ups.',
    icon: <Scan className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    step: '05',
    title: 'Simplify Billing',
    description: 'Generate invoices automatically post-delivery.',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    step: '06',
    title: 'Expand Operations',
    description: 'Scale delivery zones without complexity.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
  },
];

function TransformCourierManagement() {
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
export default TransformCourierManagement;
