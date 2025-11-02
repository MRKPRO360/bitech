'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { IUser } from '@/types';
import Select from '@/components/form/Select';
import ModalContent from '@/components/ui/core/ModalContent';
import Label from '@/components/form/Label';

// Define the status options
const STATUS_OPTIONS = [
  { value: 'in-progress', label: 'In Progress' },
  { value: 'blocked', label: 'Blocked' },
];

interface StatusUpdateModalProps {
  customer: IUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (data: FieldValues, customer: IUser) => Promise<void>;
  isLoading?: boolean;
}

const StatusUpdateModal = ({
  customer,
  open,
  onOpenChange,
  onConfirm,
  isLoading = false,
}: StatusUpdateModalProps) => {
  const {
    register,
    handleSubmit,

    reset,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      status: customer?.status as 'in-progress' | 'blocked',
    },
  });

  const selectedStatus = watch('status');

  // Reset form when customer changes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      reset();
    }
    onOpenChange(newOpen);
  };

  const onSubmit = async (data: FieldValues) => {
    if (customer) {
      await onConfirm(data, customer);
      reset();
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'blocked':
        return 'text-red-600 bg-red-50 border-red-200';

      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <ModalContent
      title="Update customer Status"
      description={
        customer ? (
          <div className="space-y-2">
            <p>
              Update the custoemer status for{' '}
              <span className="font-semibold">
                {customer.name.firstName} {customer.name.lastName}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Current Status:</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                  customer.status || ''
                )}`}
              >
                {customer.status}
              </span>
            </div>
          </div>
        ) : (
          <p>Update customer status</p>
        )
      }
      confirmText={isLoading ? 'Updating...' : 'Update Status'}
      onConfirm={handleSubmit(onSubmit)}
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className="space-y-6 py-4">
        {/* Status Selection */}
        <div className="space-y-3">
          <Label htmlFor="status">New Status *</Label>

          <Select register={register('status')} options={STATUS_OPTIONS} />
        </div>

        {/* Status Preview */}
        {selectedStatus && (
          <div className="p-4  focus:border-primary  bg-transparent text-gray-800  w-full px-2 py-2 border border-grey/20 rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
            <div className="flex items-center gap-3 ">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                  selectedStatus
                )}`}
              >
                {selectedStatus}
              </span>
              <span className="text-sm text-gray-600">
                {selectedStatus === 'in-progress' &&
                  'customer will be active and able to work'}
                {selectedStatus === 'blocked' &&
                  'customer will be blocked and unable to do any action!'}
              </span>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Status changes will take effect immediately</p>
          <p>• customers will be notified of status changes</p>
          <p>• All changes are logged for audit purposes</p>
        </div>
      </div>
    </ModalContent>
  );
};

export default StatusUpdateModal;
