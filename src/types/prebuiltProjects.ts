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
  thumbnail: string;
  gallery: string[];
}
