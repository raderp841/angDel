import { Store } from './shared/store.model';

export class StoreService {



  stores: Store[] = [
    new Store('Sheffield Lake', '4100 Ivanhoe Ave', 4409496108, 1),
    new Store('Village Market', '1234 St Rt 58', 4401234567, 2),
    new Store('Elyria', '1234  N. Abbe Rd', 4401234567, 3),
    new Store('Lorain', '1234 Meister Rd', 4401234567, 4),
  ];

  getStores() {
    return this.stores.slice();
  }
}
