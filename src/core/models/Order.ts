import { BaseModel, IShipmentItem, IUser } from ".";

export interface IOrder extends BaseModel {
    name: string;
    shipmentItem: IShipmentItem;
    type: "BOOK" | "OTHER";
    createdBy: Omit<IUser, "password">;
    items: Array<IItem>;
    address: string;
    phone: string;
    totalPrice?: number;
}

export interface IItem {
    shipmentItem: IShipmentItem;
    discount: number;
    amount: number;
    isDelivered?: boolean;
}