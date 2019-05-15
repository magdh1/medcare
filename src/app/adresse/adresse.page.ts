import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NavController, Platform, IonHeader, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
/* import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, 
  GoogleMapsMarkerOptions, GoogleMapsMarker, CameraPosition} from 'ionic-native'; */
  
  import { AlertController } from '@ionic/angular';
import { AlertPricesPage } from '../alert-prices/alert-prices.page';
  


@Component({
  selector: 'app-adresse',
  templateUrl: 'adresse.page.html',
  styleUrls: ['adresse.page.scss']
})
export class AdressePage implements OnInit {
  launchNavigator: any;
  
  ngOnInit() {
  }
  constructor(private alertCtrl: AlertController,public modalController: ModalController,
    public navCtrl: NavController) {
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

     

  gMaps(){
    /* this.map.getMyLocation().then((location) => {
      var msg = ["I am here:\n","latitude:"+location.latLng.lat,
    "longitude:"+location.latLng.lng].join("\n");

    let position: CameraPosition = {
      target: location.latLng,
      zoom: 15
    };
    this.map.moveCamera(position);

    let markerOptions: GoogleMapsMarkerOptions = {
      'position': location.latLng,
      'title': msg
    };
    this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
      marker.showInfoWindow();
    });
    }); */
  /* let options: LaunchNavigatorOptions = {
    start: 'Libya, ON',
    app: LaunchNavigator.APPS.MAPS
  } */
  
  this.launchNavigator.navigate('32.885353,13.180161')
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    ); 
}
}
  /* navme(address){
    this.launchNavigator.navigate(address);
  } */
