import ServicesHero from '@/app/components/modules/services/hero';
import Overview from '@/app/components/modules/services/overview';
import ServicesItems from '@/app/components/modules/services/servicesItems';
import CareerCta from '@/app/components/shared/careerCta';
import PageBanner from '@/app/components/shared/pageBanner';

function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <Overview />
      <ServicesItems />
      <CareerCta />
    </>
  );
}
export default ServicesPage;
