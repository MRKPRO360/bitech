import Employees from '@/components/modules/employee';
import PageBanner from '@/components/shared/pageBanner';
import TeamGroup from '@/components/shared/teamGroup';
import { getAllEmployees } from '@/services/employee';

async function TeamPage() {
  const { data } = await getAllEmployees();
  return (
    <>
      <PageBanner title="Team" />
      <TeamGroup />
      <Employees employees={data.result} />
    </>
  );
}
export default TeamPage;
