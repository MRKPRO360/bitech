// import TablePagination from '@/components/ui/core/TablePagination';
// import ProjectOrdersTable from './ProjectOrderTable';
import { IOrder } from '@/types';
import { IMeta } from '@/types/meta';
import MyProjectOrdersInfo from './MyProjectOrders';
import SubHeading from '@/components/ui/core/SubHeading';
import Container from '@/components/ui/core/Container';

function MyProjectOrders({ orders, meta }: { orders: IOrder[]; meta: IMeta }) {
  return (
    <div className="bg-white">
      <Container>
        <SubHeading>Project Orders</SubHeading>
        <MyProjectOrdersInfo orders={orders} meta={meta} />
      </Container>
    </div>
  );
}
export default MyProjectOrders;
