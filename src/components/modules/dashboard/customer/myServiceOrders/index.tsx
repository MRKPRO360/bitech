import { IOrder } from '@/types';
import { IMeta } from '@/types/meta';

function MyOrders({ orders, meta }: { orders: IOrder[]; meta: IMeta }) {
  console.log(orders, meta);

  return <div>MyOrders</div>;
}
export default MyOrders;
