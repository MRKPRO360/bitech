import ProjectDetails from '@/components/modules/projects/ProjectDetails';
import { getSingleProject } from '@/services/projectService';

async function SingleProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const singleProject = await getSingleProject(projectId);

  return <ProjectDetails project={singleProject.data} />;
}
export default SingleProjectPage;
