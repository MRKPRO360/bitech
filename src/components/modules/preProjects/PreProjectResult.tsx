'use client';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import {
  Star,
  Zap,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowUp,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';
import gsap from 'gsap';
import SubHeading from '@/components/ui/core/SubHeading';
import { IPrebuiltProject } from '@/types/prebuiltProjects';

// Updated icon map for prebuilt project results
const iconMap = {
  rating: Star,
  pageLoadTime: Zap,
  performance: TrendingUp,
  satisfaction: Award,
  efficiency: CheckCircle,
  users: Users,
  cost: DollarSign,
  speed: Clock,
};

// Color schemes for different metrics
const colorSchemes = {
  rating: {
    color: 'from-yellow-500 to-amber-500',
    text: 'text-amber-500',
  },
  pageLoadTime: {
    color: 'from-green-500 to-emerald-500',
    text: 'text-emerald-500',
  },
  performance: {
    color: 'from-blue-500 to-cyan-500',
    text: 'text-cyan-500',
  },
  satisfaction: {
    color: 'from-purple-500 to-pink-500',
    text: 'text-pink-500',
  },
  efficiency: {
    color: 'from-indigo-500 to-purple-500',
    text: 'text-purple-500',
  },
  users: {
    color: 'from-teal-500 to-green-500',
    text: 'text-green-500',
  },
  cost: {
    color: 'from-orange-500 to-red-500',
    text: 'text-red-500',
  },
  speed: {
    color: 'from-blue-500 to-indigo-500',
    text: 'text-indigo-500',
  },
  // Default fallback
  default: {
    color: 'from-gray-500 to-gray-600',
    text: 'text-gray-600',
  },
};

// Helper function to extract numeric value and calculate level for prebuilt projects
const getLevelFromValue = (key: string, value: string): number => {
  const numMatch = value.match(/(\d+\.?\d*)/);
  if (numMatch) {
    const num = parseFloat(numMatch[1]);

    // Handle different value types based on key
    switch (key) {
      case 'rating':
        // Convert rating out of 5 to percentage (e.g., 4.5 → 90%)
        return (num / 5) * 100;

      case 'pageLoadTime':
        // Convert page load time to inverse percentage (faster = higher percentage)
        // Assuming 1.2s is excellent (100%), 5s is poor (0%)
        const loadTime = num;
        if (loadTime <= 1) return 100;
        if (loadTime >= 5) return 10;
        return Math.max(10, 100 - (loadTime - 1) * 22.5); // Scale from 1s to 5s

      default:
        // For other metrics, assume they're already percentages or scale appropriately
        return Math.min(num, 100);
    }
  }

  // Default fallback
  return 50;
};

// Helper function to format key names for prebuilt projects
const formatKeyName = (key: string): string => {
  const nameMap: { [key: string]: string } = {
    rating: 'User Rating',
    pageLoadTime: 'Page Load Time',
    performance: 'Performance',
    satisfaction: 'Satisfaction',
    efficiency: 'Efficiency',
    users: 'Active Users',
    cost: 'Cost Efficiency',
    speed: 'Speed Score',
  };

  return (
    nameMap[key] ||
    key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
  );
};

// Helper function to format display values
const formatDisplayValue = (key: string, value: string): string => {
  switch (key) {
    case 'rating':
      return `${value}/5`;
    case 'pageLoadTime':
      return value;
    default:
      return value;
  }
};

function PreProjectResult({ project }: { project: IPrebuiltProject }) {
  // Update type
  const resultsRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.1 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.3 });

  // Convert project results to the format needed for rendering
  const keyResults = project.results
    ? Object.entries(project.results).map(([key, value]) => {
        const IconComponent =
          iconMap[key as keyof typeof iconMap] || TrendingUp;
        const colors =
          colorSchemes[key as keyof typeof colorSchemes] ||
          colorSchemes.default;
        const level = getLevelFromValue(key, value);
        const displayValue = formatDisplayValue(key, value);

        return {
          key,
          name: formatKeyName(key),
          icon: <IconComponent className="w-5 h-5 group-hover:text-white" />,
          level,
          value: displayValue,
          ...colors,
        };
      })
    : [];

  // Calculate overall stats from prebuilt project data
  const getOverallStats = () => {
    const stats = [
      {
        value: project.category,
        label: 'Project Category',
        color: 'text-blue-600',
      },
      {
        value: project.price === '0' ? 'Free' : `$${project.price}`,
        label: 'Project Price',
        color: 'text-green-600',
      },
      {
        value: project.status.charAt(0).toUpperCase() + project.status.slice(1),
        label: 'Project Status',
        color:
          project.status === 'completed'
            ? 'text-purple-600'
            : project.status === 'in-progress'
            ? 'text-blue-600'
            : 'text-yellow-600',
      },
      {
        value: `${project.technologies.length}+`,
        label: 'Technologies Used',
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
        <WandWithText text="Performance" />
        <SecondaryHeading>Project Performance Metrics</SecondaryHeading>
        <Para className="mt-5">
          Key performance indicators and metrics that showcase the quality and
          efficiency of this prebuilt project.
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
                        {result.key === 'pageLoadTime' ? null : (
                          <ArrowUp className="w-4 h-4" />
                        )}
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
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
            No performance metrics available for this project.
          </p>
        </div>
      )}
    </div>
  );
}

export default PreProjectResult;
