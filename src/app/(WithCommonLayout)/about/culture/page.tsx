import CultureDescription from '@/app/components/modules/about/culture/cultureDescription';
import CultureTabbed from '@/app/components/modules/about/culture/cultureTabbed';
import LifeAtOffice from '@/app/components/modules/about/culture/lifeAtOffice';
import Value from '@/app/components/modules/about/culture/values';
import CareerCta from '@/app/components/shared/careerCta';
import PageBanner from '@/app/components/shared/pageBanner';
import TeamGroup from '@/app/components/shared/teamGroup';

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
