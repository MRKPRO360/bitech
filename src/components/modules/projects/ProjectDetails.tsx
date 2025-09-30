'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/core/Container';
import {
  Calendar,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { notFound } from 'next/navigation';
import { IProject } from '@/types/project';
import ProjectResult from './ProjectResult';
import ProjectHero from './projectHero';
import { useStaggerChildren } from '@/hooks/CardStagger';
import SubHeading from '@/components/ui/core/SubHeading';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';

function ProjectDetails({ project }: { project: IProject }) {
  const projectRef = useStaggerChildren<HTMLDivElement>({
    duration: 0.6,
    y: 50,
    stagger: 0.4,
    start: 'top 60%',
  });
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    notFound();
  }

  const galleryImages = [
    project.images.thumbnail,
    ...project.images.gallery.slice(0, 3),
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero project={project} />

      <Container className="py-12">
        <div
          ref={projectRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-md overflow-hidden bg-gray-100">
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-96 object-cover"
                />

                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {galleryImages.length > 1 && (
                <div className="flex gap-4 mt-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-1 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? 'border-primary/80'
                          : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        width={100}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
              <SubHeading className="mb-4">Project Details</SubHeading>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Completion Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date(project.completionDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium text-gray-900">
                      {project.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Client</p>
                    <p className="font-medium text-gray-900">
                      {project.client}
                    </p>
                  </div>
                </div>

                {project.budget !== 'N/A' && (
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-medium text-gray-900">
                        {project.budget}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
              <SubHeading className="mb-4">Technology Used</SubHeading>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-10 lg:mt-0 mb-10 lg:mb-16">
          <SubHeading className="mb-6">Project Overview</SubHeading>
          <Para className="mb-8">{project.fullDescription}</Para>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <SubHeading className=" mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                Challenges
              </SubHeading>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <Para>{challenge}</Para>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SubHeading className="mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Solutions
              </SubHeading>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <Para>{solution}</Para>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ProjectResult project={project} />
      </Container>
    </div>
  );
}

export default ProjectDetails;
