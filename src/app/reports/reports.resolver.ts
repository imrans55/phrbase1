import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Injectable()
export class ReportsResolver implements Resolve<any> {

  constructor(private firebaseService: FirebaseService) {}

  resolve() {
    return this.firebaseService.getTasks();
  }
}
