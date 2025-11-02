'use client';

import { IOrder } from '@/types';
import Image from 'next/image';

import Link from 'next/link';
import { Frown } from 'lucide-react';
import { IMeta } from '@/types/meta';
import formateDate from '@/components/utils/formateDate';
import TablePagination from '@/components/ui/core/TablePagination';

const MyProjectOrdersInfo = ({
  orders,
  meta,
}: {
  orders: IOrder[];
  meta: IMeta;
}) => {
  return (
    <div className="min-h-screen mt-14 mb-4 space-y-6">
      {orders.length === 0 ? (
        <div className="flex text-lg font-semibold items-center justify-center text-gray-500 gap-2 w-full h-full">
          <Frown />
          <span>No project order available.</span>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="p-4 shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Order Issued: {formateDate(order.createdAt as string)}
            </h2>
            <div className="space-y-3">
              {order.projects.map((item) => (
                <div
                  key={item.project._id}
                  className="flex justify-between items-center bg-white p-3 rounded-xs transition duration-300 border-transparent border hover:border-gray-300"
                >
                  <Link
                    href={`/prebuiltProjects/${item.project._id}`}
                    className="flex items-center gap-4 transition duration-300 ease-in font-semibold  hover:underline hover:text-green-700"
                  >
                    <Image
                      width={56}
                      height={56}
                      src={item.project.images?.thumbnail as string}
                      alt={item.project.shortDescription}
                      className="w-14 h-14 rounded-md object-cover"
                    />
                    <p>{item.project.slug}</p>
                  </Link>

                  <div className="flex gap-6">
                    <p>
                      <strong>Amount:</strong>
                      <span>{order.amount}</span>
                    </p>

                    <p>
                      <strong>Payment Method:</strong>
                      <span>{order.paymentMethod}</span>
                    </p>
                    <p>
                      <strong>Status:</strong>
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold 
      ${order.orderStatus === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
      ${order.orderStatus === 'Completed' ? 'bg-green-100 text-green-700' : ''}
      ${order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-700' : ''}
    `}
                      >
                        {order.orderStatus}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default MyProjectOrdersInfo;
