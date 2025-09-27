'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
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
function Overview() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const statsRef = useStaggerChildren<HTMLDivElement>({
    y: 10,
    once: true,
    stagger: 0.3,
    delay: 0.3,
    start: 'top 85%',
  });

  return (
    <Container className="my-16 md:my-20 lg:my-24">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Our Services" />
        <SecondaryHeading>
          Discover Our Comprehensive IT Solutions
        </SecondaryHeading>
        <Para className="mt-5">
          At BiTech, we deliver innovative and reliable IT solutions that drive
          businesses forward. With expertise across diverse domains, we meet
          your unique technological needs with precision and excellence.
        </Para>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="flex justify-center text-blue-600 mb-2">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.title}
              </div>
              <div className="text-gray-600">{stat.subtitle}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export default Overview;
