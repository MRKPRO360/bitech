'use client';

import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';
import dataDrivenImg from '@/assets/about-img2.png';
import dataBg from '@/assets/aboutList.png';
import Cta from '@/app/components/ui/core/Cta';

const services = [
  'Cloud Databases',
  'Website Hosting',
  'File Storage',
  'Forex Trading',
  'File Backups',
  'Remote Desktop',
  'Email Servers',
  'Hybrid Cloud',
];

function DataDriven() {
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
          <Image
            className="w-full h-full"
            src={dataDrivenImg}
            alt="project management"
            width={500}
            height={500}
          />
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-10"
          >
            {services.map((service, i) => (
              <div
                style={{
                  backgroundImage: `url(${dataBg.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right  bottom',
                }}
                className="flex items-center gap-2 p-4 shadow-lg shadow-primary/5 group"
                key={i}
              >
                <div className="bg-grey/15 transition duration-400 ease-in-out group-hover:bg-primary p-1 rounded-sm">
                  <Check
                    strokeWidth={2}
                    className="h-5 w-5 md:w-8 md:h-8 group-hover:text-white"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-extrabold">
                  {service}
                </h4>
              </div>
            ))}
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
export default DataDriven;
