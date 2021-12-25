export interface Order {
  _id?: string;
  name: string;
  phoneNumber: string;
  area: string;
  books: Array<string>;
  isDelivered: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
