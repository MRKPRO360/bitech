import { Settings2, SquareTerminal } from 'lucide-react';

const getNavItemsByRole = (role: string) => {
  switch (role) {
    case 'customer':
      return [
        {
          title: 'Orders',
          url: '/customer/my-orders',
          icon: SquareTerminal,
          items: [
            {
              title: 'My Orders',
              url: '/customer/my-orders',
            },
          ],
        },

        {
          title: 'My Cart',
          url: '/cart',
          icon: SquareTerminal,
          items: [
            {
              title: 'Cart',
              url: '/cart',
            },
          ],
        },
        {
          title: 'Settings',
          url: '/profile',
          icon: Settings2,
          items: [
            { title: 'View Profile', url: '/profile' },
            { title: 'Update Profile', url: '/update-profile' },
            { title: 'Change Password', url: '/change-password' },
          ],
        },
      ];

    case 'admin':
      return [
        {
          title: 'Manage Users',
          url: '/admin/manage-users',
          icon: SquareTerminal,
        },
        {
          title: 'Manage Orders',
          url: '/admin/manage-orders',
          icon: SquareTerminal,
        },
        {
          title: 'Projects',
          url: '/admin/projects',
          icon: SquareTerminal,
          items: [
            {
              title: 'Our Projects',
              url: '/admin/projects',
              icon: SquareTerminal,
            },
            {
              title: 'Create Projects',
              url: '/admin/create-projects',
              icon: SquareTerminal,
            },
          ],
        },
        {
          title: 'Prebuilt Projects',
          url: '/admin/preprojects',
          icon: SquareTerminal,
          items: [
            {
              title: 'Our Projects',
              url: '/admin/preprojects',
              icon: SquareTerminal,
            },
            {
              title: 'Create Projects',
              url: '/admin/create-preprojects',
              icon: SquareTerminal,
            },
          ],
        },

        {
          title: 'Settings',
          url: '/profile',
          icon: Settings2,
          items: [
            { title: 'View Profile', url: '/profile' },
            { title: 'Update Profile', url: '/update-profile' },
            { title: 'Change Password', url: '/change-password' },
          ],
        },
      ];

    default:
      return [];
  }
};

export default getNavItemsByRole;
