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
  Pill,
  CreditCard,
  BarChart3,
  Users,
  Stethoscope,
} from 'lucide-react';

const pharmacyFeatures = [
  {
    icon: <Package className="w-10 h-10" />,
    title: 'Inventory Management',
    desc: 'Track stock levels, manage suppliers, and automate reordering with intelligent inventory control.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Pill className="w-10 h-10" />,
    title: 'Medicine Management',
    desc: 'Complete medicine database with batch tracking, expiry management, and drug interactions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Billing & POS',
    desc: 'Fast and accurate billing system with multiple payment options and receipt printing.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Sales Analytics',
    desc: 'Comprehensive reports and analytics to track sales performance and business growth.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Customer Management',
    desc: 'Maintain customer profiles, purchase history, and loyalty programs.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: 'Prescription Management',
    desc: 'Digital prescription handling with doctor and patient database integration.',
    gradient: 'from-red-500 to-pink-500',
  },
];

function PharmacyFeatures() {
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
        {pharmacyFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default PharmacyFeatures;
