import ServicesHero from '@/app/components/modules/services/hero';
import Overview from '@/app/components/modules/services/overview';
import PageBanner from '@/app/components/shared/pageBanner';

function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <Overview />
      <ServicesHero />
    </>
  );
}
export default ServicesPage;
