// export const DESIGNATIONS = [
//   'Intern',
//   'Junior Developer',
//   'Mid Developer',
//   'Senior Developer',
//   'Team Lead',
//   'Project Manager',
//   'Designer',
//   'HR Manager',
//   'QA Engineer',
//   'Marketing Executive',
// ];

// export const STATUS_OPTIONS = [
//   { value: '', label: 'All Status' },
//   { value: 'Active', label: 'Active' },
//   { value: 'Inactive', label: 'Inactive' },
//   { value: 'On Leave', label: 'On Leave' },
//   { value: 'Resigned', label: 'Resigned' },
//   { value: 'Alumni', label: 'Alumni' },
// ];

// export const DESIGNATION_OPTIONS = [
//   { value: '', label: 'All Roles' },
//   { value: 'Intern', label: 'Intern' },
//   { value: 'Junior Developer', label: 'Junior Developer' },
//   { value: 'Mid Developer', label: 'Mid Developer' },
//   { value: 'Senior Developer', label: 'Senior Developer' },
//   { value: 'Team Lead', label: 'Team Lead' },
//   { value: 'Project Manager', label: 'Project Manager' },
//   { value: 'Designer', label: 'Designer' },
//   { value: 'HR Manager', label: 'HR Manager' },
//   { value: 'QA Engineer', label: 'QA Engineer' },
//   { value: 'Marketing Executive', label: 'Marketing Executive' },
// ];

// export const DEPARTMENT_OPTIONS = [
//   { value: '', label: 'All Departments' },
//   { value: 'Development', label: 'Development' },
//   { value: 'Design', label: 'Design' },
//   { value: 'Marketing', label: 'Marketing' },
//   { value: 'Support', label: 'Support' },
//   { value: 'Management', label: 'Management' },
//   { value: 'HR', label: 'HR' },
//   { value: 'Finance', label: 'Finance' },
//   { value: 'Sales', label: 'Sales' },
// ];

// export const GENDER_OPTIONS = [
//   { value: 'Male', label: 'Male' },
//   { value: 'Female', label: 'Female' },
//   { value: 'Other', label: 'Other' },
// ];

// export const SKILLS_OPTIONS = [
//   // --- Development ---
//   { value: 'react', label: 'React' },
//   { value: 'nextjs', label: 'Next.js' },
//   { value: 'typescript', label: 'TypeScript' },
//   { value: 'javascript', label: 'JavaScript' },
//   { value: 'tailwind', label: 'Tailwind CSS' },
//   { value: 'nodejs', label: 'Node.js' },
//   { value: 'express', label: 'Express' },
//   { value: 'mongodb', label: 'MongoDB' },
//   { value: 'graphql', label: 'GraphQL' },
//   { value: 'docker', label: 'Docker' },
//   { value: 'aws', label: 'AWS' },
//   { value: 'firebase', label: 'Firebase' },
//   { value: 'python', label: 'Python' },
//   { value: 'django', label: 'Django' },
//   { value: 'flutter', label: 'Flutter' },
//   { value: 'react-native', label: 'React Native' },
//   { value: 'postgresql', label: 'PostgreSQL' },
//   { value: 'mysql', label: 'MySQL' },
//   { value: 'java', label: 'Java' },
//   { value: 'csharp', label: 'C#' },
//   { value: 'php', label: 'PHP' },
//   { value: 'git', label: 'Git' },
//   { value: 'linux', label: 'Linux' },
//   { value: 'rest-api', label: 'REST API' },

//   // --- Design ---
//   { value: 'figma', label: 'Figma' },
//   { value: 'adobe-xd', label: 'Adobe XD' },
//   { value: 'photoshop', label: 'Adobe Photoshop' },
//   { value: 'illustrator', label: 'Adobe Illustrator' },
//   { value: 'after-effects', label: 'After Effects' },
//   { value: 'ui-ux', label: 'UI/UX Design' },
//   { value: 'prototyping', label: 'Prototyping' },
//   { value: 'branding', label: 'Branding' },

//   // --- Marketing ---
//   { value: 'seo', label: 'SEO' },
//   { value: 'content-marketing', label: 'Content Marketing' },
//   { value: 'social-media', label: 'Social Media Marketing' },
//   { value: 'google-ads', label: 'Google Ads' },
//   { value: 'email-marketing', label: 'Email Marketing' },
//   { value: 'analytics', label: 'Data Analytics' },
//   { value: 'copywriting', label: 'Copywriting' },

//   // --- HR & Management ---
//   { value: 'recruitment', label: 'Recruitment' },
//   { value: 'employee-relations', label: 'Employee Relations' },
//   { value: 'leadership', label: 'Leadership' },
//   { value: 'team-management', label: 'Team Management' },
//   { value: 'communication', label: 'Communication' },
//   { value: 'strategic-planning', label: 'Strategic Planning' },
//   { value: 'negotiation', label: 'Negotiation' },

