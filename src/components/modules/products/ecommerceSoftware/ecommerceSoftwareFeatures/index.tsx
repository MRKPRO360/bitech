'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  CreditCard,
  BarChart3,
  Users,
  Bell,
  Truck,
  ShoppingCart,
} from 'lucide-react';

const ecommerceFeatures = [
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: 'Product Management',
    desc: 'Easily add, edit, and organize your product catalog.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Secure Checkout',
    desc: 'Seamless payments with SSLCommerz, Stripe, or PayPal.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Customer Dashboard',
    desc: 'Track orders, returns, and wishlists in one place.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Analytics',
    desc: 'Visualize sales, conversions, and traffic sources.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Bell className="w-10 h-10" />,
    title: 'Email & SMS Alerts',
    desc: 'Keep users engaged with order updates and offers.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: 'Delivery Management',
    desc: 'Track deliveries and integrate with courier APIs.',
    gradient: 'from-red-500 to-pink-500',
  },
];

function EcommerceSoftwareFeatures() {
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
        {ecommerceFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default EcommerceSoftwareFeatures;
