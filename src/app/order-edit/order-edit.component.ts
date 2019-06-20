import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  currentOrder: Order;
  

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //console.log(this.orderService.currentOrder);
    //this.currentOrder = this.orderService.currentOrder;
    //this.orderService.currentOrderChange
    //  .subscribe((order: Order) => { this.currentOrder = order; })

    this.route.params
      .subscribe((params: Params) => {
        this.currentOrder = this.orderService.getOrderById(+params['id']);
      })
  }

  onEditOrder(orderNameEl: HTMLInputElement, pickupNameEl: HTMLInputElement, phonenumberEl: HTMLInputElement, orderTypeEl: HTMLInputElement) {
    console.log('order edit in progress');
    this.orderService.editOrderSave(orderNameEl.value, pickupNameEl.value, +phonenumberEl.value, orderTypeEl.value);
  }

}
