import DevelopmentProcess from '@/components/modules/services/softwareDevelopment/developmentProcess';
import SoftwareDevelopmentOverview from '@/components/modules/services/softwareDevelopment/softwareDevelopmentOverview';
import StandOut from '@/components/modules/services/softwareDevelopment/standOut';
import TechnologyStack from '@/components/modules/services/softwareDevelopment/technologyStack';
import CareerCta from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';

function SoftwareDevelopmentPage() {
  return (
    <>
      <PageBanner title="Software Development" />
      <SoftwareDevelopmentOverview />
      <StandOut />

      <DevelopmentProcess />
      <TechnologyStack />
      <CareerCta />
    </>
  );
}
export default SoftwareDevelopmentPage;
