'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import Image from 'next/image';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';
import whyWeImg from '@/assets/whyWe.png';

import SubHeading from '@/components/ui/core/SubHeading';

export const features = [
  {
    id: 1,
    title: 'Data for All Your People',
    desc: 'Centralize and organize employee data so your team can access the right information anytime, anywhere, with clarity and security.',
  },
  {
    id: 2,
    title: 'A New Breed of AI',
    desc: 'Leverage cutting-edge AI to automate tasks, provide actionable insights, and empower smarter business decisions effortlessly.',
  },
  {
    id: 3,
    title: 'Analytics Business',
    desc: 'Turn raw data into meaningful analytics to track performance, uncover trends, and make informed strategic decisions quickly.',
  },
];

function WhyChooseUs() {
  const leftColRef = useFadeUp({ y: 80 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const servicesRef = useStaggerChildren<HTMLDivElement>({
    y: 10,
    once: true,
    stagger: 0.1,
    delay: 1.5,
  });

  return (
    <Container>
      <div className="flex  flex-col-reverse lg:flex-row justify-between items-center my-16 md:my-20 lg:my-24 gap-10 lg:gap-2">
        <div className="flex-1">
          <div ref={fadeRef} className="">
            <WandWithText text="People Love Us" />
            <SecondaryHeading>Why Choose Us?</SecondaryHeading>
            <Para className="mt-5">
              We provide advanced analytics and data-driven solutions to help
            </Para>
          </div>

          <div
            // ref={servicesRef}
            className=" my-4 md:my-10"
          >
            <div ref={servicesRef} className="relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-[auto_1fr] gap-4 pb-8 last:pb-0 relative"
                >
                  {/* Connecting line */}
                  {index < features.length - 1 && (
                    <div className="absolute left-8 top-16 w-px h-full bg-primary -z-10" />
                  )}

                  {/* Number */}
                  <div
                    style={{
                      boxShadow: '0px 0px 0 7px #edf1fe',
                    }}
                    className="w-16 h-16 leading-16 text-primary rounded-full text-3xl font-extrabold italic bg-white  flex items-center justify-center relative z-10"
                  >
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <SubHeading>{feature.title}</SubHeading>
                    <p className="text-gray-600 mt-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1" ref={leftColRef}>
          <Image
            className="w-full h-full"
            src={whyWeImg}
            alt="project management"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
}
export default WhyChooseUs;
