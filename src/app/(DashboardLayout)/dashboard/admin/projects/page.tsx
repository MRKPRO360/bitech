import Projects from '@/components/modules/dashboard/admin/projects';
import { getAllProjects } from '@/services/projectService';
import { TSearchParams } from '@/types';

async function ProjectPage({ searchParams }: { searchParams: TSearchParams }) {
  const query = await searchParams;

  const projects = await getAllProjects(query?.page as string, '10', query);

  const { result, meta } = projects.data;

  return <Projects meta={meta} projects={result} />;
}
export default ProjectPage;
