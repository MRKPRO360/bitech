import {
  Settings,
  ShoppingCart,
  ClipboardList,
  Users,
  FolderKanban,
  Boxes,
  LayoutDashboard,
  UserCog,
  KeySquare,
  PlusSquare,
  List,
  ClipboardCheck,
} from 'lucide-react';

export type IMenuItem = {
  title: string;
  href?: string;
  icon?: React.ElementType;
  children?: IMenuItem[];
};

// =======================
// 🧑‍💻 ADMIN MENU
// =======================
export const adminMenu: IMenuItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Manage Users',
    icon: Users,
    children: [
      { title: 'All Users', href: '/dashboard/admin/manage-users', icon: List },
    ],
  },
  {
    title: 'Manage Orders',
    icon: ClipboardCheck,
    href: '/dashboard/admin/manage-orders',
    children: [
      {
        title: 'All Orders',
        href: '/dashboard/admin/manage-orders',
        icon: List,
      },
    ],
  },
  {
    title: 'Projects',
    icon: FolderKanban,
    children: [
      { title: 'Our Projects', href: '/dashboard/admin/projects', icon: List },
      {
        title: 'Create Projects',
        href: '/dashboard/admin/createProject',
        icon: PlusSquare,
      },
    ],
  },
  {
    title: 'Prebuilt Projects',
    icon: Boxes,
    children: [
      {
        title: 'Our Projects',
        href: '/dashboard/admin/preprojects',
        icon: List,
      },
      {
        title: 'Create Project',
        href: '/dashboard/admin/createPreProject',
        icon: PlusSquare,
      },
    ],
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      { title: 'View Profile', href: '/profile', icon: UserCog },
      { title: 'Update Profile', href: '/update-profile', icon: Settings },
      { title: 'Change Password', href: '/change-password', icon: KeySquare },
    ],
  },
];

// =======================
// 🛒 CUSTOMER MENU
// =======================
export const customerMenu: IMenuItem[] = [
  {
    title: 'My Orders',
    icon: ClipboardList,
    children: [
      { title: 'My Orders', href: '/customer/my-orders', icon: ClipboardList },
    ],
  },
  {
    title: 'My Cart',
    icon: ShoppingCart,
    children: [{ title: 'Cart', href: '/cart', icon: ShoppingCart }],
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      { title: 'View Profile', href: '/profile', icon: UserCog },
      { title: 'Update Profile', href: '/update-profile', icon: Settings },
      { title: 'Change Password', href: '/change-password', icon: KeySquare },
    ],
  },
];

// =======================
// ⚙️ ROLE-BASED EXPORT
// =======================
export const getMenuByRole = (role: string): IMenuItem[] => {
  switch (role) {
    case 'admin':
      return adminMenu;
    case 'customer':
      return customerMenu;
    default:
      return [];
  }
};
