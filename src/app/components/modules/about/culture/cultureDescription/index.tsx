'use client';

import WandWithText from '@/app/components/ui/Wand';
import StarfieldWarp from './StarFieldWarp';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import Para from '@/app/components/ui/core/Para';
import { useFadeUp } from '@/hooks/FadeUp';

function CultureDescription() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  return (
    <StarfieldWarp>
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our Culture" />

        <SecondaryHeading>
          A Culture of Innovation & Collaboration
        </SecondaryHeading>
        <Para className="mt-5">
          Where amazing people come together to do their best work. A place
          built on trust, innovation, and genuine connection.
        </Para>
      </div>
    </StarfieldWarp>
  );
}

export default CultureDescription;
