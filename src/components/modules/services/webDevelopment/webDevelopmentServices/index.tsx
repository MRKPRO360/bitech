'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Zap, Shield, Rocket, Database, Smartphone, Code2 } from 'lucide-react';
const webServices = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Custom Web Applications',
    desc: 'Tailored web solutions built with modern frameworks to meet your specific business requirements and workflows.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive Design',
    desc: 'Mobile-first approach ensuring seamless user experience across all devices and screen sizes.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Progressive Web Apps',
    desc: 'Native-like web experiences with offline capabilities, push notifications, and app-like performance.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Web Security',
    desc: 'Comprehensive security measures including SSL, encryption, and vulnerability protection for your web applications.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Database Integration',
    desc: 'Seamless integration with various databases for efficient data management and real-time operations.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Performance Optimization',
    desc: 'Lightning-fast load times and optimized performance through advanced caching and code optimization techniques.',
    gradient: 'from-teal-500 to-blue-600',
  },
];

function WebDevelopmentServices() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const webServiceRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Development Services" />
        <SecondaryHeading>
          Comprehensive Web Development Solutions
        </SecondaryHeading>
        <Para className="mt-5">
          End-to-end web development services that transform your ideas into
          powerful, scalable, and user-friendly digital experiences using
          cutting-edge technologies.
        </Para>
      </div>
      <div
        ref={webServiceRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {webServices.map((methodology, index) => (
          <SimpleCard key={index} feature={methodology} />
        ))}
      </div>
    </Container>
  );
}
export default WebDevelopmentServices;
