export interface IMail {
  _id: string;
  createdAt: string;
  updatedAt: string;
  user?: string;
  phoneNumber: string;
  isDeleted: boolean;
  name: {
    firstName: string;
    lastName: string;
  };
  description: string;
  email: string;
  message: string;
  subject: string;
}
