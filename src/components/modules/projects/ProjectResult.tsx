'use client';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Zap,
  Users,
  TrendingUp,
  Target,
  Award,
  CheckCircle,
  ArrowUp,
  Clock,
  DollarSign,
} from 'lucide-react';
import gsap from 'gsap';
import { IProject } from '@/types/project';
import SubHeading from '@/components/ui/core/SubHeading';

const iconMap = {
  conversionRate: TrendingUp,
  pageLoadTime: Zap,
  mobileTraffic: Users,
  customerSatisfaction: Award,
  efficiency: CheckCircle,
  userRetention: Target,
  costReduction: DollarSign,
  deliveryTime: Clock,
};

// Color schemes for different metrics
const colorSchemes = {
  conversionRate: {
    color: 'from-blue-500 to-cyan-500',
    text: 'text-cyan-500',
  },
  pageLoadTime: {
    color: 'from-green-500 to-emerald-500',
    text: 'text-emerald-500',
  },
  mobileTraffic: {
    color: 'from-purple-500 to-pink-500',
    text: 'text-pink-500',
  },
  customerSatisfaction: {
    color: 'from-amber-500 to-orange-500',
    text: 'text-orange-500',
  },
  efficiency: {
    color: 'from-indigo-500 to-purple-500',
    text: 'text-purple-500',
  },
  userRetention: {
    color: 'from-teal-500 to-green-500',
    text: 'text-green-500',
  },
  // Default fallback
  default: {
    color: 'from-gray-500 to-gray-600',
    text: 'text-gray-600',
  },
};

// Helper function to extract numeric value and calculate level
const getLevelFromValue = (value: string): number => {
  // Extract numbers from string (supports percentages, ratings, etc.)
  const numMatch = value.match(/(\d+\.?\d*)/);
  if (numMatch) {
    const num = parseFloat(numMatch[1]);

    // Handle different value types
    if (value.includes('%') && num <= 100) {
      return num; // Already a percentage
    } else if (value.includes('/5') || value.includes('/10')) {
      // Convert rating to percentage (e.g., 4.6/5 → 92%)
      const max = value.includes('/5') ? 5 : 10;
      return (num / max) * 100;
    } else if (num > 100) {
      // Large numbers, cap at 100
      return Math.min(num, 100);
    } else {
      // Assume it's a percentage-like value
      return num;
    }
  }

  // Default fallback
  return 50;
};

// Helper function to format key names
const formatKeyName = (key: string): string => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

function ProjectResult({ project }: { project: IProject }) {
  const resultsRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.1 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.3 });

  // Convert project results to the format needed for rendering
  const keyResults = Object.entries(project?.results || {}).map(
    ([key, value]) => {
      const IconComponent = iconMap[key as keyof typeof iconMap] || TrendingUp;
      const colors =
        colorSchemes[key as keyof typeof colorSchemes] || colorSchemes.default;
      const level = getLevelFromValue(value);

      return {
        key,
        name: formatKeyName(key),
        icon: <IconComponent className="w-5 h-5 group-hover:text-white" />,
        level,
        value,
        ...colors,
      };
    }
  );

  // Calculate overall stats from project data
  const getOverallStats = () => {
    const stats = [
      {
        value: project.duration || '3 months',
        label: 'Project Duration',
        color: 'text-blue-600',
      },
      {
        value:
          project.budget && project.budget !== 'N/A'
            ? project.budget
            : 'Personal',
        label: 'Project Budget',
        color: 'text-green-600',
      },
      {
        value: project.status === 'completed' ? 'Completed' : 'In Progress',
        label: 'Project Status',
        color: 'text-purple-600',
      },
      {
        value: `${keyResults.length}+`,
        label: 'Key Metrics',
        color: 'text-orange-600',
      },
    ];

    return stats;
  };

  return (
    <div className="pt-20">
      <div
        ref={fadeRef}
        className="mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Results" />
        <SecondaryHeading>Project Success Metrics</SecondaryHeading>
        <Para className="mt-5">
          Measurable outcomes and performance indicators that demonstrate the
          impact and success of this project.
        </Para>
      </div>

      {keyResults.length > 0 ? (
        <>
          <div
            ref={resultsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:mt-16"
          >
            {keyResults.map((result, index) => (
              <div
                key={result.key}
                className="group bg-white rounded-md p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${result.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {result.icon}
                    </div>
                    <div>
                      <span className="font-semibold text-lg text-gray-900 block">
                        {result.name}
                      </span>
                      <span
                        className={`${result.text} font-bold text-lg flex items-center gap-1 mt-1`}
                      >
                        <ArrowUp className="w-4 h-4" />
                        {result.value}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`${result.text} font-bold text-xl bg-gray-50 px-3 py-1 rounded-lg`}
                  >
                    {Math.round(result.level)}%
                  </span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${result.color} h-3 rounded-full transition-all duration-2000 ease-out transform origin-left shadow-inner`}
                    style={{ width: '0%' }}
                    ref={(el) => {
                      if (el) {
                        gsap.to(el, {
                          width: `${result.level}%`,
                          duration: 2,
                          delay: index * 0.2,
                          scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                          },
                        });
                      }
                    }}
                  />
                </div>

                {/* Progress percentage markers */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Project Overview Stats */}
          <div className="mt-10 lg:mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-md p-8 border border-gray-200">
              <SubHeading className="mb-6 lg:mb-10">
                Project Overview
              </SubHeading>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6  mx-auto">
                {getOverallStats().map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <Para className="mt-1">{stat.label}</Para>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No results data available for this project.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectResult;
