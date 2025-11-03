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

  return <ManageProjectOrders meta={meta} orders={result} />;
}
export default ManageProjectOrdersPage;
