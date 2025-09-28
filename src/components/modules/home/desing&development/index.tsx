'use client';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import Image from 'next/image';
import serviceImg from '@/assets/service2.png';
import { Check } from 'lucide-react';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';

const desginAndDevelopmentItems = [
  'Responsive',
  'Design React',
  'Development Apps',
  'Development Laravel',
  'Development UX/UI',
  'Design E-commerce',
  'Design Print',
  'Ready Design',
];

function DesingAndDevelopment() {
  const rightColRef = useFadeUp({ y: 80, delay: 1.5 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const servicesRef = useStaggerChildren<HTMLDivElement>({
    y: 10,
    once: true,
    stagger: 0.1,
    delay: 1.5,
  });

  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center my-24 md:my-30 lg:my-40 gap-10 lg:gap-2">
        <div className="flex-1">
          <div ref={fadeRef}>
            <WandWithText text="Services" />
            <SecondaryHeading>Design & Development</SecondaryHeading>
            <Para className="mt-5">
              We design and build digital solutions that look great, work fast,
              and grow with your business.
            </Para>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-10"
          >
            {desginAndDevelopmentItems.map((service, i) => (
              <div
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
          </div>
        </div>

        <div ref={rightColRef}>
          <Image
            className="flex-1"
            src={serviceImg}
            alt="Cloud Hosting"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
}
export default DesingAndDevelopment;
