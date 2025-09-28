'use client';

import Container from '@/components/ui/core/Container';
import { FaPlus } from 'react-icons/fa6';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import banner from '@/assets/aboutBg.png';
import shape from '@/assets/shape2.png';
import Breadcrumbs from '@/components/ui/core/BreadCrumb';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';

interface PageBannerProps {
  title: string;
  backgroundImage?: string; // optional
  shapeImage?: string; // optional decorative shape
}

export default function PageBanner({
  title,
  backgroundImage,
  shapeImage,
}: PageBannerProps) {
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
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {
              backgroundImage: `url(${banner.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
      }
      className="lg:gap-0 py-30 lg:py-40"
    >
      <Container>
        <div className="relative flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <FaPlus
            style={{ animationDuration: '6s' }}
            className="text-green-400/50 text-4xl animate-spin absolute left-0 top-12"
          />
          <SecondaryHeading>{title}</SecondaryHeading>

          <div className="relative z-10 mt-4">
            <Breadcrumbs />
          </div>

          {shapeImage ? (
            <Image
              className="opacity-40 circle absolute right-0 -top-10"
              src={shapeImage}
              width={200}
              height={200}
              alt="decorative shape"
            />
          ) : (
            <Image
              className="opacity-40 circle absolute right-0 -top-10"
              src={shape}
              width={200}
              height={200}
              alt="decorative shape"
            />
          )}
        </div>
      </Container>
    </div>
  );
}
