import PosManagementFeatures from '@/components/modules/products/posManagement/posMangementFeatures';
import PosManagementHeading from '@/components/modules/products/posManagement/posMangementHeading';
import TransformPosManagement from '@/components/modules/products/posManagement/transformPosMangement';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 800, label: 'POS Terminals Active', color: 'text-blue-600' },
  {
    value: 98,
    suffix: '%',
    label: 'Transaction Accuracy',
    color: 'text-green-600',
  },
  { value: 30, label: '% Faster Checkouts', color: 'text-purple-600' },
  { value: 25, label: '% Sales Growth', color: 'text-orange-600' },
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
