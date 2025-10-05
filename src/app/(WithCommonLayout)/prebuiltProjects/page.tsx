import PreProjects from '@/components/modules/preProjects';
import { getAllPrebuiltProjects } from '@/services/prebuiltProjectService';

async function ProjectsPage() {
  const projects = await getAllPrebuiltProjects();

  return (
    <div>
      <PreProjects projects={projects.data.result} />
    </div>
  );
}
export default ProjectsPage;
