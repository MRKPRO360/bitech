'use client';
import GradientCard from '@/components/shared/gradientCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Search,
  Monitor,
  Sliders,
  Clock,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';

const nocProcessItems = [
  {
    step: '01',
    title: 'Network Assessment',
    description:
      'Comprehensive analysis of your current network infrastructure, performance metrics, and security posture.',
    icon: <Search className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: '02',
    title: 'Monitoring Setup',
    description:
      'Implementation of monitoring tools, alert systems, and dashboard configurations tailored to your environment.',
    icon: <Monitor className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Threshold Configuration',
    description:
      'Setting performance benchmarks, alert thresholds, and escalation procedures for optimal operations.',
    icon: <Sliders className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: '04',
    title: '24/7 Operations',
    description:
      'Round-the-clock monitoring, incident detection, and proactive maintenance by certified NOC engineers.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    step: '05',
    title: 'Incident Response',
    description:
      'Immediate troubleshooting, problem resolution, and communication during network incidents.',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
  },
  {
    step: '06',
    title: 'Continuous Optimization',
    description:
      'Regular performance reviews, process improvements, and technology updates for ongoing enhancement.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-teal-500 to-green-600',
  },
];

function NocProcess() {
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
        {nocProcessItems.map((process, index) => (
          <GradientCard key={index} feature={process} />
        ))}
      </div>
    </Container>
  );
}
export default NocProcess;
