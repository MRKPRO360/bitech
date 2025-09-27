'use client';

import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import { useFadeUp } from '@/hooks/FadeUp';
import { FaCheckCircle } from 'react-icons/fa';
import OfficeItem from './officeItem';

function LifeAtOffice() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const detailsFadeRef = useFadeUp({ y: 10, stagger: 0.2 });

  const detailsItem = [
    'Open, collaborative workspaces',
    'Quiet zones for deep focus',
    'State-of-the-art meeting rooms',
    'Recreation and game areas',
    'Healthy snacks and beverages',
    'Outdoor patio and green spaces',
  ];

  return (
    <Container className=" py-16 md:py-20 lg:py-24 overflow-hidden">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Peaceful Environment" />

        <SecondaryHeading> Life at Our Office</SecondaryHeading>
        <Para className="mt-5">
          Our office is designed to foster creativity, collaboration, and a
          positive work environment.
        </Para>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8 lg:mt-14">
        <div ref={detailsFadeRef} className="space-y-4">
          {detailsItem.map((item, index) => (
            <div key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              <Para>{item}</Para>
            </div>
          ))}
        </div>

        <OfficeItem />
      </div>
    </Container>
  );
}
export default LifeAtOffice;
