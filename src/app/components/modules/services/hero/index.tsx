'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  Globe,
  Smartphone,
  Layout,
  Palette,
  Server,
  Headphones,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const servicesItems = [
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: <Laptop className="w-6 h-6" />,
    description: 'Custom software solutions tailored to your business needs',
    features: ['Custom Applications', 'API Development', 'System Integration'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Web Application',
    href: '/services/web-application',
    icon: <Globe className="w-6 h-6" />,
    description: 'Scalable and responsive web applications',
    features: ['React/Next.js', 'Node.js', 'Real-time Features'],
    color: 'from-green-500 to-green-600',
  },
  {
    label: 'Mobile Application',
    href: '/services/mobile-application',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Native and cross-platform mobile apps',
    features: ['iOS & Android', 'React Native', 'Flutter'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    label: 'Websites',
    href: '/services/websites',
    icon: <Layout className="w-6 h-6" />,
    description: 'Beautiful and functional websites',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    label: 'UX Design',
    href: '/services/ux-design',
    icon: <Palette className="w-6 h-6" />,
    description: 'User-centered design for optimal experiences',
    features: ['User Research', 'Wireframing', 'Prototyping'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    label: 'NOC Support',
    href: '/services/noc-support',
    icon: <Server className="w-6 h-6" />,
    description: '24/7 network operations center support',
    features: ['Monitoring', 'Incident Management', 'Performance'],
    color: 'from-red-500 to-red-600',
  },
  {
    label: 'IT Services',
    href: '/services/it-services',
    icon: <Headphones className="w-6 h-6" />,
    description: 'Comprehensive IT support and solutions',
    features: ['Help Desk', 'Infrastructure', 'Cloud Services'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    label: 'QA, QC & Testing',
    href: '/services/qa-qc-testing',
    icon: <CheckCircle className="w-6 h-6" />,
    description: 'Quality assurance and testing services',
    features: ['Automated Testing', 'Manual Testing', 'Security Testing'],
    color: 'from-emerald-500 to-emerald-600',
  },
];

export default function ServicesHero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesItems.map((service, index) => (
            <Link key={index} href={service.href}>
              <div
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-6 h-full">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${service.color} w-fit text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-500"
                      >
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-6">
            Let's discuss how we can help you achieve your goals
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
