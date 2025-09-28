import CultureDescription from '@/components/modules/about/culture/cultureDescription';
import CultureTabbed from '@/components/modules/about/culture/cultureTabbed';
import LifeAtOffice from '@/components/modules/about/culture/lifeAtOffice';
import Value from '@/components/modules/about/culture/values';
import CareerCta from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import TeamGroup from '@/components/shared/teamGroup';

function CulturePage() {
  return (
    <>
      <PageBanner title="Culture" />
      <CultureDescription />
      <Value />
      <CultureTabbed />
      <LifeAtOffice />
      <TeamGroup />
      <CareerCta />
    </>
  );
}
export default CulturePage;
