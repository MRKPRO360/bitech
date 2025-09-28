'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaHeart,
  FaMoneyBillWave,
  FaRocket,
  FaUsers,
} from 'react-icons/fa';

const benefits = [
  {
    icon: FaMoneyBillWave,
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages',
  },
  {
    icon: FaGraduationCap,
    title: 'Learning & Development',
    description: 'Annual budget for professional growth',
  },
  {
    icon: FaCalendarAlt,
    title: 'Flexible Time Off',
    description: 'Unlimited PTO to recharge',
  },
  {
    icon: FaHeart,
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits',
  },
  {
    icon: FaRocket,
    title: 'Career Growth',
    description: 'Clear paths for advancement',
  },
  {
    icon: FaUsers,
    title: 'Great Team',
    description: 'Work with amazing people',
  },
];

function PerksAndBenefits() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });

  return (
    <Container className="py-20 bg-white">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Perks & Benefits" />

        <SecondaryHeading>Our Awesome Team</SecondaryHeading>
        <Para className="mt-5">
          We take care of our team with comprehensive benefits and perks that
          matter.
        </Para>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
      >
        {benefits.map((benefit, PerksAndBenefits) => (
          <div
            key={PerksAndBenefits}
            className="bg-grey-light rounded-md px-6 py-3 shadow-sm hover:shadow-md transition duration-300"
          >
            <benefit.icon className="text-4xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-1">{benefit.title}</h2>
            <Para>{benefit.description}</Para>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default PerksAndBenefits;
