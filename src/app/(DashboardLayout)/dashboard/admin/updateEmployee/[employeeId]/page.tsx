import UpdateEmployee from '@/components/modules/dashboard/admin/updateEmployee';
import { getSingleEmployee } from '@/services/employee';

async function UpdateSingleEmployeePage({
  params,
}: {
  params: Promise<{ employeeId: string }>;
}) {
  const { employeeId } = await params;

  const res = await getSingleEmployee(employeeId);

  return (
    <>
      <UpdateEmployee employee={res.data} />
    </>
  );
}
export default UpdateSingleEmployeePage;
