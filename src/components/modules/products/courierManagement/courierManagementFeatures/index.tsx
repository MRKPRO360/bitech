'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Users,
  CreditCard,
  Truck,
  MapPin,
  ClipboardList,
  Bell,
} from 'lucide-react';

const courierFeatures = [
  {
    icon: <Truck className="w-10 h-10" />,
    title: 'Shipment Tracking',
    desc: 'Monitor parcels in real time from pickup to delivery.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: 'Route Optimization',
    desc: 'Save time and fuel with smart route planning.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Driver Management',
    desc: 'Assign deliveries, track progress, and manage payments.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: 'Parcel Records',
    desc: 'Keep all shipment and customer records organized.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Billing Automation',
    desc: 'Instant invoicing and cash collection reports.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Bell className="w-10 h-10" />,
    title: 'Notifications',
    desc: 'Automatic alerts for delivery status updates.',
    gradient: 'from-amber-500 to-red-500',
  },
];

function CourierManagementFeatures() {
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
        {courierFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default CourierManagementFeatures;
