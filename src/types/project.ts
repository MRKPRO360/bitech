export interface IImages {
  thumbnail: string;
  gallery: string[];
}
export interface IResults {
  conversionRate: string;
  pageLoadTime: string;
  mobileTraffic: string;
  customerSatisfaction: string;
}

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  duration: string;
  completionDate: string;
  budget: string;
  status: string;
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: IResults;
  images: IImages;
  liveLink: string;
  createdAt: string;
  updatedAt: string;
}
