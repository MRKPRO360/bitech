import { IPrebuiltProject } from '@/types/prebuiltProjects';
import UpdatePreProjectForm from './UpdatePreProject';

function UpdatePreProject({ project }: { project: IPrebuiltProject }) {
  return <UpdatePreProjectForm project={project} />;
}
export default UpdatePreProject;
