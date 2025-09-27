export interface IPlan {
  id: number;
  price: string;
  title: string;
  period: string;
  features: {
    name: string;
    included: boolean;
  }[];
}
