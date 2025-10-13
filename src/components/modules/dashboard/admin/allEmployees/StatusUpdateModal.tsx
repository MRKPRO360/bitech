'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { IEmployee } from '@/types';
import Select from '@/components/form/Select';
import ModalContent from '@/components/ui/core/ModalContent';
import Label from '@/components/form/Label';
import Input from '@/components/form/input/InputField';

// Define the status options
const STATUS_OPTIONS = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'On Leave', label: 'On Leave' },
  { value: 'Resigned', label: 'Resigned' },
  { value: 'Alumni', label: 'Alumni' },
];

interface StatusUpdateModalProps {
  employee: IEmployee | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (data: FieldValues, employee: IEmployee) => Promise<void>;
  isLoading?: boolean;
}

const StatusUpdateModal = ({
  employee,
  open,
  onOpenChange,
  onConfirm,
  isLoading = false,
}: StatusUpdateModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      status: employee?.status as
        | 'Active'
        | 'Inactive'
        | 'On Leave'
        | 'Resigned'
        | 'Alumni',
      reason: '',
    },
  });

  const selectedStatus = watch('status');

  // Reset form when employee changes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      reset();
    }
    onOpenChange(newOpen);
  };

  const onSubmit = async (data: FieldValues) => {
    if (employee) {
      await onConfirm(data, employee);
      reset();
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Inactive':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'On Leave':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Resigned':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Alumni':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <ModalContent
      title="Update Employee Status"
      description={
        employee ? (
          <div className="space-y-2">
            <p>
              Update the employment status for{' '}
              <span className="font-semibold">
                {employee.name.firstName} {employee.name.lastName}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Current Status:</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                  employee.status
                )}`}
              >
                {employee.status}
              </span>
            </div>
          </div>
        ) : (
          <p>Update employee status</p>
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

        {selectedStatus === 'Resigned' && (
          <div className="space-y-3">
            <Label htmlFor="exit">Exit Reason</Label>
            <Input
              rows={3}
              type="textarea"
              placeholder="Why employee would like to resigned?"
              register={register('reason')}
            />
            {/* <Select register={register('status')} options={STATUS_OPTIONS} /> */}
          </div>
        )}

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
                {selectedStatus === 'Active' &&
                  'Employee will be active and able to work'}
                {selectedStatus === 'Inactive' &&
                  'Employee will be inactive and unable to work'}
                {selectedStatus === 'On Leave' &&
                  'Employee will be on temporary leave'}
                {selectedStatus === 'Resigned' &&
                  'Employee has resigned and is no longer with the company'}
                {selectedStatus === 'Alumni' &&
                  'Employee is an alumni and no longer actively employed'}
              </span>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Status changes will take effect immediately</p>
          <p>• Employees will be notified of status changes</p>
          <p>• All changes are logged for audit purposes</p>
        </div>
      </div>
    </ModalContent>
  );
};

export default StatusUpdateModal;
