import PharmacyFeatures from '@/components/modules/products/pharmacySoftware/pharmacyFeatures';
import TransformPharmacy from '@/components/modules/products/pharmacySoftware/transformPharmacy';
import ProductHero from '@/components/modules/products/ProductsHero';
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

function PharmacySoftwarePage() {
  return (
    <>
      <PageBanner title="Pharmacy Software" />
      <ProductHero
        title="Advanced Pharmacy Management Software"
        description="Streamline your pharmacy operations with our comprehensive software solution. Manage inventory, billing, prescriptions, and customers efficiently."
        image={pharmacyDashboard}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <PharmacyFeatures />
      <TransformPharmacy />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="Pharmacy Software"
        heading="Ready to Transform Your Pharmacy?"
        description="Join hundreds of successful pharmacies using our software to streamline their operations and grow their business."
      />
    </>
  );
}
export default PharmacySoftwarePage;
