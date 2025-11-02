'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Cake,
  Star,
  Award,
  Clock,
  Building,
  User,
} from 'lucide-react';
import { IEmployee } from '@/types/employee';

export default function EmployeeDetails({ employee }: { employee: IEmployee }) {
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'On Leave':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Resigned':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Alumni':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const calculateExperience = (joiningDate: string) => {
    const joinDate = new Date(joiningDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - joinDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    return { years: diffYears, months: diffMonths };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Employee Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The employee you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push('/dashboard/employee')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Employees
          </button>
        </div>
      </div>
    );
  }

  const experience = calculateExperience(employee.joiningDate);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/dashboard/employee')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Team</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-md overflow-hidden ring-4 ring-white ring-opacity-50 shadow-md mx-auto">
                    <Image
                      src={employee.profileImg as string}
                      alt={`${employee.name.firstName} ${employee.name.lastName}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="text-white w-4 h-4" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {employee.name.firstName} {employee.name.lastName}
                </h1>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  <p className="text-blue-600 font-semibold">
                    {employee.designation}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Building className="w-4 h-4 text-gray-500" />
                  <p className="text-gray-600">{employee.department}</p>
                </div>

                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                    employee.status
                  )}`}
                >
                  {employee.status}
                </span>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{employee.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{employee.phoneNumber}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {employee.address?.city}, {employee.address?.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-xl font-bold text-gray-900">
                      {experience.years}y {experience.months}m
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${parseInt(employee.salary).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Skills</p>
                    <p className="text-xl font-bold text-gray-900">
                      {employee.skills.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details & Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Details */}
            <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-500" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Full Name
                    </label>
                    <p className="text-gray-900 font-medium">
                      {employee.name.firstName} {employee.name.lastName}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Gender
                    </label>
                    <p className="text-gray-900 font-medium">
                      {employee.gender}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Date of Birth
                    </label>
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <Cake className="w-4 h-4 text-pink-500" />
                      {formatDate(employee.dateOfBirth)}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Joining Date
                    </label>
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <Calendar className="w-4 h-4 text-green-500" />
                      {formatDate(employee.joiningDate)}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Department
                    </label>
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <Building className="w-4 h-4 text-blue-500" />
                      {employee.department}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Designation
                    </label>
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      {employee.designation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Address
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">
                      {employee.address?.city}, {employee.address?.country}
                    </p>
                    <p className="text-gray-600 text-sm">
                      ZIP Code: {employee.address?.zipCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star fill="#ff5d22" className="w-5 h-5 text-primary" />
                Skills & Expertise
              </h2>

              <div className="flex flex-wrap gap-3">
                {employee.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full text-sm font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Employment History */}
            <div className="bg-white rounded-md shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                Employment History
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {employee.designation}
                    </p>
                    <p className="text-gray-600">{employee.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Joined</p>
                    <p className="font-medium text-gray-900">
                      {formatDate(employee.joiningDate)}
                    </p>
                  </div>
                </div>

                <div className="text-center py-4">
                  <div className="w-1 h-8 bg-blue-500 mx-auto"></div>
                  <p className="text-sm text-gray-500 mt-2">Current Position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
