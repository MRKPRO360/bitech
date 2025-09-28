'use client';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';

import {
  Server,
  Mail,
  LayoutDashboard,
  Search,
  Hand,
  CalendarClock,
} from 'lucide-react';

const features = [
  {
    title: 'Incredible Infrastructure',
    description:
      'Reliable and scalable servers built to handle high traffic with zero downtime.',
    icon: (
      <Server
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Email Notifications',
    description:
      'Stay updated with instant alerts and notifications right in your inbox.',
    icon: (
      <Mail
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Simple Dashboard',
    description:
      'Manage everything in one place with a clean, easy-to-use dashboard.',
    icon: (
      <LayoutDashboard
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Information Retrieval',
    description:
      'Quickly find and access the data you need with powerful search tools.',
    icon: (
      <Search
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Drag and Drop',
    description:
      'Easily customize layouts and workflows with simple drag-and-drop actions.',
    icon: (
      <Hand
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
  {
    title: 'Deadline Reminders',
    description:
      'Never miss an important date with smart deadline alerts and reminders.',
    icon: (
      <CalendarClock
        strokeWidth={1}
        className="w-12 h-12 sm:h-14 sm:w-14 lg:w-16  lg:h-16"
      />
    ),
  },
];

function Features() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 40,
    once: true,
  });

  return (
    <div className="bg-grey-blue py-16 md:py-20 lg:py-24">
      <Container>
        <div
          ref={fadeRef}
          className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Our Features" />

          <SecondaryHeading>We&apos;re Here To Help</SecondaryHeading>
          <Para className="mt-5">
            From automation to reminders, our features make managing tasks
            effortless and efficient.
          </Para>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center my-20"
        >
          {features.map((el) => (
            <div
              className="flex flex-col items-center text-center p-8 bg-white transition duration-300 rounded-md "
              key={el.title}
            >
              <div className="mb-2 flex items-center flex-col ">
                <div className="text-4xl">{el.icon}</div>
                <h3 className="text-xl mt-3 mb-1 font-bold">{el.title}</h3>
              </div>
              <Para>{el.description}</Para>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Features;
