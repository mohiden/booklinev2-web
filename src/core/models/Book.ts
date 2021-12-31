import { BaseModel } from ".";

export interface Book extends BaseModel {
    name: string;
    author: string;
    language: string;
}