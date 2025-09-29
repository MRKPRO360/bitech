import CtaSection from '@/components/shared/careerCta';
import PageBanner from '@/components/shared/pageBanner';
import TwoCols from '@/components/shared/twoCols';
import websitesImage2 from '@/assets/wbsites-1.png';
import websitesImage1 from '@/assets/websites-2.png';
import WebsitesServices from '@/components/modules/services/websites/websitesServices';
import WebsitesProcess from '@/components/modules/services/websites/websitesProcess';

const chooseItems = [
  {
    text: 'Mobile-first responsive design that looks perfect on all devices',
    color: 'bg-blue-500',
  },
  {
    text: 'SEO-optimized structure and content for better search rankings',
    color: 'bg-green-500',
  },
  {
    text: 'Fast loading speeds and performance optimization',
    color: 'bg-purple-500',
  },
  {
    text: 'Easy-to-use content management systems',
    color: 'bg-orange-500',
  },
  {
    text: 'Professional design that reflects your brand identity',
    color: 'bg-red-500',
  },
];

const serviceItems = [
  {
    text: 'Business & corporate website development',
    color: 'bg-blue-500',
  },
  {
    text: 'E-commerce stores with secure payment processing',
    color: 'bg-green-500',
  },
  {
    text: 'Portfolio and showcase websites',
    color: 'bg-purple-500',
  },
  {
    text: 'Blog and content management systems',
    color: 'bg-orange-500',
  },
  {
    text: 'Website maintenance and ongoing support',
    color: 'bg-red-500',
  },
];

function WebSitesPage() {
  return (
    <>
      <PageBanner title="Websites" />
      <WebsitesServices />
      <TwoCols
        title="Why Choose Us"
        paraText="We don't just build websites—we create digital experiences that elevate your brand, engage your audience, and drive measurable business growth."
        secondaryText="Our Website Development Advantages"
        image={websitesImage1}
        items={chooseItems}
      />

      <WebsitesProcess />

      <TwoCols
        title="Website Services"
        paraText="From stunning business websites to powerful e-commerce platforms, we create responsive, SEO-optimized websites that captivate your audience and convert visitors into customers."
        secondaryText="Comprehensive Website Solutions"
        image={websitesImage2}
        changeDirection={true}
        items={serviceItems}
      />
      <CtaSection
        subHeading="Launch Your Professional Website"
        heading="Start Your Website Project Today"
        description="Let's create a stunning, responsive website that showcases your brand, engages your audience, and drives business growth with our expert web development team."
      />
    </>
  );
}
export default WebSitesPage;
