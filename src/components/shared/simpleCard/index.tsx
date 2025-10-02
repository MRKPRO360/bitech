import Para from '@/components/ui/core/Para';
import SubHeading from '@/components/ui/core/SubHeading';
import { JSX } from 'react';

interface ISimpleCard {
  feature: { icon: JSX.Element; title: string; desc: string; gradient: string };
}
function SimpleCard({ feature }: ISimpleCard) {
  return (
    <div className="group relative rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 h-full">
      <div
        className={`h-full w-full absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-md`}
      />

      <div className="relative p-6 flex flex-col h-full">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
        >
          {feature.icon}
        </div>

        <SubHeading className="transition-colors duration-300 mb-2 text-gray-900">
          {feature.title}
        </SubHeading>

        <Para className="text-gray-600">{feature.desc}</Para>
      </div>

      <div
        className={`absolute inset-0 rounded-md border-2 border-transparent group-hover:border-primary/50 transition-all duration-300`}
      />
    </div>
  );
}
export default SimpleCard;
