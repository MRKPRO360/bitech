import PharmacyFeatures from '@/components/modules/products/pharmacySoftware/pharmacyFeatures';
import PharmacyHeading from '@/components/modules/products/pharmacySoftware/pharmacyHeading';
import TransformPharmacy from '@/components/modules/products/pharmacySoftware/transformPharmacy';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 500, label: 'Pharmacies Using', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 24, label: '/7 Support', color: 'text-purple-600' },
  { value: 50, suffix: '%', label: 'Time Saved', color: 'text-orange-600' },
];

function PharmacySoftwarePage() {
  return (
    <>
      <PageBanner title="Pharmacy Software" />
      <PharmacyHeading />
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
