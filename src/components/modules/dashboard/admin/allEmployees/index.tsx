import TablePagination from '@/components/ui/core/TablePagination';
import { IEmployee } from '@/types';
import { IMeta } from '@/types/meta';
import EmployeesTable from './EmployeesTable';

function AllEmployees({
  employees,
  meta,
}: {
  employees: IEmployee[];
  meta: IMeta;
}) {
  return (
    <div>
      <EmployeesTable employees={employees} />
      <div className="mt-12 flex justify-center">
        <TablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
}
export default AllEmployees;
