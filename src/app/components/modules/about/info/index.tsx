'use client';

import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import Image from 'next/image';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';
import infoImg from '@/assets/about-img5.png';
import Cta from '@/app/components/ui/core/Cta';
import { Briefcase, Users, Smile, FlaskConical } from 'lucide-react';

export const stats = [
  {
    title: '10 Years',
    subtitle: 'On the market',
    icon: Briefcase, // career/market fit
  },
  {
    title: '45+',
    subtitle: 'Team members',
    icon: Users, // team fit
  },
  {
    title: '100%',
    subtitle: 'Satisfaction rate',
    icon: Smile, // happy customers
  },
  {
    title: '80%',
    subtitle: 'Senior scientist',
    icon: FlaskConical, // science/innovation
  },
];

function Info() {
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
      <div className="flex flex-col lg:flex-row items-center my-16 md:my-20 lg:my-24 gap-10 lg:gap-2">
        <div className="flex-1" ref={leftColRef}>
          <Image src={infoImg} alt="Our info" width={500} height={500} />
        </div>

        <div className="flex-1">
          <div ref={fadeRef} className="">
            <WandWithText text="About Us" />
            <SecondaryHeading>
              Business Analytics For Data-Driven Solutions
            </SecondaryHeading>
            <Para className="mt-5">
              We provide advanced analytics and data-driven solutions to help
              your business make informed decisions, optimize operations, and
              achieve sustainable growth.
            </Para>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 md:my-10"
          >
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 items-center p-4 border border-gray-200 rounded-md group"
                >
                  <Icon className="w-10 h-10 text-primary" />

                  <blockquote>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </blockquote>
                </div>
              );
            })}
            <div className="md:col-span-2">
              <Para className="mb-2 sm:mb-4">
                With our expertise, we transform raw data into actionable
                insights, giving you a competitive edge in the market.
              </Para>
            </div>
            <div className="md:col-span-2">
              <Cta hasLink={true} text="More About Us" path="/about/culture" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Info;
