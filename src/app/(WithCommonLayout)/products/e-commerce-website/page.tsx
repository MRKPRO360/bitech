import ECommereceWebsiteFeatures from '@/components/modules/products/eCommerceWebiste/eCommerceWebsiteFeatures';
import TransformECommereceWebsite from '@/components/modules/products/eCommerceWebiste/transformeCommerceWebsite';
import ProductHero from '@/components/modules/products/ProductsHero';
import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import ProductStats from '@/components/shared/productStats';

const statsData = [
  { value: 1000, label: 'Stores Built', color: 'text-blue-600' },
  { value: 99, suffix: '%', label: 'Uptime', color: 'text-green-600' },
  { value: 70, label: '% Faster Loading', color: 'text-purple-600' },
  { value: 40, label: '% Sales Increase', color: 'text-orange-600' },
];

import ecommerceWebsite from '@/assets/ecommerce.jpg';

function ECommereceWebsitePage() {
  return (
    <>
      <PageBanner title="E Commerece Website" />
      <ProductHero
        title="Next-Gen E-Commerce Website Solution"
        description="Build your online store with blazing-fast performance, modern UI, and integrated payment gateways. Sell smarter and scale faster."
        image={ecommerceWebsite}
        alt="Pharmacy Software Dashboard"
        path="/"
      />
      <ECommereceWebsiteFeatures />
      <TransformECommereceWebsite />
      <ProductStats stats={statsData} />
      <CtaSection
        subHeading="E Commerece Website"
        heading="Ready to Transform Your E Commerece Website?"
        description="Contact us today to learn how our software can streamline your operations, reduce costs, and improve customer satisfaction
        ."
      />
    </>
  );
}
export default ECommereceWebsitePage;
