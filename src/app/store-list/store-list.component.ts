import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  stores = [];
  showStores: boolean;

  constructor(private storeService: StoreService, private generalService: GeneralService) { }

  ngOnInit() {
    this.stores = this.storeService.getStores();
    this.showStores = this.generalService.checkShowStores();
    this.generalService.showStoresChange.subscribe(
      (show: boolean) => {
        this.showStores = show;
      }
    );
  }

}
