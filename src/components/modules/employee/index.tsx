// 'use client';

// import { IEmployee } from '@/types/employee';
// import { useFadeUp } from '@/hooks/FadeUp';
// import EmployeeStats from './EmployeeStats';
// import EmployeeCard from './EmployeeCard';

// import { useStaggerChildren } from '@/hooks/CardStagger';
// import WandWithText from '@/components/ui/Wand';
// import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
// import Para from '@/components/ui/core/Para';

// export default function Employees({ employees }: { employees: IEmployee[] }) {

//   const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

//   // Use your custom hooks
//   const cardsRef = useStaggerChildren<HTMLDivElement>({
//     y: 50,
//     duration: 1,
//     once: true,
//   });

//   return (
//     <div  className="min-h-screen  py-8">
//       <div className="container mx-auto px-4">
//         {/* Header */}

//         <div
//           ref={fadeRef}
//           className="mb-5 text-center flex flex-col justify-center items-center"
//         >
//           <WandWithText text="Team Members" />
//           <SecondaryHeading>Our Amazing Team</SecondaryHeading>
//           <Para className="mt-5">
//             Meet the talented professionals who make our company great.
//             We&apos;re proud of every member of our growing family.
//           </Para>
//         </div>

//         {/* Statistics */}
//         <EmployeeStats employees={employees} />

//         <div
//           ref={cardsRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//         >
//           {employees.map((employee) => (
//             <EmployeeCard key={employee._id} employee={employee} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useCallback, JSX } from 'react';
import { IEmployee } from '@/types/employee';
import { DESIGNATIONS } from './employee.const';
import { useStaggerChildren } from '@/hooks/CardStagger';
import EmployeeStats from './EmployeeStats';
import EmployeeFilters from './EmployeeFilter';
import EmployeeCard from './EmployeeCard';
import { useFadeUp } from '@/hooks/FadeUp';
import WandWithText from '@/components/ui/Wand';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';
import {
  GraduationCap,
  Laptop,
  Zap,
  Rocket,
  Crown,
  BarChart3,
  Palette,
  Handshake,
  Search,
  Megaphone,
  User,
} from 'lucide-react';

// Group employees by designation
const groupEmployeesByDesignation = (employees: IEmployee[]) => {
  const grouped: { [key: string]: IEmployee[] } = {};

  DESIGNATIONS.forEach((designation) => {
    grouped[designation] = employees.filter(
      (emp) => emp.designation === designation
    );
  });

  // Also add a category for employees without designation
  const noDesignation = employees.filter(
    (emp) => !emp.designation || !DESIGNATIONS.includes(emp.designation as any)
  );
  if (noDesignation.length > 0) {
    grouped['Other'] = noDesignation;
  }

  return grouped;
};

