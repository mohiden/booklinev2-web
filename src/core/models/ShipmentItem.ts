import { BaseModel, IShipment } from ".";

export interface IShipmentItem extends BaseModel {
    name: string;
    type: "BOOK" | "OTHER";
    shipment: IShipment;
    amount: number;
    price: number;
    left: number;
    totalPrice: number;
} 