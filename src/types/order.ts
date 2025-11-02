import { IPrebuiltProject } from './prebuiltProjects';

export type IStatus = 'Pending' | 'Completed' | 'Cancelled';

export interface IOrder {
  _id: string;
  user: string;
  services: string[];
  projects: {
    _id: string;
    project: IPrebuiltProject;
  }[];
  amount: number;
  paymentMethod?: 'Cash' | 'Card' | 'Online';
  orderStatus?: IStatus;
  paymentIntentId?: string;
  createdAt?: string;
  updatedAt?: string;
  payment?: string;
}
