import { Component, /* OnInit, */ ViewChild, ElementRef } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NavController, Platform, IonHeader, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
/* import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, 
  GoogleMapsMarkerOptions, GoogleMapsMarker, CameraPosition} from 'ionic-native'; */
  
  import { AlertController } from '@ionic/angular';
import { AlertPricesPage } from '../alert-prices/alert-prices.page';
import { RestService } from '../rest.service';
  


@Component({
  selector: 'app-adresse',
  templateUrl: 'adresse.page.html',
  styleUrls: ['adresse.page.scss']
})
export class AdressePage /* implements OnInit */ {
  launchNavigator: any;
  providers: any;
  
  /* ngOnInit() {
  } */
  constructor(private alertCtrl: AlertController,public modalController: ModalController,
    public navCtrl: NavController, public restProvider: RestService) {
      this.getHcp();
}

getHcp() {
  this.restProvider.getHcp()
  .then(data => {
  this.providers = data;
  console.log(this.providers);
  });
  }

   async alert(){
    let alert = await this.alertCtrl.create({
      header: 'Suggest a date',
      inputs: [
        {
        name: 'Date',
        placeholder: 'DD-MM-YYY',
        
        },
        {
        name: 'Time',
        placeholder: 'HH-MM'
        }
      ],
      buttons: [
        {
          text: 'OK',
          role: 'push',
          handler: data => {
            console.log();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log();
          }
        }],
      cssClass: 'alertStyle'
      });
      return await alert.present()
    }

}
 
