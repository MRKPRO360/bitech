import ManageProjectOrders from '@/components/modules/dashboard/admin/manageOrders';
import { getAllProjectOrders } from '@/services/orders';
import { TSearchParams } from '@/types';

async function ManageProjectOrdersPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const query = await searchParams;

  const {
    data: { result, meta },
  } = await getAllProjectOrders(query.page as string, '10', query);

  return (
    <div>
      <ManageProjectOrders meta={meta} orders={result} />
    </div>
  );
}
export default ManageProjectOrdersPage;
