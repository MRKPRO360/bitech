import ServicesHero from '@/app/components/modules/services/hero';
import Overview from '@/app/components/modules/services/overview';
import ServicesItems from '@/app/components/modules/services/servicesItems';
import PageBanner from '@/app/components/shared/pageBanner';

function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <Overview />
      <ServicesItems />
      <ServicesHero />
    </>
  );
}
export default ServicesPage;
