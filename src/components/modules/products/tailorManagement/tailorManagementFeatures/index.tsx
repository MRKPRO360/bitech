'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  BarChart3,
  FileText,
  Mail,
  Scissors,
  Shirt,
  Users,
} from 'lucide-react';

const tailorFeatures = [
  {
    icon: <Scissors className="w-10 h-10" />,
    title: 'Order Tracking',
    desc: 'Manage custom orders and delivery deadlines efficiently.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Customer Profiles',
    desc: 'Save measurements, style preferences, and order history.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: 'Invoice & Billing',
    desc: 'Generate receipts and manage payments digitally.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Shirt className="w-10 h-10" />,
    title: 'Measurement Library',
    desc: 'Store multiple body measurements for repeat customers.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Performance Reports',
    desc: 'Analyze productivity, sales, and customer trends.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Mail className="w-10 h-10" />,
    title: 'SMS/Email Alerts',
    desc: 'Notify customers about order status and delivery times.',
    gradient: 'from-teal-500 to-green-500',
  },
];

function TailorManagementFeatures() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const featuresRef = useStaggerChildren<HTMLDivElement>({
    y: 20,
    stagger: 0.4,
  });

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
        {tailorFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default TailorManagementFeatures;
