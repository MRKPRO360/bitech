'use client';

import Cta from '@/components/ui/core/Cta';
import truncate from '@/components/utils/truncate';
import { useUser } from '@/context/UserContext';
import { addPrebuiltProjects } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IPrebuiltProject } from '@/types/prebuiltProjects';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function PreProjectCard({
  project,
}: {
  project: IPrebuiltProject;
}) {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  return (
    <div className="group/card relative bg-white rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 ">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.images.thumbnail as string}
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
            path={`/prebuiltProjects/${project?.liveLink}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/card:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {truncate(project.shortDescription, 50)}
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
        <div className="flex items-center pt-4 border-t border-gray-100 lg:justify-between gap-5">
          <div>
            <Cta
              outline={true}
              className="!p-1 !gap-0"
              text="Details"
              renderIcon={false}
              hasLink={true}
              path={`/prebuiltProjects/${project._id}`}
            />
          </div>

          {user?.role !== 'admin' && (
            <div>
              <Cta
                onClick={() => dispatch(addPrebuiltProjects(project))}
                outline={true}
                className="!p-1 !gap-0"
                text=""
                renderIcon={false}
                icon={<ShoppingCart className="w-6 h-6" />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
