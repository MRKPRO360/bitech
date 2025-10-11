import TailorManagementFeatures from '@/components/modules/products/tailorManagement/tailorManagementFeatures';
import TailorManagementHeading from '@/components/modules/products/tailorManagement/tailorManagementHeading';
import TransformTailorManagement from '@/components/modules/products/tailorManagement/transformtailorManagement';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 200, label: 'Schools Digitized', color: 'text-blue-600' },
  {
    value: 95,
    suffix: '%',
    label: 'Admin Time Saved',
    color: 'text-green-600',
  },
  { value: 10, label: 'K+ Students Managed', color: 'text-purple-600' },
  { value: 99, suffix: '%', label: 'Data Accuracy', color: 'text-orange-600' },
];
function TailorManagementPage() {
  return (
    <>
      <PageBanner title="Tailor Management" />
      <TailorManagementHeading />
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
