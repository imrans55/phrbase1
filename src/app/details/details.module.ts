import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';
import { DetailsResolver } from './details.resolver';
import { DetailsPageRoutingModule } from './details-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage],
  providers:[DetailsResolver]

})
export class DetailsPageModule {}
