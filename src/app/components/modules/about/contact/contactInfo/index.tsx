'use client';

import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SubHeading from '@/app/components/ui/core/SubHeading';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { Clock, MapPin, Phone } from 'lucide-react';

function ContactInfo() {
  const fadeRef = useStaggerChildren<HTMLDivElement>({ y: 20, stagger: 0.2 });
  return (
    <Container>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-5 py-16 lg:py-20"
        ref={fadeRef}
      >
        <div className="flex items-center gap-4 relative group ">
          <div className="bg-primary/5 p-4 rounded-md group-hover:bg-primary transition duration-300">
            <MapPin className="w-7 h-7 lg:w-10 lg:h-10 text-primary group-hover:text-white transition duration-300" />
          </div>
          <div className=" flex flex-col justify-between relative z-30">
            <SubHeading>Our Address</SubHeading>
            <Para>H#83,R#08,Mirpur11,Dhaka</Para>
          </div>
          <MapPin className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 lg:w-30 lg:h-30 text-grey-blue" />
        </div>

        {/* CONTACT */}
        <div className="flex items-center gap-4 relative group ">
          <div className="bg-primary/5 p-4 rounded-md group-hover:bg-primary transition duration-300">
            <Phone className="w-7 h-7 lg:w-10 lg:h-10 text-primary group-hover:text-white transition duration-300" />
          </div>
          <div className=" flex flex-col justify-between relative z-30">
            <SubHeading>Contact</SubHeading>
            <Para>
              Mobile: <span className="text-black">+8801870707018</span>
            </Para>
            <Para>
              E-mail: <span className="text-black">btTech@gmail.com</span>
            </Para>
          </div>
          <Phone className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 lg:w-30 lg:h-30 text-grey-blue" />
        </div>

        {/* HOURS OF OPERATION */}
        <div className="flex gap-4 relative group ">
          <div className="bg-primary/5 p-4 rounded-md group-hover:bg-primary transition duration-300">
            <Clock className="w-7 h-7 lg:w-10 lg:h-10 text-primary group-hover:text-white transition duration-300" />
          </div>
          <div className="flex flex-col justify-between relative z-30">
            <SubHeading>Hours of Operation</SubHeading>
            <Para>
              E-Saturday - Thursday:
              <span className="text-black"> 09.00 - 20.00</span>
            </Para>
          </div>
          <Clock className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 lg:w-30 lg:h-30 text-grey-blue" />
        </div>
      </div>
    </Container>
  );
}
export default ContactInfo;
