'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Rocket, Target, Layout, Edit3, Code2, TrendingUp } from 'lucide-react';

const websitesProcessItems = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description:
      'Understanding your business goals, target audience, and creating a comprehensive website strategy.',
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description:
      'Creating wireframes and visual designs that align with your brand and provide optimal user experience.',
    icon: <Layout className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Content Development',
    description:
      'Crafting compelling copy and organizing content structure to engage visitors and drive conversions.',
    icon: <Edit3 className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '04',
    title: 'Development & Coding',
    description:
      'Building your website with clean code, modern frameworks, and responsive design principles.',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'SEO Optimization',
    description:
      'Implementing on-page SEO, meta tags, and technical optimizations for better search engine rankings.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
  {
    step: '06',
    title: 'Launch & Analytics',
    description:
      'Final testing, deployment, and setting up analytics to track performance and user behavior.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-teal-500 to-green-600',
  },
];

function WebsitesProcess() {
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
        {websitesProcessItems.map((process, index) => (
          <GradientCard key={index} feature={process} />
        ))}
      </div>
    </Container>
  );
}
export default WebsitesProcess;
