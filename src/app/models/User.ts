export interface User {
  username: string;
  password: string;
  address: string;
  email: string;
  contactNo: string;
  role: string;       //  'admin', 'normal_user'
  userType: string;   //  'buyer', 'seller'
  pinCode: number;
  city: string;
}
