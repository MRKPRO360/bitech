'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';

import { TableColumn } from '@/types/table';
import DataTable from '@/components/ui/core/DataTable';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';

import { IUser } from '@/types';
import StatusUpdateModal from './StatusUpdateModal';
import {
  changeCustomerStatus,
  revalidatecustomers,
} from '@/services/customers';

const CustomersTable = ({ users }: { users: IUser[] }) => {
  const router = useRouter();
  const [showStatusUpdateModal, setShowStatusChangeModal] = useState(false);
  const [customerStatusUpdate, setCustomerStatusUpdate] =
    useState<IUser | null>(null);

  const handleView = (user: IUser) => {
    router.push(`/dashboard/admin/customer-details/${user._id}`);
  };

  const handleChangeStatus = (user: IUser) => {
    setCustomerStatusUpdate(user);
    setShowStatusChangeModal(true);
  };

  const columns: TableColumn<IUser>[] = [
    {
      key: 'profileImg',
      label: 'Image',
      render: (value) => (
        <Image
          src={(value as string) || 'https://avatar.iran.liara.run/public'}
          alt="Employee profile image"
          width={100}
          height={100}
          className="rounded-md h-16 w-16 object-cover"
        />
      ),
    },
    { key: 'fullName', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone' },

    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            value === 'in-progress'
              ? 'bg-green-100 text-green-800 border-green-200'
              : value === 'blocked'
              ? 'bg-red-100 text-red-800 border-red-200'
              : 'bg-blue-100 text-blue-800 border-blue-200'
          }`}
        >
          {value}
        </span>
      ),
    },

    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: IUser) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleView(row)}
            className="text-blue-600 hover:underline text-sm"
          >
            View
          </button>

          <button
            onClick={() => handleChangeStatus(row)}
            className="text-red-600 hover:underline text-sm"
          >
            Change Status
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[50vh] py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SecondaryHeading>Employees</SecondaryHeading>
          <Para className="mt-2">Manage your employees</Para>
        </div>

        {!users ? (
          <p>Loading users...</p>
        ) : (
          <DataTable<IUser>
            data={users}
            columns={columns}
            onChangeStatus={handleChangeStatus}
            onView={handleView}
            actions={['view', 'changeStatus']}
          />
        )}

        {customerStatusUpdate && (
          <StatusUpdateModal
            customer={customerStatusUpdate}
            open={showStatusUpdateModal}
            onOpenChange={setShowStatusChangeModal}
            onConfirm={async (data, customer) => {
              const toastId = toast.loading('Updating customer status...');
              try {
                const res = await changeCustomerStatus({
                  _id: customer._id,
                  status: data.status,
                });

                if (res.success) {
                  revalidatecustomers();
                  toast.success(`Status updated to ${data.status}`, {
                    id: toastId,
                  });
                }
              } catch (error: any) {
                toast.error(error.message || 'Failed to update status', {
                  id: toastId,
                });
              } finally {
                setShowStatusChangeModal(false);
                setCustomerStatusUpdate(null);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CustomersTable;
