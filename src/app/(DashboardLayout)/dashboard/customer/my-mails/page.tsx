import MyMails from '@/components/modules/dashboard/customer/myMails';
import PageBanner from '@/components/shared/pageBanner';
import { getMyMessage } from '@/services/mailService';

async function MyMailsPage() {
  const { data } = await getMyMessage();

  return (
    <div>
      <PageBanner title="My Mails" />
      <MyMails mails={data} />
    </div>
  );
}
export default MyMailsPage;
