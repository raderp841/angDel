import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreComponent } from './store/store.component';
import { StoreService } from './store.service';
import { GeneralService } from './general.service';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderComponent,
    OrderEditComponent,
    UsersComponent,
    HeaderComponent,
    StoreListComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StoreService, GeneralService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
