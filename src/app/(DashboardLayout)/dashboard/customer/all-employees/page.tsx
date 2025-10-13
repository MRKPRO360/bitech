import AllEmployees from '@/components/modules/dashboard/customer/all-employees';
import { getAllEmployees } from '@/services/employee';

async function AllEmployeesPage() {
  const { data } = await getAllEmployees();
  return <AllEmployees data={data.result} />;
}
export default AllEmployeesPage;
