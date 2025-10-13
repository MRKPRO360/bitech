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
  status?: 'in-progress' | 'blocked';
  phoneNumber?: string;
  address?: IAddress;
  user?: IUser;
  rating?: string;
  createdAt: string;
  updatedAt: string;
}
