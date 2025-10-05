import PrebuiltProjects from '@/components/modules/dashboard/admin/prebuiltProjects';
import { getAllPrebuiltProjects } from '@/services/prebuiltProjectService';

async function PrebuiltProjectPage() {
  const res = await getAllPrebuiltProjects();
  return <PrebuiltProjects projects={res.data.result} />;
}
export default PrebuiltProjectPage;
