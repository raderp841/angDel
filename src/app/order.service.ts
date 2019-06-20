import { Order } from './shared/order.model';
import { EventEmitter } from '@angular/core';

export class OrderService {

  currentStoreChange = new EventEmitter<Order[]>();
  currentOrderChange = new EventEmitter<Order>();
  isEdittingOrderChange = new EventEmitter<boolean>();

  orders: Order[] = [
    new Order('Bob', 'Jim', 123456789, '12pm', 'Chicken', '6 pc dark meat', 1, 1),
    new Order('Fran', 'Fran', 123456789, '1pm', 'Chicken', '6 pc dark meat', 1, 2),
    new Order('Tony', 'Ila', 123456789, '4pm', 'Chicken', '6 pc dark meat', 2, 3),
    new Order('Irene', 'Frankie', 123456789, '3pm', 'Chicken', '6 pc dark meat', 2, 4),
    new Order('Otis', 'Otis', 123456789, '2pm', 'Chicken', '6 pc dark meat', 2, 5),
    new Order('Mira', 'Mira', 123456789, '9pm', 'Chicken', '6 pc dark meat', 3, 6),
    new Order('Toby', 'Nacy', 123456789, '8pm', 'Chicken', '6 pc dark meat', 3, 7),
    new Order('Paul', 'Chuck', 123456789, '1pm', 'Chicken', '6 pc dark meat', 3, 8),
    new Order('Robert', 'Robert', 123456789, '12pm', 'Chicken', '6 pc dark meat', 3, 9),
    new Order('Eddie', 'Tina', 123456789, '11am', 'Chicken', '6 pc dark meat', 4, 10),
    new Order('Karen', 'Karen', 123456789, '4pm', 'Chicken', '6 pc dark meat', 4, 11),
    new Order('Fillipiana', 'William', 123456789, '6pm', 'Chicken', '6 pc dark meat', 4, 12),
    new Order('Dan', 'Dan', 123456789, '5pm', 'Chicken', '6 pc dark meat', 4, 13),
    new Order('Kaleb', 'Maureen', 123456789, '5pm', 'Chicken', '6 pc dark meat', 4, 14),
    new Order('Jim', 'Bob', 123456789, '6pm', 'Chicken', '6 pc dark meat', 4, 15),
  ];

  currentStoreId: number;
  currentOrderId: number;
  isEdittingOrder: boolean = false;
  currentOrder: Order;

  getAllOrders() {

  }

  getOrdersByStoreId(storeId: number) {
    var tempArr = [];
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].storeId == storeId) {
        tempArr.push(this.orders[i]);
      }
    }
    return tempArr;
  }

  setStoreId(storeId: number) {
    this.currentStoreId = storeId;
    var tempArr = [];
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].storeId == storeId) {
        tempArr.push(this.orders[i]);
      }
    }
    this.currentStoreChange.emit(tempArr);
  }

  getOrderById(orderId: number) {
    this.currentOrderId = orderId;
    this.currentOrder = this.orders.find(order => order.orderId === orderId);
    this.currentOrderChange.emit(this.currentOrder);
    return this.currentOrder;
  }

  editOrder(order: Order) {
    this.isEdittingOrder = true;
    this.currentOrder = order;
    this.isEdittingOrderChange.emit(this.isEdittingOrder);
    this.currentOrderChange.emit(this.currentOrder);
  }

  stopEdit() {
    this.isEdittingOrder = false;
    this.isEdittingOrderChange.emit(this.isEdittingOrder);
  }

  editOrderSave(orderName: string, pickupName: string, phoneNumber: number, orderType: string) {
    this.currentOrder.orderName = orderName;
    this.currentOrder.pickupName = pickupName;
    this.currentOrder.phoneNumber = phoneNumber;
    this.currentOrder.orderType = orderType;
    this.currentOrderChange.emit(this.currentOrder);

    var index = this.orders.findIndex(k => k.orderId == this.currentOrder.orderId);
    this.orders[index] = this.currentOrder;
    this.currentStoreChange.emit(this.orders.filter(order => order.storeId == this.currentStoreId));
    this.stopEdit();
  }
}
