// export const dynamic = 'force-dynamic';

import PrebuiltProjects from '@/components/modules/dashboard/admin/prebuiltProjects';
import { getAllPrebuiltProjects } from '@/services/prebuiltProjectService';
import { TSearchParams } from '@/types';

async function PrebuiltProjectPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const query = await searchParams;

  const projects = await getAllPrebuiltProjects(
    query?.page as string,
    '10',
    query
  );

  const { result, meta } = projects.data;
  return <PrebuiltProjects meta={meta} projects={result} />;
}
export default PrebuiltProjectPage;
