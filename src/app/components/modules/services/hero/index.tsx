'use client';

import { useState } from 'react';

export default function ServicesHero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Services Grid */}

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
