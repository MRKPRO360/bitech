import WebDevelopmentProcess from '@/components/modules/services/webDevelopment/webDevelopmentProcess';
import WebDevelopmentServices from '@/components/modules/services/webDevelopment/webDevelopmentServices';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import TwoCols from '@/components/shared/twoCols';
import webImage1 from '@/assets/web-1.png';
import webImage2 from '@/assets/web-2.png';

const advantageItems = [
  {
    text: 'Custom web applications built with React, Next.js, and modern frameworks',
    color: 'bg-blue-500',
  },
  {
    text: 'Responsive design that works perfectly on all devices and screen sizes',
    color: 'bg-green-500',
  },
  {
    text: 'E-commerce solutions with secure payment gateways and inventory management',
    color: 'bg-purple-500',
  },
  {
    text: 'API development and integration with third-party services',
    color: 'bg-orange-500',
  },
  {
    text: 'Performance optimization for fast loading and better user experience',
    color: 'bg-red-500',
  },
];

const servicePoints = [
  {
    text: 'Progressive Web Apps (PWA) with offline capabilities',
    color: 'bg-blue-500',
  },
  {
    text: 'Content Management Systems (CMS) development',
    color: 'bg-green-500',
  },
  {
    text: 'Database design and optimization',
    color: 'bg-purple-500',
  },
  {
    text: 'Cloud deployment and DevOps setup',
    color: 'bg-orange-500',
  },
  {
    text: 'Ongoing maintenance and support services',
    color: 'bg-red-500',
  },
];

function WebApplicationPage() {
  return (
    <>
      <PageBanner title="Web Application" />
      <WebDevelopmentServices />
      <TwoCols
        title="Our Advantages"
        paraText="We don't just write code—we build partnerships and deliver solutions that 
  create lasting value for your business and your users."
        secondaryText="What Sets Us Apart"
        image={webImage1}
        items={advantageItems}
      />
      <WebDevelopmentProcess />

      <TwoCols
        title="Development Services"
        paraText="End-to-end web development services that transform your ideas into powerful, 
  scalable, and user-friendly digital experiences using cutting-edge technologies.
"
        secondaryText="Comprehensive Web Development Solutions"
        image={webImage2}
        changeDirection={true}
        items={servicePoints}
      />
      <CtaSection
        subHeading="Build Powerful Web Solutions"
        heading="Start Your Web Application Project"
        description="Let's develop custom web applications that streamline your operations, enhance user experiences, and scale with your business needs using cutting-edge technologies."
      />
    </>
  );
}
export default WebApplicationPage;
