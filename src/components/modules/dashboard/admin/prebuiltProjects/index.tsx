import { IPrebuiltProject } from '@/types/prebuiltProjects';
import PrebuiltProjectsTable from './PrebuiltProjectTable';
import TablePagination from '@/components/ui/core/TablePagination';
import { IMeta } from '@/types/meta';

function PrebuiltProjects({
  projects,
  meta,
}: {
  projects: IPrebuiltProject[];
  meta: IMeta;
}) {
  return (
    <div>
      <PrebuiltProjectsTable projects={projects} />
      <div className="mt-12 flex justify-center">
        <TablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
}
export default PrebuiltProjects;
