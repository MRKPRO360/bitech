import Profile from '@/components/modules/dashboard/profile';
import { getMe } from '@/services/authService';

async function DashboardHomePage() {
  const res = await getMe();

  return <Profile data={res.data} />;
}
export default DashboardHomePage;
