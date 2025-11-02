import MyProjectOrders from '@/components/modules/dashboard/customer/myProjectOrders';
import PageBanner from '@/components/shared/pageBanner';
import { getMyProjectOrders, getMyServiceOrders } from '@/services/orders';
import { TSearchParams } from '@/types';

async function MyOrdersPage({ searchParams }: { searchParams: TSearchParams }) {
  const { page } = await searchParams;

  const [projectOrderResults, serviceOrderResults] = await Promise.all([
    getMyProjectOrders(page as string),
    getMyServiceOrders(page as string),
  ]);

  return (
    <div>
      <PageBanner title="My Orders" />
      <MyProjectOrders
        orders={projectOrderResults.data.result}
        meta={projectOrderResults.data.meta}
      />
    </div>
  );
}
export default MyOrdersPage;