export default function Employees({ employees }: { employees: IEmployee[] }) {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([]);
  const [groupedEmployees, setGroupedEmployees] = useState<{
    [key: string]: IEmployee[];
  }>({});
  const [filters, setFilters] = useState({
    department: '',
    status: '',
    search: '',
    designation: '',
  });

  const filtersRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    duration: 0.8,
    delay: 0.3,
    once: true,
  });

  const filterEmployees = useCallback(() => {
    let filtered = employees;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (emp) =>
          emp.name.firstName.toLowerCase().includes(searchLower) ||
          emp.name.lastName.toLowerCase().includes(searchLower) ||
          emp.email.toLowerCase().includes(searchLower) ||
          emp.skills.some((skill) => skill.toLowerCase().includes(searchLower))
      );
    }

    if (filters.department) {
      filtered = filtered.filter(
        (emp) => emp.department === filters.department
      );
    }

    if (filters.status) {
      filtered = filtered.filter((emp) => emp.status === filters.status);
    }

    if (filters.designation) {
      filtered = filtered.filter(
        (emp) => emp.designation === filters.designation
      );
    }

    setFilteredEmployees(filtered);
  }, [
    employees,
    filters.department,
    filters.search,
    filters.status,
    filters.designation,
  ]);

  useEffect(() => {
    filterEmployees();
  }, [filterEmployees, employees]);

  useEffect(() => {
    // Group filtered employees by designation
    const grouped = groupEmployeesByDesignation(filteredEmployees);
    setGroupedEmployees(grouped);
  }, [filteredEmployees]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Get designation icon and color

  const getDesignationConfig = (designation: string) => {
    const configs: {
      [key: string]: {
        icon: JSX.Element;
        color: string;
        bgColor: string;
      };
    } = {
      Intern: {
        icon: <GraduationCap className="w-6 h-6" />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50 border-purple-200',
      },
      'Junior Developer': {
        icon: <Laptop className="w-6 h-6" />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50 border-blue-200',
      },
      'Mid Developer': {
        icon: <Zap className="w-6 h-6" />,
        color: 'text-green-600',
        bgColor: 'bg-green-50 border-green-200',
      },
      'Senior Developer': {
        icon: <Rocket className="w-6 h-6" />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50 border-orange-200',
      },
      'Team Lead': {
        icon: <Crown className="w-6 h-6" />,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50 border-yellow-200',
      },
      'Project Manager': {
        icon: <BarChart3 className="w-6 h-6" />,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50 border-indigo-200',
      },
      Designer: {
        icon: <Palette className="w-6 h-6" />,
        color: 'text-pink-600',
        bgColor: 'bg-pink-50 border-pink-200',
      },
      'HR Manager': {
        icon: <Handshake className="w-6 h-6" />,
        color: 'text-teal-600',
        bgColor: 'bg-teal-50 border-teal-200',
      },
      'QA Engineer': {
        icon: <Search className="w-6 h-6" />,
        color: 'text-red-600',
        bgColor: 'bg-red-50 border-red-200',
      },
      'Marketing Executive': {
        icon: <Megaphone className="w-6 h-6" />,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50 border-cyan-200',
      },
      Other: {
        icon: <User className="w-6 h-6" />,
        color: 'text-gray-600',
        bgColor: 'bg-gray-50 border-gray-200',
      },
    };

    return configs[designation] || configs['Other'];
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={fadeRef}
          className="max-w-xl mx-auto mb-8 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Team Members" />
          <SecondaryHeading>Our Amazing Team</SecondaryHeading>
          <Para className="mt-5">
            Meet the talented professionals who make our company great.
            We&apos;re proud of every member of our growing family.
          </Para>
        </div>

        {/* Statistics */}
        <EmployeeStats employees={employees} />

        {/* Filters */}
        <div ref={filtersRef}>
          <EmployeeFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600 text-lg">
            Showing{' '}
            <span className="font-semibold text-gray-900">
              {filteredEmployees.length}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-gray-900">
              {employees.length}
            </span>{' '}
            employees
          </p>
        </div>

        {/* Categorized Employees */}
        {filteredEmployees.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 opacity-50">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              No employees found
            </h3>
            <p className="text-gray-600 text-lg">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedEmployees)
              .filter(([_, employees]) => employees.length > 0)
              .map(([designation, employees]) => {
                const config = getDesignationConfig(designation);

                return (
                  <section key={designation} className="space-y-6">
                    {/* Designation Header */}
                    <div
                      className={`flex items-center gap-4 p-6 rounded-2xl border ${config.bgColor}`}
                    >
                      <div className={`text-3xl ${config.color}`}>
                        {config.icon}
                      </div>
                      <div>
                        <h2 className={`text-2xl font-bold ${config.color}`}>
                          {designation}
                        </h2>
                        <p className="text-gray-600 mt-1">
                          {employees.length}{' '}
                          {employees.length === 1 ? 'employee' : 'employees'}
                        </p>
                      </div>
                    </div>

                    {/* Employees Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {employees.map((employee) => (
                        <EmployeeCard key={employee._id} employee={employee} />
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
