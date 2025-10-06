export interface IPrebuiltProject {
  _id: string;
  title: string;
  slug: string;
  category: string;
  budget: string;
  status: 'completed' | 'in-progress' | 'pending';
  featured: boolean;
  features: string[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  results: IPrebuiltProjectResults;
  rating?: string;
  images: IPrebuiltProjectImages;
  liveLink: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPrebuiltProjectResults {
  rating: string;
  pageLoadTime: string;
}

export interface IPrebuiltProjectImages {
  thumbnail: string | File[];
  gallery: string[] | File[];
}

export interface IPrebuiltProjectForm
  extends Omit<IPrebuiltProject, 'features' | 'technologies'> {
  features: { value: string }[];
  technologies: { value: string; label: string }[];
}
