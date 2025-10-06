import PreProjectDetails from '@/components/modules/preProjects/PreProjectDetails';
import { getSinglePrebuiltProject } from '@/services/prebuiltProjectService';

async function SingleProjectPage({
  params,
}: {
  params: Promise<{ prebuiltProjectId: string }>;
}) {
  const { prebuiltProjectId } = await params;

  const singleProject = await getSinglePrebuiltProject(prebuiltProjectId);
  return <PreProjectDetails project={singleProject.data} />;
}
export default SingleProjectPage;
