import ItStack from '@/components/modules/services/itServices/itStack';
import MethodologyProcess from '@/components/modules/services/itServices/methodologyProcess';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';

function ItServicePage() {
  return (
    <>
      <PageBanner title="IT Service" />
      <MethodologyProcess />
      <ItStack />
      <CtaSection
        subHeading="Transform User Experience "
        heading="We Like to Start Your Project With Us"
        description="Let's collaborate to create digital experiences that delight your users and drive business growth. Get in touch to start your project."
      />
    </>
  );
}
export default ItServicePage;
