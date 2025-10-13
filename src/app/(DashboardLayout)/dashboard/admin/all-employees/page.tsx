import AllEmployees from '@/components/modules/dashboard/admin/allEmployees';
import { getAllEmployees } from '@/services/employee';
import { TSearchParams } from '@/types';

async function AllEmployeesPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const query = await searchParams;

  const projects = await getAllEmployees(query?.page as string, '10', query);

  const { result, meta } = projects.data;
  return <AllEmployees meta={meta} employees={result} />;
}
export default AllEmployeesPage;
