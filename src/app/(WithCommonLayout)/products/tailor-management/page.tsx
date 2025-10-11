import ProductHero from '@/components/modules/products/ProductsHero';
import TailorManagementFeatures from '@/components/modules/products/tailorManagement/tailorManagementFeatures';
import TransformTailorManagement from '@/components/modules/products/tailorManagement/transformtailorManagement';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 120, label: 'Tailors Using', color: 'text-blue-600' },
  {
    value: 95,
    suffix: '%',
    label: 'Customer Retention',
    color: 'text-green-600',
  },
  { value: 60, label: '% Faster Deliveries', color: 'text-purple-600' },
  { value: 80, label: '% Paperwork Reduced', color: 'text-orange-600' },
];

import tailorWebsite from '@/assets/tailor.png';

function TailorManagementPage() {
  return (
    <>
      <PageBanner title="Tailor Management" />
      <ProductHero
        title="Tailor Management Software"
        description="Designed for modern tailoring shops to manage orders, customers, and deliveries with ease. Focus on creativity — let the system handle operations."
        image={tailorWebsite}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <TailorManagementFeatures />
      <TransformTailorManagement />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="Tailor Management"
        heading="Ready to Transform Your Tailor Management?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default TailorManagementPage;
