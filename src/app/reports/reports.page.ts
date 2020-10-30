import { Component, OnInit } from '@angular/core';
//import { AuthenticateService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    //private authService: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute,
    private menuController: MenuController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

 
  

}

