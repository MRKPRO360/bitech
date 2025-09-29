'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Monitor,
  Shield,
  Activity,
  AlertTriangle,
  BarChart3,
  Settings,
} from 'lucide-react';
const nocServicesItems = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: '24/7 Network Monitoring',
    desc: 'Continuous monitoring of network devices, servers, and applications with real-time alerting and proactive issue detection.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security Monitoring',
    desc: 'Real-time threat detection, intrusion prevention, and security event management to protect your network infrastructure.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Performance Management',
    desc: 'Comprehensive performance tracking, capacity planning, and optimization for optimal network operations.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Incident Management',
    desc: 'Rapid incident response, troubleshooting, and resolution with detailed root cause analysis and reporting.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Reporting & Analytics',
    desc: 'Detailed performance reports, trend analysis, and compliance documentation for informed decision-making.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Infrastructure Management',
    desc: 'End-to-end management of network devices, servers, and cloud resources with automated maintenance.',
    gradient: 'from-teal-500 to-blue-600',
  },
];

function NocServices() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const nocServiceRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our NOC" />
        <SecondaryHeading>
          Always-On Network Monitoring for Business Continuity
        </SecondaryHeading>
        <Para className="mt-5">
          We provide comprehensive NOC services that continuously monitor your
          network infrastructure, detect issues before they impact operations,
          and ensure your business remains connected and secure.
        </Para>
      </div>
      <div
        ref={nocServiceRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {nocServicesItems.map((service, index) => (
          <SimpleCard key={index} feature={service} />
        ))}
      </div>
    </Container>
  );
}
export default NocServices;
