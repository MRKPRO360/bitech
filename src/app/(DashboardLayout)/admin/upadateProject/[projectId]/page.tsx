async function UpdateSingleProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return <div>{projectId}</div>;
}
export default UpdateSingleProjectPage;
