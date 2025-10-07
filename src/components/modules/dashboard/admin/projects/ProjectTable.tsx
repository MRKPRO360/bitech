'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { Clock10, Star } from 'lucide-react';

import { TableColumn } from '@/types/table';
import DataTable from '@/components/ui/core/DataTable';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';
import Modal from '@/components/ui/core/Modal';
import formateDate from '@/components/utils/formateDate';
import {
  deletePrebuiltProject,
  revalidatePrebuiltProjects,
} from '@/services/prebuiltProjectService';
import { IProject } from '@/types/project';

const ProjectTable = ({ projects }: { projects: IProject[] }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<IProject | null>(null);

  const handleView = (project: IProject) => {
    router.push(`/prebuiltProjects/${project._id}`);
  };

  const handleEdit = (project: IProject) => {
    router.push(`/dashboard/admin/updatePreProject/${project._id}`);
  };

  const handleDelete = (project: IProject) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    const toastId = toast.loading('Deleting project...');
    try {
      const res = await deletePrebuiltProject(projectToDelete._id);
      if (res.success) {
        toast.success('Project deleted successfully.', { id: toastId });
        await revalidatePrebuiltProjects();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete project.', {
        id: toastId,
      });
    } finally {
      setShowDeleteModal(false);
      setProjectToDelete(null);
    }
  };

  const columns: TableColumn<IProject>[] = [
    {
      key: 'images',
      label: 'Image',
      render: (value) => (
        <Image
          src={value.thumbnail as string}
          alt="thumbnail"
          width={100}
          height={100}
          className="rounded-md"
        />
      ),
    },
    { key: 'title', label: 'Project' },
    { key: 'category', label: 'Category' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            value === 'completed'
              ? 'bg-green-100 text-green-800 border-green-200'
              : value === 'in-progress'
              ? 'bg-blue-100 text-blue-800 border-blue-200'
              : 'bg-yellow-100 text-yellow-800 border-yellow-200'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'budget',
      label: 'Budget',
      render: (value: string) =>
        value === '0' || value === 'Free' ? (
          <span className="text-green-700 font-medium">Free</span>
        ) : (
          `$${value}`
        ),
    },
    {
      key: 'results',
      label: 'Results',
      render: (value) => (
        <div className="flex flex-col">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400" /> {value.rating}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock10 className="w-4 h-4" /> {value.pageLoadTime}
          </div>
        </div>
      ),
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value) => <span className="text-sm">{formateDate(value)}</span>,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: IProject) => (
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
            onClick={() => handleDelete(row)}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[50vh] py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SecondaryHeading>Projects</SecondaryHeading>
          <Para className="mt-2">Manage your projects</Para>
        </div>

        {!projects ? (
          <p>Loading projects...</p>
        ) : (
          <DataTable<IProject>
            data={projects}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
            actions={['view', 'edit', 'delete']}
          />
        )}

        {/* ✅ Always render the modal */}
        <Modal
          title="Confirm Deletion"
          description={
            projectToDelete
              ? `Are you sure you want to delete "${projectToDelete.title}"? This action cannot be undone.`
              : 'Are you sure you want to delete this project?'
          }
          confirmText="Delete"
          onConfirm={confirmDelete}
          open={showDeleteModal}
          onOpenChange={setShowDeleteModal}
        >
          <></>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectTable;
