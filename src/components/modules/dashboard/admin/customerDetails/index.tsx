'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  User,
  Mail,
  Calendar,
  Shield,
  BadgeCheck,
  Package,
  Phone,
} from 'lucide-react';
import { IUser } from '@/types';
import Image from 'next/image';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in-progress':
      return 'bg-yellow-500';
    case 'blocked':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

function CustomerDetails({ data }: { data: IUser }) {
  const CustomerDetailsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CustomerDetails image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0 },
        { scale: 1, duration: 1.5, ease: 'back.out(1.7)' }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }, CustomerDetailsRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      ref={CustomerDetailsRef}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4 text-5xl font-bold">Customer Details</div>
          <p className="text-xl font-semibold">
            Detailed information about the customer
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* CustomerDetails Card */}
          <div className="rounded-md overflow-hidden">
            <div className="p-8">
              {/* CustomerDetails Header */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                {/* CustomerDetails Image */}
                <div ref={imageRef} className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      src={data?.profileImg as string}
                      alt={data?.fullName || 'User CustomerDetails'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r bg-primary text-white rounded-full p-2 shadow-lg">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>

                {/* CustomerDetails Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {data?.fullName}
                    </h2>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm font-medium capitalize">
                      Customer
                    </span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-1 text-gray-600 ">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        Joined {formatDate(data?.createdAt)}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${getStatusColor(
                        data?.status as string
                      )} px-3 py-1 rounded-full`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm  capitalize text-white">
                        {data?.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Personal Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md p-6 transition-all duration-300 shadow-md group bg-white "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Personal Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700 ">
                      <BadgeCheck className="w-4 h-4 text-green-400" />
                      <span>Verified Account</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 ">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span className="capitalize">Email Authentication</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group bg-white "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Mail className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700 ">
                      <Mail className="w-4 h-4 text-green-400" />
                      <span>{data?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 ">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span>{data?.user?.phoneNumber || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {/* Orders Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group bg-white "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Package className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Orders</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Total Orders</span>
                      <span className="text-orange-400 font-semibold">
                        {data?.orders?.length || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Active Orders</span>
                      <span className="text-green-400 font-semibold">
                        {data?.orders?.filter(
                          (order: any) =>
                            order.orderStatus === 'Pending' ||
                            order.orderStatus === 'Completed'
                        ).length || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Status */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group bg-white "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Account Status</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Role</span>
                      <span className="text-purple-400 font-semibold capitalize">
                        {data?.user?.role || 'user'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Status</span>
                      <span className="text-green-400 capitalize">Active</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Verified</span>
                      <span className="text-green-400">Yes</span>
                    </div>
                  </div>
                </div>

                {/* System Information */}
                <div className="rounded-md p-6 shadow-md transition-all duration-300 group bg-white  md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-500/20 rounded-lg">
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold">System</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Created</span>
                      <span className="text-sm">
                        {formatDate(data?.createdAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>Updated</span>
                      <span className="text-sm">
                        {formatDate(data?.updatedAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700 ">
                      <span>User ID</span>
                      <span className="text-sm font-mono">
                        {data?._id?.slice(-8)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders Section */}
              {data?.orders && data.orders.length > 0 && (
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Package className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold">Order History</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.orders.map((order: any, index: number) => (
                      <div
                        key={order._id}
                        ref={index === 0 ? addToCardsRef : undefined}
                        className="rounded-lg p-4 shadow-md bg-white  border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-gray-700 ">
                            Order #{order._id.slice(-6)}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.orderStatus === 'Completed'
                                ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                                : order.orderStatus === 'Cancelled'
                                ? 'bg-red-500/20 text-red-600 dark:text-red-400'
                                : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                            }`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <div>Amount: ${order.amount}</div>
                          <div>Payment: {order.paymentMethod}</div>
                          <div>
                            Items:{' '}
                            {order.services.length + order.projects.length}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
