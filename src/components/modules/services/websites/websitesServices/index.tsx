'use client';
import SimpleCard from '@/components/shared/simpleCard';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Palette,
  Newspaper,
  Search,
} from 'lucide-react';
const websiteServicesItems = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Business Websites',
    desc: 'Professional corporate websites that establish your brand identity and communicate your value proposition effectively.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'E-commerce Websites',
    desc: 'Online stores with secure payment gateways, inventory management, and seamless shopping experiences.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Portfolio Websites',
    desc: 'Showcase your work with stunning galleries, case studies, and client testimonials to attract new business.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: 'Blog & Content Sites',
    desc: 'Content-focused websites with easy-to-use CMS, SEO optimization, and engaging reader experiences.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'SEO-Optimized Sites',
    desc: 'Websites built with search engine optimization from day one to improve visibility and organic traffic.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive Design',
    desc: 'Mobile-first websites that provide perfect user experience across all devices and screen sizes.',
    gradient: 'from-teal-500 to-blue-600',
  },
];

function WebsitesServices() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const webServiceRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.4 });

  return (
    <Container className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Website Services" />
        <SecondaryHeading>
          Professional Websites That Drive Business Growth
        </SecondaryHeading>
        <Para className="mt-5">
          From stunning business websites to powerful e-commerce platforms, we
          create responsive, SEO-optimized websites that captivate your
          audience, build brand credibility, and convert visitors into loyal
          customers.
        </Para>
      </div>
      <div
        ref={webServiceRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lg:mt-16"
      >
        {websiteServicesItems.map((service, index) => (
          <SimpleCard key={index} feature={service} />
        ))}
      </div>
    </Container>
  );
}
export default WebsitesServices;
