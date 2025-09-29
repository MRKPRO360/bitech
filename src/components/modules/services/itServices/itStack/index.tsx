'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Monitor, Server, Database, Cloud, Bot, Lock } from 'lucide-react';

const technologyStack = [
  {
    step: '01',
    title: 'Frontend Development',
    description:
      'Modern frameworks like React, Next.js, Vue, and Angular for responsive and interactive web applications.',
    icon: <Monitor className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'Backend Systems',
    description:
      'Scalable server architecture with Node.js, Python, .NET, and Java for robust application logic.',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '03',
    title: 'Database Solutions',
    description:
      'SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis for optimal data management.',
    icon: <Database className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '04',
    title: 'DevOps & Cloud',
    description:
      'CI/CD pipelines, containerization with Docker, Kubernetes, and multi-cloud deployment strategies.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions with TensorFlow, PyTorch, and custom AI models for business automation.',
    icon: <Bot className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-600',
  },
  {
    step: '06',
    title: 'Security & Compliance',
    description:
      'End-to-end security implementation, penetration testing, and regulatory compliance frameworks.',
    icon: <Lock className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
];

function ItStack() {
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
        {technologyStack.map((stack, index) => (
          <GradientCard key={index} feature={stack} />
        ))}
      </div>
    </Container>
  );
}
export default ItStack;
