import CareerCta from '@/components/shared/careerCta';
import OpeningJobs from '@/components/modules/about/career/openingJob';
import PerksAndBenefits from '@/components/modules/about/career/perksBenefits';
import Stats from '@/components/shared/stats';
import PageBanner from '@/components/shared/pageBanner';

function CareerPage() {
  return (
    <>
      <PageBanner title="Career" />
      <Stats />
      <PerksAndBenefits />
      <OpeningJobs />
      <CareerCta />
    </>
  );
}
export default CareerPage;
