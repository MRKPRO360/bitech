import { Home, Settings, Users, BarChart } from 'lucide-react';

export type IMenuItem = {
  title: string;
  href?: string;
  icon?: React.ElementType;
  children?: IMenuItem[];
};

export const adminMenu: IMenuItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: Home },
  {
    title: 'Users',
    icon: Users,
    children: [
      { title: 'All Users', href: '/dashboard/users' },
      { title: 'Add User', href: '/dashboard/users/add' },
    ],
  },
  {
    title: 'Reports',
    icon: BarChart,
    children: [
      { title: 'Monthly', href: '/dashboard/reports/monthly' },
      { title: 'Yearly', href: '/dashboard/reports/yearly' },
    ],
  },
  { title: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const userMenu: IMenuItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: Home },
  { title: 'Reports', href: '/dashboard/reports', icon: BarChart },
  { title: 'Settings', href: '/dashboard/settings', icon: Settings },
];
