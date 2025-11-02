import CustomerDetails from '@/components/modules/dashboard/admin/customerDetails';
import { getSingleCustomer } from '@/services/customers';

async function CustomerDetailsPage({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) {
  const { customerId } = await params;
  const res = await getSingleCustomer(customerId);
  return <CustomerDetails data={res.data} />;
}
export default CustomerDetailsPage;
