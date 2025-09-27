import DevelopmentProcess from '@/app/components/modules/services/softwareDevelopment/developmentProcess';
import SoftwareDevelopmentOverview from '@/app/components/modules/services/softwareDevelopment/softwareDevelopmentOverview';
import StandOut from '@/app/components/modules/services/softwareDevelopment/standOut';
import TechnologyStack from '@/app/components/modules/services/softwareDevelopment/technologyStack';
import CareerCta from '@/app/components/shared/careerCta';
import PageBanner from '@/app/components/shared/pageBanner';

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
