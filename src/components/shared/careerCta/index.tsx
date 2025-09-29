'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';

import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useFadeUp } from '@/hooks/FadeUp';
import WandWithText from '@/components/ui/Wand';
import { Phone } from 'lucide-react';
import Cta from '@/components/ui/core/Cta';
import start from '@/assets/project-start1.png';

interface ICtaSeciton {
  heading?: string;
  subHeading?: string;
  description?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  image?: StaticImageData; // optional image
}

function CtaSection({
  heading = 'Find your perfect role and join our growing team',
  subHeading = 'Ready to Start Your Journey?',
  description = "Don't see the perfect role? We're always looking for talented people. Send us your resume!",
  primaryText = 'General Application',
  primaryLink = '/about/contact-us',
  secondaryText = 'Contact Our Team',
  secondaryLink = '#',
  image,
}: ICtaSeciton) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  useGSAP(
    () => {
      if (!image) return; // no animation if no image

      const ctx = gsap.context(() => {
        if (!containerRef.current) return;

        gsap.from(containerRef.current.querySelector('.left-col'), {
          x: -150,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current.querySelector('.left-col img'),
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });

        gsap.from(containerRef.current.querySelector('.right-col'), {
          x: 150,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 40%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <Container className="py-10 md:py-14 lg:py-16 relative z-50 overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0"
      >
        <div className="flex-1 left-col">
          <Image src={image || start} alt="cta" width={500} height={500} />
        </div>

        <div className="flex-1 right-col">
          <div ref={fadeRef} className="mb-5 flex flex-col ">
            <WandWithText text={subHeading} />
            <SecondaryHeading>{heading}</SecondaryHeading>
            <Para className="my-5">{description}</Para>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Cta
                hasLink
                path={primaryLink}
                renderIcon={false}
                text={primaryText}
              />
              <Cta icon={<Phone />} outline text={secondaryText} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CtaSection;
