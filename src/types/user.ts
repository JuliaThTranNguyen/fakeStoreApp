export type JwtType = {
    access_token: string;
    refresh_token: string;
  };
  
  export interface LoginType {
    email: string;
    password: string;
  }
  
  export type UserType = {
    id: number;
    email: string;
    name: string;
    role: 'customer' | 'admin';
    avatar: string;
  };
  
  export interface SignUpType {
    email: string;
    password: string;
    name: string;
    avatar: string;
    role: 'customer';
  }