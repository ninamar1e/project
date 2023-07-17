import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kuchi',
  templateUrl: './kuchi.page.html',
  styleUrls: ['./kuchi.page.scss'],
})
export class KuchiPage {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '50% Cashback Received!',
      message: 'Great news! You have just received a 50% cashback on your purchase.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}