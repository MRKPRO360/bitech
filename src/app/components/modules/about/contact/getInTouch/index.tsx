'use client';

import WandWithText from '@/app/components/ui/Wand';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import Para from '@/app/components/ui/core/Para';
import Container from '@/app/components/ui/core/Container';
import { useFadeUp } from '@/hooks/FadeUp';
import contactImg from '@/assets/contact.png';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { useStaggerChildren } from '@/hooks/CardStagger';
function GetInTouch() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const formRef = useStaggerChildren<HTMLDivElement>({
    y: 20,
    stagger: 0.4,
    delay: 1.5,
  });

  return (
    <Container>
      <div
        ref={fadeRef}
        className=" flex flex-col items-center justify-center py-16 lg:py-20"
      >
        <WandWithText text="People Love Us" />
        <SecondaryHeading>Get In Touch</SecondaryHeading>
        <Para className="mt-5">
          Your email address will not be published. Required fields are marked *
        </Para>
      </div>

      <div
        ref={formRef}
        className="flex flex-col lg:flex-row items-center my-8 md:my-10 lg:my-12 gap-10"
      >
        <Image
          className="flex-2/6 lg:flex-1"
          src={contactImg}
          alt={'contact us'}
          width={400}
          height={400}
        />
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
export default GetInTouch;
