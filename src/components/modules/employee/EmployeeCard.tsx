'use client';

import formateDate from '@/components/utils/formateDate';
// import { useStaggerChildren } from '@/hooks/CardStagger';
import { IEmployee } from '@/types/employee';
import Image from 'next/image';
import { Mail, Phone, MapPin, DollarSign, Briefcase } from 'lucide-react'; // ✅ Import icons
import Cta from '@/components/ui/core/Cta';

interface EmployeeCardProps {
  employee: IEmployee;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  // const cardRef = useStaggerChildren<HTMLDivElement>({
  //   y: 30,
  //   duration: 0.6,
  // });

  const statusColors = {
    Active: 'bg-green-100 text-green-800 border-green-200',
    Inactive: 'bg-red-100 text-red-800 border-red-200',
    'On Leave': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Resigned: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    Alumni: 'text-purple-600 bg-purple-50 border-purple-200',
    other: 'text-gray-600 bg-gray-50 border-gray-200',
  };

  return (
    <div
      // ref={cardRef}
      className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform-gpu hover:scale-101 h-full"
    >
      {/* Header with Image and Basic Info */}
      <div className="relative flex flex-col h-full">
        <div className="absolute top-1 right-1 z-10">
          <span
            className={`px-1.5 py-1 rounded-full text-xs font-semibold border ${
              statusColors[employee.status] || statusColors.other
            }`}
          >
            {employee.status}
          </span>
        </div>
        <div className="p-6 flex items-start space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white ring-opacity-50 shadow-lg">
              <Image
                src={employee.profileImg as string}
                alt={`${employee.name.firstName} ${employee.name.lastName}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Icon overlay */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-20">
              <Briefcase className="text-white w-3.5 h-3.5" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {employee.name.firstName} {employee.name.lastName}
            </h3>
            <p className="text-blue-600 font-semibold text-sm">
              {employee.designation}
            </p>
            <p className="text-gray-500 text-sm mt-1">{employee.department}</p>
          </div>
        </div>
        {/* Details */}
        <div className="px-6 pb-6 space-y-3">
          {/* Contact Info */}
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <span className="truncate">{employee.email}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <span>{employee.phoneNumber}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <span>
              {employee.address?.city}, {employee.address?.country}
            </span>
          </div>

          {/* Salary */}
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 mr-2 text-green-600" />
            <span className="font-semibold text-green-600">
              ${employee.salary}
            </span>
          </div>

          {/* Skills */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1">
              {employee.skills.slice(0, 3).map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
              {employee.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{employee.skills.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Join Date */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Joined {formateDate(employee.joiningDate)}
            </p>
          </div>
        </div>
        <div className="px-6 pb-6 mt-auto">
          <Cta
            hasLink={true}
            path={`/dashboard/employee/${employee._id}`}
            text="View More"
            className="!px-2 !py-1 !text-base !font-normal"
            renderIcon={false}
            outline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
