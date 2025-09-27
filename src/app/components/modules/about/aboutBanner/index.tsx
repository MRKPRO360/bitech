'use client';

import Container from '@/app/components/ui/core/Container';
import { FaPlus } from 'react-icons/fa6';
import circle from '@/assets/shape2.png';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import aboutBg from '@/assets/aboutBg.png';
import Breadcrumbs from '@/app/components/ui/core/BreadCrumb';

import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';

function AboutBanner() {
  useGSAP(() => {
    gsap.to('.circle', {
      rotateY: 180,
      duration: 3,
      ease: 'circ.inOut',
      repeat: -1,
    });
  });

  return (
    <div
      style={{
        backgroundImage: `url(${aboutBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="lg:gap-0 py-30  lg:py-40 "
    >
      <Container>
        <div className="relative flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <FaPlus
            style={{ animationDuration: '6s' }}
            className="text-green-400/50 text-4xl animate-spin absolute left-0 top-12"
          />
          <SecondaryHeading>About Us</SecondaryHeading>
          <div className="relative z-10 mt-4">
            <Breadcrumbs />
          </div>
          <Image
            className="opacity-40 circle absolute right-0 -top-10"
            src={circle}
            width={200}
            height={200}
            alt="circle png"
          />
        </div>
      </Container>
    </div>
  );
}
export default AboutBanner;
