import UpdateProfileForm from '@/components/modules/dashboard/profile/updateProfile/UpdateProfileForm';
import { getMe } from '@/services/authService';

async function UpdateProfile() {
  const { data } = await getMe();

  return <UpdateProfileForm profile={data} />;
}
export default UpdateProfile;
