'use client';
import Cta from '@/components/ui/core/Cta';
import Image from 'next/image';
import hero from '@/assets/banner-img1.png';
import Container from '@/components/ui/core/Container';
import heroBottom from '@/assets/banner-bg.png';
import Para from '@/components/ui/core/Para';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function HomeBanner() {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({});

    if (!boxRef || !imgRef) return;
    const children = boxRef.current?.querySelectorAll('.ganim');
    gsap.set(children!, { opacity: 0, y: 50 });
    gsap.set(imgRef.current, { opacity: 0, y: 50 });
    tl.to(children!, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    });

    tl.to(
      imgRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.25,
      },
      '<'
    );
  });

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#fff',
        backgroundPosition: 'bottom',
        backgroundImage: `url(${heroBottom.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <Container>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-14 lg:gap-0 py-34 sm:py-44 lg:pt-56 lg:pb-52">
          <div className="flex-1 flex flex-col justify-center items-center sm:block">
            <div
              ref={boxRef}
              className="lg:w-[95%] flex flex-col items-center justify-center lg:block"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold opacity-0 translate-y-12 ganim">
                Secure IT Solutions Services
              </h1>

              <Para className="mt-4 lg:mt-8 mb-8 lg:mb-3 opacity-0 translate-y-12 ganim">
                We are a team of experienced cybersecurity professionals
                dedicated to providing top-notch security solutions to
                businesses of all sizes.
              </Para>

              <div className="opacity-0 translate-y-12 ganim">
                <Cta text="Get Started" className="" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Image
              ref={imgRef}
              src={hero}
              alt="hero banner"
              width={500}
              height={500}
              className="opacity-0 translate-y-12"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default HomeBanner;
