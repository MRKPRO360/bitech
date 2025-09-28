'use client';
import DashboardLayout from '@/components/modules/dashboard/dashboardLayout';

export default function DashboardLayoutPage() {
  // pretend we fetch role from session or backend
  const role: 'admin' | 'user' = 'admin';

  return (
    <DashboardLayout role={role}>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome to your dashboard.</p>
    </DashboardLayout>
  );
}
