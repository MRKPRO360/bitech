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
    <div className="group relative overflow-hidden rounded-md">
      {/* Background Layers */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Glass Morphism Layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"></div>

      {/* Noise Texture for Depth */}
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header with Glass Elements */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-2xl border border-white/30 shadow-2xl">
            {feature.step}
          </div>
          <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-2xl text-white/95">
            {feature.icon}
          </div>
        </div>

        {/* Content with Text Shadow */}
        <SubHeading className="text-white mb-4 font-bold text-xl drop-shadow-md">
          {feature.title}
        </SubHeading>

        <Para className="text-white/85 mb-8 leading-relaxed text-lg drop-shadow-sm">
          {feature.description}
        </Para>

        {/* Glass Button */}
        <div className="mt-auto">
          <button className="group/btn inline-flex items-center bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-6 py-4 rounded-2xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:translate-x-2 hover:scale-105">
            <span className="mr-3">Learn more</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animated Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
    </div>
  );
}

export default GradientCard;
