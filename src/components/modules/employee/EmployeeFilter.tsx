import Select from '@/components/form/Select';
import { useState } from 'react';
import {
  DEPARTMENT_OPTIONS,
  DESIGNATION_OPTIONS,
  STATUS_OPTIONS,
} from './employee.const';
import Input from '@/components/form/input/InputField';
import { Search } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const EmployeeFilters = ({ onFilterChange }: FilterProps) => {
  const [filters, setFilters] = useState({
    department: '',
    status: '',
    search: '',
    designation: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div
      // ref={filtersRef}
      className="rounded-md shadow-md p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Employees
          </label>
          <div className="relative">
            <Input
              value={filters.search}
              placeholder="Search by name, email, or skills..."
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />

            <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Department Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>

          <Select
            value={filters.designation}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            options={DEPARTMENT_OPTIONS}
          />
        </div>

        {/* Designation Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Designation
          </label>

          <Select
            value={filters.designation}
            onChange={(e) => handleFilterChange('designation', e.target.value)}
            options={DESIGNATION_OPTIONS}
          />
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <Select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            options={STATUS_OPTIONS}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilters;
