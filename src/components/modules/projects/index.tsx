'use client';
import Container from '@/components/ui/core/Container';
import { IProject } from '@/types/project';
import ProjectCard from './ProjectCard';
import CtaSection from '@/components/shared/careerCta';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';
import { useFadeUp } from '@/hooks/FadeUp';
import WandWithText from '@/components/ui/Wand';
import { useStaggerChildren } from '@/hooks/CardStagger';

function Projects({ projects }: { projects: IProject[] }) {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.3 });
  const projectRef = useStaggerChildren<HTMLDivElement>({
    y: 40,
    stagger: 0.3,
  });
  return (
    <div className="min-h-screen bg-gray-50 pt-32  pb-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={fadeRef}
        className="max-w-xl mx-auto mb-8 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Projects" />
        <SecondaryHeading className="mb-6">Our Projects</SecondaryHeading>
        <Para>
          Explore our portfolio of successful projects that showcase our
          expertise in web development, mobile applications, and innovative
          digital solutions.
        </Para>
      </div>
      <Container>
        {/* Projects Grid */}
        <div
          ref={projectRef}
          className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5 mb-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <CtaSection
          subHeading="Launch Your Professional Project"
          heading="Start Your  Project Today"
          description="Ready to bring your project to life? Contact us today to discuss your ideas and let our expert team help you turn them into reality."
        />
      </Container>
    </div>
  );
}

export default Projects;
