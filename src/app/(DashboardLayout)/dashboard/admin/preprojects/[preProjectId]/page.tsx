async function SingleProjectPage({
  params,
}: {
  params: Promise<{ preProjectId: string }>;
}) {
  const { preProjectId } = await params;
  return <div>{preProjectId}</div>;
}
export default SingleProjectPage;
