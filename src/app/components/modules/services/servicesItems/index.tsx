'use client';
import {
  Laptop,
  Globe,
  Smartphone,
  Layout,
  Palette,
  Server,
  Headphones,
  CheckCircle,
} from 'lucide-react';
import ServicesItem from './servicesItem';
import Container from '@/app/components/ui/core/Container';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';
import WandWithText from '@/app/components/ui/Wand';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import Para from '@/app/components/ui/core/Para';

const servicesItems = [
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: <Laptop className="w-6 h-6" />,
    description: 'Custom software solutions tailored to your business needs',
    features: ['Custom Applications', 'API Development', 'System Integration'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Web Application',
    href: '/services/web-application',
    icon: <Globe className="w-6 h-6" />,
    description: 'Scalable and responsive web applications',
    features: ['React/Next.js', 'Node.js', 'Real-time Features'],
    color: 'from-green-500 to-green-600',
  },
  {
    label: 'Mobile Application',
    href: '/services/mobile-application',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Native and cross-platform mobile apps',
    features: ['iOS & Android', 'React Native', 'Flutter'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    label: 'Websites',
    href: '/services/websites',
    icon: <Layout className="w-6 h-6" />,
    description: 'Beautiful and functional websites',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    label: 'UX Design',
    href: '/services/ux-design',
    icon: <Palette className="w-6 h-6" />,
    description: 'User-centered design for optimal experiences',
    features: ['User Research', 'Wireframing', 'Prototyping'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    label: 'NOC Support',
    href: '/services/noc-support',
    icon: <Server className="w-6 h-6" />,
    description: '24/7 network operations center support',
    features: ['Monitoring', 'Incident Management', 'Performance'],
    color: 'from-red-500 to-red-600',
  },
  {
    label: 'IT Services',
    href: '/services/it-services',
    icon: <Headphones className="w-6 h-6" />,
    description: 'Comprehensive IT support and solutions',
    features: ['Help Desk', 'Infrastructure', 'Cloud Services'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    label: 'QA, QC & Testing',
    href: '/services/qa-qc-testing',
    icon: <CheckCircle className="w-6 h-6" />,
    description: 'Quality assurance and testing services',
    features: ['Automated Testing', 'Manual Testing', 'Security Testing'],
    color: 'from-emerald-500 to-emerald-600',
  },
];

function ServicesItems() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const servicesItemsRef = useStaggerChildren<HTMLDivElement>({
    y: 40,
    once: true,
    stagger: 0.3,
    delay: 0.3,
  });

  return (
    <Container className="py-10 md:py-14 lg:py-16">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our Services" />
        <SecondaryHeading>Check Our Awesome Services</SecondaryHeading>
        <Para className="mt-5">
          Explore our diverse range of IT services designed to meet your
          business needs. From custom software development to robust IT support,
          we provide solutions that drive innovation and efficiency.
        </Para>
      </div>

      <div
        ref={servicesItemsRef}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-10 lg:mt-20 items-stretch"
      >
        {servicesItems.map((service, index) => (
          <ServicesItem key={index} service={service} />
        ))}
      </div>
    </Container>
  );
}
export default ServicesItems;
