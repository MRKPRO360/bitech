'use client';

import { useEffect } from 'react';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import { useFadeUp } from '@/hooks/FadeUp';
import gsap from 'gsap';
import {
  Briefcase,
  Users,
  Smile,
  FlaskConical,
  Code,
  Database,
  Cloud,
  Cpu,
  GitBranch,
} from 'lucide-react';
import React from 'react';

export const stats = [
  { title: '10 Years', subtitle: 'On the market', icon: Briefcase },
  { title: '45+', subtitle: 'Team members', icon: Users },
  { title: '100%', subtitle: 'Satisfaction rate', icon: Smile },
  { title: '80%', subtitle: 'Senior scientist', icon: FlaskConical },
];

function SoftwareDevelopmentOverview() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  // GSAP animation
  useEffect(() => {
    gsap.to('.floating-element', {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3,
    });
  }, []);

  return (
    <Container className="my-16 md:my-20 lg:my-24 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our Development" />
        <SecondaryHeading>Software Development</SecondaryHeading>
        <Para className="mt-5 text-center">
          Transforming your vision into powerful, scalable digital solutions. We
          craft software that not only works beautifully but drives real
          business growth.
        </Para>

        {/* Floating Icons */}
        <div className="flex justify-center space-x-6 mt-16 relative z-10">
          {[
            <Code key="code" />,
            <Database key="db" />,
            <Cloud key="cloud" />,
            <Cpu key="cpu" />,
            <GitBranch key="git" />,
          ].map((icon, index) => (
            <div key={index} className="floating-element p-4  text-primary">
              {React.cloneElement(icon, { className: 'w-8 h-8' })}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SoftwareDevelopmentOverview;
