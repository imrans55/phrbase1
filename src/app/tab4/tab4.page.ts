/*
* Ionic 5 Google Vision App (https://store.enappd.com/product/google-vision-app-starter-ionic//)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.

*/
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GoogleCloudVisionServiceService } from '../google-cloud-vision-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  public selectedfeature: string;
  constructor(
    private camera: Camera,
    private route: Router,
    private vision: GoogleCloudVisionServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController) {

    this.selectedfeature = 'OBJECT_LOCALIZATION';
  }

  radioGroupChange(event) {
    this.selectedfeature = event.detail.value;
  }

  async selectPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    };
    this.camera.getPicture(options).then(async (imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      const loading = await this.loadingController.create({
        message: 'Getting Results...',
        translucent: true
      });
      await loading.present();
      this.vision.getLabels(imageData, this.selectedfeature).subscribe(async (result: any) => {
        console.log(result);
        const navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(imageData),
            result: JSON.stringify(result),
            feature: JSON.stringify(this.selectedfeature)
          }
        };

        this.route.navigate(['showclass'], navigationExtras);
        await loading.dismiss();
      }, async (err) => {
        console.log(err);
        await loading.dismiss();
      });
    }, async (err) => {
      console.log(err);
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Select one option ',
      message: 'Take Photo or Select from Gallery!!!',
      buttons: [
        {
          text: 'Camera',
          role: 'camera',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: 'Gallery',
          role: 'gallery',
          handler: () => {
            this.selectPhoto();
          }
        }
      ]
    });

    await alert.present();
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // correctOrientation: true
    };
    this.camera.getPicture(options).then(async (imageData) => {
      const loading = await this.loadingController.create({
        message: 'Getting Results...',
        translucent: true
      });
      await loading.present();
      this.vision.getLabels(imageData, this.selectedfeature).subscribe(async (result: any) => {
        console.log(result);
        const navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(imageData),
            result: JSON.stringify(result),
            feature: JSON.stringify(this.selectedfeature)
          }
        };

        this.route.navigate(['showclass'], navigationExtras);
        await loading.dismiss();
      }, async (err) => {
        await loading.dismiss();
      });
    }, err => {
      console.log(err);
    });
  }
}
