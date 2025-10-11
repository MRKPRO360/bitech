'use client';

import Cta from '@/components/ui/core/Cta';
import formatCurrency from '@/components/utils/formateCurrency';

import {
  orderedPrebuiltProjects,
  orderSelector,
  subTotalPrebuiltProjectsSelector,
  clearPrebuiltProject,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createOrder } from '@/services/cart';
import { IUser } from '@/types';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function PaymentDetails({ data }: { data: IUser }) {
  const order = useAppSelector(orderSelector);

  console.log(order);

  const cartProjects = useAppSelector(orderedPrebuiltProjects);
  const subTotalPrebuiltProject = useAppSelector(
    subTotalPrebuiltProjectsSelector
  );

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleOrder = async () => {
    const orderLoading = toast.loading('Order is being placed');
    try {
      if (!data.user) {
        router.push('/login');
        throw new Error('Please login first.');
      }

      if (cartProjects.length === 0) {
        throw new Error('Cart is empty, what are you trying to order ??');
      }

      const res = await createOrder({
        user: data?.user?._id,
        services: order.services,
        projects: order.prebuiltProjects,
        amount: subTotalPrebuiltProject,
      });

      if (res.success) {
        toast.success(res.message, { id: orderLoading });
        dispatch(clearPrebuiltProject());
        router.push(res.data.paymentUrl);
      }

      if (!res.success) {
        toast.error(res.message, { id: orderLoading });
      }
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }
  };
  return (
    <div className="bg-gray-50  shadow-sm rounded-md p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>

      <div className="space-y-2 mt-4 mb-3">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total</p>
          <p className="font-semibold">
            {formatCurrency(subTotalPrebuiltProject)}
          </p>
        </div>
      </div>

      <Cta
        onClick={handleOrder}
        className="!py-2"
        text="Order Now
"
      />
    </div>
  );
}
