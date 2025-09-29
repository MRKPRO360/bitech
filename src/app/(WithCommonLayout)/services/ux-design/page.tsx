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
        subHeading="Elevate User Experiences"
        heading="Start Your UX Design Project"
        description="Let's create intuitive, user-centered designs that delight your customers, improve engagement, and drive conversions through thoughtful user experience strategies."
      />
    </>
  );
}
export default UxDesignPage;
