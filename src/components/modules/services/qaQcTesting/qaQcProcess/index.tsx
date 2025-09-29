'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  AlertTriangle,
  CheckSquare,
  ClipboardList,
  Code2,
  FileText,
  Play,
} from 'lucide-react';

const qaQcProcessItems = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description:
      'Thorough review of project requirements, user stories, and acceptance criteria to define test scope.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'Test Planning',
    description:
      'Development of comprehensive test strategy, test plans, and test cases aligned with project objectives.',
    icon: <ClipboardList className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Test Development',
    description:
      'Creation of automated test scripts, manual test cases, and testing frameworks for efficient execution.',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '04',
    title: 'Test Execution',
    description:
      'Systematic execution of test cases, defect logging, and tracking using industry-standard tools.',
    icon: <Play className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'Defect Management',
    description:
      'Comprehensive defect tracking, prioritization, and verification of fixes through regression testing.',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
  {
    step: '06',
    title: 'Test Closure',
    description:
      'Final test reporting, metrics analysis, and quality assessment for project sign-off and deployment.',
    icon: <CheckSquare className="w-6 h-6" />,
    color: 'from-teal-500 to-green-600',
  },
];

function QaQcProcess() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const qaQcProcessRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

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
        ref={qaQcProcessRef}
        className="mt-10 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {qaQcProcessItems.map((process, index) => (
          <GradientCard key={index} feature={process} />
        ))}
      </div>
    </Container>
  );
}
export default QaQcProcess;
