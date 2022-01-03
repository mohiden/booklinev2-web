import { IOrder } from "@core";

export type OrderInput = Omit<
  IOrder,
  "createdBy" | "createdAt" | "updatedAt" | "_id"
>;