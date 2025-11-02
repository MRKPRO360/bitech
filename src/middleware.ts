import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/authService';

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/signin', '/signup'];

const roleBasedPrivateRoutes = {
  cutomer: [/^\/customer/, '/profile', '/update-profile', '/change-password'],
  admin: [
    /^\/admin/,
    '/profile',
    '/update-profile',
    'change-password',
    '/create-preprojects',
    '/update-preprojects',
    '/preprojects',
    '/create-projects',
    '/update-projects',
    '/projects',
  ],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_FRONTENTD_DOMAIN}/signin?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  // Allow access to dashboard for any logged-in user
  if (pathname === '/dashboard') {
    return NextResponse.next();
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: [
    '/customer/:path*',
    '/admin/:path*',
    '/signin',
    '/signup',
    '/dashboard',
    '/profile',
    '/update-profile',
    '/change-password',
  ],
};
