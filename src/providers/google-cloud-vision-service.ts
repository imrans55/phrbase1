import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

@Injectable()
export class GoogleCloudVisionServiceProvider {
  constructor(public http: HttpClient) { }
  // Setting up to detect logo in an image
    getLogo(base64Image) {
      const body = {
        "requests": [
          {
            "image": {
              "content": base64Image
            },
            "features": [
              {
                "type": "TEXT_DETECTION",
                "maxResults":1
              }
            ]
          }
        ]
      }
      return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + environment.googleCloudVisionAPIKey, body);
    }
}