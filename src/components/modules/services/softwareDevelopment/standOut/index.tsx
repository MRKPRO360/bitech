'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Zap, Shield, Code, Cloud, Users, Award } from 'lucide-react';

const standsItem = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Lightning Fast Delivery',
    desc: 'Rapid development cycles with agile methodology and continuous deployment',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Enterprise Security',
    desc: 'Bank-level security protocols and compliance with industry standards',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: 'Clean Architecture',
    desc: 'Maintainable, scalable code following best practices and design patterns',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Cloud Native',
    desc: 'Built for scalability with microservices architecture and cloud optimization',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Expert Team',
    desc: 'Senior developers with 5+ years experience in cutting-edge technologies',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Quality First',
    desc: 'Rigorous testing, code reviews, and quality assurance processes',
    gradient: 'from-red-500 to-pink-500',
  },
];

function StandOut() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const standsRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Crown In Hand" />
        <SecondaryHeading>Why Do We Stand Out</SecondaryHeading>
        <Para className="mt-5">
          We don&apos;t just build software, we craft digital experiences that
          propel your business forward. Discover what makes us different.
        </Para>
      </div>

      <div
        ref={standsRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {standsItem.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default StandOut;
