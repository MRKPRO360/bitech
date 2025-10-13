'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';

import { TableColumn } from '@/types/table';
import DataTable from '@/components/ui/core/DataTable';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';
import Modal from '@/components/ui/core/Modal';
import formateDate from '@/components/utils/formateDate';

import { IEmployee } from '@/types';
import ContentModal from '@/components/ui/core/ContentModal';
import StatusUpdateModal from './StatusUpdateModal';

const EmployeesTable = ({ employees }: { employees: IEmployee[] }) => {
  const router = useRouter();
  const [showStatusUpdateModal, setShowStatusChangeModal] = useState(false);
  const [employeeStatusUpdate, setEmployeeStatusUpdate] =
    useState<IEmployee | null>(null);

  const handleView = (employee: IEmployee) => {
    router.push(`/employees/${employee._id}`);
  };

  const handleEdit = (employee: IEmployee) => {
    router.push(`/dashboard/admin/update-employee/${employee._id}`);
  };

  const handleChangeStatus = (employee: IEmployee) => {
    setEmployeeStatusUpdate(employee);
    setShowStatusChangeModal(true);
  };

  const confirmStatusUpdate = async () => {
    // if (!employeeToDelete) return;
    // const toastId = toast.loading('Deleting employee...');
    // try {
    //   const res = await deletePrebuiltemployee(employeeToDelete._id);
    //   if (res.success) {
    //     toast.success('employee deleted successfully.', { id: toastId });
    //     await revalidatePrebuiltemployees();
    //   }
    // } catch (error: any) {
    //   toast.error(error.message || 'Failed to delete employee.', {
    //     id: toastId,
    //   });
    // } finally {
    //   setShowStatusChangeModal(false);
    //   setEmployeeToDelete(null);
    // }
  };

  const columns: TableColumn<IEmployee>[] = [
    {
      key: 'profileImg',
      label: 'Image',
      render: (value) => (
        <Image
          src={value as string}
          alt="Employee profile image"
          width={100}
          height={100}
          className="rounded-md"
        />
      ),
    },
    { key: 'fullName', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone' },
    { key: 'department', label: 'Department' },
    { key: 'designation', label: 'Designation' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            value === 'Active'
              ? 'bg-green-100 text-green-800 border-green-200'
              : value === 'On Leave'
              ? 'bg-blue-100 text-blue-800 border-blue-200'
              : 'bg-red-100 text-red-800 border-red-200'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'salary',
      label: 'Salary',
      render: (value: string) =>
        value === '0' || value === 'Free' ? (
          <span className="text-green-700 font-medium">Free</span>
        ) : (
          `$${value}`
        ),
    },

    {
      key: 'joiningDate',
      label: 'Joined On',
      render: (value) => <span className="text-sm">{formateDate(value)}</span>,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: IEmployee) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleView(row)}
            className="text-blue-600 hover:underline text-sm"
          >
            View
          </button>

          <button
            onClick={() => handleEdit(row)}
            className="text-green-600 hover:underline text-sm"
          >
            Edit
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

        {!employees ? (
          <p>Loading employees...</p>
        ) : (
          <DataTable<IEmployee>
            data={employees}
            columns={columns}
            onEdit={handleEdit}
            onChangeStatus={handleChangeStatus}
            onView={handleView}
            actions={['view', 'edit', 'changeStatus']}
          />
        )}

        {employeeStatusUpdate && (
          <StatusUpdateModal
            employee={employeeStatusUpdate}
            open={showStatusUpdateModal}
            onOpenChange={setShowStatusChangeModal}
            onConfirm={async (data, employee) => {
              try {
                const toastId = toast.loading('Updating employee status...');
                // TODO: Replace this with your API call
                // await updateEmployeeStatus(employee._id, { status: data.status });
                toast.success(`Status updated to ${data.status}`, {
                  id: toastId,
                });
              } catch (error: any) {
                toast.error(error.message || 'Failed to update status');
              } finally {
                setShowStatusChangeModal(false);
                setEmployeeStatusUpdate(null);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeesTable;
