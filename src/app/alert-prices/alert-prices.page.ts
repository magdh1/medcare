import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { RestService } from '../rest.service';

import {Http, Headers, RequestOptions}  from '@angular/http';




@Component({
  selector: 'app-alert-prices',
  templateUrl: 'alert-prices.page.html',
  styleUrls: ['alert-prices.page.scss'],
})
export class AlertPricesPage {

  services: any;
  providers: any;

  constructor(public navCtrl: NavController, public restProvider: RestService) { 
    this.getServices();
    this.getHcp();
  }

  getServices() {
    this.restProvider.getServices()
    .then(data => {
    this.services = data;
    console.log(this.services);
    });
    }

    getHcp() {
      this.restProvider.getHcp()
      .then(data => {
      this.providers = data;
      console.log(this.providers);
      });
      }

  goBack() {
    this.navCtrl.back();
  }

  
}