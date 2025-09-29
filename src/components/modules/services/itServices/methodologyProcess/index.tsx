'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Workflow, Users, Zap, Shield, Rocket, BarChart3 } from 'lucide-react';
const methodology = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Agile Development',
    desc: 'Iterative development with sprints, continuous feedback, and adaptive planning for maximum flexibility.',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client Collaboration',
    desc: 'Close partnership with stakeholders through regular demos, reviews, and transparent communication.',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Prototyping',
    desc: 'Quick concept validation through prototypes and MVPs to test ideas and gather user feedback early.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality Assurance',
    desc: 'Comprehensive testing strategies including unit, integration, and security testing at every stage.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Continuous Deployment',
    desc: 'Automated deployment pipelines ensuring fast, reliable, and frequent releases with zero downtime.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Performance Optimization',
    desc: 'Ongoing monitoring and optimization to ensure optimal speed, scalability, and user experience.',
    gradient: 'from-amber-500 to-orange-600',
  },
];

function MethodologyProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const methodologyRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our Approach" />
        <SecondaryHeading>Proven Development Methodology</SecondaryHeading>
        <Para className="mt-5">
          Our structured yet flexible approach ensures project success through
          collaboration, quality, and continuous improvement.
        </Para>
      </div>
      <div
        ref={methodologyRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {methodology.map((methodology, index) => (
          <SimpleCard key={index} feature={methodology} />
        ))}
      </div>
    </Container>
  );
}
export default MethodologyProcess;
