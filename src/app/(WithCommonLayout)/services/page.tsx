import ServicesItems from '@/app/components/modules/services/servicesItems';
import CareerCta from '@/app/components/shared/careerCta';
import PageBanner from '@/app/components/shared/pageBanner';
import Stats from '@/app/components/shared/stats';

function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <Stats />
      <ServicesItems />
      <CareerCta />
    </>
  );
}
export default ServicesPage;
