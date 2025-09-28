'use client';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { useFadeUp } from '@/hooks/FadeUp';
import gsap from 'gsap';

const technologies = [
  {
    name: 'React/Next.js',
    icon: '⚛️',
    level: 95,
    color: 'from-blue-500 to-cyan-500',
    text: 'text-cyan-500',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    level: 90,
    color: 'from-green-500 to-emerald-500',
    text: 'text-emerald-500',
  },
  {
    name: 'Python/Django',
    icon: '🐍',
    level: 88,
    color: 'from-yellow-500 to-amber-500',
    text: 'text-amber-500',
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    level: 92,
    color: 'from-blue-600 to-indigo-600',
    text: 'text-indigo-500',
  },
  {
    name: 'AWS/Azure',
    icon: '☁️',
    level: 85,
    color: 'from-orange-500 to-red-500',
    text: 'text-red-500',
  },
  {
    name: 'Docker/K8s',
    icon: '🐳',
    level: 80,
    color: 'from-blue-400 to-cyan-400',
    text: 'text-cyan-400',
  },
];
function TechnologyStack() {
  const techRef = useStaggerChildren<HTMLDivElement>({ stagger: 0.1 });
  const fadeRef = useFadeUp({ y: 20, stagger: 0.3 });

  return (
    <Container className=" py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Technology" />
        <SecondaryHeading>Our Technology Stack</SecondaryHeading>
        <Para className="mt-5">
          We use a modern tech stack to build scalable, high-performance
          software, selecting the right tools for your needs.
        </Para>
      </div>
      <div ref={techRef} className="grid gap-8 mt-10 lg:mt-16">
        {technologies.map((tech, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg flex items-center">
                <span className="text-2xl mr-4">{tech.icon}</span>
                {tech.name}
              </span>
              <span className={`${tech.text} font-bold text-lg`}>
                {tech.level}%
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
              <div
                className={`bg-gradient-to-r ${tech.color} h-4 rounded-full transition-all duration-2000 ease-out transform origin-left`}
                style={{ width: '0%' }}
                ref={(el) => {
                  if (el) {
                    gsap.to(el, {
                      width: `${tech.level}%`,
                      duration: 2,
                      delay: index * 0.2,
                      scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                      },
                    });
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default TechnologyStack;
