import Para from '@/components/ui/core/Para';
import SubHeading from '@/components/ui/core/SubHeading';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

interface IGradientCard {
  feature: {
    step: string;
    title: string;
    description: string;
    icon: JSX.Element;
    color: string;
  };
}

function GradientCard({ feature }: IGradientCard) {
  return (
    <div className="group">
      <div
        className={`bg-gradient-to-br ${feature.color} rounded-md p-8  transition-all duration-500 h-full hover:transform hover:scale-105 flex flex-col`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
            {feature.step}
          </div>
          <div className="text-white/80">{feature.icon}</div>
        </div>

        <SubHeading className="text-white mb-4">{feature.title}</SubHeading>
        <Para className="text-white mb-6">{feature.description}</Para>

        <div
          className={`mt-auto self-start rounded-md flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 group-hover:bg-gradient-to-bl  p-2 ${feature.color} shadow-xs hover:shadow-sm cursor-pointer`}
        >
          Learn more <ArrowRight className="w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
}
export default GradientCard;
