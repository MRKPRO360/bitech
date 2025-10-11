import PosManagementFeatures from '@/components/modules/products/posManagement/posMangementFeatures';
import TransformPosManagement from '@/components/modules/products/posManagement/transformPosMangement';
import ProductHero from '@/components/modules/products/ProductsHero';
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

import pharmacyDashboard from '@/assets/pharmacy-dashboard.png';

function PosManagementPage() {
  return (
    <>
      <PageBanner title="Pos Management" />
      <ProductHero
        title="Smart POS Management Software"
        description="Simplify sales, manage inventory, and analyze business growth with our modern POS system designed for retail and restaurant businesses."
        image={pharmacyDashboard}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
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
