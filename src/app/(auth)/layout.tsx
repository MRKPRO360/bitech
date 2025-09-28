import GridShape from '@/components/shared/GridShape';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import Para from '@/components/ui/core/Para';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1  sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col   sm:p-0">
        {children}
        <div className="lg:w-1/2 w-full h-full  bg-orange-950 lg:grid items-center hidden">
          <div className="relative items-center justify-center  flex z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link href="/" className="block mb-4">
                <Image width={100} height={40} src={logo} alt="Logo" />
              </Link>
              <Para className="text-center text-white/80">
                BiTech - Your Gateway to Cutting-Edge Technology Solutions
              </Para>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 hidden sm:block"></div>
      </div>
    </div>
  );
}
