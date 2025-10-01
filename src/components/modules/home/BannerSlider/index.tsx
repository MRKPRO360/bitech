// 'use client';
// import Cta from '@/components/ui/core/Cta';
// import Image from 'next/image';
// import hero from '@/assets/banner-img1.png';
// import Container from '@/components/ui/core/Container';
// import heroBottom from '@/assets/banner-bg.png';
// import Para from '@/components/ui/core/Para';
// import gsap from 'gsap';
// import { useRef, useState } from 'react';
// import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import clsx from 'clsx';

// function BannerSlider() {
//   const swiperRef = useRef<SwiperClass | null>(null);

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handlePrev = () => {
//     swiperRef.current?.slidePrev();
//   };

//   const handleNext = () => {
//     swiperRef.current?.slideNext();
//   };

//   const updateNavState = (swiper: SwiperClass) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   const slides = [
//     {
//       id: 1,
//       title: 'Secure IT Solutions Services',
//       description:
//         'We are a team of experienced cybersecurity professionals dedicated to providing top-notch security solutions to businesses of all sizes.',
//       image: hero,
//       buttonText: 'Get Started',
//     },
//     {
//       id: 2,
//       title: 'Cloud & Data Protection',
//       description:
//         'Protect your business-critical data with our advanced cloud security and backup services.',
//       image: hero,
//       buttonText: 'Explore Services',
//     },
//     {
//       id: 3,
//       title: '24/7 Monitoring Support',
//       description:
//         'Stay ahead of cyber threats with round-the-clock monitoring and rapid response solutions.',
//       image: hero,
//       buttonText: 'Contact Us',
//     },
//     {
//       id: 4,
//       title: 'Custom Security Plans',
//       description:
//         'We design tailored strategies to fit your specific business needs and budget.',
//       image: hero,
//       buttonText: 'Learn More',
//     },
//   ];

//   return (
//     <div
//       style={{
//         position: 'relative',
//         zIndex: 1,
//         backgroundColor: '#fff',
//         backgroundPosition: 'bottom',
//         backgroundImage: `url(${heroBottom.src})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         width: '100%',
//       }}
//     >
//       <Container>
//         <Swiper
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//             updateNavState(swiper);

//             const firstSlide = swiper.slides[swiper.activeIndex];

//             gsap.fromTo(
//               firstSlide.querySelectorAll('.ganim'),
//               { y: 50, opacity: 0 },
//               {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.2,
//                 duration: 0.8,
//                 ease: 'power3.out',
//               }
//             );

//             gsap.fromTo(
//               firstSlide.querySelectorAll('.hero-image'),
//               { y: 50, opacity: 0 },
//               {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.2,
//                 duration: 0.8,
//                 ease: 'power3.out',
//                 delay: 0.2,
//               }
//             );
//           }}
//           onSlideChange={(swiper) => {
//             const activeSlide = swiper.slides[swiper.activeIndex];

//             updateNavState(swiper);
//             gsap.fromTo(
//               activeSlide.querySelectorAll('.ganim'),
//               { y: 50, opacity: 0 },
//               {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.2,
//                 duration: 0.8,
//                 ease: 'power3.out',
//               }
//             );
//             updateNavState(swiper);
//             gsap.fromTo(
//               activeSlide.querySelectorAll('.hero-image'),
//               { y: 50, opacity: 0 },
//               {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.2,
//                 duration: 0.8,
//                 ease: 'power3.out',
//                 delay: 0.2,
//               }
//             );
//           }}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: true,
//           }}
//         >
//           {slides.map((el, key) => (
//             <SwiperSlide key={key}>
//               <div className="flex justify-between items-center flex-col lg:flex-row gap-14 lg:gap-0 py-34 sm:py-40 lg:pt-46 lg:pb-52">
//                 <div className="flex-1 flex flex-col justify-center items-center sm:block">
//                   <div className="flex flex-col items-center justify-center lg:block max-w-xl mx-auto">
//                     <h1 className="text-4xl lg:text-5xl font-extrabold  translate-y-12 ganim">
//                       {el.title}
//                     </h1>

//                     <Para className="mt-4 lg:mt-8 mb-8 lg:mb-3 translate-y-12 ganim">
//                       {el.description}
//                     </Para>

//                     <div className="translate-y-12 ganim">
//                       <Cta text={el.buttonText} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <Image
//                     src={el.image}
//                     alt="hero banner"
//                     width={500}
//                     height={500}
//                     className="hero-image translate-y-12 w-full "
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>
//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrev}
//         disabled={isBeginning}
//         className={clsx(
//           'absolute top-1/2 -translate-y-1/2 left-0 z-50 bg-white p-2 rounded-full border border-gray-200 transition duration-300 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
//           !isBeginning && 'hover:bg-primary'
//         )}
//       >
//         <ArrowLeft className="group-hover:text-white h-7 w-7" strokeWidth={1} />
//       </button>

//       <button
//         onClick={handleNext}
//         disabled={isEnd}
//         className={clsx(
//           'absolute top-1/2 -translate-y-1/2 right-0 z-50 bg-white p-2 rounded-full border border-gray-200 transition duration-300 group disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed',
//           !isEnd && 'hover:bg-primary'
//         )}
//       >
//         <ArrowRight
//           className="group-hover:text-white h-7 w-7"
//           strokeWidth={1}
//         />
//       </button>
//     </div>
//   );
// }
// export default BannerSlider;
'use client';
import Cta from '@/components/ui/core/Cta';
import Image from 'next/image';
import hero from '@/assets/banner-img1.png';
import Container from '@/components/ui/core/Container';
import heroBottom from '@/assets/banner-bg.png';
import Para from '@/components/ui/core/Para';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

function BannerSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const updateNavState = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setCurrentSlide(swiper.activeIndex);
  };

  // Animate floating shapes on slide change
  useEffect(() => {
    if (shapesRef.current) {
      const shapes = shapesRef.current.querySelectorAll('.floating-shape');

      // Reset all shapes to initial state
      gsap.set(shapes, { clearProps: 'all' });

      // Animate shapes with different effects
      shapes.forEach((shape, index) => {
        const delay = index * 0.1;

        gsap.fromTo(
          shape,
          {
            scale: 0,
            rotation: -45,
            opacity: 0,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 0.1,
            duration: 0.8,
            delay: delay,
            ease: 'back.out(1.7)',
          }
        );
      });
    }
  }, [currentSlide]);

  const slides = [
    {
      id: 1,
      title: 'Secure IT Solutions Services',
      description:
        'We are a team of experienced cybersecurity professionals dedicated to providing top-notch security solutions to businesses of all sizes.',
      image: hero,
      buttonText: 'Get Started',
    },
    {
      id: 2,
      title: 'Cloud & Data Protection',
      description:
        'Protect your business-critical data with our advanced cloud security and backup services.',
      image: hero,
      buttonText: 'Explore Services',
    },
    {
      id: 3,
      title: '24/7 Monitoring Support',
      description:
        'Stay ahead of cyber threats with round-the-clock monitoring and rapid response solutions.',
      image: hero,
      buttonText: 'Contact Us',
    },
    {
      id: 4,
      title: 'Custom Security Plans',
      description:
        'We design tailored strategies to fit your specific business needs and budget.',
      image: hero,
      buttonText: 'Learn More',
    },
  ];

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
        overflow: 'hidden',
      }}
    >
      {/* Animated Floating Shapes */}
      <div
        ref={shapesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Large geometric shapes */}
        <div className="floating-shape absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-gray-300" />
        <div className="floating-shape absolute bottom-20 right-20 w-16 h-16 rounded-lg border border-gray-300 rotate-45" />
        <div className="floating-shape absolute top-1/2 left-1/4 w-12 h-12 rounded-full border-2 border-gray-300" />
        <div className="floating-shape absolute bottom-10 left-20 w-24 h-24 rounded-lg border border-gray-300 rotate-12" />
        <div className="floating-shape absolute top-20 right-32 w-14 h-14 rounded-full border-2 border-gray-300" />
        <div className="floating-shape absolute bottom-32 left-1/2 w-18 h-18 rounded-lg border border-gray-300 rotate-45" />

        {/* Small decorative dots */}
        <div className="floating-shape absolute top-40 left-40 w-3 h-3 rounded-full bg-gray-300" />
        <div className="floating-shape absolute bottom-40 right-40 w-2 h-2 rounded-full bg-gray-300" />
        <div className="floating-shape absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-gray-300" />
        <div className="floating-shape absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-gray-300" />

        {/* Line elements */}
        <div className="floating-shape absolute top-16 right-16 w-16 h-0.5 bg-gray-300 rotate-45" />
        <div className="floating-shape absolute bottom-16 left-16 w-12 h-0.5 bg-gray-300 -rotate-45" />
      </div>

      <Container>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavState(swiper);

            const firstSlide = swiper.slides[swiper.activeIndex];

            // Animate content
            gsap.fromTo(
              firstSlide.querySelectorAll('.ganim'),
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
              }
            );

            // Animate image with scale effect
            gsap.fromTo(
              firstSlide.querySelectorAll('.hero-image'),
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2,
              }
            );

            // Animate slide-specific accent elements
            gsap.fromTo(
              firstSlide.querySelectorAll('.slide-accent'),
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1,
              }
            );
          }}
          onSlideChange={(swiper) => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            updateNavState(swiper);

            // Content animation
            gsap.fromTo(
              activeSlide.querySelectorAll('.ganim'),
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
              }
            );

            // Image animation with scale
            gsap.fromTo(
              activeSlide.querySelectorAll('.hero-image'),
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2,
              }
            );

            // Animate slide-specific accent elements
            gsap.fromTo(
              activeSlide.querySelectorAll('.slide-accent'),
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1,
              }
            );
          }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          {slides.map((el, key) => (
            <SwiperSlide key={key}>
              <div className="flex justify-between items-center flex-col lg:flex-row gap-14 lg:gap-0 py-34 sm:py-40 lg:py-40 relative">
                {/* Slide-specific animated accent shapes */}
                <div className="slide-accent absolute left-2 top-1/4 w-4 h-4 rounded-full bg-primary opacity-20" />
                <div className="slide-accent absolute right-2 bottom-1/4 w-6 h-6 rounded-lg bg-primary opacity-20 rotate-45" />
                <div className="slide-accent absolute left-1/4 bottom-60 w-3 h-3 rounded-full bg-primary opacity-30" />

                <div className="flex-1 flex flex-col justify-center items-center sm:block relative z-10">
                  <div className="flex flex-col items-center justify-center lg:block max-w-xl mx-auto">
                    {/* Animated title with accent underline */}
                    <div className="relative">
                      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 translate-y-12 ganim">
                        {el.title}
                      </h1>
                      <div className="slide-accent w-20 h-1 rounded-full mt-2 bg-primary opacity-80" />
                    </div>

                    <Para className="mt-4 lg:mt-8 mb-8 lg:mb-3 translate-y-12 ganim">
                      {el.description}
                    </Para>

                    <div className="translate-y-12 ganim">
                      <Cta text={el.buttonText} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 relative">
                  {/* Image container with animated border */}
                  <div className="relative">
                    <Image
                      src={el.image}
                      alt="hero banner"
                      width={500}
                      height={500}
                      className="hero-image translate-y-12 w-full rounded-md relative z-10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Enhanced Navigation buttons */}
      <button
        onClick={handlePrev}
        disabled={isBeginning}
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 left-4 z-50 bg-white p-3 rounded-full border border-gray-300 transition-all duration-300 group cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl',
          !isBeginning && 'hover:scale-110 hover:border-primary'
        )}
      >
        <ArrowLeft
          className="h-6 w-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-transform"
          strokeWidth={2}
        />
      </button>

      <button
        onClick={handleNext}
        disabled={isEnd}
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 right-4 z-50 bg-white p-3 rounded-full border border-gray-300 transition-all duration-300 group disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-lg hover:shadow-xl',
          !isEnd && 'hover:scale-110 hover:border-primary'
        )}
      >
        <ArrowRight
          className="h-6 w-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-transform"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}

export default BannerSlider;
