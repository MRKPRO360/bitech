import { IAddress, IUser } from './user';

export interface IEmployee {
  id: string;
  _id: string;
  fullName: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  role: 'employee';
  iat?: number;
  exp?: number;
  profileImg?: string;
  phoneNumber?: string;
  address?: IAddress;
  user?: IUser;
  gender: string;
  skills: string[];
  joiningDate: string;
  status: 'Active' | 'Inactive' | 'On Leave' | 'Resigned' | 'Alumni';
  salary: string;
  department: string;
  designation: string;
  dateOfBirth: string;
  exitReason?: string;
  exitDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeForm
  extends Omit<IEmployee, 'profileImg' | 'skills'> {
  profileImg?: File[];
  skills: { value: string; label: string }[];
}
