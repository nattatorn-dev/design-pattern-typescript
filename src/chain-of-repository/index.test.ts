import { handleOrders, IOrder } from '.';

describe('chain of repository', () => {
  it('should handle order correctly', () => {
    const orders: IOrder[] = [
      {
        orderId: '1',
        totalAmount: 100,
        byAccess: 'LINK',
        closeLocal: 'CASHIER',
        isPayed: false,
        justifications: undefined,
      },
      {
        orderId: '2',
        totalAmount: 100,
        byAccess: 'NORMAL',
        closeLocal: 'APP',
        isPayed: false,
        justifications: { method: 'visa' },
      },
      {
        orderId: '3',
        totalAmount: 100,
        byAccess: 'NORMAL',
        closeLocal: 'CASHIER',
        isPayed: false,
        justifications: undefined,
      },
    ];

    const result = handleOrders(orders);
    expect(result).toEqual([
      {
        byAccess: 'LINK',
        closeLocal: 'CASHIER',
        isPayed: false,
        justifications: undefined,
        orderId: '1',
        totalAmount: 100,
      },
      {
        byAccess: 'NORMAL',
        closeLocal: 'CASHIER',
        isPayed: false,
        justifications: undefined,
        orderId: '3',
        totalAmount: 100,
      },
    ]);
  });

  it('should does not error when do not have any orders', () => {
    const orders: IOrder[] = [];
    expect(orders).toEqual([]);
  });
});
