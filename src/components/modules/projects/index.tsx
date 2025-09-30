import Container from '@/components/ui/core/Container';
import { IProject } from '@/types/project';
import ProjectCard from './ProjectCard';

function Projects({ projects }: { projects: IProject[] }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise in web development, mobile applications, and innovative
            digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Let&apos;s work together to bring your ideas to life with
            cutting-edge technology and design.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
