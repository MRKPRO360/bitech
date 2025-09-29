import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import TwoCols from '@/components/shared/twoCols';
import qaImage2 from '@/assets/qc-1.png';
import qaImage1 from '@/assets/qc-2.png';
import QaQcServices from '@/components/modules/services/qaQcTesting/qaQcServices';
import QaQcProcess from '@/components/modules/services/qaQcTesting/qaQcProcess';

const chooseItems = [
  {
    text: 'Comprehensive test planning and strategy development',
    color: 'bg-blue-500',
  },
  {
    text: 'Automated and manual testing methodologies',
    color: 'bg-green-500',
  },
  {
    text: 'Cross-browser and cross-platform compatibility testing',
    color: 'bg-purple-500',
  },
  {
    text: 'Performance, load, and stress testing',
    color: 'bg-orange-500',
  },
  {
    text: 'Security vulnerability assessment and penetration testing',
    color: 'bg-red-500',
  },
];

const serviceItems = [
  {
    text: 'Functional and regression testing',
    color: 'bg-blue-500',
  },
  {
    text: 'User acceptance testing (UAT)',
    color: 'bg-green-500',
  },
  {
    text: 'Mobile application testing',
    color: 'bg-purple-500',
  },
  {
    text: 'API and integration testing',
    color: 'bg-orange-500',
  },
  {
    text: 'Quality assurance documentation and reporting',
    color: 'bg-red-500',
  },
];

function QaQcTestingPage() {
  return (
    <>
      <PageBanner title="QA/QC Testing Services" />
      <QaQcServices />
      <TwoCols
        title="Why Choose Our QA/QC"
        paraText="Our comprehensive quality assurance and quality control services ensure your software meets the highest standards of functionality, performance, and security before reaching end-users."
        secondaryText="Quality Assurance Advantages"
        image={qaImage1}
        items={chooseItems}
      />

      <QaQcProcess />

      <TwoCols
        title="QA/QC Services"
        paraText="End-to-end testing solutions covering functional, performance, security, and user acceptance testing to deliver bug-free, high-quality software products."
        secondaryText="Complete Testing Solutions"
        image={qaImage2}
        changeDirection={true}
        items={serviceItems}
      />
      <CtaSection
        subHeading="Ensure Software Quality & Reliability"
        heading="Start Your QA/QC Testing Today"
        description="Let's implement robust quality assurance processes that deliver flawless, high-performing software that exceeds user expectations and business requirements."
      />
    </>
  );
}
export default QaQcTestingPage;
