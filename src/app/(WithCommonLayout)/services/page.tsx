import ServicesItems from '@/components/modules/services/servicesItems';
import CareerCta from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import Stats from '@/components/shared/stats';

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
