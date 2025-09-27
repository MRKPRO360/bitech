'use client';

import Container from '@/app/components/ui/core/Container';

import 'swiper/css';
import 'swiper/css/pagination';

import Image, { StaticImageData } from 'next/image';
import clientImage from '@/assets/client2.jpg';
import WandWithText from '@/app/components/ui/Wand';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import Para from '@/app/components/ui/core/Para';

import { useFadeUp } from '@/hooks/FadeUp';
import { ImQuotesRight } from 'react-icons/im';

interface ReviewData {
  reviewer: string;
  post: string;
  description: string;
  img: StaticImageData;
}

const reviews: ReviewData[] = [
  {
    reviewer: 'Sarah Taylor',
    post: 'CEO, TechCorp',
    description:
      'Amazing service! The team exceeded our expectations and delivered ahead of schedule.',
    img: clientImage,
  },
  {
    reviewer: 'James Wilson',
    post: 'Manager, InnovateX',
    description:
      'Professional and reliable. Highly recommend their solutions for modern businesses.',
    img: clientImage,
  },
  {
    reviewer: 'Emily Johnson',
    post: 'Designer, Creatives Co.',
    description:
      'Very creative team! They understood our vision and brought it to life perfectly.',
    img: clientImage,
  },
  {
    reviewer: 'Michael Brown',
    post: 'CTO, FutureTech',
    description:
      'Excellent experience. Communication was seamless, and the results were fantastic.',
    img: clientImage,
  },
];

function TestimonialReview() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  return (
    <div className="bg-grey-blue">
      <Container className=" py-16 md:py-20 lg:py-24">
        <div
          ref={fadeRef}
          className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Testimonials" />

          <SecondaryHeading>What Our Clients are Saying?</SecondaryHeading>
          <Para className="mt-5">
            Hear directly from our satisfied clients about their experiences
            working with us and the impact we&apos;ve made on their businesses.
          </Para>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {reviews.map((review, id) => (
            <div
              key={id}
              className="relative flex flex-col items-center h-full pt-10"
            >
              <ImQuotesRight className="absolute text-8xl -top-4 left-1/2 -translate-x-1/2 text-gray-200/50" />

              <div className="bg-white  rounded-xl p-6  md:p-10 flex flex-col items-center text-center w-full flex-grow ">
                <Para className="text-gray-700 mb-4 ">
                  {review.description}
                </Para>

                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={review.img}
                    alt={review.reviewer}
                    className="w-14 h-14 rounded-full object-cover"
                    placeholder="blur"
                  />

                  <div>
                    <h4 className="font-extrabold text-xl">
                      {review.reviewer}
                    </h4>
                    <span className="text-grey text-base font-semibold">
                      {review.post}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default TestimonialReview;
