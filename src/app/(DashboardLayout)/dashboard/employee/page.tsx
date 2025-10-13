import Employees from '@/components/modules/employee';
import PageBanner from '@/components/shared/pageBanner';
import { getAllEmployees } from '@/services/employee';

async function AllEmployeesPage() {
  const { data } = await getAllEmployees();

  return (
    <>
      <PageBanner title="All Employees" />
      <Employees employees={data.result} />
    </>
  );
}
export default AllEmployeesPage;
