import ErpSoftwareFeatures from '@/components/modules/products/erpSoftware/erpSoftwareFeature';
import TransformErpSoftware from '@/components/modules/products/erpSoftware/transformErpSoftware';
import ProductHero from '@/components/modules/products/ProductsHero';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 150, label: 'Businesses Integrated', color: 'text-blue-600' },
  {
    value: 90,
    suffix: '%',
    label: 'Workflow Automation',
    color: 'text-green-600',
  },
  { value: 40, label: '% Cost Reduction', color: 'text-purple-600' },
  { value: 99, suffix: '%', label: 'System Uptime', color: 'text-orange-600' },
];

import pharmacyDashboard from '@/assets/pharmacy-dashboard.png';

function ErpSoftwarePage() {
  return (
    <>
      <PageBanner title="Erp Software" />
      <ProductHero
        title="All-in-One ERP Software Solution"
        description="Integrate your business operations — from HR to finance — into one
              unified ERP platform that drives efficiency and data-driven
              decision making."
        image={pharmacyDashboard}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <ErpSoftwareFeatures />
      <TransformErpSoftware />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="ERP Software"
        heading="Ready to Transform Your Business with Our ERP Software?"
        description="Streamline operations, enhance decision-making, and drive growth with a comprehensive, integrated solution tailored to your needs."
      />
    </>
  );
}
export default ErpSoftwarePage;
