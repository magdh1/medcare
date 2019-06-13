import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { NavController } from '@ionic/angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

import { FingerprintAIO,FingerprintOptions } from '@ionic-native/fingerprint-aio';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


   username= '' ;
   password= '';
    
    constructor(public navCtrl: NavController) { 
    }

  ngOnInit() {
  }

  onLogin(){
    if (((this.username=="1234") && (this.password=="1234")) || (!(this.username=="") || !(this.password==""))) {
      this.navCtrl.navigateForward('home');
      this.username = '';
      this.password = ''; 
    } else {
      this.username = '';
      this.password = '';
    }
  }
}
