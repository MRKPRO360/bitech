'use client';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { IEmployee } from '@/types/employee';
import { Users, CheckCircle, Building2, DollarSign } from 'lucide-react';

interface EmployeeStatsProps {
  employees: IEmployee[];
}

const EmployeeStats = ({ employees }: EmployeeStatsProps) => {
  const statsRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    once: true,
  });

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === 'Active'
  ).length;
  const departments = [...new Set(employees.map((emp) => emp.department))]
    .length;
  const totalSalary = employees.reduce(
    (sum, emp) => sum + parseInt(emp.salary),
    0
  );

  const stats = [
    {
      title: 'Total Employees',
      value: totalEmployees,
      icon: <Users className="w-5 h-5 text-white" />, // 👥 → Users
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'Active Now',
      value: activeEmployees,
      icon: <CheckCircle className="w-5 h-5 text-white" />, // ✅ → CheckCircle
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      title: 'Departments',
      value: departments,
      icon: <Building2 className="w-5 h-5 text-white" />, // 🏢 → Building2
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: 'Monthly Salary',
      value: `$${totalSalary.toLocaleString()}`,
      icon: <DollarSign className="w-5 h-5 text-white" />, // 💰 → DollarSign
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
  ];

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 "
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStats;
