import AppDevelopmentProcess from '@/app/components/modules/services/mobile-application/appDevelopmentProcess';
import Expertise from '@/app/components/modules/services/mobile-application/expertise';
import WhyChooseMobileDevelopment from '@/app/components/modules/services/mobile-application/whyChooseMobileDevelopment';
import CareerCta from '@/app/components/shared/careerCta';
import PageBanner from '@/app/components/shared/pageBanner';

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
