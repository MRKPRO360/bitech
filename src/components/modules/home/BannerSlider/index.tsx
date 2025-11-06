'use client';
import Cta from '@/components/ui/core/Cta';
import Image from 'next/image';
import hero from '@/assets/banner-img1.png';
import Container from '@/components/ui/core/Container';
import heroBottom from '@/assets/banner-bg.png';
import Para from '@/components/ui/core/Para';
import { SplitText } from 'gsap/SplitText';

import gsap from 'gsap';
gsap.registerPlugin(SplitText);

import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

function BannerSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const updateNavState = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

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

  const animateTitle = (slide: HTMLElement) => {
    const titleElement = slide.querySelector('h1');
    if (!titleElement) return;

    // Clear any existing SplitText
    const existingSplit = titleElement.querySelector('.split-text-wrapper');
    if (existingSplit) {
      existingSplit.outerHTML = titleElement.innerHTML;
    }

    const split = new SplitText(titleElement, {
      type: 'lines,words,chars',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
    });

    // Animate characters with stagger
    gsap.fromTo(
      split.chars,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  };

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
      <Container>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavState(swiper);

            const firstSlide = swiper.slides[swiper.activeIndex];

            // Animate content
            animateTitle(firstSlide);
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
            animateTitle(activeSlide);

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
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slides.map((el, key) => (
            <SwiperSlide key={key}>
              <div className="flex justify-between items-center flex-col lg:flex-row gap-14 lg:gap-0 py-34 sm:py-40 lg:py-40 relative">
                {/* Slide-specific animated accent shapes */}
                <div className="slide-accent absolute left-2 top-1/4 w-8 h-8 rounded-full bg-primary opacity-20" />
                <div className="slide-accent absolute right-2 bottom-1/4 w-10 h-10 rounded-lg bg-primary opacity-20 rotate-45" />
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

// 'use client';

// import Cta from '@/components/ui/core/Cta';
// import Image from 'next/image';
// import hero from '@/assets/banner-img1.png';
// import Container from '@/components/ui/core/Container';
// import heroBottom from '@/assets/banner-bg.png';
// import Para from '@/components/ui/core/Para';

// import gsap from 'gsap';
// import { SplitText } from 'gsap/SplitText';
// import { useRef, useState } from 'react';
// import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import clsx from 'clsx';

// import 'swiper/css';
// import 'swiper/css/navigation';

// gsap.registerPlugin(SplitText);

// function BannerSlider() {
//   const swiperRef = useRef<SwiperClass | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handlePrev = () => swiperRef.current?.slidePrev();
//   const handleNext = () => swiperRef.current?.slideNext();

//   const updateNavState = (swiper: SwiperClass) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   // Slides data
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

//   // Timeline animation per slide
//   const animateSlide = (slide: HTMLElement) => {
//     const title = slide.querySelector('h1');
//     const ganims = slide.querySelectorAll('.ganim');
//     const image = slide.querySelectorAll('.hero-image');
//     const accents = slide.querySelectorAll('.slide-accent');

//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//     // Fade in the slide container
//     tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: 0.5 });

//     if (title) {
//       const split = new SplitText(title, { type: 'chars' });
//       tl.from(split.chars, {
//         opacity: 0,
//         y: 40,
//         stagger: 0.05,
//         duration: 0.6,
//       });
//     }

//     tl.from(
//       ganims,
//       {
//         opacity: 0,
//         y: 40,
//         stagger: 0.15,
//         duration: 0.7,
//       },
//       '-=0.3' // overlap slightly with title
//     );

//     // Animate image
//     tl.from(
//       image,
//       {
//         opacity: 0,
//         scale: 0.9,
//         y: 40,
//         duration: 0.8,
//       },
//       '-=0.5'
//     );

//     // Animate accent shapes
//     tl.from(
//       accents,
//       {
//         scale: 0,
//         rotation: -180,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: 'back.out(1.7)',
//       },
//       '-=0.4'
//     );

//     return tl;
//   };

//   // Swiper setup with timeline triggers
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
//         overflow: 'hidden',
//       }}
//     >
//       <Container>
//         <Swiper
//           onInit={(swiper) => {
//             swiperRef.current = swiper;
//             updateNavState(swiper);
//             animateSlide(swiper.slides[swiper.activeIndex]);
//           }}
//           onSlideChange={(swiper) => {
//             updateNavState(swiper);
//             if (swiper.slides[swiper.realIndex]) {
//               animateSlide(swiper.slides[swiper.realIndex]);
//             }
//           }}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop
//           autoplay={{
//             delay: 8000,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay]}
//         >
//           {slides.map((el) => (
//             <SwiperSlide key={el.id}>
//               <div className="flex justify-between items-center flex-col lg:flex-row gap-14 lg:gap-0 py-34 sm:py-40 lg:py-40 relative">
//                 {/* Accent shapes */}
//                 <div className="slide-accent absolute left-2 top-1/4 w-8 h-8 rounded-full bg-primary opacity-20" />
//                 <div className="slide-accent absolute right-2 bottom-1/4 w-10 h-10 rounded-lg bg-primary opacity-20 rotate-45" />
//                 <div className="slide-accent absolute left-1/4 bottom-60 w-3 h-3 rounded-full bg-primary opacity-30" />

//                 {/* Text section */}
//                 <div className="flex-1 flex flex-col justify-center items-center sm:block relative z-10">
//                   <div className="flex flex-col items-center justify-center lg:block max-w-xl mx-auto">
//                     <div className="relative">
//                       <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 ganim">
//                         {el.title}
//                       </h1>
//                       <div className="slide-accent w-20 h-1 rounded-full mt-2 bg-primary opacity-80" />
//                     </div>

//                     <Para className="mt-4 lg:mt-8 mb-8 lg:mb-3 ganim">
//                       {el.description}
//                     </Para>

//                     <div className="ganim">
//                       <Cta text={el.buttonText} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Image section */}
//                 <div className="flex-1 relative">
//                   <div className="relative">
//                     <Image
//                       src={el.image}
//                       alt="hero banner"
//                       width={500}
//                       height={500}
//                       className="hero-image w-full rounded-md relative z-10"
//                     />
//                   </div>
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
//           'absolute top-1/2 -translate-y-1/2 left-4 z-50 bg-white p-3 rounded-full border border-gray-300 transition-all duration-300 group cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl',
//           !isBeginning && 'hover:scale-110 hover:border-primary'
//         )}
//       >
//         <ArrowLeft
//           className="h-6 w-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-transform"
//           strokeWidth={2}
//         />
//       </button>

//       <button
//         onClick={handleNext}
//         disabled={isEnd}
//         className={clsx(
//           'absolute top-1/2 -translate-y-1/2 right-4 z-50 bg-white p-3 rounded-full border border-gray-300 transition-all duration-300 group disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-lg hover:shadow-xl',
//           !isEnd && 'hover:scale-110 hover:border-primary'
//         )}
//       >
//         <ArrowRight
//           className="h-6 w-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-transform"
//           strokeWidth={2}
//         />
//       </button>
//     </div>
//   );
// }

// export default BannerSlider;
