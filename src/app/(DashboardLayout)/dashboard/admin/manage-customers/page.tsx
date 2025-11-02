import ManageCustomers from '@/components/modules/dashboard/admin/manageCustomers';
import { getAllCustomers } from '@/services/customers';
import { TSearchParams } from '@/types';

async function ManageCustomersPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const query = await searchParams;

  const customers = await getAllCustomers(query?.page as string, '10', query);

  const { result, meta } = customers.data;

  return <ManageCustomers users={result} meta={meta} />;
}
export default ManageCustomersPage;
