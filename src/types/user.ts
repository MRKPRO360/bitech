import { IOrder } from './order';

export interface IAddress {
  country: string;
  city: string;
  zipCode: string;
}

export interface IUser {
  id: string;
  _id: string;
  fullName: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  role: 'customer' | 'admin';
  iat?: number;
  exp?: number;
  profileImg?: string;
  method?: string;
  isDeleted?: boolean;
  status?: 'in-progress' | 'blocked';
  phoneNumber?: string;
  address?: IAddress;
  user?: IUser;
  rating?: string;
  orders?: IOrder[];
  createdAt: string;
  updatedAt: string;
}
