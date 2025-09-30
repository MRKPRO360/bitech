// 'use client';
// import { useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { ArrowLeft, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
// import Container from '@/components/ui/core/Container';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { IProject } from '@/types/project';

// gsap.registerPlugin(ScrollTrigger);

// function ProjectHero({ project }: { project: IProject }) {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const badgeRef = useRef<HTMLSpanElement>(null);
//   const descriptionRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLAnchorElement>(null);
//   const backLinkRef = useRef<HTMLAnchorElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate background gradient
//       gsap.fromTo(
//         heroRef.current,
//         { backgroundPosition: '0% 50%' },
//         {
//           backgroundPosition: '100% 50%',
//           duration: 10,
//           ease: 'none',
//           repeat: -1,
//           yoyo: true,
//         }
//       );

//       // Stagger animation for elements
//       const tl = gsap.timeline({ delay: 0.3 });

//       tl.fromTo(
//         backLinkRef.current,
//         { x: -50, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
//       )
//         .fromTo(
//           badgeRef.current,
//           { scale: 0, rotation: -180 },
//           { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
//           '-=0.2'
//         )
//         .fromTo(
//           titleRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
//           '-=0.3'
//         )
//         .fromTo(
//           descriptionRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
//           '-=0.5'
//         )
//         .fromTo(
//           ctaRef.current,
//           { scale: 0, rotation: -10 },
//           { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
//           '-=0.3'
//         );

//       // Floating animation for badge
//       gsap.to(badgeRef.current, {
//         y: -10,
//         duration: 2,
//         ease: 'power1.inOut',
//         repeat: -1,
//         yoyo: true,
//       });

//       // Hover animation for CTA
//       if (ctaRef.current) {
//         ctaRef.current.addEventListener('mouseenter', () => {
//           gsap.to(ctaRef.current, {
//             scale: 1.05,
//             boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
//             duration: 0.3,
//             ease: 'power2.out',
//           });
//         });

//         ctaRef.current.addEventListener('mouseleave', () => {
//           gsap.to(ctaRef.current, {
//             scale: 1,
//             boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
//             duration: 0.3,
//             ease: 'power2.out',
//           });
//         });
//       }
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white py-20 md:py-28 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       <Container className="relative z-10">
//         {/* Back Link */}
//         <Link
//           ref={backLinkRef}
//           href="/projects"
//           className="group inline-flex items-center gap-3 text-gray-300 hover:text-white mb-8 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
//         >
//           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//           <span className="font-medium">Back to Projects</span>
//         </Link>

//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//           <div className="flex-1 space-y-6">
//             {/* Category Badge */}
//             <div className="flex items-center gap-4">
//               <span
//                 ref={badgeRef}
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 {project.category}
//               </span>

//               {/* Status Indicator */}
//               <div className="flex items-center gap-2 text-sm text-gray-300">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
//                 <div className="w-2 h-2 bg-green-400 rounded-full" />
//                 <span>Completed</span>
//               </div>
//             </div>

//             {/* Title */}
//             <h1
//               ref={titleRef}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
//             >
//               <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
//                 {project.title}
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               ref={descriptionRef}
//               className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
//             >
//               {project.shortDescription}
//             </p>

//             {/* Quick Stats */}
//             <div className="flex flex-wrap gap-6 pt-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">3</div>
//                 <div className="text-sm text-gray-400">Months</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">95%</div>
//                 <div className="text-sm text-gray-400">Satisfaction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">20+</div>
//                 <div className="text-sm text-gray-400">Features</div>
//               </div>
//             </div>
//           </div>

//           {/* CTA Section */}
//           {project.liveLink && (
//             <div className="lg:text-right space-y-4">
//               <a
//                 ref={ctaRef}
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <ExternalLink className="w-5 h-5 relative z-10" />
//                 <span className="relative z-10">Visit Live Site</span>
//                 <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
//               </a>

//               {/* Secondary CTA */}
//               <div className="text-center lg:text-right">
//                 <button className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-2 justify-center lg:justify-end group">
//                   View Case Study
//                   <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </Container>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center gap-2 text-gray-400">
//           <span className="text-sm font-medium">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ProjectHero;

'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/core/Container';
import gsap from 'gsap';
import { IProject } from '@/types/project';

function ProjectHero({ project }: { project: IProject }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

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
        {/* Back Link - Simple */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </Link>

        {/* Content */}
        <div ref={contentRef} className=" space-y-6">
          {/* Category */}
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            {project.category}
          </span>

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
                className="font-semibold  transition-all duration-300 flex items-center gap-2 hover:text-primary "
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </a>
            )}
            <div className="flex items-center gap-2 transition duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Completed Project
            </div>
            <div>{project.duration}</div>
            <div>{project.client}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectHero;
