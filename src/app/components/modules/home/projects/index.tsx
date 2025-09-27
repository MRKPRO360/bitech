'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';
import blackImg from '@/assets/black-bg.jpg';
import project1Img from '@/assets/project1.jpg';
import project2Img from '@/assets/project2.jpg';
import project3Img from '@/assets/project3.jpg';
import project4Img from '@/assets/project4.jpg';
import project5Img from '@/assets/project5.jpg';
import project6Img from '@/assets/project6.jpg';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import { Plus } from 'lucide-react';
import Image from 'next/image';
const projects = [
  {
    title: 'Movie Recommendation',
    section: 'System Project',
    img: project1Img,
  },
  {
    title: 'Customer Segmentation',
    section: 'Machine Learning',
    img: project2Img,
  },
  {
    title: 'Data Analysis',
    section: 'Web Project',
    img: project3Img,
  },
  {
    title: 'Detection Project',
    section: 'Data Science',
    img: project4Img,
  },
  {
    title: 'Benefits Research',
    section: 'Science Projects',
    img: project5Img,
  },
  {
    title: 'Data Scientist',
    section: 'Data Science',
    img: project6Img,
  },
];

function Projects() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${blackImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className=""
    >
      <Container className="py-10 md:py-14 lg:py-16 relative z-50">
        <div
          ref={fadeRef}
          className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Recent Projects" />

          <SecondaryHeading className="text-white">
            Check Some Of Our Recent Work
          </SecondaryHeading>
          <Para className="mt-5 text-white">
            Explore our portfolio showcasing a variety of projects
          </Para>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center my-20"
        >
          {projects.map((el, id) => (
            <div
              className="flex flex-col items-center text-center bg-white transition duration-300 rounded-md group overflow-hidden"
              key={id}
            >
              <div className="relative overflow-hidden">
                <Image
                  className="rounded-md group-hover:rotate-6 group-hover:scale-[1.2] transition duration-300 transform"
                  src={el.img}
                  alt={el.title}
                  width={400}
                  height={200}
                />
                <div className="absolute w-full h-full bg-primary group-hover:scale-[0.95] rounded-md transition duration-300 transform top-0 left-0 z-20 opacity-0 group-hover:opacity-100"></div>
                <Plus
                  className="absolute translate-y-1/2  left-1/2 top-1/2 transform -translate-x-1/2 group-translate-y-1/2 text-primary text-4xl group-hover:text-primary z-40 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-400 bg-white w-10 h-10 rounded-full cursor-pointer hover:bg-black"
                  strokeWidth={2}
                />
              </div>
              <div className="py-3 space-y-3">
                <h3 className="text-2xl mt-3 font-extrabold tracking-wide">
                  {el.title}
                </h3>
                <Para>{el.section}</Para>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Projects;
