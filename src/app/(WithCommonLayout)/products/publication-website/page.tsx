import ProductHero from '@/components/modules/products/ProductsHero';
import PublicationFeatures from '@/components/modules/products/publicationWebsite/publicationFeatures';
import TransformPublication from '@/components/modules/products/publicationWebsite/transformPublication';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 500, label: 'Pharmacies Using', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 24, label: '/7 Support', color: 'text-purple-600' },
  { value: 50, suffix: '%', label: 'Time Saved', color: 'text-orange-600' },
];

import pharmacyDashboard from '@/assets/pharmacy-dashboard.png';

function PublicationWebsitePage() {
  return (
    <>
      <PageBanner title="Publication Website" />
      <ProductHero
        title="Modern Publication & News Website"
        description="Launch your digital magazine or news platform with a stylish, responsive, and easy-to-manage publication system built for high performance."
        image={pharmacyDashboard}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <PublicationFeatures />
      <TransformPublication />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="Publication Website"
        heading="Ready to Transform Your Publication Website?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default PublicationWebsitePage;
