import DevelopmentProcess from '@/components/modules/services/softwareDevelopment/developmentProcess';
import SoftwareDevelopmentOverview from '@/components/modules/services/softwareDevelopment/softwareDevelopmentOverview';
import StandOut from '@/components/modules/services/softwareDevelopment/standOut';
import TechnologyStack from '@/components/modules/services/softwareDevelopment/technologyStack';
import CtaSection from '@/components/shared/careerCta';

import PageBanner from '@/components/shared/pageBanner';

function SoftwareDevelopmentPage() {
  return (
    <>
      <PageBanner title="Software Development" />
      <SoftwareDevelopmentOverview />
      <StandOut />

      <DevelopmentProcess />
      <TechnologyStack />
      <CtaSection
        subHeading="Bring Your Vision to Life"
        heading="Start Your Software Development Journey"
        description="Let's create custom software solutions that solve complex business challenges, automate processes, and deliver measurable value through robust, scalable applications."
      />
    </>
  );
}
export default SoftwareDevelopmentPage;
