'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  DollarSign,
  GraduationCap,
  Calendar,
  HeartPulse,
  Rocket,
  Users,
} from 'lucide-react';

const benefitsItems = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Competitive Salary',
    desc: 'We offer competitive compensation packages',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Learning & Development',
    desc: 'Annual budget for professional growth',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Flexible Time Off',
    desc: 'Unlimited PTO to recharge',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Health & Wellness',
    desc: 'Comprehensive health benefits',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Career Growth',
    desc: 'Clear paths for advancement',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Great Team',
    desc: 'Work with amazing people',
    gradient: 'from-red-500 to-pink-500',
  },
];

function PerksAndBenefits() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const benefitsRef = useStaggerChildren<HTMLDivElement>({
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

        <SecondaryHeading> Enjoy Our Perks & Benefits</SecondaryHeading>
        <Para className="mt-5">
          We believe in fostering a supportive and rewarding environment for our
          team members. Explore the benefits that make Bitech a great place to
          work.
        </Para>
      </div>

      <div
        ref={benefitsRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {benefitsItems.map((benefit, index) => (
          <SimpleCard key={index} feature={benefit} />
        ))}
      </div>
    </Container>
  );
}
export default PerksAndBenefits;
