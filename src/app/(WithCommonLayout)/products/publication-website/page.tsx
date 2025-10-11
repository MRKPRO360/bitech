import CourierManagementFeatures from '@/components/modules/products/courierManagement/courierManagementFeatures';
import CourierManagementHeading from '@/components/modules/products/courierManagement/courierManagementHeading';
import TransformCourierManagement from '@/components/modules/products/courierManagement/transformCourierManagement';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 500, label: 'Pharmacies Using', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 24, label: '/7 Support', color: 'text-purple-600' },
  { value: 50, suffix: '%', label: 'Time Saved', color: 'text-orange-600' },
];

function PublicationWebsitePage() {
  return (
    <>
      <PageBanner title="Publication Website" />
      <CourierManagementHeading />
      <CourierManagementFeatures />
      <TransformCourierManagement />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="Courier Management"
        heading="Ready to Transform Your Courier Management?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default PublicationWebsitePage;
