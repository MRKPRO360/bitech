'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';

import Image from 'next/image';

import team1Image from '@/assets/team-1.jpg';
import team2Image from '@/assets/team-2.jpg';
import team3Image from '@/assets/team-3.jpg';
import team4Image from '@/assets/team-4.jpg';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const teamMembers = [
  {
    name: 'Engr. Sohel Rana',
    role: 'CEO',
    img: team1Image,
    socials: {
      facebook: 'https://facebook.com/sohelrana',
      twitter: 'https://twitter.com/sohelrana',
      instagram: 'https://instagram.com/sohelrana',
      linkedin: 'https://linkedin.com/in/sohelrana',
    },
  },
  {
    name: 'Masud Pervez',
    role: 'Manager',
    img: team2Image,
    socials: {
      facebook: 'https://facebook.com/masudpervez',
      twitter: 'https://twitter.com/masudpervez',
      instagram: 'https://instagram.com/masudpervez',
      linkedin: 'https://linkedin.com/in/masudpervez',
    },
  },
  {
    name: 'Mahmud Hasan Pervez',
    role: 'Designer',
    img: team3Image,
    socials: {
      facebook: 'https://facebook.com/mahmudpervez',
      twitter: 'https://twitter.com/mahmudpervez',
      instagram: 'https://instagram.com/mahmudpervez',
      linkedin: 'https://linkedin.com/in/mahmudpervez',
    },
  },
  {
    name: 'Saif Mumtahim',
    role: 'Developer',
    img: team4Image,
    socials: {
      facebook: 'https://facebook.com/mahmudpervez',
      twitter: 'https://twitter.com/mahmudpervez',
      instagram: 'https://instagram.com/mahmudpervez',
      linkedin: 'https://linkedin.com/in/mahmudpervez',
    },
  },
];

function TeamGroup() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });

  return (
    <Container className=" py-16 md:py-20 lg:py-24">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Team Members" />

        <SecondaryHeading>Our Awesome Team</SecondaryHeading>
        <Para className="mt-5">
          Meet the dedicated individuals behind our success, working together to
          bring you the best.
        </Para>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center my-20"
      >
        {teamMembers.map((el) => (
          <div className="" key={el.role}>
            {/* IMAGE AND LINKS */}
            <div className="group relative">
              <Image
                className="w-72 h-72 object-center"
                alt="team members"
                src={el.img}
                width={250}
                height={150}
              />

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-x-2 justify-center transform -translate-y-8 opacity-0 group-hover:opacity-100  group-hover:-translate-y-10 transition duration-300">
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-x-2 justify-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition duration-800">
                  {/* Facebook */}

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-primary cursor-pointer ">
                    <ImFacebook className="text-gray-800 text-sm hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-primary cursor-pointer ">
                    <ImTwitter className="text-gray-800 text-sm hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-primary cursor-pointer ">
                    <RiInstagramFill className="text-gray-800 text-sm hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-primary cursor-pointer ">
                    <FaLinkedinIn className="text-gray-800 text-sm hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-base sm:text-xl mt-4 mb-0 leading-5 font-extrabold text-center">
              {el.name}
            </h4>
            <span className="font-semibold text-primary block text-center">
              {el.role}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default TeamGroup;
