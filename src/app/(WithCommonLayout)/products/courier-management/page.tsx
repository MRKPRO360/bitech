import CourierManagementFeatures from '@/components/modules/products/courierManagement/courierManagementFeatures';
import TransformCourierManagement from '@/components/modules/products/courierManagement/transformCourierManagement';
import ProductHero from '@/components/modules/products/ProductsHero';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';
import courier from '@/assets/courier.png';

const statsData = [
  { value: 300, label: 'Couriers Using', color: 'text-blue-600' },
  {
    value: 98,
    suffix: '%',
    label: 'Delivery Accuracy',
    color: 'text-green-600',
  },
  { value: 40, label: '% Faster Routes', color: 'text-purple-600' },
  {
    value: 100,
    suffix: '%',
    label: 'Tracking Transparency',
    color: 'text-orange-600',
  },
];

function CourierManagementPage() {
  return (
    <>
      <PageBanner title="Courier Management" />
      <ProductHero
        title="Courier Management System"
        description=" Simplify logistics operations with automated parcel tracking,
              delivery management, and real-time notifications for senders and
              recipients."
        image={courier}
        alt="Pharmacy Software Dashboard"
        path="/"
      />

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
export default CourierManagementPage;
