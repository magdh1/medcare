import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
/* import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, 
  GoogleMapsMarkerOptions, GoogleMapsMarker, CameraPosition} from 'ionic-native'; */


@Component({
  selector: 'app-adresse',
  templateUrl: 'adresse.page.html',
  styleUrls: ['adresse.page.scss']
})
export class AdressePage implements OnInit {
  launchNavigator: any;
  
  ngOnInit() {
  }
/* public map: GoogleMap;
public mapRendered: Boolean= false;

constructor(public navCtrl: NavController, public platform: Platform){
this.platform.ready().then(() => {
  this.showMap();
});
}

showMap() {
  let location = new GoogleMapsLatLng(47.6062, -122.3321);
  this.map = new GoogleMap('map', {
    'camera': {
      'latLng': location,
      'tilt': 30,
      'zoom': 15,
      'bearing': 50
    }
  });
  this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    console.log('Map is ready!');
    this.mapRendered = true;
  });
} */
//constructor(private launchNavigator: LaunchNavigator) { }
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
