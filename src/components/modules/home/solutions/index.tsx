'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';

import { useFadeUp } from '@/hooks/FadeUp';
import { Shield, Settings, Zap } from 'lucide-react';

const ourSolutions = [
  {
    title: 'Code Security',
    description:
      'Protect your software and data with our advanced security solutions, ensuring your applications remain safe and reliable.',
    buttonText: 'Learn More',
    icon: (
      <Shield
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },

  {
    title: 'System Optimization',
    description:
      'Boost system performance and reliability with solutions designed to optimize processes, reduce downtime, and improve efficiency.',
    buttonText: 'Learn More',
    icon: (
      <Zap
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Settings & Configurations',
    description:
      'Customize and configure your IT systems easily to meet your organization’s specific needs and ensure seamless operation.',
    buttonText: 'Learn More',
    icon: (
      <Settings
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
];

function Solutions() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });

  return (
    <Container>
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center"
      >
        <div className="flex justify-center">
          <WandWithText text="Our Solutions" />
        </div>

        <SecondaryHeading>
          We Different From Others Should Choose Us
        </SecondaryHeading>
        <Para className="mt-5">
          We provide a wide range of IT solutions, from cutting-edge software to
          tailored services, we go above and beyond to make your vision a
          reality.
        </Para>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center my-8 sm:my-20"
      >
        {ourSolutions.map((el) => (
          <div
            className="flex flex-col items-center text-center border border-blue-500/10 bg-blue-300/30 hover:border-blue-500 transition duration-300 rounded-md p-4 opacity-0 shadow-sm hover:shadow-md"
            key={el.title}
          >
            <div className="mb-2 flex items-center flex-col ">
              <div className="text-4xl">{el.icon}</div>
              <h3 className="text-xl mt-3 mb-1 font-bold">{el.title}</h3>
            </div>
            <Para>{el.description}</Para>
            <button className="cursor-pointer mt-2 group px-4 py-2 text-primary  relative overflow-hidden font-semibold">
              {el.buttonText}
              <div className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Solutions;
