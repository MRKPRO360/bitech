import Image from 'next/image';
import ChangePasswordForm from './ChangePasswordForm';
import changeImage from '@/assets/change-password.png';
function ChangePassword() {
  return (
    <div className="flex flex-col lg:flex-row">
      <ChangePasswordForm />
      <div className="lg:w-1/2 w-full h-full hidden xl:flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={changeImage}
            alt="Change password image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
