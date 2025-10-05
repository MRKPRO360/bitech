import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import { cookies } from 'next/headers';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Only run for social logins
      if (account?.provider !== 'credentials') {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/users/social-login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: user.email,
                name: {
                  firstName: user?.name?.split(' ')[0] || 'Social',
                  lastName: user?.name?.split(' ')[1] || 'User',
                },

                method: account?.provider,
                profileImg: user.image,
              }),
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Social login failed:', errorData);
            return false;
          }

          // Optionally store the returned user data
          const result = await response.json();
          console.log(result);

          if (result.success) {
            (await cookies()).set('accessToken', result.data.accessToken);
            (await cookies()).set('refreshToken', result?.data?.refreshToken);
          }

          // Make sure this matches your backend response
          return true;
        } catch (error) {
          console.error('Failed to create social login user', error);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
