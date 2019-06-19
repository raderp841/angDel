export class Order {
  constructor(public orderName: string,
    public pickupName: string,
    public phoneNumber: number,
    public pickupTime: string,
    public orderType: string,
    public details: string,
    public storeId: number,
    public orderId: number
  ) { };
}
