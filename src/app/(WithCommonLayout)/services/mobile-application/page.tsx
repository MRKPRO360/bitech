import AppDevelopmentProcess from '@/components/modules/services/mobile-application/appDevelopmentProcess';
import Expertise from '@/components/modules/services/mobile-application/expertise';
import WhyChooseMobileDevelopment from '@/components/modules/services/mobile-application/whyChooseMobileDevelopment';
import CareerCta from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';

function MobileApplicationPage() {
  return (
    <>
      <PageBanner title="Mobile Application" />
      <WhyChooseMobileDevelopment />
      <AppDevelopmentProcess />
      <Expertise />
      <CareerCta />
    </>
  );
}
export default MobileApplicationPage;
