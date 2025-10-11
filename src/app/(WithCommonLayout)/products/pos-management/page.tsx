import PosManagementFeatures from '@/components/modules/products/posManagement/posMangementFeatures';
import PosManagementHeading from '@/components/modules/products/posManagement/posMangementHeading';
import TransformPosManagement from '@/components/modules/products/posManagement/transformPosMangement';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 500, label: 'Pharmacies Using', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 24, label: '/7 Support', color: 'text-purple-600' },
  { value: 50, suffix: '%', label: 'Time Saved', color: 'text-orange-600' },
];

function PosManagementPage() {
  return (
    <>
      <PageBanner title="Erp Software" />
      <PosManagementHeading />
      <PosManagementFeatures />
      <TransformPosManagement />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="Pos Management"
        heading="Ready to Transform Your Pos Management?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default PosManagementPage;
