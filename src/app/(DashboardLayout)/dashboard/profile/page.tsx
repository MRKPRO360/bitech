import { getMe } from '@/services/authService';

async function ProfilePage() {
  const res = await getMe();
  console.log(res.data);

  return (
    <>
      {/* <Profile data={res.data} /> */}

      <h1>Hello</h1>
    </>
  );
}
export default ProfilePage;
