'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';

import { useFadeUp } from '@/hooks/FadeUp';

import { useState } from 'react';
import { IEvent, IInitiatives } from '@/types';
import Events from './events';
import Initiatives from './initiatives';

const events: IEvent[] = [
  {
    id: 1,
    title: 'Annual Team Retreat',
    date: 'June 15-18, 2024',
    location: 'Lake Tahoe, CA',
    description:
      'Four days of team building, strategy sessions, and outdoor adventures in beautiful Lake Tahoe.',
    image: '🏔️',
  },
  {
    id: 2,
    title: 'Hackathon Innovation Week',
    date: 'August 22-26, 2024',
    location: 'Virtual & Office',
    description:
      'Our famous hackathon where CultureTabbed build innovative projects and compete for amazing prizes.',
    image: '💻',
  },
  {
    id: 3,
    title: 'Community Service Day',
    date: 'October 12, 2024',
    location: 'Local Communities',
    description:
      'Giving back to our communities through various volunteer activities and service projects.',
    image: '🤝',
  },
  {
    id: 4,
    title: 'Year-End Celebration',
    date: 'December 15, 2024',
    location: 'San Francisco',
    description:
      'Celebrating our achievements and looking forward to the new year with great food and company.',
    image: '🎉',
  },
];

const initiatives: IInitiatives[] = [
  {
    title: 'Learning Stipend',
    description: '$2,000 annual budget for courses, conferences, and books',
    icon: '📚',
  },
  {
    title: 'Wellness Program',
    description:
      'Mental health support, gym memberships, and wellness activities',
    icon: '🧘',
  },
  {
    title: 'Flexible Work',
    description: 'Remote-friendly with flexible hours and unlimited PTO',
    icon: '🏠',
  },
  {
    title: 'Parental Leave',
    description: '16 weeks fully paid leave for new parents',
    icon: '👶',
  },
  {
    title: 'Equity Grants',
    description: 'Stock options for all full-time employees',
    icon: '📈',
  },
  {
    title: 'Team Events',
    description: 'Regular social events and quarterly team outings',
    icon: '🎯',
  },
];

function CultureTabbed() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const [activeTab, setActiveTab] = useState('events');

  return (
    <Container className=" py-16 md:py-20 lg:py-24">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Programmes" />

        <SecondaryHeading>Our Awesome Programmes</SecondaryHeading>
        <Para className="mt-5">
          Discover the exciting programs and initiatives that make our company a
          unique and rewarding place to work.
        </Para>
      </div>

      <div className="flex flex-wrap justify-center mb-12">
        {['events', 'initiatives'].map((tab) => (
          <button
            key={tab}
            className={`px-6 cursor-pointer  py-3 mx-2 mb-4 rounded-full font-semibold transition duration-300 ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-gray-100  hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {activeTab === 'events' && <Events events={events} />}

        {activeTab === 'initiatives' && (
          <Initiatives initiatives={initiatives} />
        )}
      </div>
    </Container>
  );
}
export default CultureTabbed;
