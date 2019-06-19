import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  isEditingOrder: boolean = false;
  currentOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrdersByStoreId(this.orderService.currentStoreId);

    this.orderService.currentStoreChange
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      );

    this.isEditingOrder = this.orderService.isEdittingOrder;

    this.orderService.isEdittingOrderChange
      .subscribe(
        (isEdit: boolean) => {
          this.isEditingOrder = isEdit;
        }
      );

    this.currentOrder = this.orderService.currentOrder;

    this.orderService.currentOrderChange
      .subscribe(
        (order: Order) => {
          this.currentOrder = order;
        }
      );


  }
  

}
