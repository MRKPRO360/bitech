'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SubHeading from '@/components/ui/core/SubHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Users, Zap, Palette, Layout } from 'lucide-react';
const uxPrinciples = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User-Centered Design',
    desc: "Designing with the user's needs, behaviors, and pain points at the forefront of every decision.",
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Usability & Efficiency',
    desc: 'Creating intuitive interfaces that enable users to accomplish tasks quickly and effortlessly.',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Visual Hierarchy',
    desc: 'Strategic use of color, typography, and spacing to guide users through content and actions.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Consistency',
    desc: 'Maintaining uniform patterns and behaviors across the entire user experience.',
    gradient: 'from-purple-500 to-pink-600',
  },
];

function UxPrinciple() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const principleRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Crown In Hand" />
        <SubHeading>Our UX Design Principles</SubHeading>
        <Para className="mt-5">
          Grounded in human-centered design thinking, our principles guide every
          decision to create meaningful and effective user experiences.
        </Para>
      </div>
      <div
        ref={principleRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {uxPrinciples.map((principle, index) => (
          <SimpleCard key={index} feature={principle} />
        ))}
      </div>
    </Container>
  );
}
export default UxPrinciple;
