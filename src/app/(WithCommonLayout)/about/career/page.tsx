import CareerCta from '@/app/components/shared/careerCta';
import OpeningJobs from '@/app/components/modules/about/career/openingJob';
import PerksAndBenefits from '@/app/components/modules/about/career/perksBenefits';
import Stats from '@/app/components/shared/stats';
import PageBanner from '@/app/components/shared/pageBanner';

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
