import Address from '@/components/modules/cart/Address';
import CartProjects from '@/components/modules/cart/CartProject';
import PaymentDetails from '@/components/modules/cart/PaymentDetails';
import PageBanner from '@/components/shared/pageBanner';
import Container from '@/components/ui/core/Container';
import { getMe } from '@/services/authService';

async function CartPage() {
  const { data } = await getMe();

  return (
    <Container>
      <PageBanner title="Cart Page" />
      <div className="lg:flex lg:gap-5 my-10 lg:my-16">
        <CartProjects />
        <div className="md:flex-1 flex flex-col gap-5">
          <Address data={data} />
          <PaymentDetails data={data} />
        </div>
      </div>
    </Container>
  );
}
export default CartPage;
