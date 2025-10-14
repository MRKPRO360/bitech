import { getMe } from '@/services/authService';

async function Profile() {
  const res = await getMe();
  console.log(res);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sapiente.
        Nemo mollitia eaque exercitationem blanditiis alias asperiores, quo
        totam commodi voluptatum harum culpa aliquid. Ex dolore facilis
        voluptatibus incidunt nesciunt?
      </p>
    </div>
  );
}
export default Profile;
