import SignUpForm from '@/components/modules/auth/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BiTech',
  description: 'BiTech - Your Gateway to Cutting-Edge Technology Solutions',
  keywords: [
    'BiTech, Technology Solutions, Innovative Tech, Software Development, IT Services, Tech Consulting, Digital Transformation, Cloud Computing, Cybersecurity, AI Solutions',
  ],
  authors: [
    { name: 'Md. Rezaul Karim', url: 'https://mdrezaulkarim.vercel.app/' },
  ],
  creator: 'Md. Rezaul Karim',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function SignUp() {
  return <SignUpForm />;
}
