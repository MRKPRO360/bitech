import ProductHero from '@/components/modules/products/ProductsHero';
import SchoolManagementFeatures from '@/components/modules/products/schoolManagement/schoolManagementFeatures';
import SchoolManagementHeading from '@/components/modules/products/schoolManagement/schoolManagementHeading';
import TransformSchoolManagement from '@/components/modules/products/schoolManagement/transformSchoolManagement';
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

import pharmacyDashboard from '@/assets/pharmacy-dashboard.png';

function SchoolManagementSystemPage() {
  return (
    <>
      <PageBanner title="School Management System" />
      <ProductHero
        title="Comprehensive School Management System"
        description="Simplify academic and administrative tasks with our all-in-one
              school management platform. Manage students, teachers, attendance,
              results, and communication — all from one place."
        image={pharmacyDashboard}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <SchoolManagementFeatures />
      <TransformSchoolManagement />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="School Management System"
        heading="Ready to Transform Your Shcool Management System?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction."
      />
    </>
  );
}
export default SchoolManagementSystemPage;
