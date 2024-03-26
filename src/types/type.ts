export interface UserType {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  point: number;
}
export interface CartType {
  id?: string;
  userId: string;
  productName: string;
  productCondition: string;
  numberOfProduct: number;
  price: number;
}
export interface couponType {
  id: string;
  userId: string;
  type: string;
  content: number;
  date: string;
}