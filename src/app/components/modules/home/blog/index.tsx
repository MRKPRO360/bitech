'use client';
import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import SecondaryHeading from '@/app/components/ui/core/SecondaryHeading';
import WandWithText from '@/app/components/ui/Wand';

import { Calendar } from 'lucide-react';
import Image from 'next/image';

import blog1Image from '@/assets/blog-img1.jpg';
import blog2Image from '@/assets/blog-img5.jpg';
import blog3Image from '@/assets/blog-img6.jpg';

import user1Image from '@/assets/user1.jpg';
import user2Image from '@/assets/user2.jpg';
import user3Image from '@/assets/user3.jpg';
import { useFadeUp } from '@/hooks/FadeUp';
import { useStaggerChildren } from '@/hooks/CardStagger';

const blogPosts = [
  {
    author: 'Sarah Taylor',
    date: 'April 28, 2023',
    title: 'The Challenges to Tackle Before You Start With AI',
    img: blog1Image,
    authorImg: user1Image,
  },
  {
    author: 'James Wilson',
    date: 'May 10, 2023',
    title: 'How AI is Transforming Modern Workflows',
    img: blog2Image,
    authorImg: user2Image,
  },
  {
    author: 'Emily Johnson',
    date: 'June 5, 2023',
    title: 'Top Tools and Resources for AI Beginners',
    img: blog3Image,
    authorImg: user3Image,
  },
];

function Blogs() {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.15,
    once: true,
  });

  return (
    <div className="bg-grey-light">
      <Container className=" py-16 md:py-20 lg:py-24">
        <div
          ref={fadeRef}
          className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Our Blog" />

          <SecondaryHeading>Latest Valuable Insights</SecondaryHeading>
          <Para className="mt-5">
            Stay informed with our latest articles, insights, and updates on
            technology, innovation, and industry trends.
          </Para>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-20"
        >
          {blogPosts.map((el) => (
            <div
              key={el.title}
              className="bg-white hover:-translate-y-3 transform duration-500 hover:shadow-gray-950/10 hover:shadow-lg"
            >
              <Image
                className="w-full rounded-t-sm "
                src={el.img}
                alt={el.title}
                width={300}
                height={450}
              />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      className="rounded-full"
                      src={el.authorImg}
                      alt={el.title}
                      width={35}
                      height={35}
                    />
                    <span>{el.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar
                      className="text-primary font-light"
                      strokeWidth={1}
                    />
                    <span>{el.date}</span>
                  </div>
                </div>

                <h4 className="mt-3 text-xl font-extrabold tracking-wide">
                  {el.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Blogs;
