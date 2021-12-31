import { BaseModel } from ".";

export interface User extends BaseModel {
    username: string;
    password: string;
} 