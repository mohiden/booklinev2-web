import { BaseModel, IShipmentItem, IUser } from ".";

export interface IOrder extends BaseModel {
    name: string;
    shipmentItem: IShipmentItem;
    type: "BOOK" | "OTHER";
    createdBy: Omit<IUser, "password">;
    address: string;
    phone: string;
    isDelivered?: boolean;
    totalPrice?: number;
    discount: number;
    amount: number;
}