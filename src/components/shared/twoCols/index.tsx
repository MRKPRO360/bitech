'use client';

import Container from '@/components/ui/core/Container';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import WandWithText from '@/components/ui/Wand';
import clsx from 'clsx';
import { Check } from 'lucide-react';

interface ITwoCols {
  title: string;
  secondaryText: string;
  paraText: string;
  ctaText?: string;
  image: StaticImageData;
  changeDirection?: boolean;
  items?: {
    text: string;
    color: string;
  }[];
}

function TwoCols({
  title,
  secondaryText,
  paraText,
  ctaText = 'Get Started',
  image,
  changeDirection = false,
  items,
}: ITwoCols) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!sectionRef.current) return;
        const tl = gsap.timeline({
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        });

        tl.from(sectionRef.current!.querySelector('.left-col'), {
          y: 200,
          opacity: 0,
        });
        tl.from(sectionRef.current!.querySelector('.right-col'), {
          y: 200,
          opacity: 0,
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
        <div
          className={clsx(
            'flex items-center flex-col lg:flex-row gap-5 lg:gap-0',
            changeDirection ? ' lg:flex-row-reverse' : 'lg:flex-row '
          )}
        >
          <div className="flex-1 left-col">
            <Image
              src={image}
              alt="start your project"
              width={500}
              height={500}
            />
          </div>

          <div className="flex-1 right-col">
            <WandWithText text={title} />
            <SecondaryHeading>{secondaryText}</SecondaryHeading>
            <Para className="mt-5 mb-2">{paraText}</Para>

            <div className="mt-6 space-y-3">
              {items?.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`flex-shrink-0 w-6 h-6 ${item.color} rounded-full flex items-center justify-center mt-1`}
                  >
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <Para className="ml-3">{item.text}</Para>
                </div>
              ))}
            </div>

            <Cta
              hasLink={true}
              path="/about/contact-us"
              className="mt-5 lg:mt-8"
              text={ctaText}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default TwoCols;
