import ContactInfo from '@/components/modules/about/contact/contactInfo';
import GetInTouch from '@/components/modules/about/contact/getInTouch';
import PageBanner from '@/components/shared/pageBanner';

function ContactUsPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactInfo />
      <GetInTouch />
    </>
  );
}
export default ContactUsPage;
