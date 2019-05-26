import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}

  async msgP() {
    const toast = await this.toastController.create({
      message: 'There is no Pharmacy in your area',
      duration: 2000
    });
    toast.present();
  }

  async msgD() {
    const toast = await this.toastController.create({
      message: 'There is no Doctor`s office in your area',
      duration: 2000
    });
    toast.present();
  }

  async msgE() {
    const toast = await this.toastController.create({
      message: 'There is no Emergency reception in your area',
      duration: 2000
    });
    toast.present();
  }
}
