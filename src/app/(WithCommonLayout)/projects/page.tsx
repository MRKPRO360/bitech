import Projects from '@/components/modules/projects';
import { getAllProjects } from '@/services/projectService';
import { TSearchParams } from '@/types';

async function ProjectsPage({ searchParams }: { searchParams: TSearchParams }) {
  const query = await searchParams;
  // LATER WE WOULD CREATE A PAGE FOR DISPLAYING ALL THE PROJECTS
  const projects = await getAllProjects(query?.page as string, '30', query);

  const { result } = projects.data;

  return <Projects projects={result} />;
}
export default ProjectsPage;
