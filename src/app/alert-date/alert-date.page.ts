import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-date',
  templateUrl: 'alert-date.page.html',
  styleUrls: ['alert-date.page.scss'],
})
export class AlertDatePage {
    constructor(public alertCtrl: AlertController) {}
}