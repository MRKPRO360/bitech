'use client';

import Container from '@/app/components/ui/core/Container';
import Cta from '@/app/components/ui/core/Cta';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import Image from 'next/image';
import startImage from '@/assets/project-start1.png';
import circleImage from '@/assets/circle-shape1.png';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Start() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!sectionRef.current) return;

        gsap.from(sectionRef.current!.querySelector('.left-col'), {
          x: -150,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current!.querySelector(
              '.left-col img:not(.hidden)'
            ),
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });
        gsap.from(sectionRef.current!.querySelector('.right-col'), {
          x: 150,
          opacity: 0,
          ease: 'power3.out',
          duration: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
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
      scope: sectionRef,
    }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <Container className="py-10 md:py-14 lg:py-16 relative z-50">
        <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="flex-1 left-col">
            <Image
              src={startImage}
              alt="start your project"
              width={500}
              height={500}
            />
          </div>

          <div className="flex-1 right-col">
            <SecondaryHeading>
              We Like to Start Your Project With Us
            </SecondaryHeading>
            <Para className="mt-5 mb-2">
              Leverage our expertise to kickstart your next big idea along with
              end-to-end solutions, ensuring a seamless development process.
            </Para>
            <Cta text="Get Started" />
          </div>
        </div>
      </Container>
      <div className="hidden lg:block absolute right-0 bottom-0">
        <Image src={circleImage} alt="circle" width={320} height={320} />
      </div>
    </section>
  );
}
export default Start;
