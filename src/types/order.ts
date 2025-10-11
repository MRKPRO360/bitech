import { IPrebuiltProject } from './prebuiltProjects';

export type IStatus = 'Pending' | 'Completed' | 'Cancelled';

export interface IOrder {
  user: string;
  services: string[];
  projects: IPrebuiltProject[];
  amount: number;
  paymentMethod?: 'Cash' | 'Card' | 'Online';
  orderStatus?: IStatus;
  paymentIntentId?: string;
  createdAt?: string;
  updatedAt?: string;
  payment?: string;
}
