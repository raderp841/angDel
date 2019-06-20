import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const appRoutes: Routes = [

  { path: '', component: StoreListComponent },
  { path: 'stores', component: StoreListComponent },

  { path: 'orders', component: OrderListComponent },
  {
    path: ':id/orders', component: OrderListComponent, children: [
      {path: ':id', component: OrderEditComponent}
    ]
  },


  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
