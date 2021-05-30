export type PaymentMethod = "visa" | "cash";

export interface IJustification {
  method: PaymentMethod;
}

export interface IOrder {
  orderId: string;
  totalAmount: number;
  byAccess: AccessType;
  closeLocal: CloseLocalType;
  isPayed: boolean;
  justifications?: IJustification;
}

export type AccessType = "LINK" | "NORMAL";

export type CloseLocalType = "APP" | "CASHIER";

export const handles = {
  byLinkAccess: (order: IOrder): boolean => {
    return order.byAccess === "LINK";
  },
  byNotPayedInCashier: (order: IOrder): boolean => {
    const sentToTheCashier = order.closeLocal === "CASHIER";
    return sentToTheCashier && !order.isPayed;
  },
  byJustifiedInCashier: (order: IOrder): boolean => {
    const sentToTheCashier = order.closeLocal === "CASHIER";
    const wasJustified = !order.justifications;

    return sentToTheCashier && wasJustified;
  },
};

export const handleOrders = (orders: IOrder[]): IOrder[] => {
  return orders.filter((order) =>
    Object.values(handles).some((handle) => handle(order))
  );
};
