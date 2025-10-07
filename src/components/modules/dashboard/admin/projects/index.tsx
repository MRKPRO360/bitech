import TablePagination from '@/components/ui/core/TablePagination';
import { IMeta } from '@/types/meta';
import { IProject } from '@/types/project';
import ProjectsTable from './ProjectTable';

function Projects({ projects, meta }: { projects: IProject[]; meta: IMeta }) {
  return (
    <div>
      <ProjectsTable projects={projects} />
      <div className="mt-12 flex justify-center">
        <TablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
}
export default Projects;
