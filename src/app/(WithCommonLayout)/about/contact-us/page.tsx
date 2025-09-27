import ContactInfo from '@/app/components/modules/about/contact/contactInfo';
import GetInTouch from '@/app/components/modules/about/contact/getInTouch';
import PageBanner from '@/app/components/shared/pageBanner';

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
