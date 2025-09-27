import Container from '@/app/components/ui/core/Container';
import Para from '@/app/components/ui/core/Para';
import circleImage from '@/assets/circle-shape1.png';

import Image from 'next/image';
import List from './List';
import SubHeading from '@/app/components/ui/core/SubHeading';

const sections = [
  {
    title: 'Our History',
    desc: 'Real innovations and a positive customer experience are the heart of successful communication.',
    list: [
      'Activate Listening',
      'Brilliant minds',
      'Better. Best. Wow!',
      'Branding it better!',
    ],
  },
  {
    title: 'Our Mission',
    desc: 'Real innovations and a positive customer experience are the heart of successful communication.',
    list: [
      'Creating. Results.',
      'Expect more',
      'Good thinking',
      'In real we trust',
    ],
  },
  {
    title: 'Who we are',
    desc: 'Real innovations and a positive customer experience are the heart of successful communication.',
    list: [
      'Stay real. Always.',
      'We have you covered',
      'We turn heads',
      'Your brand, promoted',
    ],
  },
];

function Target() {
  return (
    <div className="relative overflow-hidden">
      <Container className="py-12 px-4">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="">
              <SubHeading>{section.title}</SubHeading>
              <Para className="mb-4">{section.desc}</Para>
              <List items={section.list} />
            </div>
          ))}
        </div>
      </Container>

      <div className="hidden lg:block absolute right-0 -bottom-10">
        <Image src={circleImage} alt="circle" width={320} height={320} />
      </div>
    </div>
  );
}

export default Target;
