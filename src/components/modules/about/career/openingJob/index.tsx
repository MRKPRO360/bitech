'use client';

import Container from '@/components/ui/core/Container';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import WandWithText from '@/components/ui/Wand';
import { useFadeUp } from '@/hooks/FadeUp';
import { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaSearch, FaUsers } from 'react-icons/fa';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    description:
      "We're looking for an experienced Frontend Developer to join our growing team and help build amazing user experiences.",
    requirements: [
      'React/Next.js',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
      'Testing',
    ],
    benefits: [
      'Remote work',
      'Flexible hours',
      'Health insurance',
      'Stock options',
    ],
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Join our design team to create beautiful and intuitive interfaces that users love.',
    requirements: [
      'Figma',
      'UI/UX Design',
      'User Research',
      'Prototyping',
      'Design Systems',
    ],
    benefits: [
      'Remote work',
      'Learning budget',
      'Wellness stipend',
      'Unlimited PTO',
    ],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
    benefits: [
      'Remote work',
      'Conference budget',
      'Home office setup',
      'Bonus program',
    ],
  },
  {
    id: 4,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Drive our marketing strategy and help grow our brand presence globally.',
    requirements: [
      'Digital Marketing',
      'Content Strategy',
      'SEO/SEM',
      'Analytics',
      'Campaign Management',
    ],
    benefits: [
      'Remote work',
      'Performance bonus',
      'Professional development',
      'Team events',
    ],
  },
];

const departments = [
  'all',
  'engineering',
  'design',
  'marketing',
  'sales',
  'operations',
];

function OpeningJobs() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });
  //   const containerRef = useStaggerChildren<HTMLDivElement>({
  //     y: 30,
  //     stagger: 0.15,
  //     once: true,
  //   });

  const filteredJobs = jobPositions.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === 'all' || job.department.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container className="py-20 bg-white">
      <div
        ref={fadeRef}
        className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
      >
        <WandWithText text="Open Positions" />

        <SecondaryHeading>
          Join Our Team, Explore Open Positions
        </SecondaryHeading>
        <Para className="mt-5">
          Find your perfect role and join our growing team
        </Para>
      </div>

      {/* Search and Filter */}
      <div className="my-8 bg-white rounded-2xl ">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search positions..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-300 cursor-pointer ${
                  activeFilter === dept
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(dept)}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-md px-4 py-3 shadow-sm hover:shadow-md shadow-primary/10 transition duration-300"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center text-gray-600">
                    <FaBriefcase className="mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2" />
                    {job.type}
                  </div>
                </div>
                <Para className="mb-2.5">{job.description}</Para>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <Cta text="Apply Now" />
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No positions found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </Container>
  );
}
export default OpeningJobs;
