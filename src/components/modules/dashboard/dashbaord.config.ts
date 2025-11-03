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
  IdCard,
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
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'All Customers',
    icon: Users,
    children: [
      {
        title: 'Manage Customers',
        href: '/dashboard/admin/manage-customers',
        icon: List,
      },
    ],
  },
  {
    title: 'Employess',
    icon: IdCard,
    children: [
      {
        title: 'All Employees',
        href: '/dashboard/employee',
        icon: IdCard,
      },
      {
        title: 'Manage Employees',
        href: '/dashboard/admin/all-employees',
        icon: List,
      },
      {
        title: 'Create An Employee',
        href: '/dashboard/admin/create-employee',
        icon: List,
      },
    ],
  },
  {
    title: 'Orders',
    icon: ClipboardCheck,
    href: '/dashboard/admin/manage-orders',
    children: [
      {
        title: 'Manage Orders',
        href: '/dashboard/admin/manage-project-orders',
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
      { title: 'View Profile', href: '/dashboard', icon: UserCog },
      {
        title: 'Update Profile',
        href: '/dashboard/update-profile',
        icon: Settings,
      },
      { title: 'Change Password', href: '/change-password', icon: KeySquare },
    ],
  },
];

// =======================
// 🛒 CUSTOMER MENU
// =======================
export const customerMenu: IMenuItem[] = [
  {
    title: 'All Employees',
    href: '/dashboard/employee',
    icon: IdCard,
  },
  {
    title: 'My Orders',
    icon: ClipboardList,
    children: [
      {
        title: 'My Orders',
        href: '/dashboard/customer/my-orders',
        icon: ClipboardList,
      },
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
      { title: 'View Profile', href: '/dashboard', icon: UserCog },
      { title: 'Update Profile', href: '/dashboard/update-profile' },
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
