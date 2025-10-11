import ECommereceWebsiteFeatures from '@/components/modules/products/eCommerceWebiste/eCommerceWebsiteFeatures';
import ECommereceWebsiteHeading from '@/components/modules/products/eCommerceWebiste/eCommerceWebsiteHeading';
import TransformECommereceWebsite from '@/components/modules/products/eCommerceWebiste/transformeCommerceWebsite';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 1000, label: 'Stores Built', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 70, label: '% Faster Loading', color: 'text-purple-600' },
  { value: 40, label: '% Sales Increase', color: 'text-orange-600' },
];

function ECommereceWebsitePage() {
  return (
    <>
      <PageBanner title="E Commerece Website" />
      <ECommereceWebsiteHeading />
      <ECommereceWebsiteFeatures />
      <TransformECommereceWebsite />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="E Commerece Website"
        heading="Ready to Transform Your E Commerece Website?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default ECommereceWebsitePage;
