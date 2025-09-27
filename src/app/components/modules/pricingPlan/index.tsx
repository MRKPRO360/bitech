'use client';

import WandWithText from '../../ui/Wand';
import SecondaryHeading from '../../ui/core/SecondaryHeading';
import Para from '../../ui/core/Para';
import Container from '../../ui/core/Container';
import PricingCard from './PricingCard';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';

const plans = [
  {
    id: 1,
    price: '$15.00',
    title: 'Basic Plan',
    period: '/Monthly',
    features: [
      { name: '5 GB Bandwidth', included: true },
      { name: 'Highest Speed', included: true },
      { name: '1 GB Storage', included: true },
      { name: 'Unlimited Website', included: false },
      { name: 'Unlimited Users', included: false },
      { name: '24x7 Great Support', included: false },
      { name: 'Data Security and Backups', included: false },
      { name: 'Monthly Reports and Analytics', included: false },
    ],
  },
  {
    id: 2,
    price: '$35.00',
    title: 'Advanced Plan',
    period: '/Monthly',
    features: [
      { name: '5 GB Bandwidth', included: true },
      { name: 'Highest Speed', included: true },
      { name: '1 GB Storage', included: true },
      { name: 'Unlimited Website', included: true },
      { name: 'Unlimited Users', included: true },
      { name: '24x7 Great Support', included: true },
      { name: 'Data Security and Backups', included: false },
      { name: 'Monthly Reports and Analytics', included: false },
    ],
  },
  {
    id: 3,
    price: '$65.00',
    title: 'Expert Plan',
    period: '/Monthly',
    features: [
      { name: '5 GB Bandwidth', included: true },
      { name: 'Highest Speed', included: true },
      { name: '1 GB Storage', included: true },
      { name: 'Unlimited Website', included: true },
      { name: 'Unlimited Users', included: true },
      { name: '24x7 Great Support', included: true },
      { name: 'Data Security and Backups', included: true },
      { name: 'Monthly Reports and Analytics', included: true },
    ],
  },
];

function PricingAndPlans() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });
  return (
    <Container className="py-16 md:py-20 lg:py-24">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Pricing" />
        <SecondaryHeading>Pricing Plans</SecondaryHeading>
        <Para className="mt-5">
          Choose the perfect plan for your needs. Simple, transparent pricing
          with no hidden fees.
        </Para>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 py-16 place-content-center place-items-center "
      >
        {plans.map((plan) => (
          <PricingCard {...plan} key={plan.title} />
        ))}
      </div>
    </Container>
  );
}
export default PricingAndPlans;
