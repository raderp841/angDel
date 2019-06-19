import { Component, OnInit } from '@angular/core';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AnglarDeliProject';
  showStores: boolean;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.showStores = this.generalService.checkShowStores();
    this.generalService.showStoresChange
      .subscribe(
      (show: boolean) => {
        this.showStores = show;
      });
  }

}
