import { EventEmitter } from '@angular/core';

export class GeneralService {
  showStoresChange = new EventEmitter<boolean>();

  showStores = true;

  showStoresOn() {
    this.showStores = true;
    this.showStoresChange.emit(this.showStores);
    console.log(this.showStores);
  }

  showStoresOff() {
    this.showStores = false;
    this.showStoresChange.emit(this.showStores);
    console.log(this.showStores);
  }

  checkShowStores() {
    return this.showStores;
    
  }
}
