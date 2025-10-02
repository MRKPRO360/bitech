'use client';

import Para from '@/components/ui/core/Para';
import CountUp from 'react-countup';

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  color: string;
};

interface ProductStatsProps {
  stats: StatItem[];
}

function ProductStats({ stats }: ProductStatsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div
                className={`stat-number text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <Para>{stat.label}</Para>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductStats;
