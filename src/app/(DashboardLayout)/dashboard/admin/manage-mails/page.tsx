import ManageMails from '@/components/modules/dashboard/admin/manageMails';
import PageBanner from '@/components/shared/pageBanner';
import { getAllMessages } from '@/services/mailService';

async function ManageMailsPage() {
  const { data } = await getAllMessages();

  return (
    <div>
      <PageBanner title="Manage Mails" />
      <ManageMails mails={data} />
    </div>
  );
}
export default ManageMailsPage;
