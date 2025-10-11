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
  Users,
  ClipboardCheck,
  LineChart,
  Layers,
} from 'lucide-react';

const erpFeatures = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Centralized Management',
    desc: 'Unify your departments with a single source of truth.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: 'Finance & Accounting',
    desc: 'Automate bookkeeping, invoicing, and payroll with full accuracy.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Human Resource',
    desc: 'Track employee data, attendance, and performance efficiently.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: 'Inventory & Procurement',
    desc: 'Manage procurement cycles and stock levels effortlessly.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: 'Project Management',
    desc: 'Plan, execute, and monitor projects from start to finish.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: 'Business Intelligence',
    desc: 'Visualize KPIs and make smarter strategic decisions.',
    gradient: 'from-teal-500 to-green-500',
  },
];

function ErpFeatures() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const featuresRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Erp Features" />
        <SecondaryHeading>Powerful Features for Your Pharmacy</SecondaryHeading>
        <Para className="mt-5">
          Streamline operations, enhance decision-making, and drive growth with
          our comprehensive suite of tools designed to meet the unique demands
          of the pharmaceutical industry.
        </Para>
      </div>

      <div
        ref={featuresRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {erpFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default ErpFeatures;
