/*
* Ionic 5 Google Vision App (https://store.enappd.com/product/google-vision-app-starter-ionic//)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.

*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudVisionServiceService {

  constructor(public http: HttpClient) { }
  getLabels(base64Image, feature) {
    const body = {
      requests: [
        {
          features: [
            {
              type: feature,
              maxResults: 10
            }
          ],
          image: {
            content: base64Image
          }
        }
      ]
    };
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key='+environment.googleCloudVisionAPIKey , body);
  }
}
