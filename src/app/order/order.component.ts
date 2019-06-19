import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  currentOrder: Order;
  isEditting: boolean = false;
  
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.isEditting = this.orderService.isEdittingOrder;
    this.orderService.isEdittingOrderChange
      .subscribe(
        (isEdit: boolean) => {
          this.isEditting = isEdit;
      });

    this.currentOrder = this.orderService.currentOrder;
    this.orderService.currentOrderChange
      .subscribe((order: Order) => { this.currentOrder = order });
  }

  onEditOrder() {
    this.orderService.editOrder(this.order);
  }
}
