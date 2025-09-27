import { JSX } from 'react';

export interface IServiceItem {
  label: string;
  href: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  color: string;
}
