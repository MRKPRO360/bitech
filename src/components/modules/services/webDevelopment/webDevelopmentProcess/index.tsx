'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Monitor, Server, Palette, Users, Shield, Rocket } from 'lucide-react';

const webProcess = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description:
      'In-depth consultation to understand your business goals, target audience, and technical requirements.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description:
      'Creating intuitive user interfaces and seamless user experiences with wireframes and interactive prototypes.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Frontend Development',
    description:
      'Building responsive and interactive client-side applications using modern JavaScript frameworks and libraries.',
    icon: <Monitor className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '04',
    title: 'Backend Development',
    description:
      'Developing robust server-side architecture, APIs, and database structures for scalable web applications.',
    icon: <Server className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'Testing & Quality Assurance',
    description:
      'Comprehensive testing including functionality, performance, security, and cross-browser compatibility.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
  {
    step: '06',
    title: 'Deployment & Maintenance',
    description:
      'Seamless deployment to production environments and ongoing support with regular updates and maintenance.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-teal-500 to-green-600',
  },
];

function WebDevelopmentProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const processRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Web Development Process" />
        <SecondaryHeading>Our Web Development Methodology</SecondaryHeading>
        <Para className="mt-5">
          A structured yet flexible approach to web development that combines
          technical excellence with user-centric design, ensuring we deliver
          robust, scalable, and engaging web applications that drive business
          growth.
        </Para>
      </div>
      <div
        ref={processRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {webProcess.map((stack, index) => (
          <GradientCard key={index} feature={stack} />
        ))}
      </div>
    </Container>
  );
}
export default WebDevelopmentProcess;
