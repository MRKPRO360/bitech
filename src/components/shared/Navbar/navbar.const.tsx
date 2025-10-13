import {
  BookOpen,
  Briefcase,
  CreditCard,
  FileText,
  FolderKanban,
  Layers,
  Palette,
  Phone,
  Pill,
  Quote,
  Rocket,
  Scissors,
  ShoppingCart,
  Truck,
  UserRound,
  Laptop,
  Globe,
  Smartphone,
  Layout,
  Server,
  Headphones,
  CheckCircle,
} from 'lucide-react';

export const servicesItems = [
  {
    label: 'Software Development',
    href: '/services/software-development',
    icon: <Laptop className="w-4 h-4" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Web Application',
    href: '/services/web-application',
    icon: <Globe className="w-4 h-4" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Mobile Application',
    href: '/services/mobile-application',
    icon: <Smartphone className="w-4 h-4" />,
    tag: 'Software & Apps',
  },
  {
    label: 'Websites',
    href: '/services/websites',
    icon: <Layout className="w-4 h-4" />,
    tag: 'Software & Apps',
  },

  {
    label: 'UX Design',
    href: '/services/ux-design',
    icon: <Palette className="w-4 h-4" />,
    tag: 'Outsourcing',
  },
  {
    label: 'NOC Support',
    href: '/services/noc-support',
    icon: <Server className="w-4 h-4" />,
    tag: 'Outsourcing',
  },
  {
    label: 'IT Services',
    href: '/services/it-services',
    icon: <Headphones className="w-4 h-4" />,
    tag: 'Outsourcing',
  },
  {
    label: 'QA, QC & Testing',
    href: '/services/qa-qc-testing',
    icon: <CheckCircle className="w-4 h-4" />,
    tag: 'Outsourcing',
  },
];

export const productsItems = [
  {
    label: 'School Management System',
    href: '/products/school-management-system',
    icon: <BookOpen className="w-4 h-4" />,
    tag: 'Education',
  },
  {
    label: 'Pharmacy Software',
    href: '/products/pharmacy-software',
    icon: <Pill className="w-4 h-4" />,
    tag: 'Healthcare',
  },
  {
    label: 'POS Management',
    href: '/products/pos-management',
    icon: <CreditCard className="w-4 h-4" />,
    tag: 'Business',
  },
  {
    label: 'ERP Software',
    href: '/products/erp-software',
    icon: <Layers className="w-4 h-4" />,
    tag: 'Business',
  },
  {
    label: 'Tailor Management',
    href: '/products/tailor-management',
    icon: <Scissors className="w-4 h-4" />,
    tag: 'Business',
  },
  {
    label: 'Courier Management',
    href: '/products/courier-management',
    icon: <Truck className="w-4 h-4" />,
    tag: 'Logistics',
  },
  {
    label: 'E-Commerce Website',
    href: '/products/e-commerce-website',
    icon: <ShoppingCart className="w-4 h-4" />,
    tag: 'Websites',
  },
  {
    label: 'Publication Website',
    href: '/products/publication-website',
    icon: <FileText className="w-4 h-4" />,
    tag: 'Websites',
  },
];

export const aboutUsItems = [
  {
    label: 'About',
    href: '/about',
    icon: <BookOpen className="w-4 h-4" />,
    tag: 'Company',
  },
  {
    label: 'Career',
    href: '/about/career',
    icon: <Briefcase className="w-4 h-4" />,
    tag: 'Company',
  },
  {
    label: 'Culture',
    href: '/about/culture',
    icon: <Globe className="w-4 h-4" />,
    tag: 'Company',
  },
  {
    label: 'Team',
    href: '/about/team',
    icon: <UserRound className="w-4 h-4" />,
    tag: 'People',
  },
  {
    label: 'Testimonial',
    href: '/about/testimonial',
    icon: <Quote className="w-4 h-4" />,
    tag: 'People',
  },
  {
    label: 'Contact Us',
    href: '/about/contact-us',
    icon: <Phone className="w-4 h-4" />,
    tag: 'Support',
  },
];

export const projectsItems = [
  {
    label: 'Our Projects',
    href: '/projects',
    icon: <FolderKanban className="w-4 h-4" />,
  },
  {
    label: 'Templates',
    href: '/prebuiltProjects',
    icon: <Rocket className="w-4 h-4" />,
  },
];
