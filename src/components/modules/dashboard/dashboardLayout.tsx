import { getMenuByRole } from './dashbaord.config';
import Sidebar from './Sidebar';

import Topbar from './Topbar';

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: 'admin' | 'customer' | undefined;
}) {
  const menu = getMenuByRole(role!);

  return (
    <div className="flex">
      <Sidebar menu={menu} />
      <div className="flex-1 ml-0 md:ml-64 min-h-screen flex flex-col">
        <Topbar />
        <main className="p-6 flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
