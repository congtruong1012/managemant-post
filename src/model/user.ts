export interface User {
  id: number;
  fullName: string;
  birthdate: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  gender: 'M' | 'F' | 'N';
}