//   // --- Finance ---
//   { value: 'accounting', label: 'Accounting' },
//   { value: 'budgeting', label: 'Budgeting' },
//   { value: 'forecasting', label: 'Forecasting' },
//   { value: 'financial-analysis', label: 'Financial Analysis' },
//   { value: 'payroll', label: 'Payroll Management' },
//   { value: 'taxation', label: 'Taxation' },

//   // --- Sales & Support ---
//   { value: 'customer-service', label: 'Customer Service' },
//   { value: 'crm', label: 'CRM Tools' },
//   { value: 'sales-strategy', label: 'Sales Strategy' },
//   { value: 'lead-generation', label: 'Lead Generation' },
//   { value: 'problem-solving', label: 'Problem Solving' },
//   { value: 'technical-support', label: 'Technical Support' },
// ];

export const DESIGNATIONS = [
  // Advisory Board
  'Advisory Board Member',

  // Leadership Team
  'Chairman',
  'Managing Director',
  'Chief Executive Officer',
  'Chief Technical Officer',
  'General Manager',

  // Operations Team
  'Chief Operation Officer',
  'Senior Operation Officer',
  'Operation Manager',
  'Operation Engineer',
  'Customer Relationship Officer',

  // Office Admin
  'HR & Admin',
  'Accounts & Finance',
  'Office Executive',

  // Sales & Marketing Team
  'Head Of Sales',
  'Chief Marketing Officer',
  'Senior Marketing Executive',
  'Sales & Marketing Executive',

  // Developer Team
  'Software Engineer',
  'Senior Software Developer',
  'Junior Software Developer',
  'Flutter Developer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',

  // Designer & Editor
  'Graphic Designer',
  'UI/UX Designer',
  'SEO & Digital Marketing Officer',
  'Video Editor',
] as const;

export const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'On Leave', label: 'On Leave' },
  { value: 'Resigned', label: 'Resigned' },
  { value: 'Alumni', label: 'Alumni' },
];

export const DESIGNATION_OPTIONS = [
  { value: '', label: 'All Roles' },
  // Advisory Board
  { value: 'Advisory Board Member', label: 'Advisory Board Member' },

  // Leadership Team
  { value: 'Chairman', label: 'Chairman' },
  { value: 'Managing Director', label: 'Managing Director' },
  { value: 'Chief Executive Officer', label: 'Chief Executive Officer' },
  { value: 'Chief Technical Officer', label: 'Chief Technical Officer' },
  { value: 'General Manager', label: 'General Manager' },

  // Operations Team
  { value: 'Chief Operation Officer', label: 'Chief Operation Officer' },
  { value: 'Senior Operation Officer', label: 'Senior Operation Officer' },
  { value: 'Operation Manager', label: 'Operation Manager' },
  { value: 'Operation Engineer', label: 'Operation Engineer' },
  {
    value: 'Customer Relationship Officer',
    label: 'Customer Relationship Officer',
  },

  // Office Admin
  { value: 'HR & Admin', label: 'HR & Admin' },
  { value: 'Accounts & Finance', label: 'Accounts & Finance' },
  { value: 'Office Executive', label: 'Office Executive' },

  // Sales & Marketing Team
  { value: 'Head Of Sales', label: 'Head Of Sales' },
  { value: 'Chief Marketing Officer', label: 'Chief Marketing Officer' },
  { value: 'Senior Marketing Executive', label: 'Senior Marketing Executive' },
  {
    value: 'Sales & Marketing Executive',
    label: 'Sales & Marketing Executive',
  },

  // Developer Team
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Senior Software Developer', label: 'Senior Software Developer' },
  { value: 'Junior Software Developer', label: 'Junior Software Developer' },
  { value: 'Flutter Developer', label: 'Flutter Developer' },
  { value: 'Full Stack Developer', label: 'Full Stack Developer' },
  { value: 'Frontend Developer', label: 'Frontend Developer' },
  { value: 'Backend Developer', label: 'Backend Developer' },
  { value: 'QA Engineer', label: 'QA Engineer' },

  // Designer & Editor
  { value: 'Graphic Designer', label: 'Graphic Designer' },
  { value: 'UI/UX Designer', label: 'UI/UX Designer' },
  {
    value: 'SEO & Digital Marketing Officer',
    label: 'SEO & Digital Marketing Officer',
  },
  { value: 'Video Editor', label: 'Video Editor' },
  { value: 'Other', label: 'Other' },
];

export const DEPARTMENT_OPTIONS = [
  { value: '', label: 'All Departments' },
  { value: 'Advisory Board', label: 'Advisory Board' },
  { value: 'Leadership Team', label: 'Leadership Team' },
  { value: 'Operations', label: 'Operations' },
  { value: 'Office Admin', label: 'Office Admin' },
  { value: 'Sales & Marketing', label: 'Sales & Marketing' },
  { value: 'Development', label: 'Development' },
  { value: 'Design & Editing', label: 'Design & Editing' },
];

export const GENDER_OPTIONS = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];
