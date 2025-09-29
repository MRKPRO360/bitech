'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  CheckCircle,
  Smartphone,
  Zap,
  Shield,
  Users,
  RefreshCw,
} from 'lucide-react';
const qaQcServicesItems = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Functional Testing',
    desc: 'Comprehensive validation of software features and functionality against specified requirements and user expectations.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App Testing',
    desc: 'Thorough testing of mobile applications across different devices, operating systems, and network conditions.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Testing',
    desc: 'Load, stress, and performance testing to ensure applications can handle expected user traffic and data volumes.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security Testing',
    desc: 'Vulnerability assessment, penetration testing, and security validation to protect against potential threats.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User Acceptance Testing',
    desc: 'End-user validation to ensure the software meets business requirements and is ready for production deployment.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Regression Testing',
    desc: 'Automated regression suites to verify that new changes dont break existing functionality.',
    gradient: 'from-teal-500 to-blue-600',
  },
];

function QaQcServices() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const qaQcServiceRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="QA/QC Services" />
        <SecondaryHeading>
          Comprehensive Quality Assurance & Testing Solutions
        </SecondaryHeading>
        <Para className="mt-5">
          From functional validation to performance benchmarking, we deliver
          rigorous testing services that identify defects, enhance user
          experience, and ensure your software meets the highest quality
          standards before deployment.
        </Para>
      </div>
      <div
        ref={qaQcServiceRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {qaQcServicesItems.map((service, index) => (
          <SimpleCard key={index} feature={service} />
        ))}
      </div>
    </Container>
  );
}
export default QaQcServices;
