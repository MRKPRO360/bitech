'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Package,
  Pill,
  CreditCard,
  BarChart3,
  Users,
  Stethoscope,
  BookOpen,
  ClipboardList,
  Mail,
  PieChart,
} from 'lucide-react';

const schoolFeatures = [
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Student Management',
    desc: 'Handle admissions, profiles, and academic progress with an easy-to-use dashboard.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Class & Exam Scheduling',
    desc: 'Automate timetables, exams, and report cards for teachers and students.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: 'Attendance Tracking',
    desc: 'Digitize attendance records and monitor punctuality effortlessly.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Mail className="w-10 h-10" />,
    title: 'Parent Communication',
    desc: 'Send updates, notices, and progress reports directly to parents.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Fee Management',
    desc: 'Simplify billing, automate fee reminders, and generate receipts instantly.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <PieChart className="w-10 h-10" />,
    title: 'Analytics Dashboard',
    desc: 'Gain insights into performance, attendance, and academic trends.',
    gradient: 'from-teal-500 to-green-500',
  },
];

function SchoolManagementFeatures() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const featuresRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Pharmacy Features" />
        <SecondaryHeading>Powerful Features for Your Pharmacy</SecondaryHeading>
        <Para className="mt-5">
          Everything you need to manage your pharmacy efficiently in one
          integrated platform
        </Para>
      </div>

      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {schoolFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default SchoolManagementFeatures;
