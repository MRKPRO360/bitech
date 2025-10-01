import Cta from '@/components/ui/core/Cta';
import truncate from '@/components/utils/truncate';
import { IProject } from '@/types/project';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="group/card relative bg-white rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 ">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-64 object-center object-cover group-hover/card:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-all duration-500" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}

        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <Cta
            text="Live Demo"
            hasLink={true}
            path={`/projects/${project?.liveLink}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(project.completionDate).getFullYear()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/card:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {truncate(project.shortDescription, 60)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 ">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{project.client}</span>
          </div>
          <Link
            href={`/projects/${project._id}`}
            className="text-primary hover:text-primary font-medium text-sm flex items-center gap-1 group/link"
          >
            Details
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
