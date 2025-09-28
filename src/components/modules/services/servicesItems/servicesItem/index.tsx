import Para from '@/components/ui/core/Para';
import SubHeading from '@/components/ui/core/SubHeading';
import { IServiceItem } from '@/types';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

function ServicesItem({ service }: { service: IServiceItem }) {
  return (
    <Link href={service.href}>
      <div className="group relative rounded-md shadow-lg hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 h-full">
        {/* Animated Background */}
        <div
          className={` h-full w-full absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-md`}
        />

        {/* Content */}
        <div className="relative p-6  flex flex-col h-full">
          {/* Icon */}
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${service.color} w-fit text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
          >
            {service.icon}
          </div>

          <SubHeading className="transition-colors duration-300 mb-2">
            {service.label}
          </SubHeading>

          {/* Description */}
          <Para>{service.description}</Para>

          {/* Features */}
          <ul className="space-y-1 mt-2 mb-6">
            {service.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-center text-md font-semibold text-gray-500"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center text-primary font-semibold text-md group-hover:translate-x-1 transition-transform duration-300 mt-auto">
            Learn more
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover Border */}
        <div
          className={`absolute inset-0 rounded-md border-2 border-transparent group-hover:border-primary/50 transition-all duration-300`}
        />
      </div>
    </Link>
  );
}
export default ServicesItem;
