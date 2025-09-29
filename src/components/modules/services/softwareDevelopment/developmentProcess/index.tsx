'use client';

import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import SubHeading from '@/components/ui/core/SubHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Code,
  Palette,
  Shield,
  Users,
} from 'lucide-react';

function DevelopmentProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'Deep dive into your business needs and create comprehensive project roadmap',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description:
        'Create intuitive user experiences and beautiful interfaces that convert',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'Agile development with continuous integration and daily deployments',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description:
        'Comprehensive testing including unit, integration, and user acceptance',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
    },
    {
      step: '05',
      title: 'Deployment',
      description:
        'Seamless deployment to production with zero downtime strategies',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      step: '06',
      title: 'Support & Scale',
      description: '24/7 monitoring, maintenance, and continuous improvement',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Process" />
        <SecondaryHeading>Our Development Process</SecondaryHeading>
        <Para className="mt-5">
          Transforming your vision into powerful, scalable digital solutions. We
          craft software that not only works beautifully but drives real
          business growth.
        </Para>
      </div>

      <div
        ref={processRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {processSteps.map((step, index) => (
          <GradientCard key={index} feature={step} />
        ))}
      </div>
    </Container>
  );
}
export default DevelopmentProcess;
