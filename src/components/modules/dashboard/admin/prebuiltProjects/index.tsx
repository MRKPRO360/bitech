import { IPrebuiltProject } from '@/types/prebuiltProjects';
import PrebuiltProjectsTable from './PrebuiltProjectTable';

function PrebuiltProjects({ projects }: { projects: IPrebuiltProject[] }) {
  return (
    <div>
      <PrebuiltProjectsTable projects={projects} />
    </div>
  );
}
export default PrebuiltProjects;
