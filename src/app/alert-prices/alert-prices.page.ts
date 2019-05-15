import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-alert-prices',
  templateUrl: 'alert-prices.page.html',
  styleUrls: ['alert-prices.page.scss'],
})
export class AlertPricesPage {
  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}