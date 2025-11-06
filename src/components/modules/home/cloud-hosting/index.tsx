'use client';

import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import Image from 'next/image';
import serviceImg from '@/assets/service1.png';
import { Check } from 'lucide-react';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';

import cloudDatabase from '@/assets/cloud-database.png';
import hosting from '@/assets/cloud-computing.png';
import fileStorage from '@/assets/folder.png';
import fileSync from '@/assets/sync.png';
import forexTrading from '@/assets/market.png';
import remoteDesktop from '@/assets/remote-desktop.png';
import emailServers from '@/assets/email-hosting.png';
import hybridCloud from '@/assets/cloud-server.png';

const services = [
  {
    icon: cloudDatabase,
    title: 'Cloud Databases',
  },
  {
    icon: hosting,
    title: 'Website Hosting',
  },
  {
    icon: fileStorage,
    title: 'File Storage',
  },
  {
    icon: forexTrading,
    title: 'Forex Trading',
  },
  {
    icon: fileSync,
    title: 'File Backups',
  },
  {
    icon: remoteDesktop,
    title: 'Remote Desktop',
  },
  {
    icon: emailServers,
    title: 'Email Servers',
  },
  {
    icon: hybridCloud,
    title: 'Hybrid Cloud',
  },
];

function CloudHosting() {
  const leftColRef = useFadeUp({ y: 80 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const servicesRef = useStaggerChildren<HTMLDivElement>({
    y: 10,
    once: true,
    stagger: 0.1,
    delay: 1.5,
  });

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center my-24 md:my-30 lg:my-40 gap-10 lg:gap-2">
        <div className="flex-1" ref={leftColRef}>
          <Image
            className="w-full h-full"
            src={serviceImg}
            alt="Cloud Hosting"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1">
          <div ref={fadeRef} className="">
            <WandWithText text="Services" />
            <SecondaryHeading>Cloud Hosting Services</SecondaryHeading>
            <Para className="mt-5">
              From cutting-edge software to tailored services, we go above and
              beyond to make your vision a reality.
            </Para>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-10"
          >
            {services.map((service, i) => (
              <div
                className="flex items-center gap-6 p-4 shadow-lg shadow-primary/5 hover:shadow-primary/10 rounded-sm transition duration-300
                "
                // group
                key={i}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
                {/* <div className="bg-grey/15 transition duration-400 ease-in-out group-hover:bg-primary p-1 rounded-sm">
                  <Check
                    strokeWidth={2}
                    className="h-5 w-5 md:w-8 md:h-8 group-hover:text-white"
                  />
                </div> */}
                <h4 className="text-base sm:text-lg font-extrabold">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
export default CloudHosting;
