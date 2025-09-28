import DataDriven from '@/components/modules/about/dataDriven';
import Info from '@/components/modules/about/info';
import Target from '@/components/modules/about/target';
import WhyChooseUs from '@/components/modules/about/whyChooseUs';
import PageBanner from '@/components/shared/pageBanner';

function AboutPage() {
  return (
    <>
      <PageBanner title="About" />
      <Info />
      <Target />
      <WhyChooseUs />
      <DataDriven />
    </>
  );
}
export default AboutPage;
