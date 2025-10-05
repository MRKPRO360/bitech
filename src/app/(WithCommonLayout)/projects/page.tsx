import Projects from '@/components/modules/projects';
import { getAllProjects } from '@/services/projectService';

async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <Projects projects={projects.data.result} />
    </div>
  );
}
export default ProjectsPage;
