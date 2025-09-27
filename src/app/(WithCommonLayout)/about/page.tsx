import DataDriven from '@/app/components/modules/about/dataDriven';
import Info from '@/app/components/modules/about/info';
import Target from '@/app/components/modules/about/target';
import WhyChooseUs from '@/app/components/modules/about/whyChooseUs';
import PageBanner from '@/app/components/shared/pageBanner';

function AboutPage() {
  return (
    <>
      <PageBanner title="Testimonial" />
      <Info />
      <Target />
      <WhyChooseUs />
      <DataDriven />
    </>
  );
}
export default AboutPage;
