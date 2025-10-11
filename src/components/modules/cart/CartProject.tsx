'use client';

import Image from 'next/image';
import emptyCart from '@/assets/empty-cart.png';

import { useAppSelector } from '@/redux/hooks';
import { orderedPrebuiltProjects } from '@/redux/features/cartSlice';
import { IPrebuiltProject } from '@/types/prebuiltProjects';
import CartProjectCard from './CartProjectCard';
export default function CartProjects() {
  const projects = useAppSelector(orderedPrebuiltProjects);

  return (
    <div className="bg-gray-50 shadow-sm rounded-md  h-full p-5 space-y-5 lg:flex-1">
      {projects.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <Image className="w-lg h-full" src={emptyCart} alt="empty cart" />
          </div>
        </div>
      )}
      <div className="space-y-8">
        {projects?.map((project: IPrebuiltProject) => (
          <CartProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
