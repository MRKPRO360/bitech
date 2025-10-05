'use client';

import { TableColumn } from '@/types/table';
import { IPrebuiltProject } from '@/types/prebuiltProjects';
import DataTable from '@/components/ui/core/DataTable';
import { Clock10, Star } from 'lucide-react';
import formateDate from '@/components/utils/formateDate';
import Image from 'next/image';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';
import { useRouter } from 'next/navigation';

const PrebuiltProjectsTable = ({
  projects,
}: {
  projects: IPrebuiltProject[];
}) => {
  const router = useRouter();

  const columns: TableColumn<IPrebuiltProject>[] = [
    {
      key: 'images',
      label: 'Image',
      sortable: true,
      render: (value: IPrebuiltProject['images']) => (
        <Image src={value.thumbnail} alt="thumbnail" width={100} height={100} />
      ),
    },
    { key: 'title', label: 'Project', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
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
      key: 'featured',
      label: 'Featured',
      render: (value: boolean) =>
        value ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Featured
          </span>
        ) : null,
    },
    { key: 'technologies', label: 'Technologies' },
    {
      key: 'price',
      label: 'Price',
      sortable: true,
      render: (value: string) =>
        value === '0' || value === 'Free' ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Free
          </span>
        ) : (
          <span className="text-sm font-medium text-gray-900">${value}</span>
        ),
    },
    {
      key: 'results',
      label: 'Results',
      render: (value: IPrebuiltProject['results']) => (
        <div className="flex flex-col">
          {/* Rating */}
          <div className="flex  items-center text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {value.rating}
            </span>
          </div>

          {/* Page Load Time */}
          <div className="flex  items-center text-yellow-500">
            <Clock10 className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {value.pageLoadTime}
            </span>
          </div>
        </div>
      ),
    },

    {
      key: 'createdAt',
      label: 'Created',
      sortable: true,
      render: (value: string) => (
        <span className="text-sm">{formateDate(value)}</span>
      ),
    },
    { key: 'actions', label: 'Actions' },
  ];

  const handleEdit = (project: IPrebuiltProject) => {
    console.log('Edit project:', project);
  };

  const handleDelete = (project: IPrebuiltProject) => {
    console.log('Delete project:', project);
  };

  const handleView = (project: IPrebuiltProject) => {
    router.push(`/prebuiltProjects/${project._id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SecondaryHeading>Projects</SecondaryHeading>
          <Para className="mt-2">Manage your projects</Para>
        </div>

        <DataTable<IPrebuiltProject>
          data={projects}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          actions={['view', 'edit', 'delete']}
        />
      </div>
    </div>
  );
};

export default PrebuiltProjectsTable;
