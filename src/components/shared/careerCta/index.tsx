'use client';

import Container from '@/components/ui/core/Container';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Image from 'next/image';
import startImage from '@/assets/project-start1.png';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import WandWithText from '@/components/ui/Wand';
import { useFadeUp } from '@/hooks/FadeUp';
import { Phone } from 'lucide-react';

function CareerCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!containerRef.current) return;

        gsap.from(containerRef.current!.querySelector('.left-col'), {
          x: -150,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current!.querySelector(
              '.left-col img:not(.hidden)'
            ),
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });
        gsap.from(containerRef.current!.querySelector('.right-col'), {
          x: 150,
          opacity: 0,
          ease: 'power3.out',
          duration: 0.4,
          scrollTrigger: {
            trigger: containerRef.current,
            // markers: true,
            start: 'top 40%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });
      });

      return () => ctx.revert();
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Container className="py-10 md:py-14 lg:py-16 relative z-50 overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center flex-col lg:flex-row gap-5 lg:gap-0"
      >
        <div className="flex-1 left-col">
          <Image
            src={startImage}
            alt="start your project"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1 right-col">
          <div
            ref={fadeRef}
            className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
          >
            <WandWithText text="Ready to Start Your Journey?" />

            <SecondaryHeading>
              Find your perfect role and join our growing team
            </SecondaryHeading>
            <Para className="my-5">
              Don&apos;t see the perfect role? We&apos;re always looking for
              talented people. Send us your resume!
            </Para>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Cta
                hasLink={true}
                path="/about/contact-us"
                renderIcon={false}
                text="General Application"
              />
              <Cta icon={<Phone />} outline={true} text="Contact Our Team" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default CareerCta;
