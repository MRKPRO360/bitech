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
        subHeading="Transform Your IT Infrastructure"
        heading="Start Your IT Transformation Today"
        description="Let's implement comprehensive IT solutions that optimize your operations, enhance security, and drive digital transformation for sustainable business growth."
      />
    </>
  );
}
export default ItServicePage;
