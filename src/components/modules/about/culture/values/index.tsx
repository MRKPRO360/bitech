'use client';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import SubHeading from '@/components/ui/core/SubHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { IconType } from 'react-icons';
import {
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
interface Value {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: FaUsers,
    title: 'Collaboration First',
    description:
      'We believe that great things happen when we work together. Cross-functional teamwork is at the heart of everything we do.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaRocket,
    title: 'Innovation Driven',
    description:
      'We encourage experimentation and embrace failure as a learning opportunity. Innovation is in our DNA.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaHandshake,
    title: 'Transparency',
    description:
      'Open communication and honesty build trust. We share successes, challenges, and everything in between.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaHeart,
    title: 'Empathy',
    description:
      'We care about each other as people first. Understanding different perspectives makes us stronger.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FaLightbulb,
    title: 'Continuous Learning',
    description:
      "We're committed to personal and professional growth. Every day is an opportunity to learn something new.",
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FaTrophy,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from small tasks to big projects. Good enough never is.',
    color: 'from-red-500 to-red-600',
  },
];
function Value() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
    delay: 1.5,
  });
  return (
    <Container className=" py-16 md:py-20 lg:py-24">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Team Members" />
        <SecondaryHeading>Our Values</SecondaryHeading>
        <Para className="mt-5">
          These principles guide everything we do, from how we work together to
          how we serve our customers.
        </Para>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-14"
      >
        {values.map((value, index) => (
          <div key={index} className="group">
            <div
              className={`bg-gradient-to-br ${value.color} text-white rounded-md p-8 h-full transform group-hover:scale-105 transition duration-300`}
            >
              <value.icon className="text-4xl mb-6" />
              <SubHeading className="mt-3 mb-2">{value.title}</SubHeading>
              <Para className="text-white">{value.description}</Para>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Value;
