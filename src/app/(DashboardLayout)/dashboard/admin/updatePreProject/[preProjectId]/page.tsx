import UpdatePreProject from '@/components/modules/dashboard/admin/updatePreProject';
import { getSinglePrebuiltProject } from '@/services/prebuiltProjectService';

async function UpdateSinglePrebuiltProjectPage({
  params,
}: {
  params: Promise<{ preProjectId: string }>;
}) {
  const { preProjectId } = await params;
  const res = await getSinglePrebuiltProject(preProjectId);
  return <UpdatePreProject project={res.data} />;
}
export default UpdateSinglePrebuiltProjectPage;
