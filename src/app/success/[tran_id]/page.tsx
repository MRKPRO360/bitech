import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { Check } from 'lucide-react';
// params: Promise<{ prebuiltProjectId: string }>;
const SuccessPage = async ({
  params,
}: {
  params: Promise<{ tran_id: string }>;
}) => {
  const { tran_id } = await params;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-5">
            <Check className="size-40 text-green-500" />
          </div>
          <SecondaryHeading className="mb-2">
            Payment Successful
          </SecondaryHeading>
          <h3 className="text-lg font-semibold">
            Transaction ID: <span className="text-primary">{tran_id}</span>
          </h3>
          <Para className="mb-6">
            Thank you for your purchase! Your payment has been processed
            successfully.
          </Para>

          <Cta text="Back To Home" hasLink={true} path="/" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
