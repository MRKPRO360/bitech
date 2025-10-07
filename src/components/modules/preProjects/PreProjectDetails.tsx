'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/core/Container';
import {
  Calendar,
  Tag,
  Clock,
  DollarSign,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
} from 'lucide-react';

import { notFound } from 'next/navigation';
import ProjectResult from './PreProjectResult';
import ProjectHero from './PreProjectHero';
import { useStaggerChildren } from '@/hooks/CardStagger';
import SubHeading from '@/components/ui/core/SubHeading';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import formateDate from '@/components/utils/formateDate';
import { IPrebuiltProject } from '@/types/prebuiltProjects';

function PreProjectDetails({ project }: { project: IPrebuiltProject }) {
  // Update type
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

  const galleryImages = [project.images.thumbnail, ...project.images.gallery];

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
                  src={galleryImages[selectedImage] as string}
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
                        src={image as string}
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

            {/* Live Demo Button */}
            <div className="mb-8">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
              <SubHeading className="mb-4">Project Details</SubHeading>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium text-gray-900">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Created</p>
                    <p className="font-medium text-gray-900">
                      {formateDate(project.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p
                      className={`font-medium ${
                        project.status === 'completed'
                          ? 'text-green-600'
                          : project.status === 'in-progress'
                          ? 'text-blue-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-medium text-gray-900">
                      {project.price === '0' ? 'Free' : `$${project.price}`}
                    </p>
                  </div>
                </div>

                {project.featured && (
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-600 fill-current" />
                    <div>
                      <p className="text-sm text-gray-600">Featured</p>
                      <p className="font-medium text-gray-900">Yes</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
              <SubHeading className="mb-4">Technology Stack</SubHeading>

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

            {/* Features */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
              <SubHeading className="mb-4">Key Features</SubHeading>

              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-10 lg:mt-0 mb-10 lg:mb-16">
          <SubHeading className="mb-6">Project Overview</SubHeading>
          <Para className="mb-8">{project.fullDescription}</Para>

          {/* Short Description */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <SubHeading className="mb-3 text-blue-900">
              Quick Summary
            </SubHeading>
            <Para className="text-blue-800 mb-0">
              {project.shortDescription}
            </Para>
          </div>
        </div>

        {/* Project Results */}
        <ProjectResult project={project} />
      </Container>
    </div>
  );
}

export default PreProjectDetails;
