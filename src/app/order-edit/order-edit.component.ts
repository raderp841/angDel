import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  currentOrder: Order;
  

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    console.log(this.orderService.currentOrder);
    this.currentOrder = this.orderService.currentOrder;
    this.orderService.currentOrderChange
      .subscribe((order: Order) => { this.currentOrder = order; })
  }

  onEditOrder(orderNameEl: HTMLInputElement, pickupNameEl: HTMLInputElement, phonenumberEl: HTMLInputElement, orderTypeEl: HTMLInputElement) {
    console.log('order edit in progress');
    this.orderService.editOrderSave(orderNameEl.value, pickupNameEl.value, +phonenumberEl.value, orderTypeEl.value);
  }

}
