import DesignProcess from '@/components/modules/services/uxDesign/designProcess';
import UxPrinciple from '@/components/modules/services/uxDesign/uxPrinciple';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';

function UxDesignPage() {
  return (
    <>
      <PageBanner title="UX Design" />
      <UxPrinciple />
      <DesignProcess />

      <CtaSection
        subHeading="Transform User Experience "
        heading="We Like to Start Your Project With Us"
        description="Let's collaborate to create digital experiences that delight your users and drive business growth. Get in touch to start your project."
      />
    </>
  );
}
export default UxDesignPage;
