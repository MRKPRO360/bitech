'use client';

import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  BarChart3,
  FileText,
  PenTool,
  Search,
  Bell,
  Shield,
} from 'lucide-react';

const publicationFeatures = [
  {
    icon: <FileText className="w-10 h-10" />,
    title: 'Content Management',
    desc: 'Publish, edit, and categorize articles effortlessly.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: 'Author Dashboard',
    desc: 'Empower contributors with role-based access and tools.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: 'SEO Optimization',
    desc: 'Built-in SEO tools to boost discoverability.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Reader Analytics',
    desc: 'Understand engagement through detailed readership data.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Bell className="w-10 h-10" />,
    title: 'Notifications & Newsletters',
    desc: 'Engage your audience through automatic updates.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Data Security',
    desc: 'Protect your publication and readers with modern security layers.',
    gradient: 'from-red-500 to-pink-500',
  },
];

function PublicationFeatures() {
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
        {publicationFeatures.map((feature, index) => (
          <SimpleCard key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
export default PublicationFeatures;
