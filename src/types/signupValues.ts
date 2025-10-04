export interface ISignupValues {
  name: {
    firstName: string;
    lastName: string;
  };
  userImg: File[];
  email: string;
  password: string;
  phoneNumber: string;
  terms: boolean;
  address: {
    city: string;
    country: string;
    zipCode: string;
  };
}
