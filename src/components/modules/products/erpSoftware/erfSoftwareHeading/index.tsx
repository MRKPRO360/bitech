'use client';

import Image from 'next/image';
import pharmacyDashboard from '@/assets/pharmacy-dashboard.png';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';

function PharmacyHeading() {
  return (
    <section
      //   ref={heroRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r to-primary from-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              All-in-One ERP Software Solution
            </h1>
            <Para className="mb-8 text-white">
              Integrate your business operations — from HR to finance — into one
              unified ERP platform that drives efficiency and data-driven
              decision making.
            </Para>
            <div className="flex flex-col sm:flex-row gap-4">
              <Cta
                text="Request For Price"
                hasLink={true}
                renderIcon={false}
                path="/about/contact-us"
              />
              <Cta text="View Demo" hasLink={true} renderIcon={false} />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition duration-500 ">
              <Image
                src={pharmacyDashboard}
                alt="Pharmacy Software Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PharmacyHeading;
