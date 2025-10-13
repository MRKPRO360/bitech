import EmployeeDetails from '@/components/modules/employee/EmployeeDetails';
import { getSingleEmployee } from '@/services/employee';

async function SingleEmployee({
  params,
}: {
  params: Promise<{ employeeId: string }>;
}) {
  const { employeeId } = await params;
  const res = await getSingleEmployee(employeeId);
  return (
    <>
      <EmployeeDetails employee={res.data} />
    </>
  );
}
export default SingleEmployee;
