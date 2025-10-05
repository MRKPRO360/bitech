'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Star, Tag } from 'lucide-react';
import Container from '@/components/ui/core/Container';
import gsap from 'gsap';
import { IPrebuiltProject } from '@/types/prebuiltProjects';

function ProjectHero({ project }: { project: IPrebuiltProject }) {
  // Update type
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="lg:gap-0 py-30 lg:py-40 bg-gradient-to-br from-gray-900 to-gray-800 text-white md:py-20"
    >
      <Container>
        {/* Back Link */}
        <Link
          href="/prebuiltProjects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </Link>

        {/* Content */}
        <div ref={contentRef} className="space-y-6">
          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
              <Tag className="w-4 h-4" />
              {project.category}
            </span>

            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                project.status === 'completed'
                  ? 'bg-green-500 text-white'
                  : project.status === 'in-progress'
                  ? 'bg-blue-500 text-white'
                  : 'bg-yellow-500 text-white'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-white'
                    : project.status === 'in-progress'
                    ? 'bg-white'
                    : 'bg-white'
                }`}
              ></div>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                Featured
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div>
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 text-base text-gray-400">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-all duration-300 flex items-center gap-2 hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-green-400'
                    : project.status === 'in-progress'
                    ? 'bg-blue-400'
                    : 'bg-yellow-400'
                }`}
              ></div>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">
                {project.price === '0' ? 'Free' : `$${project.price}`}
              </span>
            </div>

            {project.results?.rating && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-300">
                  {project.results.rating}/5
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectHero;
