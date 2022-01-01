import { BaseModel, IUser } from ".";

export interface IShipment extends BaseModel {
    month: string;
    year: string;
    createdBy: Omit<IUser, "password">;
}