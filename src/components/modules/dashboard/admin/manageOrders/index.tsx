import { IOrder } from '@/types';
import { IMeta } from '@/types/meta';

import AllProjectOrdersInfo from './AllProjectOrdersInfo';
import TablePagination from '@/components/ui/core/TablePagination';

function ManageProjectOrders({
  orders,
  meta,
}: {
  orders: IOrder[];
  meta: IMeta;
}) {
  return (
    <div>
      <AllProjectOrdersInfo orders={orders} meta={meta} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
}
export default ManageProjectOrders;
