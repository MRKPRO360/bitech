import AppDevelopmentProcess from '@/components/modules/services/mobile-application/appDevelopmentProcess';
import Expertise from '@/components/modules/services/mobile-application/expertise';
import WhyChooseMobileDevelopment from '@/components/modules/services/mobile-application/whyChooseMobileDevelopment';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';

function MobileApplicationPage() {
  return (
    <>
      <PageBanner title="Mobile Application" />
      <WhyChooseMobileDevelopment />
      <AppDevelopmentProcess />
      <Expertise />
      <CtaSection
        subHeading="Go Mobile with Confidence"
        heading="Start Your Mobile App Development"
        description="Let's build high-performance mobile applications that provide seamless user experiences, leverage device capabilities, and connect you with your audience anywhere, anytime."
      />
    </>
  );
}
export default MobileApplicationPage;
