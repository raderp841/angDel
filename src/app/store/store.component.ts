import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../general.service';
import { StoreService } from '../store.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() store;

  constructor(private generalService: GeneralService, private orderService: OrderService) { }

  ngOnInit() {
  }

  onStoreSelected(storeId: number) {
    this.generalService.showStoresOff();
    this.orderService.setStoreId(storeId);
  }

}
