import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hcp',
  templateUrl: 'hcp.page.html',
  styleUrls: ['hcp.page.scss']
})
export class HcpPage implements OnInit {
  constructor(public toastController: ToastController) {}

  async msg() {
    const toast = await this.toastController.create({
      message: 'There are no Health Care Provider in this area.',
      duration: 2000
    });
    toast.present();
  }
  
  ngOnInit() {
  }
 
}
