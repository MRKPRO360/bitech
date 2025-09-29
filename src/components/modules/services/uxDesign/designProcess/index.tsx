'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Workflow,
  Eye,
  Palette,
  MessageCircle,
  Code,
  Rocket,
} from 'lucide-react';
const designProcess = [
  {
    step: '01',
    title: 'Research & Discovery',
    description:
      'Understanding user needs, business goals, and market landscape through comprehensive research.',
    icon: <Eye className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'Defining information architecture, user flows, and creating wireframes for optimal structure.',
    icon: <Workflow className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Design & Prototype',
    description:
      'Creating high-fidelity designs and interactive prototypes for testing and validation.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '04',
    title: 'Test & Iterate',
    description:
      'Conducting user testing sessions and refining designs based on real user feedback.',
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'Implementation Support',
    description:
      'Collaborating with developers to ensure accurate design handoff and smooth implementation.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-teal-500 to-green-700',
  },
  {
    step: '06',
    title: 'Launch & Monitor',
    description:
      'Releasing the product, tracking performance metrics, and continuously optimizing for growth.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
];

function DesignProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Process" />
        <SecondaryHeading>Our Design Process</SecondaryHeading>
        <Para className="mt-5">
          A systematic approach that ensures we deliver user-centered solutions
          while meeting business objectives and technical constraints.
        </Para>
      </div>
      <div
        ref={processRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {designProcess.map((process, index) => (
          <GradientCard key={index} feature={process} />
        ))}
      </div>
    </Container>
  );
}
export default DesignProcess;
