import TablePagination from '@/components/ui/core/TablePagination';
import { IUser } from '@/types';
import { IMeta } from '@/types/meta';
import CustomersTable from './CustomersTable';

function ManageCustomers({ users, meta }: { users: IUser[]; meta: IMeta }) {
  return (
    <div>
      <CustomersTable users={users} />
      <div className="mt-12 flex justify-center">
        <TablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
}
export default ManageCustomers;
