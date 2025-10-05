'use client';
import DashboardLayout from '@/components/modules/dashboard/dashboardLayout';
import { useUser } from '@/context/UserContext';

export default function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();

  return <DashboardLayout role={user?.role}>{children}</DashboardLayout>;
}
