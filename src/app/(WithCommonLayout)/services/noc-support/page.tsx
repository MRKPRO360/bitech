import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import TwoCols from '@/components/shared/twoCols';
import nocImage2 from '@/assets/noc-1.png';
import nocImage1 from '@/assets/noc-2.png';
import NocServices from '@/components/modules/services/noc/nocServices';
import NocProcess from '@/components/modules/services/noc/nocProcess';

const chooseItems = [
  {
    text: '24/7 network monitoring and proactive threat detection',
    color: 'bg-blue-500',
  },
  {
    text: 'Real-time performance monitoring and alert systems',
    color: 'bg-green-500',
  },
  {
    text: 'Multi-vendor network equipment support and management',
    color: 'bg-purple-500',
  },
  {
    text: 'Automated incident response and resolution workflows',
    color: 'bg-orange-500',
  },
  {
    text: 'Comprehensive reporting and performance analytics',
    color: 'bg-red-500',
  },
];

const serviceItems = [
  {
    text: 'Network performance monitoring and optimization',
    color: 'bg-blue-500',
  },
  {
    text: 'Security incident detection and response',
    color: 'bg-green-500',
  },
  {
    text: 'Infrastructure health monitoring and maintenance',
    color: 'bg-purple-500',
  },
  {
    text: 'Bandwidth utilization and traffic analysis',
    color: 'bg-orange-500',
  },
  {
    text: 'Compliance monitoring and reporting',
    color: 'bg-red-500',
  },
];

function NocPage() {
  return (
    <>
      <PageBanner title="Network Operations Center" />
      <NocServices />
      <TwoCols
        title="Why Choose Our NOC"
        paraText="Our NOC services provide round-the-clock monitoring, proactive maintenance, and rapid incident response to ensure your network infrastructure operates at peak performance with maximum uptime."
        secondaryText="24/7 Network Monitoring Advantages"
        image={nocImage1}
        items={chooseItems}
      />

      <NocProcess />

      <TwoCols
        title="NOC Services"
        paraText="Comprehensive network operations center services including performance monitoring, security management, and infrastructure optimization to keep your business connected and secure."
        secondaryText="Complete Network Management Solutions"
        image={nocImage2}
        changeDirection={true}
        items={serviceItems}
      />
      <CtaSection
        subHeading="Secure Your Network Infrastructure"
        heading="Start Your NOC Implementation Today"
        description="Let's build a robust network operations framework that ensures maximum uptime, security, and performance for your business operations."
      />
    </>
  );
}
export default NocPage;
